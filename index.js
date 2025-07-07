import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
if (message.content === '!hello') {
    message.reply('Hello!');
  }
});

client.login("MTM5MTYwNjM4MjgwMDkzMjkxNQ.GxUhTH.q0-1lSl16G2wFDYsL55M9P5hVwvw9zHzqRjjAU");
