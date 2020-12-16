module.exports = {
    name: "4k",
    description: "4K images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`4K`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.fourk())
        message.channel.send(embed);
    }
}