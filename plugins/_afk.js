const bg = "https://telegra.ph/file/e5847d1c9df8caa6bc6b7.mp4"
let handler = m => m
handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        this.sendButtonImg(m.chat, bg, `
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${this.clockString(new Date - user.afk)}
`.trim(), wm, `Menu`, `.menu`, m)
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user) continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        this.sendButtonImg(m.chat, bg, `
Jangan tag dia YA SAYANG 💕!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${this.clockString(new Date - afkTime)}
`.trim(), wm, 'Menu', '.menu', m)
    }
    return true
}

module.exports = handler
