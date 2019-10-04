const { Client, MessageEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });
const { token, prefix } = require("./config");
client.on("ready", () => console.log("Bonjour maître"));

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;
  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "ping") msg.channel.send("Pong!");

  if (cmd === "help") {
    const embed = new MessageEmbed()
      .setTitle("Descriptions des différentes commandes du bot")
      .setFooter(msg.author.tag, msg.author.avatarURL())
      .setTimestamp();
    msg.channel.send(embed);
  }
});
// Create an event listener for new guild members

client.login(token);
