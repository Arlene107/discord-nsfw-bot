module.exports = {
    name: "boobs",
    description: "Boobs images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Boobs`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.boobs())
        message.channel.send(embed);
    }
}