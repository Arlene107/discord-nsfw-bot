module.exports = {
    name: "hentai",
    description: "hentai images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Hentai`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.hentai())
        message.channel.send(embed);
    }
}