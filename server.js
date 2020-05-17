//Vip Bot


////سيستم
require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

////بكجات
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC5hMxsPl6nAx6B_CrOeT_zVLcleXSFGtE"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyC5hMxsPl6nAx6B_CrOeT_zVLcleXSFGtE"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const { Canvas } = require("canvas-constructor");
const { Attachment } = require("discord.js");
const { resolve, join } = require("path");
const fetch = require("node-fetch");
const prettySeconds = require("pretty-seconds");
const fsn = require("fs-nextra");

client.on('message', message => { 
 if (message.content === "!help") {
message.author.send ((message.guild.name) +  (" prefix is ") + ("`!`") )  .then(m => {

  message.react('✅');

   
  let support = "https://discord.gg/gVDGVeR"
   let cmd = "https://vipbot-io5.glitch.me/commands"
     let invite = "https://discord.com/api/oauth2/authorize?client_id=710613806430158849&permissions=8&scope=bot"
let embed = new Discord.RichEmbed()
.setTitle("Helpful Links")
.setDescription(`[Add To Your Server](${invite}) \n [VipBot Commands](${cmd}) \n [Join the support server](${support}) `)

message.author.sendEmbed(embed)
})}});
client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()

.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) .setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
  
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})
client.on('message', message =>{
  if (message.content.startsWith(prefix + "ping")) {
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});
   client.on('message', message => {

    if (message.content.startsWith(prefix +"link")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :white_check_mark: تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
---------------------
 :kissing_closed_eyes:  - هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: - هذا الرابط صالح لمده 24 ساعه فقط
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});

client.on('message', message => {

       if(message.content === prefix + "lock") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**') 
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **") 
              });
                }
//FIRE BOT
    if(message.content === prefix + "unlock") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**') 
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
             });
    }
      
});

client.on("message", message => {

let args = message.content.split(' ');
  if(args[0].toLowerCase() === (prefix + "server")) {
        let embed = new Discord.RichEmbed()
        .addField(`:id: Server ID:`, `${message.guild.id}`, true)
        .addField(`:calendar: Created on:`, `${moment(message.guild.createdAt).format(`D/M/YYYY h:mm`)} \n ${moment(message.guild.createdAt).locale("AR-eg").fromNow()}`,true)
        .addField(`:crown: Owned by`, `<@${message.guild.owner.user.id}>`,true)
        .addField(`:busts_in_silhouette: Members [${message.guild.members.size}]`, `**${message.guild.members.filter(c => c.presence.status !== "offline").size}** Online`, true)
        .addField(`:speech_balloon: Channels [${message.guild.channels.size}]`,`**${message.guild.channels.filter(f => f.type === "text").size}** Text | **${message.guild.channels.filter(f => f.type === "voice").size}** Voice`,true)
        .addField(`:earth_africa: Others`, `**Region:** ${message.guild.region} \n **Verification level:** ${message.guild.verificationLevel}`, true)  
        .addField(`:closed_lock_with_key: Roles [${message.guild.roles.size}]`, `To see the whole list with all roles use **${prefix}roles**`, true)
        .setThumbnail(`${message.guild.iconURL}`)
        .setColor(`black`)
        .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`);
       
    message.channel.sendEmbed(embed);
    }
 
});
var top = require("./top.json");
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voiceChannel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 1,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "top text")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n\n **? | For More: \`${prefix}top text\`**`, true)  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            message.channel.send({
                embed: embed
            });
     //   if (!message.content.startsWith(prefix)) return;
  } else {
    if(message.content.startsWith(prefix + "top voice")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n\n **:sparkles: More?** \`${prefix}top voice\``, true)
  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()  
            message.channel.send({
                embed: embed
            });
      
    } else {
      if (message.content.startsWith(prefix + "reset voice")){
      var reset = ':white_check_mark:  ?? ????? ?????? ?????'
      var confirm = ' ??? ????? ??? ???? ????? ???? ???? ??????'
        
        message.channel.send(`**${confirm}**`).then(async msg => {
         await  msg.react("?")
        await   msg.react("?")
          const doma = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "?" && user.id === message.author.id, {time: 60000})
          const ziad = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "?" && user.id === message.author.id, {time: 60000})
doma.on("collect", async r => {

  
  
  msg.delete()
    
    msg.channel.send(`${reset}`)
  
})
  
  ziad.on("collect", async r => {
    
    msg.delete()
  })
      
        })

     //  break;
       // if (!message.content.startsWith(prefix)) return;
  } else {
       if(message.content.startsWith(prefix + "top")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()  
            .setAuthor("Guild Score Leaderboards", message.guild.iconURL)
            .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``, true)
            .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("13B813");
            message.channel.send({
                embed: embed
            
  
            });

      
       
        }
  }
  }
  }
});

 
client.on("message", message =>{
if (!message.guild || message.author.bot) return false;
if (message.content.startsWith(prefix + "role")) {
if (!message.member.hasPermission("MANAGE_ROLES"))
return message.channel.send("Your not Have a Permission MANAGE_ROLES");
let role2 = message.mentions.members.first();
if (!role2)
return message.channel.send("i can't find the member")
let mention = message.mentions.roles.first() ||
message.guild.roles.find(r =>
r.name.startsWith(
message.content.split(" ").slice(2).join(" ")));
if (!mention) return message.channel.send(" i can't Find The Role ")
if (role2.roles.get(mention.id)) {
role2.removeRole(mention).then(() => {
let roole = new Discord.RichEmbed()
.setTitle("succesufly removed the role from the user")
message.channel.send(roole)
}).catch(err =>err.code == 50013? message.channel.send(" don't role Up :x:"): message.channel.send(err.message));
} else {
role2.addRole(mention).then(() => {
let add = new Discord.RichEmbed()
.setTitle(`:white_check_mark: Changed role ${message.guild.role}`)
.setColor("none")
message.channel.send(add)
.catch(err =>
err.code == 50013
? message.channel.send(" role Up :x:")
: message.channel.send(err.message)
);
})}
}})
 client.on('ready', () => {
client.user.setActivity(`!help`)
console.log(`
? | Name ${client.user.tag}
? | Servers ${client.guilds.size}
? | Users ${client.users.size}
By : OnixDEV`);
});
client["on"]("message", message => {
if(message["author"]["bot"]) return undefined;
let args = message["content"]["split"](" ")
if(message["content"]["startsWith"](prefix + "kick")) {
if (!message["member"]["hasPermission"]('MANAGE_GUILD')) return message["channel"].send(`**:x:\`| You Not Have Permission\`**`)
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
if(!user) return message["channel"]["send"](`**Usage | ${prefix}kick \`[User/UserID]\`**`)
let Reason = message["content"]["split"](" ").slice(2).join(" ");
if(!Reason) return message["channel"]["send"](`:x:| **Please Type Reason**`)
message.guild.member(user).kick(Reason);
message["channel"]["send"](`**:white_check_mark: | Done Has Kicked <@${user.id}> Reason: \`${Reason}\`**`)
}
})

let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

client.on("message", function(message) {
  let user = message.mentions.users.first();
  if (!message.channel.guild) return;
  

  let args = message.content.split(" ");
let command = args[0]
if(command === prefix + "warn"){
  if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
   if(warns[message.guild.id] == undefined) {
      warns[message.guild.id] = {
  bannedusers: "none"
      }
      fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
        if (err) throw err;
      });
    }
    if(warns[message.guild.id][user.id] == undefined) {
      warns[message.guild.id][user.id] = {
  warn: "none",
  warn2: "none",
  warn3: "none",
  warn4: "none"
      }
      fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
        if (err) throw err;
      });
    }
    let warn1 = warns[message.guild.id][user.id].warn;
let warn2 = warns[message.guild.id][user.id].warn2;
let warn3 = warns[message.guild.id][user.id].warn3;
let warn4 = warns[message.guild.id][user.id].warn4;
  let member = warns[message.guild.id][user.id];
   if(!user)return message.channel.send("Mention Someone")
  if(user.id === message.author.id)return message.channel.send("**You Cant Warn Yourself**")
 if (warn1 === "none"){
   if(warn1 === "warned")return;
warns[message.guild.id][user.id].warn = "warned"
    message.channel.send("**Done That User Has Got The `1` Warn**")
  }else if(warn2 === "none"){
if(warn1 === "none")return;
if(warn2 === "warned")return;
warns[message.guild.id][user.id].warn2 = "warned"
fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
  if (err) throw err;
});
    message.channel.send("**Done That User Has Got The `2` Warn**")
  }else if(warn3 === "none"){
    if(warn1 === "none")return;
    if(warn2 === "none")return;
    if(warn3 === "warned")return;
    warns[message.guild.id][user.id].warn3 = "warned"
    fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
      if (err) throw err;
    });
        message.channel.send("Done That User Has Got The `3` Warn Any Warn After That One Will Get That User Banned")
  }else if(warn4 === "none"){
    if(warn1 === "none")return;
    if(warn2 === "none")return;
    if(warn3 === "none")return;
      warns[message.guild.id][user.id] = {
    warn: "none",
    warn2: "none",
    warn3: "none",
    warn4: "none"
        }
        fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
          if (err) throw err;
        });
      message.guild.member(user).ban("Reached The Limit Of Warns", user);
      message.channel.send("**User Has Banned Reason `Reached Limit Of Warns`**")
  }

}else if(command === `${prefix}delwarns`){
if(!user)return message.channel.send("**Sorry Missing User/Mention**")
  warns[message.guild.id][user.id] = {
    warn: "none",
    warn2: "none",
    warn3: "none",
    warn4: "none"
        }
        fs.writeFile("./warns.json", JSON.stringify(warns), function(err) {
          if (err) throw err;
        });
        message.channel.send("Done Deleted All Warns For This User")
}

});

const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 5
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
if (args[0].toLowerCase() == `${prefix}credits` ||
args[0].toLowerCase() === `${prefix}credit` ||
args[0].toLowerCase() === `c` ||
args[0].toLowerCase() === `${prefix}c` ||
args[0].toLowerCase() === `C`

) {

    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, Your 💸 balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2])) return message.channel.send(`**:x: | Error**`);
      if (args[2] < 1) return message.channel.send(`**:x: | Error**`);
      if (mention.bot) return message.channel.send(`**:x: | Error**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:x: | Error**`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:x: | Error , You Don't Have Enough Credit**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
      //let resulting = Math.floor(args[2] - args[2] * (5 / 100));
      //let tax = Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let canvas = Canvas.createCanvas(108, 40);
      let ctx = canvas.getContext("2d");
 let tax = message.content.split(" ")[1]
let Price = message.content.split(" ")[2];
 tax = tax.replace(/%5/g,"");
let resulting = Math.floor(Price-(Price*(5/100)));      
     // let resulting = Math.floor(Price-(Price*(5/100)));
      message.channel.send(`**${message.author.username}, You Will Trans \`${resulting}\`, Amount :\`$${args[2]}\` **
  **If You Want To Complete Trans Type: **`
)
.then(m => {
          ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
          message.channel.sendFile(canvas.toBuffer()).then(m => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.first().content === num) {
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, Done Trans \`$${resulting}\` To ${mentionn}**`
                  );
message.channel.send(`**:money_with_wings: | Transfer Receipt \`\`\`You Have Received $${resulting} From User ${message.author.username }; (ID (${message.author.id})\`\`\`**`);                  
m.delete();
                  credits[author].credits += Math.floor(
                    -resulting
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting
                  );
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                  message.delete();
                }
              });
          });
        });
    } else {
      message.channel.send(
        `**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
      );
    }
  }
  if (args[0].toLowerCase() === `${prefix}daily` ||
 args[0].toLowerCase() === `d` ||
 args[0].toLowerCase() === `${prefix}d` ||
args[0].toLowerCase() === `D`
) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send( `** 💸 ${ message.author.username }, Your Daily Credits Refreshes in \`[${pretty(times, { verbose: true })}.]\`**`);
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (1200, 800, 500, 350, 320, 300, 250, 220, 200, 120, 100);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**💸 | ${message.author.username}, You Received ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
}); 

client.on("guildCreate", guild => {
    console.log(` Your bot has been invited in server : ${guild.name} Owner Server : ${guild.owner.user.username}!`)
  });


client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command ===   `ping`) {
    let embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("Pong!!")
    .setDescription(`${client.ping} ms,`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    msg.delete().catch(O_o=>{})
    msg.channel.send(embed);
    }
});

client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `avatar`){
	if(msg.channel.type === 'dm') return msg.channel.send("Nope Nope!! u can't use avatar command in DMs (:")
        let mentions = msg.mentions.members.first()
        if(!mentions) {
          let sicon = msg.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(msg.author.avatarURL)
          .setColor("#5074b3")
          msg.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#5074b3")
          .setImage(sicon)
          msg.channel.send({embed})
        }
    };
});



client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)


	if (command === `play`) {
  
    
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send(":no_entry_sign: You must join a voice channel to use that!");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("You Don't Have to join is channel");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("You can't speak in this room");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage( 'Ido not have permission  ``EMBED_LINKS`` ')
		}
            voiceChannel.join()

      if(!args[1]) return msg.channel.send(`:bulb: Play Commands: 

\`\`${prefix}play <song title>\`\` - plays the first result from Youtube
\`\`${prefix}play <URL>\`\` - plays the provided song, playlist, or stream`)


		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
			
					
/////////////////					
				
                    
                    var video = await youtube.getVideoByID(videos[0].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send(":no_entry_sign: You must join a voice channel to use that!");
        if (!serverQueue) return ;

		serverQueue.connection.dispatcher.end( `:notes: Skipped asdasd - <@${msg.author.id}>`);
    msg.channel.send( `:notes: Skipped asdasd - <@${msg.author.id}>`);
   
                return undefined;

	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send(":no_entry_sign: You must join a voice channel to use that!");
        if (!serverQueue) return msg.channel.send(":notes: The player has stopped and the queue has been cleared.");

        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end(':notes: The player has stopped and the queue has been cleared.');
        return undefined;
        
	} else if (command === `vol`) {

     if (!msg.member.voiceChannel) return msg.channel.send(":no_entry_sign: You must join a voice channel to use that!");
		if (!serverQueue) return msg.channel.send(' The bot is not playing :interrobang:');
        if (!args[1]) return msg.channel.send(`:speaker: Current volume is **${serverQueue.volume}**`);
    if(args[1] > 100 || args[1] <10) return msg.channel.send(':no_entry_sign: Volume must be a valid integer between ``10`` and ``100``' )
        
		serverQueue.volume = args[1];
    
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100);
        
        return msg.channel.send(`:loud_sound: Volume changed on \`\`${args[1]}\`\``);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is no Queue!');

        return msg.channel.send(`:arrow_forward: **${serverQueue.songs[0].title}**`)
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle(`:notes: Current Queue | ${serverQueue.songs.length -1} entries`)
        .setDescription(`
        ${serverQueue.songs.map((song,index) => index ==0 ?null : `**[${index}]** ${song.title} - `).join('\n')}`)
        .setColor("#4f545c")
		return msg.channel.send(`:arrow_forward: **${serverQueue.songs[0].title}**`).then((a)=>{
      msg.channel.sendEmbed(embedqu);
    })  
    
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send(` :notes: Paused **${serverQueue.songs[0].title}** `);
		}
		return msg.channel.send(' The player is already paused! Use '+prefix+'``resume`` to unpause!');
	} else if (command === "resume") {
//  سنايس
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send(`:notes: Resumed **${serverQueue.songs[0].title}** `);
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`,
    user: msg.author
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 7.5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` :notes: **${song.title}** Added to **Queue** !`);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 8);

	serverQueue.textChannel.send(` :notes: **${song.title}** Added to **Queue** !`);
}


client.on('message', message => {
    if (message.content.startsWith("!about")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO VipBot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ ! ]` , true)
    })
}
});
