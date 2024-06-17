const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true, 
    run: async(client) => {
        console.log(`${client.user.tag} Aktif!`);
        client.user.setPresence({
            activities: [{ name: "SeaDevils TEAM ", type: ActivityType.Watching }],
            status: 'idle',
        });
    }
};