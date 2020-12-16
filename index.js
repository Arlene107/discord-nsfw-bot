require("dotenv").config();
const { readdirSync } = require("fs");
const { join } = require("path");
const Client = require("./src/Client");
const Discord = require("discord.js");
const client = new Client({ token: process.env.TOKEN, prefix: process.env.PREFIX });

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.once("ready", () => console.log(`${client.user.tag} is now online!`));
client.on("message", message => {
    if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
    const args = message.content.slice(client.config.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    if (command.guildOnly && message.channel.type !== 'text') return message.reply('I can\'t execute that command inside DMs!');
    try {
        command.execute(message, args, Discord);
    } catch (error) {
        console.error(error);
        message.reply(`There was an error executing your command`);
    }
});

client.login(client.config.token);