module.exports = {
    name: "erokemo",
    description: "erokemo images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Erokemo`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.erokemo())
        message.channel.send(embed);
    }
}