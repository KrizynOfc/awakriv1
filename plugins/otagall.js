let handler = async (m, { conn, text, participants }) => {
    let users = participants.map(u => u.jid)
    m.reply(`${text ? `${text}\n` : ''}╭─֍ 〔 TᗩGᗩᒪᒪ 〕\n` + users.map(v => '┃ ⬣ @' + v.replace(/@.+/, '')).join`\n` + '\n╰────֍', null, {
        contextInfo: { mentionedJid: users }
    })
}

handler.help = ['otagall']
handler.tags = ['owner']
handler.command = ['otagall']

handler.owner = true

module.exports = handler
