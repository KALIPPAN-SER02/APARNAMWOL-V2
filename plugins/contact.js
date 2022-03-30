const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:KALIPPANSER [OWNER]\n' // full name
            + 'ORG:MIDHUN;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=918281370024:+91 8281370025\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "KALIPPANSER [OWNER]", vcard: vcard}, MessageType.contact)
}))
