const { Client, Collection } = require("discord.js");
const NSFW = require("discord-nsfw");

module.exports = class extends Client {
    constructor(config) {
        super({
            disableMentions: "everyone"
        });

        this.commands = new Collection();

        this.config = config;

        this.nsfw = new NSFW();
    }
}