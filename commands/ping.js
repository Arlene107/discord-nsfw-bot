module.exports = {
    name: "ping",
    description: "Pong!",
    execute(message, args, Discord) {
        message.channel.send(`Pong! \`${message.client.ws.ping}ms\``);
    }
}