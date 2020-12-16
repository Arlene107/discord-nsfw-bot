module.exports = {
    name: "hmidriff",
    description: "hentai midriff images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Hentai Midriff`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.hmidriff())
        message.channel.send(embed);
    }
}