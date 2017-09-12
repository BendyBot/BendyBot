const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'GOAWAYNOTOKENHERELOL';
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
.setColor(0x00AE86)
.setDescription('all the commands for BendyBot')
.setFooter('thats all the commands for now', 'https://cdn.discordapp.com/avatars/338246924278824970/638f5e3845bb7a166552b74c95c6cc08.png?size=2048')
.setTimestamp()
.setURL('https://github.com/BendyBot/BendyBot')
.addField('<:Bendy:335369477921439756> Commands <:Bendy:335369477921439756>', 'Can I be mod, Bendy?,  chapter three is coming out soon,  what is my avatar bendy?,  give me an inky rating,  give me an inky rating')
.addField('problems or suggestions?', 'if there are any problems or suggestions dm RICK SANCHEZ or Teller of fortune');
bot.on('message', message => {
if (message.content === prefix + 'help') {
message.react("335369477921439756")
message.channel.sendMessage({embed})
  }
});
bot.on('message', message => {
if (message.content === '<@338246924278824970>') {
message.react("337491354286292992")
message.channel.sendMessage("what do you want? 😠")
  }
});
