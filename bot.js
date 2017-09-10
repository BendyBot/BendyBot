const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'rip';
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
message.channel.sendMessage('👹*yes indeed my friend...*👹');
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
const embed = new Discord.RichEmbed()
.setTitle('BendyBot help')
.setAuthor('BendyBot', 'https://cdn.discordapp.com/avatars/338246924278824970/638f5e3845bb7a166552b74c95c6cc08.png?size=2048')
.setColor(0x00AE86)
.setDescription('all the commands for BendyBot')
.setFooter('thats all the commands for now', 'https://cdn.discordapp.com/avatars/338246924278824970/638f5e3845bb7a166552b74c95c6cc08.png?size=2048')
.setThumbnail('https://cdn.discordapp.com/avatars/338246924278824970/638f5e3845bb7a166552b74c95c6cc08.png?size=2048')
.setTimestamp()
.setURL('https://github.com/BendyBot/BendyBot')
.addField('Commands', 'the bendy bot commands')
.addField('Can I be mod, Bendy?:', 'ask bendy if you can be mod :3')
.addField('chapter three is coming out soon:', 'tell bendy that chapter three is coming soon')
.addField('what is my avatar bendy?:', 'ask bendy what is your discord avatar')
.addField('give me an inky rating:', 'ask bendy to rate you on a scale of 1-100')
.addField('`when is chapter 3 coming:', 'ask bendy when chapter three is coming out')
.addField('problems or suggestions?', 'if there are any problems or suggestions dm RICK SANCHEZ or Teller of fortune');
bot.on('message', message => {
if (message.content === prefix + 'help') {
message.channel.sendMessage({embed})
  }
});
