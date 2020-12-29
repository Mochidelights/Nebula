const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

  client.user.setActivity(`with presents`,{

  status: "online",

  type: "PLAYING"

});

});


client.on('message', message => {
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong.');
  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send('Boop.')};
  if (message.content.startsWith(`${prefix}boom`)) {
    message.channel.send(`https://i.pinimg.com/originals/47/12/89/471289cde2490c80f60d5e85bcdfb6da.gif`)
}})
client.on('message', message => {
  if (message.content.startsWith('Mochi')) {
    message.channel.send('Is baby.');
  }})
  client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);
  
  });
  
  client.on('message', (message) => {
  
    if (!message.guild) return;
  
  if (message.content.startsWith(`${prefix}kick`)) {
  
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use that!");
  
      const user = message.mentions.users.first();
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member
  
            .kick()
  
            .then(() => {
  
              const kick = new Discord.MessageEmbed()
  
             .setDescription(`${user.tag} has been kicked.`)
  
              message.channel.send(kick);
  
            })
  
            .catch(err => {
  
              
  
              const kick_err_1 = new Discord.MessageEmbed()
  
             .setColor('#FF0022')
  
            .setDescription("I can't kick that user!")
  
              message.channel.send(kick_err_1);
  
              console.error(err);
  
            });
  
        } else {
  
          
  
          const kick_err_2 = new Discord.MessageEmbed()
  
         .setColor('#FF0022')
  
        .setDescription("That user is not on this server!")
  
          message.channel.send(kick_err_2);
  
        }
  
      } else {
  
        message.reply("you didn't mention anyone!");
  
      }
  
    }
  
  });
  
  client.on('message', (message) => {
  
    if (!message.guild) return;
  
  if (message.content.startsWith(`${prefix}ban`)) {
  
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You can't use that!");
  
      const user = message.mentions.users.first();
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member
  
            .ban()
  
            .then(() => {
  
              
  
              const ban = new Discord.MessageEmbed()
  
             .setDescription(`${user.tag} has been banned.`)
  
              message.channel.send(ban);
  
            })
  
            .catch(err => {
  
              
  
              const ban_err_1 = new Discord.MessageEmbed()
  
             .setColor('#FF0022')
  
            .setDescription("I can't ban that user!")
  
              message.channel.send(ban_err_1);
  
              console.error(err);
  
            });
  
        } else {
  
          
  
          const ban_err_2 = new Discord.MessageEmbed()
  
         .setColor('#FF0022')
  
        .setDescription("That user is not on this server!")
  
          message.channel.send(ban_err_2);
  
        }
  
      } else {
  
        message.reply("You didn't mention anyone!");
      }
  
    }
  
  });
  client.on('message', (message => {
    if (message.content.startsWith(`${prefix}help`)) {
      message.channel.send(`Here's a list of my commands!
      **Eclipse help:** - Displays the help menu.
      **Eclipse boom:** Exactly what it states, boom.
      **Eclipse kick:** - Kicks a user.
      **Eclipse ban:** - Bans a user.
      **Eclipse handhold:** - Hold a user's hand.
      **Eclipse highfive:** - High five a user.
      **Eclipse pinkypromise:** - Make a pinkypromise with a user.
      **Eclipse kiss:** - Kiss a user.
      **Eclipse boop:** - Boop a user.
      **Eclipse slap:** - Slap a user.
      **Eclipse meow:** - Meow at a user.
      **Eclipse beg:** Beg a user for something.
      **Eclipse pat:** Pat a user.
      **Eclipse clap:** - Clap!
      **Eclipse blush:** Someone is blushing!
      **Eclipse hug:** - Hug a user.
      **Eclipse cry:** - Cry.
      **Eclipse scared:** - Scaredy cat.
      **Eclipse sip:** - Sip some tea.
      **Eclipse dropkick:** - Kick a user.
      **Eclipse glare:** - Glare at a user.
      **Eclipse laugh:** - Laugh.
      **Eclipse hide:** - Hide.`)
    }
  }))
  const snekfetch = require("snekfetch")
  client.on('message', (message => {
    if (message.content.startsWith(`${prefix}handhold`)) {
      const msgBreak = message.content.split(' ')
      const user = client.guilds.resolve(message.guild.id).members.resolve((message.mentions.members.first() || msgBreak[2]))
      if (!user) return message.channel.send("you can't hold hands with nobody")
      if (user.id == message.author.id) return message.channel.send("you can't hold hands with yourself, silly")
      let embed = new Discord.MessageEmbed() 
        .setDescription(`${message.author.username} held hands with <@${user.id}> :heart: `)
        .setImage("https://i.pinimg.com/originals/0e/6f/52/0e6f524f25fbc80c666d6541822e2522.gif")
      message.channel.send(embed)
    
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}highfive`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't high-five nobody")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} You got a high-five from ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: "https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif"
                    }
                }
            })
}}))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}pinkypromise`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't pinky promise nobody")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} made a pinky promise with ${user}!❤`,{
                embed: {
                    image: {
                        url: "https://media1.tenor.com/images/7c9d1409a54234a0977f0b00a0461ee2/tenor.gif"
                    }
                  }
                }
            )
              }
            }
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}slap`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't slap yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} slapped ${user}! D:`,{
                embed: {
                    image: {
                        url: "https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif"
                    }
                  }
                }
            )
              }
            }
))

client.on('message', (message => {
  if (message.content.startsWith(`${prefix}meow`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't meow at yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} meowed at ${user}! Better give them attention.`,{
                embed: {
                    image: {
                        url: "https://media.tenor.com/images/bb33cc1eaafa266ac1092ecff7c1c85d/tenor.gif"
                    }
                  }
                }
            )
              }
            }
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}beg`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't beg yourself for something!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} begged ${user} for something.`,{
                embed: {
                    image: {
                        url: "https://media1.tenor.com/images/e137573773e638e565376bd6ee48c953/tenor.gif"
                    }
                  }
                }
            )
              }}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}clap`)) {
            message.channel.send(`${message.author.username} claps!`,{
                embed: {
                    image: {
                        url: "https://i1045.photobucket.com/albums/b456/SPGenius/g9uzx7p_zps4dscbx2i.gif"
                    }}
                  })}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}blush`)) {
            message.channel.send(`${message.author.username} is blushing! I wonder what happened.`,{
                embed: {
                    image: {
                        url: "https://media1.giphy.com/media/HPI9m7McNPGN2/giphy.gif"
                    }
                  }
                }
                )
              }
            }
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}hug`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't hug yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} gave ${user} a hug! ❤`,{
                embed: {
                    image: {
                        url: "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif"
                    }
                  }
                }
            )
              }
            }
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}cry`)) {
            message.channel.send(`${message.author.username} is crying! Someone should check on them.`,{
                embed: {
                    image: {
                        url: "https://i.pinimg.com/originals/b4/b1/64/b4b1640525ecadfa1030e6096f3ec842.gif"
                    }
                  }
                }
            )
              }
            }
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}scared`)) {
            message.channel.send(`${message.author.username} is scared!`,{
                embed: {
                    image: {
                        url: "https://media1.giphy.com/media/kT7VY5eUanako/giphy.gif"
                    }}
                  })}
                }
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}sip`)) {
            message.channel.send(`${message.author.username} takes a sip of their drink.`,{
                embed: {
                    image: {
                        url: "https://media.tenor.com/images/9e9ea3021d61439ec9fd1f5a6ac775ba/tenor.gif"
                    }}}
            )
                  }}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}dropkick`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't kick yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} kicked ${user}! Maybe someone should make sure they're okay..`,{
                embed: {
                    image: {
                        url: "https://i.kym-cdn.com/photos/images/newsfeed/000/747/410/040.gif"
                    }}
                  }
            )}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}glare`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't glare at yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} glared at ${user}! Seems like you made them upset`,{
                embed: {
                    image: {
                        url: "https://64.media.tumblr.com/f66b59fa5ceecb4807dfe31eba4c3dee/tumblr_inline_nugg9zk2Qi1t7p8kb_500.gif"
                    }}
                  }
            )}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}laugh`)) {
            message.channel.send(`${message.author.username} laughs.`,{
                embed: {
                    image: {
                        url: "https://media.tenor.com/images/9a2f094197a064b0e91a640fbc82b95f/tenor.gif"
                    }}}
            )}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}hide`)) {
            message.channel.send(`${message.author.username} hides.`,{
                embed: {
                    image: {
                        url: "https://data.whicdn.com/images/68663075/original.gif"
                    }}})}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}warrat`)) {
            message.channel.send(`${message.author.username} War Rat.`,{
                embed: {
                    image: {
                        url: "https://bangshift.com/forum/filedata/fetch?id=1256338&d=1574128337"
                    }}})}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}kiss`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't kiss yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} kissed ${user}!`,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/WVSwvm6.gif"
                    }}})}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}boop`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't boop yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} booped ${user}!`,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/fZmUTgw.gif"
                    }}})}}
))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}pat`)) {
      if (message.mentions.users.size < 1) return message.channel.send("you can't pat yourself!")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username} patted ${user}!`,{
                embed: {
                    image: {
                        url: "https://i.pinimg.com/originals/70/96/0e/70960e87fb9454df6a1d15c96c9ad955.gif"
                    }}}
            )}}
))
client.on('message', message => {
if (message.content.startsWith(`${prefix}purge`)) {
  if (message.channel.type == 'dm') return message.channel.send('These Commands Can Only Be Ran in a server');
  const msgBreak = message.content.split(' ')

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You have insufficient permissions to execute this command.");

  const count = msgBreak[2];
  if (!count) return message.channel.send("Please specify how many messages you would like to delete");
  if (isNaN(count)) return message.channel.send("That is not a valid number!")
  if (2 > count) return message.channel.send("Please choose a number betweem 2-100");
  if (count > 100) return message.channel.send("Please choose a number between 2-100");

  message.delete().then(msg => {
      message.channel.bulkDelete(count).then(() => {
          message.channel.send(`Deleted ${count} messages.`).then(message => {
              message.delete({ timeout: 3000 })
          })  
      }).catch(error => message.channel.send("You can only purge messages that are under 2 weeks old!").then(msg => {
          message.delete({ timeout: 5000 })
      }));
  })
}})}}))
client.on('message', (message => {
  if (message.content.startsWith(`${prefix}info`)) {
      const InfoEmbed = new Discord.MessageEmbed()
      .setTitle('**Info**')
      .setDescription(`This is a Custom Discord Bot For the Astral Complex Discord Server It was developed by <@351756914629017611> With help from <@218373819730100225>`)
      message.channel.send(InfoEmbed)
  }}))   