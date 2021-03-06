// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config({path: __dirname + '/process.env'});
const TOKEN = process.env['DISCORD_TOKEN'];

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`logged in as ${client.user.tag}`);
});

// Login to Discord with your client's token
client.login(TOKEN);
