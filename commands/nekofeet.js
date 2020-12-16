module.exports = {
    name: "nekofeet",
    description: "neko feet images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`neko Feet`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.nekofeet())
        message.channel.send(embed);
    }
}