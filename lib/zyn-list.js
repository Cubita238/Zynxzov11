const chalk = require('chalk')
const fs = require('fs')

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
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.menuddos = (prefix) => {
return ctext(`┏──⟬ \`𝗗𝗗𝗢𝗦 𝗠𝗘𝗡𝗨\` ⟭
││ᯤ ${prefix}ddos
││ᯤ ${prefix}checkhost
┗────────────────┛`)}

global.menuvirus = (prefix) => {
return ctext(`┏──⟬ \`𝗡𝗨𝗠𝗕𝗘𝗥\` ⟭
││ᯤ ${prefix}paktzy <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}zero <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}zynxz <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}zets <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}blank <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}zetsub <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}xkill <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}attack <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}vip <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}infinity <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}viospc <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}killandro <𝗻𝘂𝗺𝗯𝗲𝗿>
││ᯤ ${prefix}lockotp <𝗻𝘂𝗺𝗯𝗲𝗿>
││
││  ⟬ \`𝗔𝗠𝗢𝗨𝗡𝗧\` ⟭
││ᯤ ${prefix}x <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱> 
││ᯤ ${prefix}vpay <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}zerobug <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}zap <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}loxas <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}bugcomunity <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}convite <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}rosapay <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}convite-nova <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}crashgp <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││ᯤ ${prefix}locimg <𝗻𝘂𝗺𝗯𝗲𝗿,𝟱>
││
││  ⟬ \`𝗖𝗥𝗔𝗦𝗛 𝗚𝗖\` ⟭
││ᯤ ${prefix}xzyngc <𝗶𝗱𝗴𝗰> 
││ᯤ ${prefix}zyngc <𝗶𝗱𝗴𝗰>
││ᯤ ${prefix}zyngc+ <𝗶𝗱𝗴𝗰>
┗───────────────┛`)}

global.menuai = (prefix) => {
return ctext(`┏──⟬ \`𝗔𝗜 𝗠𝗘𝗡𝗨\` ⟭
││ᯤ ${prefix}ai
││ᯤ ${prefix}miku
││ᯤ ${prefix}luffy
││ᯤ ${prefix}openai
││ᯤ ${prefix}chatgpt
││ᯤ ${prefix}simi
││ᯤ ${prefix}text2img
││ᯤ ${prefix}blackbox
││ᯤ ${prefix}gemini
┗───────────────┛`)}

global.menudatabase = (prefix) => {
return ctext(`┏──⟬ \`𝗗𝗔𝗧𝗔 𝗕𝗔𝗦𝗘\` ⟭
││ᯤ ${prefix}resetlimit
││ᯤ ${prefix}addlimit
││ᯤ ${prefix}pushkontak
││ᯤ ${prefix}pushkontak2
││ᯤ ${prefix}getidgc
││ᯤ ${prefix}join
││ᯤ ${prefix}leave
││ᯤ ${prefix}addgc
││ᯤ ${prefix}delgc
││ᯤ ${prefix}backup
││ᯤ ${prefix}getcase
││ᯤ ${prefix}autoread
││ᯤ ${prefix}autobio
││ᯤ ${prefix}public
││ᯤ ${prefix}self
││ᯤ ${prefix}addprem
││ᯤ ${prefix}listprem
││ᯤ ${prefix}bcgroup
││ᯤ ${prefix}restart
││ᯤ ${prefix}addcase
││ᯤ ${prefix}delcase
┗───────────────┛`)}

global.menufun = (prefix) => {
return ctext(`┏──⟬ \`𝗙𝗨𝗡 𝗠𝗘𝗡𝗨\` ⟭
││ᯤ ${prefix}kill
││ᯤ ${prefix}pat
││ᯤ ${prefix}lick
││ᯤ ${prefix}kiss
││ᯤ ${prefix}yeet
││ᯤ ${prefix}bonk
││ᯤ ${prefix}wink
││ᯤ ${prefix}poke
││ᯤ ${prefix}nom
││ᯤ ${prefix}slap
││ᯤ ${prefix}smile
││ᯤ ${prefix}wave
││ᯤ ${prefix}blush
││ᯤ ${prefix}smugh
││ᯤ ${prefix}glomp
││ᯤ ${prefix}happy
││ᯤ ${prefix}dance
││ᯤ ${prefix}cringe
││ᯤ ${prefix}highfive
││ᯤ ${prefix}handhold
││ᯤ ${prefix}waifu
││ᯤ ${prefix}neko
││ᯤ ${prefix}apakah
││ᯤ ${prefix}kapankah
││ᯤ ${prefix}bisakah
││ᯤ ${prefix}bagaimanakah
││ᯤ ${prefix}rate
││ᯤ ${prefix}gantengcek
││ᯤ ${prefix}cantikcek
││ᯤ ${prefix}gaycek
││ᯤ ${prefix}sangecek
┗───────────────┛`)}

global.menugroup = (prefix) => {
return ctext(`┏──⟬ \`𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗛\` ⟭
││ᯤ ${prefix}antilink
││ᯤ ${prefix}welcome
││ᯤ ${prefix}gc close/open
││ᯤ ${prefix}getcontact
││ᯤ ${prefix}tagall
││ᯤ ${prefix}hidetag
││ᯤ ${prefix}kick
││ᯤ ${prefix}add
││ᯤ ${prefix}linkgc
││ᯤ ${prefix}resetlinkgc
││ᯤ ${prefix}totag
││ᯤ ${prefix}promote
││ᯤ ${prefix}demote
┗───────────────┛`)}

global.menusearch = (prefix) => {
return ctext(`┏──⟬ \`𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨\` ⟭
││ᯤ ${prefix}pin
││ᯤ ${prefix}spotify
││ᯤ ${prefix}play
┗───────────────┛`)}

global.menutools = (prefix) => {
return ctext(`┏──⟬ \`𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨\` ⟭
││ᯤ ${prefix}ytmp4
││ᯤ ${prefix}ytmp3
││ᯤ ${prefix}tiktok
││ᯤ ${prefix}instagram
││ᯤ ${prefix}spotify
││ᯤ ${prefix}clonebot
││ᯤ ${prefix}hd
││ᯤ ${prefix}toimg
││ᯤ ${prefix}toaud
││ᯤ ${prefix}tomp3
││ᯤ ${prefix}tovn
││ᯤ ${prefix}tourl
││ᯤ ${prefix}shortlink
││ᯤ ${prefix}sticker
││ᯤ ${prefix}qc
││ᯤ ${prefix}smeme
││ᯤ ${prefix}wm
││ᯤ ${prefix}lirik
││ᯤ ${prefix}gitclone
┗───────────────┛`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})