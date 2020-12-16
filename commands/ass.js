module.exports = {
    name: "ass",
    description: "Ass images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Ass`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.ass())
        message.channel.send(embed);
    }
}