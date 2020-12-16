module.exports = {
    name: "solo",
    description: "solo images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Solo`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.solo())
        message.channel.send(embed);
    }
}