const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone Salut à tous!", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone) Salut à tous");
});

client.login("NjI5NjU5NTY4ODEyODUxMjAw.XZdAsw.huOB-jtii-zNpSasQvwf2BlUvN4");
