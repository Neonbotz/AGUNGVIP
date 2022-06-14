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
  "text": '*Pa Pe Pa Pe Salam Kntl!!*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/bdb399f8c15149e05011c.png',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/bdb399f8c15149e05011c.png', hyzer, { packname: "sticker by", author: "Agungx" })
}

handler.customPrefix = /^(pe|p|pp)$/i
handler.command = new RegExp

module.exports = handler