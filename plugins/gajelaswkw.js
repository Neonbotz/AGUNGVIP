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
  "text": '*AwokAwokwok😏*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/50e1af32c33672ebe2697.mp4',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/50e1af32c33672ebe2697.mp4', hyzer, { packname: "sticker by", author: "Agungx" })
}

handler.customPrefix = /^(awokawok|wkwk|awokawokwok)$/i
handler.command = new RegExp

module.exports = handler