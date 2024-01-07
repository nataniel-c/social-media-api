const usernames = [
  'ByYourLogic',
  'aarez',
  'laserboat999',
  'aaron123',
  'aaron-James',
  'aarron1924760',
  'BladeeCity',
  'Angelmamii5',
  'aayan3251',
  'pr0spector88',
  'abaan1784566',
  'AbbaFan24',
  'ItsmindofJson',
  'abdalroof23132',
  'abdihakim',
  'UnkleDell',
  'abdisalam222',
  'abdul53781',
  'abdul-aziz351',
  'Pilgrim',
  'agentsmith',
  'coollastname',
  'enter_name_here',
  'nycguidovoice',
  'zechariah',
  'bog_chaser',
  'IGN',
  'zen',
  'zendel',
  'zenith',
  'jon_bois',
  'zeph',
  'ZeroSuitCamus',
  'zhong',
  'lolt64',
  'poisonjr',
  'zohair',
  'Neytiri',
];

const randomThoughts = [
  'Im so hungry rn',
  'The perfect partner is just someone you can vibe with easily',
  'Take a look yall IMG_4775.JPG',
  'who is the GOAT of 90s era rap?',
  "Y'all really don't wash your pop tarts before you eat them??",
  "It's over.",
  'Halloween is just a trend. It will be gone in a week.',
  'Hello world',
  'I hate this stupid hellsite',
  'Note to self: dont wear red at a rodeo',
  'Scary hours.',
  'and the most crackers in my soup',
  'Why do bash "dead-beat" dads for not being there for their kids but we never question if the child has bad vibes?',
  'Firefox >>> google chrome',
  'I hate when GIRLS die',
  'I wish Chun Li was real',
  'Listening to Mozart. #yupisaidit',
  'not gonna vote this year.',
];

const randomReactions = [
  'thats cool!',
  'i seriously dont care',
  'yall keep telling on yourselves lmao',
  'i really wish i didnt read this',
  "some of y'all need help",
  "It's over.",
  'lol i love this post.',
  'great post! thanks for making it!',
  'hard disagree',
  'I completely agree',
  'Ok',
  'Help i dont get the joke can someone explain?',
  'LOL',
  'Blocked',
  'Why is this person on my friends list?',
  'This post keeps me up at night',
  'Top 10 posts on this site',
  'Please miss just once',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

  // Function to generate random thoughts that we can add to user object.
const getRandomThoughts = () =>
  `${getRandomArrItem(randomThoughts)}`;

// Function to generate random reactions that we can add to thought object.
const getRandomReaction = () =>
  `${getRandomArrItem(randomReactions)}`;




// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts , getRandomReaction };
