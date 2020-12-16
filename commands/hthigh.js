module.exports = {
    name: "hthigh",
    description: "hentai thigh images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Hentai Thigh`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.hentaithigh())
        message.channel.send(embed);
    }
}