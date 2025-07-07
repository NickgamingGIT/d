import { Client, GatewayIntentBits } from "discord.js";
import { config as envConfig } from "dotenv";
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
envConfig();

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

client.login(process.env.DISCORD_TOKEN);
