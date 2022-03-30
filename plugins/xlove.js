const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://www.linkpicture.com/q/IMG-20220330-WA0028.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: APARNAMWOL-V2r*

*Creator number : wa.me/918281370025?text=Hi%20Kalippan%20ser.%20*

 *To check update .update   To update Bot .update now*

 *Bot making video : https://youtube.com/channel/UC0yNrBziB3u2hzvXzJ4NnTA*
     
 *Instagram id: https://www.instagram.com/_midhun_x3__*

 *Yt_PASSWORD: _________(password on this video watch it full)*

 *githublink : https://github.com/KALIPPAN-SER02/APARNAMWOL-V2*

 *Aparna New Acoount Git Link Old Account Is Flagged Hope you Enjoy This Thanku 🥰*
`}) 

}));
