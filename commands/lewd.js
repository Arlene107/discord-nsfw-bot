module.exports = {
    name: "lewd",
    description: "lewd images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Lewd`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.lewd())
        message.channel.send(embed);
    }
}