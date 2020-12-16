module.exports = {
    name: "pgif",
    description: "Porn gifs",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Porn Gifs`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.pgif())
        message.channel.send(embed);
    }
}