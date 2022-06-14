let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Iya Ada Apa Kak??*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/1755118f49c389df5437a.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/1755118f49c389df5437a.jpg', hyzer, { packname: "sticker by", author: "Agungx" })
}

handler.customPrefix = /^(oi|bot|botz|sachi|chi|gung)$/i
handler.command = new RegExp

module.exports = handler