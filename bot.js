const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'BOT TOKEN HERE';
const prefix = "^"
bot.on('ready', () => {
  console.log('BendyBot Ready');
});
bot.on("messsage", async message => {
  if(message.author.bot) return; {
}
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
if (message.content === 'Can i be mod, Bendy?') {
message.channel.sendMessage('No, you are not inky enough.');
  }
});
bot.on('message', message => {
if (message.content === 'chapter three is coming out soon') {
message.channel.sendMessage('👹 *yes indeed my friend...* 👹');
  }
});
bot.on('message', message => {
  if (message.content === 'what is my avatar bendy?') {
    message.channel.sendMessage(message.author.avatarURL);
  }
});
bot.on('message', message => {
  if (message.content === 'give me an inky rating') {
    message.channel.sendMessage('i would rate you ' + Math.floor(Math.random() * 100));
  }
});
bot.on('message', message => {
if (message.content === 'when is chapter 3 coming') {
message.channel.sendMessage('👹*This month...*👹');
  }
});
bot.on('message', message => {
if (message.content === prefix + 'help') {
message.channel.sendMessage('`Can I be mod, Bendy?:` ask bendy if you can be mod :3')
message.channel.sendMessage('`chapter three is coming out soon:` tell bendy that chapter three is coming soon')
message.channel.sendMessage('`what is my avatar bendy?:` ask bendy what is your discord avatar')
message.channel.sendMessage('`give me an inky rating:` ask bendy to rate you on a scale of 1-100')
message.channel.sendMessage('`when is chapter 3 coming:` ask bendy when chapter three is coming out')
message.channel.sendMessage('if there are any problems or suggestions dm @RICK SANCHEZ  or @Teller Of Fortune#0892')
  }
});
