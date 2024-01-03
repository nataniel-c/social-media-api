const connection = require('../config/connection');
const { Thought, User, Reaction } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('user');
    }


  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add user to the user array
  for (let i = 0; i < 20; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    ;

    const username = getRandomName();
    const email = `${username.toLowerCase()}@mail.com`;
    const friends = [];
    for (let i = 0; i < Math.floor(Math.random() * 43); i++) {
      newFriend = getRandomName();
      friends.push({newFriend});
    }

    users.push({
      username,
      email,
      friends
    });
  }


  // Add user to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: getRandomThoughts(),
    username: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
