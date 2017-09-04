const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'token here';
const prefix = "^"
bot.on('ready', () => {
  console.log('BendyBot Ready');
});
bot.on('message', message => {
if (message.content === 'Hello, BendyBot!') {
message.channel.sendMessage('Secret unlocked: Hello Bendy');
  }
});
bot.login(token);
bot.on('message', message => {
if (message.content === 'Gimme all the bacon soup!') {
message.channel.sendMessage('Secret unlocked: Canadian Bacon');
  }
});
bot.on('message', message => {
if (message.content === 'Can i be mod bendy?') {
message.channel.sendMessage('No, you are not inky enough.');
  }
});
bot.on('message', message => {
if (message.content === 'chapter three is coming out soon') {
message.channel.sendMessage('👹 *yes indeed my friend...* 👹');
  }
});
