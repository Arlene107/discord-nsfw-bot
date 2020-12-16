module.exports = {
    name: "thigh",
    description: "Thigh images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Thigh`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.thigh())
        message.channel.send(embed);
    }
}