const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts, getRandomReaction, getRandomArrItem } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

  // Create empty array to hold the users
  const users = [];
  
  const thoughts = getRandomThoughts(10);
  console.log(thoughts);

  //add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  for (let i = 0; i < 10; i++) { 
    
    // get a random username and user username to make an email
    const username = thoughts[i].username;
    const email = `${username.toLowerCase()}@mail.com`;
    
    users.push({
      username,
      email,
    })
  }

// add users to the collection and await the results
await User.collection.insertMany(users);

for (const user of users) {
  const randomFriend = getRandomArrItem(users)._id;
  const randomThought = getRandomArrItem(thoughts)._id;
  await User.collection.updateOne(
    { _id: user._id },
    {
      $set: {
        friends: [randomFriend],
        thoughts: [randomThought]
      }
    }
  );
}


// for (let i = 0; i <5; i++) {
//     //console.log(thoughts);
//     console.log(users)
//     const randomUser = getRandomArrItem(users)
//     const randomFriend = getRandomArrItem(users)
//     console.log(randomFriend._id)
//     await User.collection.findOneAndUpdate(
//       { _id: randomUser._id },
//       { friends: JSON.stringify(randomFriend._id) }
//     )
// }

  // Log out the seed data to indicate what should appear in the database
  console.log();
  //console.log(users);
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});