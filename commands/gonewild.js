module.exports = {
    name: "gonewild",
    description: "Gonewild images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Gonewild`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.gonewild())
        message.channel.send(embed);
    }
}