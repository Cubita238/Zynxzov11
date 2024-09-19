const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const version = require("@whiskeysockets/baileys/package.json").version 
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const zynz = packageJson.version

const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};




global.baileysVersion = `${version}`
global.baileys = require('@whiskeysockets/baileys') // Jangan di ubah
global.usePairingCode = true // false = qrCode, true = pairingCode
global.sessionName = 'Zʏɴxᴢᴏ' // Jangan di ubah
global.sp = '⭔' // Jangan di ubah
global.gris = '`' // Jangan di ubah
global.hiasan = `	◦  ` // Jangan di ubah
global.wlcm = [] // Jangan di ubah
global.wlcmm = [] // Jangan di ubah
global.wm = `© 2016 • Zʏɴxᴢᴏ` // footer text
global.autobio = false // false = off, true = on
global.autoread = true // false = off, true = on
global.chatgpt = true // false = off, true = on

//—————「 BOT 」—————//
global.saluran = 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L' // Opsional 
global.idsal = "@newsletter" // Jangan Di ubah
global.botname = 'Zʏɴxᴢᴏ' // Ini nama bot
global.bottz = '6285789034010' // Ganti dengan nomor bot untuk mendapatkan code pairing 
global.packname = '6285789034010' // wm sticker
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nCreator: Zʏɴxᴢᴏ \nBot: 0857-8903-4010` // wm sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.versions = `${zynz}`
global.ownername = 'Zʏɴxᴢᴏ' // Ubah jadi nama lu
global.owner = ['6285789034010'] // Jangan ubah no lu
global.ownermail = ['ZynxzXx99@gmail.com'] // Opsional

//—————「 REPLY 」—————//
global.mess = {
    ban: ctext('*[ System Access Failed ]* you are banned by the owner'),
    badm: ctext('*[ System Notice ]* please add bot *admin*'),
    regis: ctext(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur*`),
    premium: ctext('*[ System Notice ]* this only premium user'),
    search: ctext('🔍 *Search for server. . .*'),
    done: ctext('Done Ga Bang?? Done...'),
    success: ctext('*[ Loaded Success ]*'),
    admin: ctext('*[ System Notice ]* for *admin!* not *npc*'),
    owner: ctext('*[ System Access Failed ]* Access Denied'),
    group: ctext('*[ System Notice ]* Use this in group chat!'),
    private: ctext('*[ System Notice ]* Use this in private chat!'),
    bot: ctext('*[ System Notice ]* Only Bot user'),
    wait: ctext('*[ Loading ]* Please Wait'),
    getdata: ctext('Scraping metadata . . .'),
    fail: ctext('Can\'t get metadata!'),
    error: ctext('*[ System Failed ]* Error, please contact the owner'),
    errorF: ctext('*[ System Failed ]* Sorry this feature is in error.'),
}

global.limitawal = {
    premium: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})