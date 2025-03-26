const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `╔══❖•ೋ° °ೋ•❖══╗
🔥 ${pushname} 𝕄𝔼ℕ𝕌  🔥
╚══❖•ೋ° °ೋ•❖══╝*


╭━━━〔 ⚡ 𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ⚡ 〕━━━╮
┃ 🟢 .alive — 𝗖𝗵𝗲𝗰𝗸 𝗕𝗼𝘁 𝗦𝘁𝗮𝘁𝘂𝘀
┃ 🟢 .menu — 𝗢𝗽𝗲𝗻 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂
┃ 🟢 .ai <text> — 𝗔𝗦𝗞 𝗔𝗜 𝗮𝗻𝘆𝘁𝗵𝗶𝗻𝗴
┃ 🟢 .system — 𝗦𝘆𝘀𝘁𝗲𝗺 𝗜𝗻𝗳𝗼
┃ 🟢 .owner — 𝗦𝗵𝗼𝘄 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿
╰━━━━━━━━━━━━━━━━━━━╯


╭━━━〔 🎶 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🎶 〕━━━╮
┃ 🔻 .song <text> — 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗦𝗼𝗻𝗴
┃ 🔻 .video <text> — 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗩𝗶𝗱𝗲𝗼
┃ 🔻 .fb <link> — 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗩𝗶𝗱𝗲𝗼
╰━━━━━━━━━━━━━━━━━━━╯


╭━━━〔 👑 𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 👑 〕━━━╮
┃ 🔥 .restart — 𝗥𝗲𝘀𝘁𝗮𝗿𝘁 𝗕𝗼𝘁
┃ 🔥 .update — 𝗨𝗽𝗱𝗮𝘁𝗲 𝗕𝗼𝘁
╰━━━━━━━━━━━━━━━━━━━╯


╭━━━〔 🛠 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🛠 〕━━━╮
┃ 🔄 .sticker <reply img> — 𝗜𝗺𝗮𝗴𝗲 ➝ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃ 🔄 .img <reply sticker> — 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 ➝ 𝗜𝗺𝗮𝗴𝗲
┃ 🔄 .tr <lang> <text> — 𝗧𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗲 𝗧𝗲𝘅𝘁
┃ 🔄 .tts <text> — 𝗧𝗲𝘅𝘁 𝗧𝗼 𝗦𝗽𝗲𝗲𝗰𝗵
╰━━━━━━━━━━━━━━━━━━━╯


🔥 𝑴𝒂𝒅𝒆 𝒃𝒚 𝐊𝐢𝐧𝐠𝐊𝐚𝐯𝐢-𝐌𝐃 🔥

> KingKavi-MD MENU MSG 😶‍🌫️
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://i.imghippo.com/files/RwHO8114gqs.webp",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
