## Basic Addition Discord bot

First install all the packages using 
```
npm install
```

Then rename .env.example file to .env file and add your own information there

TOKEN can be retrieved from https://discord.com/developers/applications

GUILD_ID is the ID of the server

CLIENT_ID is the ID of the bot which can be obtained from the same site

and then use 

```
nodemon
```

For updating commands, run 
```
node src/register-commands.js
```
Once every time you update this file
