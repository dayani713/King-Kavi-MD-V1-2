const { cmd, commands } = require('../command');

cmd({
    pattern: "alive",
    desc: "Check if the bot is online.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv();
        
        // Check if the necessary config values are loaded properly
        if (!config.ALIVE_IMG || !config.ALIVE_MSG) {
            console.log('Config values are missing!');
            return reply('Error: Missing configuration values!');
        }

        console.log('Sending alive message...');
        await robin.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: config.ALIVE_MSG
        }, { quoted: mek });
    } catch (e) {
        console.log('Error:', e);
        reply(`An error occurred: ${e.message || e}`);
    }
});
