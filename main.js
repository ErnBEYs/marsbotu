const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")

bot.commands = new Discord.Collection()
bot.config = require('./config')
bot.login(bot.config.token)
loadCommands(bot)
loadEvents(bot)


bot.on("ready", async () => {
    console.log(`
    ╭━━━╮╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮╱╭╮╱╱╱╱╱╱╭╮╭╮╭┳╮╭╮╭╮╭━━━┳━━━╮
    ┃╭━━╯╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮┃┃╱╱╱╱╱╱┃┃┃┃┃┃┃┃┃┃┃┃╭━╮┃╭━╮┃
    ┃╰━━┳━┳━━┳━━┫╰╯╰┳━┻╮╭╯┃╰━┳╮╱╭╮┃┃┃┃┃┃┃┃┃┃┣┫╰━╯┃╰━╯┣╮╭╮
    ┃╭━━┫╭┫┃━┫┃━┫╭━╮┃╭╮┃┃╱┃╭╮┃┃╱┃┃┃╰╯╰╯┃╰╯╰╯┣┫╭╮╭┫╭╮╭┫┃┃┃
    ┃┃╱╱┃┃┃┃━┫┃━┫╰━╯┃╰╯┃╰╮┃╰╯┃╰━╯┃╰╮╭╮╭┻╮╭╮╭┫┃┃┃╰┫┃┃╰┫╰╯┃
    ╰╯╱╱╰╯╰━━┻━━┻━━━┻━━┻━╯╰━━┻━╮╭╯╱╰╯╰╯╱╰╯╰╯╰┻╯╰━┻╯╰━┻━━╯
    ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
    ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯`)
})
