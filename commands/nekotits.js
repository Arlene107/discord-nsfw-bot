module.exports = {
    name: "nekotits",
    description: "neko tits images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`neko Tits`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.nekotits())
        message.channel.send(embed);
    }
}