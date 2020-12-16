module.exports = {
    name: "nekopussy",
    description: "neko pussy images",
    async execute(message, args, Discord) {
        if (!message.channel.nsfw) return message.reply(`Go to nsfw channel lmao.`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`neko Pussy`)
        .setColor("GREEN")
        .setImage(await message.client.nsfw.nekopussy())
        message.channel.send(embed);
    }
}