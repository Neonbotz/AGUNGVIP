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
  "text": '*Berantem Anjg??😏*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/19e0886ab612a0074f5c6.png',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/19e0886ab612a0074f5c6.png', hyzer, { packname: "sticker by", author: "Agungx" })
}

handler.customPrefix = /^(ajg|anj|bgst|bangsat|kontol|memek|memeg|kntol|ngentod|ngtd|asu|asw)$/i
handler.command = new RegExp

module.exports = handler