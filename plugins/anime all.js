let handler = async (m, { conn, command }) => {
let nyenye = `https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=apirey`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', 'Next', `.${command}`, m) 
}
handler.help = ['gawrgura', 'akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'cosplay']
handler.tags = ['anime']
handler.command = /^(gawrgura|akira|akiyama|anna|asuna|ayuzawa|boruto|chiho|chitoge|deidara|erza|elaina|eba|emilia|hestia|hinata|inori|isuzu|itachi|itori|kaga|kagura|kaori|keneki|kotori|kurumi|madara|mikasa|miku|minato|naruto|nezuko|sagiri|sasuke|sakura|cosplay)$/i
//buatan hyzer, jgn hapus 🗿
module.exports = handler
