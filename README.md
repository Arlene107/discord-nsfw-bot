# Discord NSFW Bot
A simple discord nsfw bot.

# Note
> ⚠ This bot's code might be different compared to what yours looks like. You can either copy entire bot or just modify it according to your own needs.

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. Node.js v12.0.0 or newer

## Getting Started

1. Download the files
2. Head over to .env file and paste your bot's token and change your prefix
3. Run `npm install` and wait.
4. Once all the packages are installed run `node .` to start your bot.

## How to setup in heroku (Github push method)

1. Download the files
2. Upload the files to your github repository.
3. Open your heroku dashboard and create application.
4. Head over to Deploy tab and click on Github as deployment method.
5. Connect your repo with the code to your heroku application and click on Deply branch.
6. Click on settings tab and add TOKEN and PREFIX as your config vars.
7. Once done head over to resources tab and enable your `node <filename>`

⚠️ **You must create Procfile to deploy your bot in heroku.** ⚠️

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️