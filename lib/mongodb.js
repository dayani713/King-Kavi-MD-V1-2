const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.imghippo.com/files/SsK8429jRI.jpg' },
    { key: 'ALIVE_MSG', value: 'Hello ,🔹 *KingKavi-MD is Online!*  🔹\n\n 👑 *Bot Name:* KingKavi-MD  ⚡\n*Status:* Online & Active\n  🚀 *Features:* Fun, Info, Admin Commands & More!\n 📢 *Prefix:* . (dot)\n  💡 *Type .menu to see available commands*\n 🔥 Stay connected & enjoy smart automation! 🔥\n\n 💬 *Need help? Contact the Owner!*' },
    { key: 'PREFIX', value: '.' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
