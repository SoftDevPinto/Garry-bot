const Discord = require('discord.js')

const client = new Discord.Client({ 
    intents: [
        "GUILDS", 
        "GUILD_MESSAGES"
    ] 
})

client.on("ready", () => {
    console.log("Garrys online fuckers")
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world!")
    }
})


client.login("OTY1NTY2NzkzMDM0ODkxMzU2.Yl1EJg.CJv8PXGrtj4Yi0t6u5LxxkFUZzw");
