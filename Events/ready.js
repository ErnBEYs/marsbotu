const loadSlashCommand = require('../Loaders/loadSlashCommands');
const {ActivityType} = require("discord.js");

module.exports = async (bot) => {

    loadSlashCommand(bot);
    console.log(`${bot.user.tag} est en ligne!`);
}