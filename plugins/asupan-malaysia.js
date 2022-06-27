let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendFile(m.chat, api-hyzer, null, 'Nih', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i

module.exports = handler
