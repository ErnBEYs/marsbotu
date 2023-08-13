const Discord = require('discord.js')
const { EmbedBuilder } = require("discord.js")
const libquery = require('libquery')

module.exports = {

  name: "ip",
  description: "Permet d'avoir l'ip du serveur",
  permission: "Aucune",
  dm: true,
  category: "Information",

async run(bot, message, args) {
    libquery.query(bot.config.ip, bot.config.port, 1000).then((data) => {
        const onembed = new EmbedBuilder()
        .setTitle(bot.config.servername)
        .setColor(bot.config.color)
        .setDescription(`> 📡 | Statut: **Online (🟢)**
        > 📌 | IP: **${bot.config.ip}**
        > 🔗 | Port: **12300**
        > 👥 | Aktif Oyuncu: **${data.online}/${data.max}**
		> ⚙️| Versiyon: **${data.version}**`)
        .setTimestamp()

        message.reply({ embeds: [onembed] })
    }).catch(() => {
        const offembed = new EmbedBuilder()
        .setTitle(bot.config.servername)
        .setColor(bot.config.color)
        .setDescription(`> 📡 | Statut: **Offline (🔴)**
        > 📌 | IP: **${bot.config.ip}**
        > 🔗 | Port: **12300**
        > 👥 | Aktif Oyuncu: **??/??**
		> ⚙️ | Version du serveur: **v??.??.??**`)
        .setTimestamp()
        message.reply({ embeds: [offembed] })
            });
  }
}
