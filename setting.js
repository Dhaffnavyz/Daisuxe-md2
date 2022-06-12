/*=====================================================================
=========== Copyright By Dhaff Official=========================

________________________¶¶
_______________________¶__¶
_______________________¶___¶
_______________________¶____¶
_________¶¶¶¶¶_________¶____¶
_________¶__¶¶¶¶¶¶_____¶____¶
_________¶____¶¶__¶¶___¶____¶___¶¶
__________¶_____¶¶__¶¶_¶____¶¶¶¶¶¶¶
___________¶______¶¶__¶_¶¶¶¶____¶¶¶
¶¶¶_________¶¶______¶__¶¶__________¶¶
¶__¶__________¶¶¶____¶¶________¶¶¶¶¶¶¶
¶___¶__________¶¶¶¶_______________¶
¶__¶_____________¶________¶_¶¶¶___¶
_¶_¶_____________¶_______¶_¶_¶¶___¶
_¶¶______________¶_________¶_¶¶___¶
_¶_¶_____________¶_________¶¶¶_____¶¶¶
_¶_¶_____________¶__¶__________¶¶____¶
_¶_¶______________¶___¶________¶_¶¶__¶
_¶__¶_____________¶____¶¶_______¶¶¶¶¶
__¶__¶¶¶¶¶¶¶¶____¶¶______¶¶¶¶¶¶¶¶¶¶¶
___¶_________¶¶¶¶¶¶________¶
__¶________________________¶
__¶________________________¶
__¶________________________¶
___¶________¶_________¶¶___¶
____¶_______¶___¶______¶__¶¶¶¶¶¶
__¶¶_______¶____¶______¶¶¶_____¶
_¶______¶¶¶¶¶¶¶_¶_____¶¶¶¶¶¶¶___¶
__¶___¶¶__¶__¶_¶¶¶___¶______¶__¶
___¶__¶____¶__¶__¶__¶____¶¶¶__¶
____¶__¶____¶__¶ ¶__¶___¶¶__¶¶
____¶__¶_____¶¶¶¶¶__¶___¶¶¶¶
____¶¶¶¶______¶¶¶¶__¶
____¶¶¶¶__________¶__¶
___________________¶¶¶¶
___________________¶¶¶¶
   ########## Jangan Lupa Follow Github Developer https://github.com/Dhaffnavyz

================BASE BY DHAFF OFFICIAL=BASE ORI_-> https://github.com/Dhaffnavyz/originzbot

######## YouTube Developer https://youtube.com/chanell/dhaff+Official/
======================================================================================
      ================================*/

const fs = require('fs')
const chalk = require('chalk')

// Ga usah di ubah" dah free apikey
global.APIs = {
	web: 'https://revita.herokuapp.com',
	free: 'https://api-invibot.herokuapp.com',
	dhafx: 'https://naknolep-apis.herokuapp.com',
	lol: 'https://api.lolhuman.xyz',
}

// Ga usah di ubah" dah free apikey
global.APIKeys = {
	'https://revita.herokuapp.com': 'ApiRevita',
	'https://api-invibot.herokuapp.com': 'APIKEY',
	'https://naknolep-apis.herokuapp.com': 'Dhaffnolep',
	'https://api.lolhuman.xyz': 'Atakbotz',
}

// Other
global.ownerr = ['6283824417034']
global.premium = ['6283824417034','6285797226828']
global.owner = ['6283824417034','6285797226828']
global.packname = 'DAISUXE-BOT-MD'
global.author = 'WhatsApp Bot'
global.bot = 'DAISUXE-BOT-MD'
global.rev = 'ApiRevita'
global.lolkey = 'Atakbotz'
global.invi = 'APIKEY'
global.dhafxey = 'Dhaffnolep'
global.zen = 'BagasPrdn'
global.ownmy = 'Dhaff Official'
global.sessionName = 'Dhaffsesi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.bisa = 'Nih Ngab 々'
global.sp = '⭔'
global.copy = 'Dhaff Official'
global.punya = 'Dhafa Nazula P'
global.wet = '*「 WAIT DONT SPAM 」*'
global.man = {
kus: '*「 FITUR KHUSUS OWNER 」*',
dir: '*「 HANYA BISA DI GUNAKAN DI PRIVATE CHAT 」*',
wet: '*「 WAIT DONT SPAM 」*',
bomin: '*「 BOT HARUS JADI ADMIN 」*',
gcwa: '*「 GROUP ONLY JOIN HERE 」: https://chat.whatsapp.com/HbRqzD6M4cgAAGKjGedHlv*',
ami: '*「 KHUSUS ADMIN GC 」*',
}
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 1,
}
global.thumb = fs.readFileSync('./galery/image/Dhaff.jpg')
global.daixsu = fs.readFileSync('./galery/video/menu.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

//cuma pajangan 🗿
global.terr = `Ini Adalah Bot Baileys Multi Device, Dan Gua Juga Masih Pemula 😅 Jadi Wajar Kalo Tampilan Nya Jelek Dan Masih Ada Yang Eror`
global.sn = `Jangan Sange Ama Gambar Ya 🗿 Hemm Lemah Sange Kok Sama Kartun🤣`


//menu bot
global.menu = `apa sih`
global.ter = `generate random image`

//donasi
global.nasi = `
▛▀▀▀▀▀▀▀▀▀
▌  😇 *D O N A S I
▌╓───
▌╟ ❯▁ *Mau Donasi Apa Liat Doang Bang ?*
▌╟ ❯▁ Eh gua ga punya apk dana/gopay dll :v
▌╟ ❯▁ kalo pulsa boleh lah buat beli kuota 🗿
▌╟ ❯▁ pulsa: 083824417034
▌╚════════
▙▃▃▃▃▃▃▃▃⌜ *${bot}* ⌟▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  💸 *S E W A - B O T*
▌╓───
▌╟ ❯▁ list Harga =
▌╟ ❯▁ permanen = 7k
▌╟ ❯▁ keuntungan: 
▌╟ ❯▁ bot bisa di taruh di gc lu
▌╟ ❯▁ bisa menggunakan semua fitur-fitur bot
▌╚════════
▙▃▃▃▃▃▃▃▃⌜ *${bot}* ⌟▃▃▃▃`

//script

global.sc = `
▛▀▀▀▀▀▀▀▀▀
▌  📄 *S C R I P T*
▌╓───
▌╟ ❯▁ *Base Ori By Dhaff Officialt*
▌╟ ❯▁ sc: https://www.github.com/dhaffnavyz/Base-bot
▌╟ ❯▁ *Developer Dhaff Official*
▌╟ ❯▁ github: https://www.github.com/dhaffnavy
▌╚════════
▙▃▃▃▃▃▃▃▃⌜ *${bot}* ⌟▃▃▃▃`

global.rulles = '```Mohon Di Patuhi Peraturan Ini Terma Kasih 🙏```'