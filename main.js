const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const { token, prefix } = require("./config");
client.on("ready", () => {
  console.log("Bonjour maître");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${prefix}ping`)) msg.channel.send("Pong!");
});

client.login(token);
