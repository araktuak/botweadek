import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let jsn = await fetch(`https://api.tiodevhost.my.id/api/randomgambar/couplepp`)
let json = await jsn.json()
conn.sendButton(m.chat, 'πΆππππ', wm, json.result.female,[['π Next π', `/${command}`]], m)
conn.sendButton(m.chat, 'π±ππ’π', wm, json.result.male, [['π Next π', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['anime']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
// β’RECODE BY ZYKO-MD
