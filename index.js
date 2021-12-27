// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const mySecret = process.env['token']
const Queue = require('./Queue.js');


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`logged in as ${client.user.tag}`);
});

// Login to Discord with your client's token
client.login(mySecret);
