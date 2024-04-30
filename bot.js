// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

const token = process.env.BOT_TOKEN;
const channelId = process.env.CHANNEL_ID;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

// Array of unique and humorous goodbye messages
const goodbyeMessages = [
    "Catch you on the flip side, ${member.displayName}!",
    "Goodbye ${member.displayName}! We'll always remember you... I think?",
    "Who's gonna turn off the lights now that ${member.displayName} has left?",
    "Are you really leaving ${member.displayName}? Just when I was starting to like you!",
    "Oops! ${member.displayName} slipped through our fingers!",
    "Not all those who wander are lost, but ${member.displayName} sure seems to be.",
    "Brace yourselves, ${member.displayName} is leaving!",
    "We'll miss you ${member.displayName}, even if we're just NPCs in your life's RPG!",
    "Don't be a stranger ${member.displayName}, unless you're going off the grid!",
    "It’s not goodbye, it’s see you later, ${member.displayName}!",
    "Another one bites the dust, and this time it's ${member.displayName}!",
    "May your WiFi be strong wherever you land, ${member.displayName}.",
    "Looks like ${member.displayName} has left the server. More cake for us!",
    "So long, and thanks for all the memes, ${member.displayName}!",
    "Leaving so soon? Was it something we said, ${member.displayName}?",
    "Just when I thought you were cool, ${member.displayName}, you leave us like this!",
    "Goodbye ${member.displayName}! Keep it weird wherever you go.",
    "Is this a rage quit? Anyway, goodbye ${member.displayName}!",
    "Beware of the outside world, ${member.displayName}! It’s spooky out there.",
    "Fly you fool, fly! Goodbye ${member.displayName}!",
    "We didn’t even start the party, and ${member.displayName} is already leaving!",
    "Guess who’s going to miss ${member.displayName}? Not the server bot, but probably someone else!",
    "Take your cookies and leave, ${member.displayName}.",
    "Hasta la vista, ${member.displayName}.",
    "May the force eject you gently, ${member.displayName}."
];

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
    client.guilds.cache.forEach(guild => console.log(`Connected to: ${guild.name}`));
});

client.on('guildMemberRemove', member => {
    console.log(`Member ${member.displayName} has left the guild.`);

    const channel = member.guild.channels.cache.get(channelId);
    if (!channel) {
        console.log(`Channel with ID '${channelId}' not found in ${member.guild.name}`);
        return;
    }

    const randomIndex = Math.floor(Math.random() * goodbyeMessages.length);
    const message = goodbyeMessages[randomIndex].replace('${member.displayName}', member.displayName);
    channel.send(message).catch(error => {
        console.error(`Could not send message to channel ID ${channelId} in ${member.guild.name}:`, error);
    });
});

client.login(token);
