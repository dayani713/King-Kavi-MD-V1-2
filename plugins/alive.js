const { cmd } = require('../command');
const { readEnv } = require('../config'); // Assuming readEnv function is in config.js

cmd({
    pattern: "alive",
    desc: "Check if the bot is online.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv(); // Assuming readEnv returns a config object

        // Check if ALIVE_IMG or ALIVE_MSG is missing from the config
        if (!config.ALIVE_IMG || !config.ALIVE_MSG) {
            return reply('ALIVE_IMG or ALIVE_MSG is not defined in the environment file.');
        }

        // Send message with image and caption
        await robin.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: config.ALIVE_MSG,
        }, { quoted: mek });

    } catch (error) {
        console.error('Error in alive command:', error); // Log the error to the console
        reply(`Error: ${error.message}`); // Respond to the user with the error message
    }
});
