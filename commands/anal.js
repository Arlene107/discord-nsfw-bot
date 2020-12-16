module.exports = {
    name: "anal",
    description: "Anal images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Anal`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.anal())
        message.channel.send(embed);
    }
}