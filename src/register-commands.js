require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "add",
    description: "Adds two Numbers",
    options: [
      {
        name: "first-number",
        description: "The first number to add",
        type: ApplicationCommandOptionType.Integer,
        required: true,
      },
      {
        name: "second-number",
        description: "The second number to add",
        type: ApplicationCommandOptionType.Integer,
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering Slash Commands");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Slash Commands Registered");
  } catch (error) {
    console.log("Error occured " + error);
  }
})();
