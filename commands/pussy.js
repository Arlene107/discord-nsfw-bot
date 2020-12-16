module.exports = {
    name: "pussy",
    description: "Pussy images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Pussy`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.pussy())
        message.channel.send(embed);
    }
}