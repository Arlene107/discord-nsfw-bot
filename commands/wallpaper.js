module.exports = {
    name: "wallpaper",
    description: "wallpaper images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Wallpaper`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.wallpaper())
        message.channel.send(embed);
    }
}