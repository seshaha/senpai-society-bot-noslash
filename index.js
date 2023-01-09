const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("ok ok!");
});

app.listen(3000, () => {
  console.log("Project is ready!");
});
const googleIt = require('google-it');
let Discord = require("discord.js");
const ms = require("ms")
let client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});
let snipe = new Discord.Collection();
const disbut = require('discord-buttons')(client);
const { MessageButton, MessageActionRow } = require('discord-buttons');
const EventEmitter = require('events');
const malScraper = require('mal-scraper')
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
const TictacToe = require('discord-tictactoe')



client.on("ready", () => {
 client.user.setPresence({ activity: { name: `over Assam Senpai Society`, type: 'WATCHING' }, status: "online"})
  
});



client.on("messageDelete", message => {
  snipe.set(message.channel.id, {
    content: message.content,
    author: message.author,
  });
});



client.on("message", message => {
  if (message.content.startsWith("+av") || message.content.startsWith("+Avatar") || message.content.startsWith("+AVATAR") || message.content.startsWith("+Av") || message.content.startsWith("+avatar") ){


    if (message.mentions.users.size) {
      let member = message.mentions.users.first()
      if (member) {
        const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL({ dynamic: true, size: 2048 })).setTitle(`${member.username}'s avatar`)
        
        message.channel.send(emb)

      }
      else {
        message.channel.send("Sorry none found with that name")

      }
    } else {
      const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({ dynamic: true, size: 2048 })).setTitle(`${message.author.username}'s avatar`)
      message.channel.send(emb)
    }
  }



  if (message.content.startsWith("HI BOT")) {
    let victim = message.mentions.users.first();
    if (!victim) message.reply(".");
    else {
      message.channel.send(`${victim}`);
    }
  }
  if (message.content === "+serverinfo") {
    let embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
      .addField("Owner", message.guild.owner, true)
      .addField("Channels", message.guild.channels.cache.size, true)
      .addField("Roles", message.guild.roles.cache.size, true)
      .addField("Emojis", message.guild.emojis.cache.size, true)
      .addField("Verification Level", message.guild.verificationLevel, true)
      .addField("Region", `${message.guild.region}`, true)
      .addField("Members", `Total: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setFooter(`ID: ${message.guild.id}, Created • ${message.guild.createdAt.toDateString()}`)
    message.channel.send(embed)
  }

  if (message.content === "HI BOT") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Hello kouhai <:kannaHeart:754278240125976597>")
      .setDescription("Your command has been recognised and you have been registered as an official member of Assam Senpai Society. Be sure to have fun. For more information on the bot type in")
      .setColor("RED")
      .setFooter("+HELP");
    message.channel.send(embed);
  }




  if (message.content === "BYE BOT") {
    let image = new Discord.MessageAttachment(
      "https://cdn.discordapp.com/attachments/772331092744863744/862730763496849458/tenor_9.gif",
      "dog.gif"
    );
    message.channel.send(image);
  }
  if (message.content.startsWith("+kiss")) {
    let kiss = [
      "https://c.tenor.com/v4Ur0OCvaXcAAAAd/koi-to-uso-kiss.gif",
      "https://c.tenor.com/O1-IX-P5ugQAAAAd/koi-to-uso-anime.gif",
      "https://c.tenor.com/36NbjGxwOT8AAAAd/anime-kissing.gif",
      "https://c.tenor.com/dp6A2wF5EKYAAAAC/anime-love.gif",
      "https://c.tenor.com/G954PGQ7OX8AAAAd/cute-urara-shiraishi-anime.gif"
    ];
    let kissed = kiss[Math.floor(Math.random() * kiss.length)];
    let victim = message.mentions.users.first();
    if (!victim) message.reply("kissing yourself? seriously?");
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("")
        .setDescription(`${message.author.username} kissed ${victim}`)
        .setColor("BLUE")
        .setImage(kissed);
      message.channel.send(embed);
    }
  }


  if (message.content.startsWith("+hug")) {
    let hug = [
      "https://media1.tenor.com/images/c7efda563983124a76d319813155bd8e/tenor.gif?itemid=15900664",
      "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093",
      "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498",
      "https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075",
      "https://media1.tenor.com/images/13719e13c6e09e63cf9ae020899bdd3b/tenor.gif?itemid=15793130"
    ];
    let hugged = hug[Math.floor(Math.random() * hug.length)];
    let victim = message.mentions.users.first();
    if (!victim) message.reply("hugging yourself is really painful");
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("")
        .setDescription(`${message.author.username} hugged ${victim}`)
        .setColor("BLUE")
        .setImage(hugged);
      message.channel.send(embed);
    }
  }

  if (message.content.startsWith("+spank")) {
    let spank = [
      "https://c.tenor.com/5ropePOLZV4AAAAC/bad-beat.gif",
      "https://c.tenor.com/CAesvxP0KyEAAAAd/shinobu-kocho-giyuu-tomioka.gif",
      "https://c.tenor.com/uER90n0laEEAAAAC/anime-spanking.gif",
      "https://c.tenor.com/gScnebhgJn4AAAAC/taritari-anime-spank.gif",
      "https://c.tenor.com/qhdaIdgiV78AAAAC/anime-spank.gif"
    ];
    let spanked = spank[Math.floor(Math.random() * spank.length)];
    let victim = message.mentions.users.first();
    if (!victim) message.reply("Spanking yourself? Highly expected from a loner");
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("")
        .setDescription(`${message.author.username} spanked ${victim}`)
        .setColor("BLUE")
        .setImage(spanked);
      message.channel.send(embed);
    }
  }

  if (message.content.startsWith("+release")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("we dont do that here")
      else {
        member.roles.remove("879045510550388786")
        message.channel.send("finally you found a way to escape. Nice, have fun <:ses:846780342852648960>")
      }

    } else {
      message.reply("https://c.tenor.com/zrDHpV6b9YwAAAAC/rick-astley-never-gonna-give-you-up.gif")
    }
  }

  if (message.content.startsWith("+kidnap")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("we dont do that here")
      else {
        member.roles.add("879045510550388786")
        message.channel.send("sikeeee!! welcome to the gemy's so called 'basement'")
      }

    } else {
      message.reply("https://c.tenor.com/zrDHpV6b9YwAAAAC/rick-astley-never-gonna-give-you-up.gif")
    }
  }

  if (message.content.startsWith("+warn")) {
    let victim = message.mentions.users.first()
    if (!victim) message.reply("mention someone to warn.")
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("Warnings")
        .setDescription(`${victim} got warned by ${message.author}!`)
        .setColor("RANDOM")
        .setFooter(`Moderater : ${message.author.username}`)
        
        .setTimestamp()

      message.channel.send(embed)
    }
  }
  if(message.content.startsWith("+warn")){
message.channel.send("https://c.tenor.com/zrDHpV6b9YwAAAAC/rick-astley-never-gonna-give-you-up.gif")
}


if (message.content.startsWith("+mute")) {
    if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission ("BAN_MEMBERS")) {
      let member = message.mentions.members.first();
      if (!member) message.channel.send("Whom do you want to mute?");
      else {
        member.roles.add("877133838164295730");
        message.channel.send("Member has been muted");
      }
    } else {
      message.reply("https://c.tenor.com/zrDHpV6b9YwAAAAC/rick-astley-never-gonna-give-you-up.gif");
    }
  }



  if (message.content.startsWith("+unmute")) {
    if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission ("BAN_MEMBERS")) {
      let member = message.mentions.members.first();
      if (!member) message.channel.send("Whom do you want to unmute?");
      else {
        member.roles.remove("877133838164295730");
        message.channel.send(`${member} has been unmuted`);
      }
    } else {
      message.reply("https://c.tenor.com/zrDHpV6b9YwAAAAC/rick-astley-never-gonna-give-you-up.gif");
    }
  }
  if (message.content.startsWith("+kick")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("Please mention someone")
      else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("https://c.tenor.com/zrDHpV6b9YwAAAAC/rick-astley-never-gonna-give-you-up.gif")
    }
  }


  if (message.content.startsWith("+ban")) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const user = message.mentions.users.first();

      if (user) {
        const member = message.guild.member(user);

        if (member) {
          member
            .ban({
              reason: "They were bad!"
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              message.reply("I was unable to ban the member");

              console.error(err);
            });
        } else {
          message.reply("That user isn't in the server");
        }
      } else {
        message.reply("Whom do you want to ban?");
      }
    }
  }
  if (message.content.startsWith("+unban")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let args = message.content.split(" ").slice(1);
      if (!args[0]) return message.reply("enter id");
      if (isNaN(args[0]))
        return message.reply("enter the id of the person u want to unban");
      message.guild.members.unban(args[0]);
    }
  }

  if (message.content.startsWith("+purge")) {
    let arg = message.content.split(" ");
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let clear = arg[1];
      if (!clear)
        return message.channel
          .send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`+purge 50\` `);
      if (isNaN(clear))
        return message.channel.send(
          ":x: | ``Please Put a Valid Number to Clear messages.``"
        );
      if (clear > 1000)
        return message.channel.send(
          ":x: | ``I can't Clear more than 1000 messages.``"
        );
      if (clear < 1)
        return message.channel.send(
          ":x: | ``You cannot Clear less than 1 message.``"
        );

      message.channel.bulkDelete(Number(clear) + 1);
      message.channel
        .send((Number(clear)) + ' ' + 'messages deleted')
        .then(message => message.delete({ timeout: 10000 }));
    } else {
      message.reply("You dont have perms!");
    }
  }

  if (message.content === "+snipe") {
    if (message.member.hasPermission("ADMINISTRATOR")) {

      const msg = snipe.get(message.channel.id);
      if (!msg) message.reply("There's Nothing To Snipe");
      else {
        const embed = new Discord.MessageEmbed()
          .setTitle("Last Deleted Message")
          .setColor("RANDOM")
          .setTimestamp()
          .setThumbnail(`${msg.author.displayAvatarURL({ dynamic: true })}`)
          .addField("Sender", msg.author)
          .addField("Message", msg.content)
        message.channel.send(embed) 
      }
    }
  }
  if (message.content.startsWith("+dm")) {
    const whattosend = message.content.slice("".length).trim().split(/ +/);
    whattosend.shift().toLowerCase().split(" ")[1]
    const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
    if (!member) return message.channel.send('Provide a user!')
    if (!whattosend[1]) return message.channel.send('What do you want to send to them?')
    member.send(whattosend.slice(1).join(" "))
  }

 
  if (message.content.toLowerCase().startsWith('+timer')) {
    const args = message.content.split(' ').splice(1);
    if (!args[0]) return message.channel.send('Please include a valid time');
    if (isNaN(args[0])) return message.channel.send('Please include a valid number');
    if (!args[1]) return message.channel.send('You have to include something for me to remind you with')
    setTimeout(() => {
      const msg = args.splice(1).join(' ');
      message.channel.send(`${message.author}, ${msg}`)
    }, parseInt(args[0], 10) * 1000)
  }

  if (message.content === "+simprate") {
    let simprate = ["0", "2", "5", "7", "10", "13", "15", "19", "20", "21", "25", "28", "30", "33", "35", "38", "40", "42", "45", "47", "50", "52", "55", "56", "60", "64", "65", "66", "70", "72", "75", "79", "80", "83", "85", "87", "90", "94", "95", "99", "100"]
    let embed = new Discord.MessageEmbed()
      .setTitle("Get bonked you simp!")
      .setDescription(`${message.author}'s simprate is **${simprate[Math.floor(Math.random() * simprate.length)]}%**`)
      .setFooter("simping is bad")
      .setColor("RANDOM")
    message.channel.send(embed)
  }

 if(message.content.startsWith("+guess")) {
 let args = message.content.split(" ").slice(1)
 let guess = args[0]
 let num = Math.floor((Math.random() * 100) + 1)
 if(!guess) return message.channel.send(`:x: | You need to choose 1 - 100`)
 if(guess == num) return message.channel.send(`congrats, ${message.author}! You got the number right!:tada:`)
 if(guess !== num) return message.channel.send(`Wrong guess! the answer is **${num}**... try again :pensive:`)
 }



 if (message.content === '+links') {
    const btn1 = new MessageButton()
      .setLabel('Instagram')
      .setStyle('green')
      .setID('2')
    const btn2 = new MessageButton()
      .setLabel('Youtube')
      .setStyle('green')
      .setID('1')
    const btn3 = new MessageButton()
      .setLabel(`Twitter`)
      .setStyle(`green`)
      .setID(`3`)
    const btn4 = new MessageButton()
      .setLabel(`Reddit`)
      .setStyle(`green`)
      .setID(`4`)

    let embed = new Discord.MessageEmbed()
      .setTitle(`**__OFFICIAL LINKS__**`)
      .setColor(`#ff1717`)
      .setDescription(`Check the buttons below for links to the official socials of the community`)
    let embed1 = new Discord.MessageEmbed()
      .setTitle(`**__OFFICAL INSTAGRAM LINK__**`)
      .setColor(`#ff1717`)
      .setDescription(`https://www.instagram.com/assamsenpaisociety`)
    let embed2 = new Discord.MessageEmbed()
      .setTitle(`**__OFFICAL YOUTUBE LINK__**`)
      .setColor(`#ff1717`)
      .setDescription(`https://www.youtube.com/channel/UC1C-YF7UVCYYlfCn5DaJe1A`)
    let embed3 = new Discord.MessageEmbed()
      .setTitle(`**__OFFICIAL TWITTER LINK__**`)
      .setColor(`#ff1717`)
      .setDescription(`https://twitter.com/SenpaiSociety`)
    let embed4 = new Discord.MessageEmbed()
      .setTitle(`**__OFFICIAL REDDIT LINK__**`)
      .setColor(`#ff1717`)
      .setDescription(`https://www.reddit.com/r/assamsenpaisociety`)




    const row = new MessageActionRow()
      .addComponents([btn1])
      .addComponents([btn2])
      .addComponents([btn3])
      .addComponents([btn4])

    message.channel.send({
      embed: embed, component: row
    })


    const filter = (button) => button.clicker.user.id === message.author.id;
    client.on('clickButton', async (button) => {
      await button.reply.defer()
      if (button.id == '2') {
        button.message.edit({ embed: embed1, component: row })
      } else {

        if (button.id == '1') {
          button.message.edit({ embed: embed2, component: row })
        } else {

          if (button.id == '3') {
            button.message.edit({ embed: embed3, components: row })
          } else {

            if (button.id == '4') {
              button.message.edit({ embed: embed4, components: row })
            }
          }
        }
      }
    })
  }

  if (message.content === '+button') {
    const btn1 = new MessageButton()
      .setLabel('Moderation')
      .setStyle('green')
      .setID('2')
    const btn2 = new MessageButton()
      .setLabel('Utility')
      .setStyle('green')
      .setID('1')
    const btn3 = new MessageButton()
      .setLabel(`Fun`)
      .setStyle(`green`)
      .setID(`3`)
      const btn4 = new MessageButton()
      .setLabel(`still thinking`)
      .setStyle(`green`)
      .setID(`4`)
    
                

    let embed = new Discord.MessageEmbed()
      .setTitle(`**__BOT COMMANDS__**`)
      .setColor(`#ff1717`)
      .setDescription(`Click on the buttons for the bot's commands`)
    let embed1 = new Discord.MessageEmbed()
      .setTitle(`**__Moderation__**`)
      .setColor(`#ff1717`)
    
      .setDescription(``)
    let embed2 = new Discord.MessageEmbed()
      .setTitle(`**__Utility__**`)
      .setColor(`#ff1717`)
      .setDescription(``)
    let embed3 = new Discord.MessageEmbed()
      .setTitle(`**__Fun__**`)
      .setColor(`#ff1717`)
      .setDescription(``)
    let embed4 = new Discord.MessageEmbed()
      .setTitle(`**__Told you still thinking__**`)
      .setColor(`#ff1717`)
      .setDescription(``)




    const row = new MessageActionRow()
      .addComponents([btn1])
      .addComponents([btn2])
      .addComponents([btn3])
      .addComponents([btn4])

    message.channel.send({
      embed: embed, component: row
    })


    const filter = (button) => button.clicker.user.id === message.author.id;
    client.on('clickButton', async (button) => {
      await button.reply.defer()
      if (button.id == '2') {
        button.message.edit({ embed: embed1, component: row })
      } else {

        if (button.id == '1') {
          button.message.edit({ embed: embed2, component: row })
        } else {

          if (button.id == '3') {
            button.message.edit({ embed: embed3, components: row })
          } else {

            if (button.id == '4') {
              button.message.edit({ embed: embed4, components: row })
            }
          }
        }
      }
    })
  }

if (message.content === "+gayrate") {
    let gayrate = ["0", "2", "5", "7", "10", "13", "15", "19", "20", "21", "25", "28", "30", "33", "35", "38", "40", "42", "45", "47", "50", "52", "55", "56", "60", "64", "65", "66", "70", "72", "75", "79", "80", "83", "85", "87", "90", "94", "95", "99", "100"]
    let embed = new Discord.MessageEmbed()
      .setTitle(`See there's a rainbow! <:homiesexual:852840791609049101> <:homiesexual:852840791609049101>  `)
      .setDescription(`${message.author}'s gayrate is **${gayrate[Math.floor(Math.random() * gayrate.length)]}%**`)
      .setFooter("We all are homiesexual, aren't we?")
      .setColor("RANDOM")
    message.channel.send(embed)
  }

 if (message.content === "+cuterate") {
    let cuterate = ["-20", "-5" , "-1", "-15", "0", "2", "5", "7", "10", "13", "15", "19", "20", "21", "25", "28", "30", "33", "35", "38", "40", "42", "45", "47", "50", "52", "55", "56", "60", "64", "65", "66", "70", "72", "75", "79", "80", "83", "85", "87", "90", "94", "95", "99", "100"]
    let embed = new Discord.MessageEmbed()
      .setTitle("Who's this cutie?")
      .setDescription(`${message.author}'s cute rate is **${cuterate[Math.floor(Math.random() * cuterate.length)]}%**`)
      .setFooter("The bot is cracked, you are not a cutie by any means, kek")
      .setColor("RANDOM")
    message.channel.send(embed)
  }



if (message.content === "+chadrate") {
    let chadrate = ["0", "2", "5", "7", "10", "13", "15", "19", "20", "21", "25", "28", "30", "33", "35", "38", "40", "42", "45", "47", "50", "52", "55", "56", "60", "64", "65", "66", "70", "72", "75", "79", "80", "83", "85", "87", "90", "94", "95", "99", "100"]
    let embed = new Discord.MessageEmbed()
      .setTitle(`What a chad! <:suffering_from_success:846697517210533898> `)
      .setDescription(`${message.author}'s chad rate is **${chadrate[Math.floor(Math.random() * chadrate.length)]}%**`)
      .setFooter("not a real one")
      .setColor("RANDOM")
    message.channel.send(embed)
  }

if (message.content === "+pervrate") {
    let pervrate = ["0", "2", "5", "7", "10", "13", "15", "19", "20", "21", "25", "28", "30", "33", "35", "38", "40", "42", "45", "47", "50", "52", "55", "56", "60", "64", "65", "66", "70", "72", "75", "79", "80", "83", "85", "87", "90", "94", "95", "99", "100"]
    let embed = new Discord.MessageEmbed()
      .setTitle(`What a freak! <:huh:756874561609400350> `)
      .setDescription(`${message.author}'s perv rate is **${pervrate[Math.floor(Math.random() * pervrate.length)]}%**`)
      .setFooter("Although, I believe perversion is just another form of art.")
      .setColor("RANDOM")
    message.channel.send(embed)
  }

  

 





if (message.content === "++help") {
let embed = new Discord.MessageEmbed()
 .setTitle("Commands")
 .addField("MODERATION", 
  " ╰ `+ban` \n  `+kick` \n `+warn` \n `r!warnings` \n `r!clearwarn` \n `+mute` \n `+unmute` \n `+purge` \n `+snipe`")
 .addField("UTILITY",
  "`+links`")
 .addField("FUN",
  "`+simprate`")
 .setFooter(`Requested by ${message.author.tag}`)
 .setTimestamp()
 message.channel.send(embed)
 
 }

 if (message.content === "+rps" || message.content === "+Rps" || message.content === "+RPS") {
 message.channel.send(":x: | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****+rps rock**** | :x:")
 }

 if (message.content === "+rps rock" || message.content === "+Rps rock" || message.content === "+RPS ROCK") {
 let replies = ["YOU CHOSE ***ROCK***,  || I CHOSE ***PAPER***. ****PAPER**** WINS! || ", "YOU CHOSE ***ROCK***, || I CHOSE ***SCISSORS***. ****ROCK**** WINS! || ", "YOU CHOSE ***ROCK***, || I CHOSE ***ROCK***. IT'S A TIE! || "]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "+rps paper" || message.content === "+Rps paper" || message.content === "+RPS PAPER") {
 let replies = ["YOU CHOSE ***PAPER***, || I CHOSE ***ROCK***. ****PAPER**** WINS! || ", "YOU CHOSE ***PAPER***, || I CHOSE ***SCISSORS***. ****SCISSORS**** WIN! || ", "YOU CHOSE ***PAPER***, || I CHOSE ***PAPER***. IT'S A TIE! || "]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "+rps scissors" || message.content === "+Rps scissors" || message.content === "+RPS SCISSORS") {
 let replies = ["YOU CHOSE ***SCISSORS***, || I CHOSE ***ROCK*** . ****ROCK WINS!**** || " , "YOU CHOSE ***SCISSORS***, || I CHOSE ***PAPER***. ****SCISSORS WIN!*** || " , "YOU CHOSE ***SCISSORS***, || I CHOSE ***SCISSORS***, IT'S A TIE || "]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

  if(message.content.toLowerCase().startsWith('+ttt') || message.content.toLowerCase().startsWith('+tictactoe') || message.content.toLowerCase().startsWith('+Tictactoe')) {
 game.handleMessage(message);
}

 if(message.content === "+lock") {
  
 let embedYes = new Discord.MessageEmbed()
 .setDescription("Channel Locked.")
 .setFooter("Use '+unlock' to unlock the channel again.")
 .setColor("GREEN")
 if(message.member.hasPermission("ADMINISTRATOR")) {
 message.channel.send(embedYes)
 message.channel.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: false
});
 } else {
 let embed2 = new Discord.MessageEmbed()
 .setTitle("Error")
 .setColor("RED")
 .setDescription("You don't have permission to use this command.")
 message.channel.send(embed2)
 }
 }
 
 if(message.content === "+unlock") {
   if (message.member.hasPermission("ADMINISTRATOR")) {
   let embedNo = new Discord.MessageEmbed()
   .setDescription("Channel unlocked.")
   .setFooter("use '+lock' if you wanna lock it again.")
   .setColor("GREEN")
   if(message.member.hasPermission("ADMINISTRATOR")) {
     message.channel.send(embedNo)
     message.channel.updateOverwrite(message.guild.roles.everyone, {
       SEND_MESSAGE: false
     })
   } else {
     let embed3 = new Discord.MessageEmbed()
     .setTitle("ERROR")
     .setColor("RED") 
     .setDescripton("You don't have permission to do so")
     message.channel.send(embed3)
      }
 }
 }
 if(message.content.startsWith(`+google`)) {
const args = message.content.slice(''.length).trim().split(/ +/);
 args.shift().toLowerCase().split(' ')[0];
const embed = new Discord.MessageEmbed()
 .setTitle("**Here's what I found!!**")
 .setColor("RED")
 .setFooter(`Requested by : ${message.author.tag}`)
 .setTimestamp()
 

 googleIt({'query': args.join(' ')}).then(results => {
 results.forEach(function(item, index) { 
 embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
 });
 
 message.channel.send(embed);
 }).catch(e => {
 // any possible errors that might have occurred (like no Internet connection)
 });
 }

 client.on("message", async message => {
if(message.content.toLowerCase().startsWith("+timer")) {
let args = message.content.split(" ").slice(1)

let time = args[0];
 if(!time) return message.reply("You didn't specify a time!");

let reason = args[1];
 if(!reason) return message.reply("please put the reason")

 message.reply(`I will dm you when it is time. timer set ${ms(ms(time))}`)

 setTimeout(function(){
 message.author.send(`${message.author} ${reason}`);
 }, ms(time));
}
})





  
});
client.login("Application token here")
