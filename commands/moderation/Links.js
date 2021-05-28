const Discord = require('discord.js')
module.exports = {
    name: 'links',
    category: 'info',
    description: 'Returns latency and API ping',
    

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    
    run: async (client, message, args) => {
        if(message.author.id !== '757714907012661308') return message.channel.send('This is an owner only command.')
        let embed = new Discord.MessageEmbed()
        .setTitle('Justifyl Links')
        .setImage("https://media.discordapp.net/attachments/846003311701131264/847552580715282452/Untitled.png?width=840&height=473")
        .addField('Discord', '[Click Here](https://discord.gg/47Uj5djD3n)')
        .addField('Youtube', '[Click Here](https://www.youtube.com/channel/UCW9EWbzKAplmI0Ivr1RuVew)')
        .addField('Twitter', '[Click Here](https://twitter.com/Justifyl1)')
            .addField('Instagram', '[Click Here](https://www.instagram.com/cyloesports.yt/)')
            .addField('Patreon', '[Click Here](https://www.patreon.com/justifyl) ')
        
         .setColor("BLACK")
         message.channel.send(embed)
         }
        

    
}