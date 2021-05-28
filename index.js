const { Collection, Client, MessageAttachment } = require('discord.js')

const fs = require('fs')
const db = require('quick.db')
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

const client = new Client({
    disableEveryone: true
});



const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});
client.on('ready', () => {
	client.user.setPresence({
		activity: {
			name: ` ${prefix}help  `,
			type: 'WATCHING'
		},
		status: 'dnd'
	}).then(console.log).catch(console.error);
	console.log(`${client.user.username} ✅`)
})
// require the file


client.on('message', async(message) => {
    // replace the files accordingly
    
            if (!message.guild) return;
            if (!message.member) message.member = await message.guild.fetchMember(message);
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if (cmd.length == 0) return;
            let command = client.commands.get(cmd);
            if (!command) command = client.commands.get(client.aliases.get(cmd));
            if (command) command.run(client, message, args);
                
            
        
    
    
});
client.on("guildMemberAdd", async member => {

    let chx = db.get(`welchannel_${member.guild.id}`);
  
    if (chx === null) {
  
      return;
  
    }
  
    
  
     let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })
  
   
  
      const attachment = new MessageAttachment(
  
        data,
  
        "welcome-image.png"
  
      );
  
    
  
    
  
    client.channels.cache.get(chx).send(` <a:load2:847588305351475292> Welcome To Justifyl Developer ${member} <a:load2:847588235877154896> <a:load2:847590260887781426>
  ━━━━━━━━━━━━━━━━━━━━         
  <a:load2:847588305351475292> **Now We Have Members: ${member.guild.memberCount}**  <a:load2:847588235877154896> <a:load2:847590260887781426>
  <a:load2:847588305351475292> Make Sure To Read: <#847539042156806225>  <a:load2:847588274687443015> <a:load2:847590260887781426> ` 
    ,attachment
   ); 
   });
  

    
client.login(token);