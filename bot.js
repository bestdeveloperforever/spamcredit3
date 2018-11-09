const Discord = require('discord.js');
const client = new Discord.Client();

  
client.on('ready', () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("4833551889549230410").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},500);
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login("NTA4MDA2MzY2MjI5NjkyNDM1.DsGXtQ.HVMyxedgs8DDSCpChpSR_O9drNQ");
