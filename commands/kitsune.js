module.exports = {
    name: "kitsune",
    description: "kitsune images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Kitsune`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.kitsune())
        message.channel.send(embed);
    }
}