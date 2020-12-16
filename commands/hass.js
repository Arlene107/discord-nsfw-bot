module.exports = {
    name: "hass",
    description: "hentai ass images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Hentai ass`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.hentaiass())
        message.channel.send(embed);
    }
}