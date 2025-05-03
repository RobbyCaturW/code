import { Sticker, StickerTypes } from 'wa-sticker-formatter'
let handler = m => m
handler.all = async function (m) {
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let prem = global.prems[m.sender]
  let own = global.owner.map(v => v + '@s.whatsapp.net')
  if (!user.banned && !chat.isBanned && chat.autosticker && !m.fromMe && !m.isBaileys) {
    if (!(prem.includes(m.sender) || own.includes(m.sender))) return
    if (m.text) return
    let q = m
    let mime = (q.msg || q).mimetype || ''
    if (/(image\/jpe?g|png)/i.test(mime)) {
      let image = await q.download()
      let sticker = new Sticker(image, {
          pack: packname,
          author: author,
          type: StickerTypes.FULL,
          categories: ['🤩', '🎉'],
          id: '12345',
          quality: 50,
          background: {
            r: 100,
            g: 100,
            b: 100,
            alpha: 0
          }
        })
  conn.sendMessage(m.chat, await sticker.toMessage(), { quoted: m })
      }
    }
}
export default handler