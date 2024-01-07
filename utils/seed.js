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


  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 20 times -- add user to the user array
  for (let i = 0; i < 10; i++) {

    // get random thought text for the user to be added
    const thoughtText= getRandomName();


    // use username to make an email
    const email = `${username.toLowerCase()}@mail.com`;
    // add users to the user's friends array
    const friends = [];
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
      newFriend = getRandomName();
      friends.push({newFriend});
    }

    users.push({
      username,
      email,
    });
  }
const thoughtText = getRandomThoughts();

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add user to the user array
  for (let i = 0; i < 10; i++) {

    // get random username for the user to be added
    const username = getRandomName();


    // use username to make an email
    const email = `${username.toLowerCase()}@mail.com`;
    // add users to the user's friends array
    const friends = [];
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
      newFriend = getRandomName();
      friends.push({newFriend});
    }

    users.push({
      username,
      email,
    });
  }


  // Add user to the collection and await the results
  await User.collection.insertMany(users);

  await User.collection.insertOne({
    friends: [...users],
    thoughts: [...thoughts]
  })

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany({
    thoughtText: getRandomThoughts(),
    username: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
