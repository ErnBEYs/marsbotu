const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Permet de connaitre la latence du bot.",
    permission: "Aucune",
    category: "Autres",


    async run (bot, message) {

        await message.reply(`Ping = \`${bot.ws.ping}\``)
    }
}