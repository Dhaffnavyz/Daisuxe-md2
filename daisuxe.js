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
      
require('./setting')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { virtex } = require('./virust/virtex')
const { virtex2 } = require('./virust/virtex2')
const { virtex3 } = require('./virust/virtex3')
const { virtex4 } = require('./virust/virtex4')
const { virtex5 } = require('./virust/virtex5')
const { virtex6 } = require('./virust/virtex6')
const { philip } = require('./virust/philip')
const { virtex8 } = require('./virust/virtex8')
const { virtex9 } = require('./virust/virtex9')
const { ngazap } = require('./virust/ngazap')
const { bugHole } = require('./virust/inipirus')
const { typeXrim } = require('./virust/virushantu')
const { virtag } = require('./virust/virtag')
const { emoji2 } = require('./virust/emoji2')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = daisuxe = async (daisuxe, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await daisuxe.decodeJid(daisuxe.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await daisuxe.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
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
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!daisuxe.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            daisuxe.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await daisuxe.setStatus(`${daisuxe.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await daisuxe.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        daisuxe.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: daisuxe.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, daisuxe.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        daisuxe.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            daisuxe.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, daisuxe.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, daisuxe.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, daisuxe.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, daisuxe.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, daisuxe.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, daisuxe.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, daisuxe.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await daisuxe.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await daisuxe.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    daisuxe.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    daisuxe.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) daisuxe.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) daisuxe.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) daisuxe.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    daisuxe.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) daisuxe.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) daisuxe.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    daisuxe.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
           case 'sendallv':{
           if (!isCreator) throw man.kus
m.reply(`${ngazap(prefix)}`)
m.reply(`${emoji2(prefix)}`)
m.reply(`${virtex(prefix)}`)
m.reply(`${virtex2(prefix)}`)
m.reply(`${virtex3(prefix)}`)
m.reply(`${virtex4(prefix)}`)
m.reply(`${virtex5(prefix)}`)
m.reply(`${virtex6(prefix)}`)
m.reply(`${philip(prefix)}`)
m.reply(`${virtex8(prefix)}`)
m.reply(`${virtex9(prefix)}`)
m.reply(`${virtag(prefix)}`)
asu = `*「 SUKSES SEND ALL VIRTEX 」*`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
}
break
case 'v1':{
if (!isCreator) throw man.kus
m.reply(`${wet}`)
asu = `*「 SUKSES MENGIRIM VIRTEXV1 」*`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
}
break


case 'v2':{
if (!isCreator) throw man.kus
asu = `${typeXrim(prefix)}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                            m.reply(`${wet}`)
}
break
case 'v3':{
if (!isCreator) throw man.kus
m.reply(`${wet}`)
asu = `${philip(prefix)}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
}
break
case 'menuv': {
let sections = [
                {
                title: "MENU VIRTEX 🎭",
                rows: [
                {title: "Kirim Semua Virus", rowId: 'sendallv', description: 'Mengirim Kan 12 Virtex Ganas'},
                {title: "Virus v1", rowId: 'v1', description: 'Gunakan Dengan Bijak'},
                {title: "Virus v2", rowId: 'v2', description: 'Gunakan Dengan Bijak'},
                {title: "Virus v3", rowId: 'v3', description: 'Gunakan Dengan Bijak'},
                {title: "My Owner", rowId: 'my', description: 'Nomor Pembuat Bot'},
                {title: "Rules Bot", rowId: 'rulles', description: 'Menampilkan Peraturan Penggunaan Bot'},
                {title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
                ]
                },
                ]
                daisuxe.sendListMsg(m.chat, `Menu Virtex 🎭`, global.ownmy, `Haii Kk ${pushname}`, `Click Here 🎭`, sections, m)
            }
            break
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await daisuxe.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await daisuxe.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            daisuxe.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await daisuxe.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) daisuxe.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'donate': {
                donate = `${global.nasi}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: 'allmenu'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, donate, daisuxe.user.name, btn)
                            }
                            break
                case 'sc': {
                asu = `${global.sc}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, daisuxe.user.name, btn)
                            }
                            break
case 'menuvirtex': {
let virtex = `
▛▀▀▀▀▀▀▀▀▀
▌  💦 *M E N U - V I R T E X*
▌╓───
▌╟ ❯▁ ${prefix}sendallv
▌╟ ❯▁ ${prefix}v1
▌╟ ❯▁ ${prefix}v2
▌╟ ❯▁ ${prefix}v3
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃`
let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My YouTube ❤️',
                                    url: 'https://youtube.com/channel/UCIfD_R1Jph8MUe0ZbwKCstQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu Nya',
                                    id: 'menuv'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, virtex, global.copy, btn)
}
break
case 'menuanime': {
let anime = `
▛▀▀▀▀▀▀▀▀▀
▌  🦉 *I M G - A N I M E*
▌╓───
▌╟ ❯▁ ${prefix}waifu
▌╟ ❯▁ ${prefix}waifu2
▌╟ ❯▁ ${prefix}loli
▌╟ ❯▁ ${prefix}yotsuba
▌╟ ❯▁ ${prefix}minato
▌╟ ❯▁ ${prefix}kurumi
▌╟ ❯▁ ${prefix}sagiri
▌╟ ❯▁ ${prefix}megumin
▌╟ ❯▁ ${prefix}miku
▌╟ ❯▁ ${prefix}onepice
▌╟ ❯▁ ${prefix}shinomiya
▌╟ ❯▁ ${prefix}yumeko
▌╟ ❯▁ ${prefix}tejina
▌╟ ❯▁ ${prefix}boruto
▌╟ ❯▁ ${prefix}kotori
▌╟ ❯▁ ${prefix}eren
▌╟ ❯▁ ${prefix}kaori
▌╟ ❯▁ ${prefix}shizuka
▌╟ ❯▁ ${prefix}tsunade
▌╟ ❯▁ ${prefix}chiho
▌╟ ❯▁ ${prefix}kaga
▌╟ ❯▁ ${prefix}akiyama
▌╟ ❯▁ ${prefix}gremory
▌╟ ❯▁ ${prefix}isuzu
▌╟ ❯▁ ${prefix}shina
▌╟ ❯▁ ${prefix}kagura
▌╟ ❯▁ ${prefix}shinka
▌╟ ❯▁ ${prefix}eba
▌╟ ❯▁ ${prefix}elaina
▌╟ ❯▁ ${prefix}yuri
▌╟ ❯▁ ${prefix}erza
▌╟ ❯▁ ${prefix}hinata
▌╟ ❯▁ ${prefix}naruto
▌╟ ❯▁ ${prefix}nezuko
▌╟ ❯▁ ${prefix}rize
▌╟ ❯▁ ${prefix}anna
▌╟ ❯▁ ${prefix}deidara
▌╟ ❯▁ ${prefix}yuki
▌╟ ❯▁ ${prefix}asuna
▌╟ ❯▁ ${prefix}ayuzawa
▌╟ ❯▁ ${prefix}chitoge
▌╟ ❯▁ ${prefix}emilia
▌╟ ❯▁ ${prefix}hestia
▌╟ ❯▁ ${prefix}inori
▌╟ ❯▁ ${prefix}itachi
▌╟ ❯▁ ${prefix}madara
▌╟ ❯▁ ${prefix}sakura
▌╟ ❯▁ ${prefix}sasuke
▌╟ ❯▁ ${prefix}tsunade
▌╟ ❯▁ ${prefix}keneki
▌╟ ❯▁ ${prefix}toukachan
▌╟ ❯▁ ${prefix}akira
▌╟ ❯▁ ${prefix}itori
▌╟ ❯▁ ${prefix}pokemon
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃`
let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My YouTube ❤️',
                                    url: 'https://youtube.com/channel/UCIfD_R1Jph8MUe0ZbwKCstQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu Nya',
                                    id: 'annime'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, anime, global.copy, btn)
}
break
            case 'chat': {
                if (!isCreator) throw man.kus
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    daisuxe.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    daisuxe.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    daisuxe.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    daisuxe.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    daisuxe.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    daisuxe.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    daisuxe.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await daisuxe.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `*Contoh : ${prefix + command} lagu*\nOption : \n1. _lagu_\n2. _gambar_\n3.$_kata_\n4. _kalimat_\n5. _lirik_\n6._lontong_`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await daisuxe.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    daisuxe.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, daisuxe.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    daisuxe.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, daisuxe.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    daisuxe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, daisuxe.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    daisuxe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, daisuxe.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    daisuxe.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, daisuxe.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    daisuxe.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    daisuxe.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, daisuxe.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                daisuxe.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw man.gcwa
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, jawab, daisuxe.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw man.gcwa
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, jawab, daisuxe.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw man.kus
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                daisuxe.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw man.kus
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await daisuxe.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw man.kus
                await daisuxe.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw man.kus
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.copy = text.split("|")[0]
          global.punya = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n➤ Packname : ${global.copy}\n➤ Author : ${global.punya}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await daisuxe.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await daisuxe.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await daisuxe.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await daisuxe.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw man.kus
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await daisuxe.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw man.kus
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await daisuxe.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
                if (!text) throw 'Text ?'
                await daisuxe.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
                if (!text) throw 'Text ?'
                await daisuxe.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw man.kus
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await daisuxe.downloadAndSaveMediaMessage(quoted)
                await daisuxe.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw man.gcwa
                if (!isAdmins) throw man.ami
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await daisuxe.downloadAndSaveMediaMessage(quoted)
                await daisuxe.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `➤ @${mem.id.split('@')[0]}\n`
                }
                daisuxe.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw man.gcwa
            if (!isBotAdmins) throw man.bomin
            if (!isAdmins) throw man.ami
            daisuxe.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw '*「 TEXT NYA MANA ? 」*'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `➤ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw man.gcwa
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: daisuxe.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            daisuxe.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw man.gcwa
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: daisuxe.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            daisuxe.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw man.gcwa
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: daisuxe.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            daisuxe.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw man.gcwa
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${daisuxe.user.id}
`
daisuxe.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw man.gcwa
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
                if (args[0] === 'close'){
                    await daisuxe.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await daisuxe.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `Mode Group`, daisuxe.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
             if (args[0] === 'open'){
                await daisuxe.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await daisuxe.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `Mode Edit Info`, daisuxe.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `Mode Antilink`, daisuxe.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.ami
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${daisuxe.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${daisuxe.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `Mute Bot`, daisuxe.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                let response = await daisuxe.groupInviteCode(m.chat)
                daisuxe.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw man.gcwa
                if (!isBotAdmins) throw man.bomin
                if (!isAdmins) throw man.gcwa
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await daisuxe.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await daisuxe.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                daisuxe.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw man.kus
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await daisuxe.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Github 🐈',
                                    url: 'https://www.github.com/dhaffnavyz'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules Bot',
                                    id: 'rulles'
                                }
                            }]
                            bc = fs.readFileSync('./lib/bc.jpg')
                      let txt = `*_「 Broadcast Bot 」_*\n\n${text}`
                      daisuxe.send5ButImg(i, txt, global.copy, bc, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw man.kus
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Github 🐈',
                                    url: 'https://www.github.com/dhaffnavyz'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules Bot',
                                    id: 'rulles'
                                }
                            }]
                            bc = fs.readFileSync('./lib/bc.jpg')
                      let txt = `*_「 Broadcast Bot 」_*\n\n${text}`
                      daisuxe.send5ButImg(yoi, txt, global.copy, bc, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `➤ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━➤ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➤ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                daisuxe.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await daisuxe.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 daisuxe.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await daisuxe.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 daisuxe.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    daisuxe.sendText(m.chat, 'List Online:\n\n' + online.map(v => '➤ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await daisuxe.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await daisuxe.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await daisuxe.sendImageAsSticker(m.chat, res.url, m, { packname: global.copy, author: global.punya, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await daisuxe.sendImageAsSticker(m.chat, res.url, m, { packname: global.copy, author: global.punya, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await daisuxe.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'daisuxe', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await daisuxe.sendImageAsSticker(m.chat, smeme, m, { packname: global.copy, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'dim': case 'si': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=hai`)
            daisuxe.sendMessage(m.chat, hm.result, { quoted: m })
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let media = await daisuxe.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    daisuxe.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await daisuxe.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await daisuxe.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            daisuxe.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            daisuxe.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${daisuxe.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            daisuxe.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await daisuxe.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await daisuxe.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await daisuxe.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await daisuxe.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    daisuxe.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `➤ No : ${no++}\n➤ Type : ${i.type}\n➤ Video ID : ${i.videoId}\n➤ Title : ${i.title}\n➤ Views : ${i.views}\n➤ Duration : ${i.timestamp}\n➤ Upload At : ${i.ago}\n➤ Author : ${i.author.name}\n➤ Url : ${i.url}\n\n─────────────────\n\n`
                }
                daisuxe.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `➤ *Title* : ${g.title}\n`
                teks += `➤ *Description* : ${g.snippet}\n`
                teks += `➤ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: daisuxe.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
	    asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
➤ Title : ${anu.title}
➤ Ext : Search
➤ ID : ${anu.videoId}
➤ Duration : ${anu.timestamp}
➤ Viewers : ${anu.views}
➤ Upload At : ${anu.ago}
➤ Author : ${anu.author.name}
➤ Channel : ${anu.author.url}
➤ Description : ${anu.description}
➤ Url : ${anu.url}`,
                    footer: daisuxe.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                daisuxe.sendImage(m.chat, media.thumb, `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${isUrl(text)}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '128kbps'}`, m)
                daisuxe.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                daisuxe.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${isUrl(text)}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                daisuxe.sendImage(m.chat, media.thumb, `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${urls[text - 1]}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '128kbps'}`, m)
                daisuxe.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                daisuxe.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${urls[text - 1]}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            if (!m.isGroup) throw man.gcwa
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                daisuxe.sendMessage(m.chat, { image: { url: result }, caption: '➤ Media Url : '+result }, { quoted: m })
            }
            break
            case 'ahegao': case 'ass': case 'nsfwloli': case 'neko': case 'neko2': case 'bdsm': case 'ero': case 'yuri': case 'hentai': case 'cuckold': case 'cum': case 'zettai': case 'foot': case 'femdom': case 'glasses': case 'panties': case 'orgy': case 'manga': case 'gangbang': case 'jahy': case 'tentacles': case 'thighs': case 'pussy': {
asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://revita.herokuapp.com/api/nsfw/${command}?apikey=${rev}` },
                    caption: `Nih Om 々`,
                    footer: global.sn,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
       break
case 'manu': {
let sections = [
                {
                title: "MENU NSFW 🔞",
                rows: [
                {title: "Ahegao", rowId: 'ahegao'},
                {title: "Hentai", rowId: 'hentai'},
                {title: "Yuri", rowId: 'yuri'},
                {title: "Bdsm", rowId: 'bdsm'},
                {title: "Neko", rowId: 'neko'},
                {title: "Neko2", rowId: 'neko2'},
                {title: "Ass", rowId: 'ass'},
                {title: "Nsfw Loli", rowId: 'nsfwloli'},
                {title: "Ero", rowId: 'ero'},
                {title: "Cuckold", rowId: 'cuckold'},
                {title: "Cum", rowId: 'cum'},
                {title: "Zettai", rowId: 'zettai'},
                {title: "Foot", rowId: 'foot'},
               {title: "Femdom", rowId: 'Femdom'}, 
                {title: "Glasses", rowId: 'glasses'},
                {title: "Panties", rowId: 'panties'},
                {title: "Orgy", rowId: 'orgy'},
                {title: "Manga", rowId: 'manga'},
                {title: "Gang Bang", rowId: 'gangbang'},
                {title: "Jahy", rowId: 'jahy'},
                {title: "Tentacles", rowId: 'tentacles'},
                {title: "Thighs", rowId: 'thighs'},
                {title: "Pussy", rowId: 'pussy'},
                {title: "My Owner", rowId: 'my', description: 'Nomor Pembuat Bot'},
                {title: "Rules Bot", rowId: 'rulles', description: 'Menampilkan Peraturan Penggunaan Bot'},
                {title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
                ]
                },
                ]
                daisuxe.sendListMsg(m.chat, `List Menu Nsfw Nya Ada Di Bawah Ya 🌚`, global.ownmy, `Haii Kk ${pushname}`, `Menu Nsfw 📑`, sections, m)
            }
            break
case 'waifu': 
case 'waifu2': 
case 'loli': 
case 'yotsuba': 
case 'minato': 
case 'kurumi': 
case 'sagiri': 
case 'megumin': 
case 'miku': 
case 'onepiece': 
case 'shinomiya': 
case 'yumeko': 
case 'tejina': 
case 'boruto': 
case 'kotori': 
case 'eren': 
case 'kaori': 
case 'shizuka': 
case 'tsunade': 
case 'chiho': 
case 'kaga': 
case 'akiyama': 
case 'gremory': 
case 'isuzu': 
case 'shina': 
case 'kagura': 
case 'shinka': 
case 'eba': 
case 'elaina': 
case 'yuri': 
case 'erza': 
case 'hinata': 
case 'naruto': 
case 'nezuko': 
case 'rize': 
case 'anna': 
case 'deidara': 
case 'yuki': 
case 'asuna': 
case 'ayuzawa': 
case 'chitoge': 
case 'emilia': 
case 'hestia': 
case 'inori': 
case 'itachi': 
case 'madara': 
case 'sakura': 
case 'sasuke': 
case 'tsunade': 
case 'keneki': 
case 'toukachan': 
case 'akira': 
case 'itori': 
case 'pokemon': {
asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                            
let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
                    {buttonId: 'donate', buttonText: {displayText: 'Donasi'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://revita.herokuapp.com/api/wallpaper/${command}?apikey=${rev}` },
                    caption: `Nih Om 々`,
                    footer: global.ownmy,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                daisuxe.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: daisuxe.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw '*「TITLE NYA MANA ?」*'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `➤ Title : ${result.title}\n➤ Category : ${result.type}\n➤ Detail : ${result.source}\n➤ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: daisuxe.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw '*「TITLE NYA MANA ?」*'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `➤ Title : ${result.title}\n➤ Source : ${result.source}\n➤ Media Url : ${result.image}`,
                    footer: daisuxe.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
            if (!m.isGroup) throw man.gcwa
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
	        if (!m.isGroup) throw man.gcwa
                let anu = await fetchJson(api('lol', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'blackpink': 
case 'neon': 
case 'greenneon': 
case 'futureneon': 
case 'sandwriting': 
case 'sandsummer': 
case 'sandengraved': 
case 'metaldark': 
case 'neonlight': 
case 'holographic': 
case 'text1917': 
case 'minion': 
case 'deluxesilver': 
case 'newyearcard': 
case 'bloodfrosted': 
case 'halloween': 
case 'jokerlogo': 
case 'fireworksparkle': 
case 'natureleaves': 
case 'bokeh': 
case 'toxic': 
case 'strawberry': 
case 'box3d': 
case 'roadwarning': 
case 'breakwall': 
case 'icecold': 
case 'luxury': 
case 'cloud': 
case 'summersand': 
case 'hororblod': 
case 'thunder': 
case 'magma': 
case 'impressiveglitch': 
case 'harrypotter': 
case 'foggywindow': 
case 'watercolor': 
case 'wonderfulgraffiti': 
case 'pornhub': 
case 'glitch': 
case 'avanger': 
case 'space': 
case 'ninjalogo': 
case 'marvelstudio': 
case 'lionlogo': 
case 'wolflogo': 
case 'wallgravity': 
case 'coolgravity': {
            
                if (!text) throw 'Text Nya ?'
                let buttons = [
                    {buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
                ]
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let asu = {
                    image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${text}` },
                    caption: `Nih Om 々`,
                    footer: global.ownmy,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, asu, { quoted: m })
            }
       break
case 'steel3d': {
if (!text) throw 'Text Nya ?'
                let buttons = [
                    {buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
                ]
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let asu = {
                    image: { url: `https://api.lolhuman.xyz/api/textprome2/steel3d?apikey=${lolkey}&text1=${text}&text2=${text}` },
                    caption: `Nih Om 々`,
                    footer: global.ownmy,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, asu, { quoted: m })
            }
       break
case 'wetglass':
case 'multicolor3d':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'brithdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'galaxybat':
case 'snow3d':
case 'brithdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwallpaper':
case 'pubgmaskot':
case 'aovwallpaper':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw 'Text Nya ?'
                let buttons = [
                    {buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
                ]
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let asu = {
                    image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${text}` },
                    caption: `Nih Om 々`,
                    footer: global.ownmy,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, asu, { quoted: m })
            }
       break
	    case 'shadow':
case 'cup':
case 'cup2':
case 'smoke':
case 'romance':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'goldenrose':
case 'summernature':
case 'fallleaves':
case 'flamming':
case 'harrypoter':
case 'carvedwood':
case 'tiktok':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
case 'bannerlol': {
	    if (!m.isGroup) throw man.gcwa
                if (!text) throw 'Text Nya ?'
let buttons = [
                    {buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
                ]
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let asu = {
                    image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${text}` },
                    caption: `Nih Om 々`,
                    footer: global.ownmy,
                    buttons: buttons,
                    headerType: 4
                }
                daisuxe.sendMessage(m.chat, asu, { quoted: m })
            }
       break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nomor HP :* ${anu.message.nomer_hp}\n➤ *Angka Shuzi :* ${anu.message.angka_shuzi}\n➤ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n➤ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Mimpi :* ${anu.message.mimpi}\n➤ *Arti :* ${anu.message.arti}\n➤ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama Anda :* ${anu.message.nama_anda.nama}\n➤ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➤ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama Anda :* ${anu.message.nama_anda.nama}\n➤ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➤ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama Suami :* ${anu.message.suami.nama}\n➤ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n➤ *Nama Istri :* ${anu.message.istri.nama}\n➤ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama Anda :* ${anu.message.nama_anda.nama}\n➤ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➤ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➤ *Sisi Positif :* ${anu.message.sisi_positif}\n➤ *Sisi Negatif :* ${anu.message.sisi_negatif}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Arti :* ${anu.message.arti}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Life Path :* ${anu.message.life_path}\n➤ *Destiny :* ${anu.message.destiny}\n➤ *Destiny Desire :* ${anu.message.destiny_desire}\n➤ *Personality :* ${anu.message.personality}\n➤ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendImage(m.chat,  anu.message.gambar, `➤ *Nama Anda :* ${anu.message.nama_anda}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan}\n➤ *Sisi Positif :* ${anu.message.sisi_positif}\n➤ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Tanggal Pernikahan :* ${anu.message.tanggal}\n➤ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            if (!m.isGroup) throw man.gcwa
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Lahir :* ${anu.message.hari_lahir}\n➤ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Lahir :* ${anu.message.hari_lahir}\n➤ *Rezeki :* ${anu.message.rejeki}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Lahir :* ${anu.message.hari_lahir}\n➤ *Pekerjaan :* ${anu.message.pekerjaan}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Analisa :* ${anu.message.analisa}\n➤ *Angka Akar :* ${anu.message.angka_akar}\n➤ *Sifat :* ${anu.message.sifat}\n➤ *Elemen :* ${anu.message.elemen}\n➤ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Analisa :* ${anu.message.analisa}\n➤ *Sektor :* ${anu.message.sektor}\n➤ *Elemen :* ${anu.message.elemen}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendImage(m.chat, anu.message.image, `➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Simbol Tarot :* ${anu.message.simbol_tarot}\n➤ *Arti :* ${anu.message.arti}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tahun_lahir}\n➤ *Gender :* ${anu.message.jenis_kelamin}\n➤ *Angka Kua :* ${anu.message.angka_kua}\n➤ *Kelompok :* ${anu.message.kelompok}\n➤ *Karakter :* ${anu.message.karakter}\n➤ *Sektor Baik :* ${anu.message.sektor_baik}\n➤ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Kala Tinantang :* ${anu.message.kala_tinantang}\n➤ *Info :* ${anu.message.info}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Info :* ${anu.message.info}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Hari Lahir :* ${anu.message.hari_lahir}\n➤ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➤ *Hari Naas :* ${anu.message.hari_naas}\n➤ *Info :* ${anu.message.catatan}\n➤ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Hari Lahir :* ${anu.message.hari_lahir}\n➤ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➤ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Hari Lahir :* ${anu.message.hari_lahir}\n➤ *tanggal Lahir :* ${anu.message.tgl_lahir}\n➤ *Arah Rezeki :* ${anu.message.arah_rejeki}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Tanggal :* ${anu.message.tanggal}\n➤ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n➤ *Watak Hari :* ${anu.message.watak_hari}\n➤ *Naga Hari :* ${anu.message.naga_hari}\n➤ *Jam Baik :* ${anu.message.jam_baik}\n➤ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Tanggal :* ${anu.message.tgl_memancing}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Zodiak :* ${anu.message.zodiak}\n➤ *Nomor :* ${anu.message.nomor_keberuntungan}\n➤ *Aroma :* ${anu.message.aroma_keberuntungan}\n➤ *Planet :* ${anu.message.planet_yang_mengitari}\n➤ *Bunga :* ${anu.message.bunga_keberuntungan}\n➤ *Warna :* ${anu.message.warna_keberuntungan}\n➤ *Batu :* ${anu.message.batu_keberuntungan}\n➤ *Elemen :* ${anu.message.elemen_keberuntungan}\n➤ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n➤ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                daisuxe.sendText(m.chat, `➤ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('lol', '/api/nickff', { apikey: global.APIKeys[global.APIs['lol']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('lol', '/api/nickml', { apikey: global.APIKeys[global.APIs['lol']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('lol', '/api/nickaov', { apikey: global.APIKeys[global.APIs['lol']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('lol', '/api/nickcod', { apikey: global.APIKeys[global.APIs['lol']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('lol', '/api/nickpb', { apikey: global.APIKeys[global.APIs['lol']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('lol', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    daisuxe.sendMedia(m.chat, anu.caption.profile_hd, '', `➤ Full Name : ${anu.caption.full_name}\n➤ User Name : ${anu.caption.user_name}\n➤ ID ${anu.caption.user_id}\n➤ Followers : ${anu.caption.followers}\n➤ Following : ${anu.caption.following}\n➤ Bussines : ${anu.caption.bussines}\n➤ Profesional : ${anu.caption.profesional}\n➤ Verified : ${anu.caption.verified}\n➤ Private : ${anu.caption.private}\n➤ Bio : ${anu.caption.biography}\n➤ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('lol', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`➤ Name : ${anu.name}\n➤ Version : ${Object.keys(anu.versions)}\n➤ Created : ${tanggal(anu.time.created)}\n➤ Modified : ${tanggal(anu.time.modified)}\n➤ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n➤ Description : ${anu.description}\n➤ Homepage : ${anu.homepage}\n➤ Keywords : ${anu.keywords}\n➤ Author : ${anu.author.name}\n➤ License : ${anu.license}\n➤ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
	        if (!m.isGroup) throw man.gcwa
                if (!text) throw '*「LINK NYA MANA ?」*'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw '*「LINK NYA MANA ?」*'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw '*「LINK NYA MANA ?」*'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
                daisuxe.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!m.isGroup) throw man.gcwa
                if (!text) throw 'No Query Url!'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('lol', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) daisuxe.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('lol', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    daisuxe.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw 'No Query Title'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await daisuxe.sendImage(m.chat, anu.result.img, `➤ Title : ${anu.result.lagu}\n➤ Album : ${anu.result.album}\n➤ Singer : ${anu.result.penyanyi}\n➤ Publish : ${anu.result.publish}\n➤ Lirik :\n${anu.result.lirik.result}`, m)
                daisuxe.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw 'No Query Title'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await daisuxe.sendImage(m.chat, anu.result.thumb, `➤ Title : ${anu.result.title}\n➤ Url : ${isUrl(text)[0]}`)
                daisuxe.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!m.isGroup) throw man.gcwa
                if (!text) throw '*「LINK NYA MANA ?」*'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
            if (!m.isGroup) throw man.gcwa
                if (!text) throw '*「LINK NYA MANA ?」*'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
                daisuxe.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!m.isGroup) throw man.gcwa
                if (!text) throw '*「LINK NYA MANA ?」*'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/api/downloader/facebook', { url: text }, 'apikey'))
                daisuxe.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `➤ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!m.isGroup) throw man.gcwa
                if (!text) throw '*「LINK NYA MANA ?」*'
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let anu = await fetchJson(api('lol', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                daisuxe.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
➤ Title : ${anu.title}
➤ Author : ${anu.author.name}
➤ Like : ${anu.like}
➤ Caption : ${anu.caption}
➤ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: daisuxe.user.name,
			buttons,
			headerType: 4
		    }
		    daisuxe.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        daisuxe.sendMessage(m.chat, { image: { url }, caption: `➤ Title : ${anu.title}\n➤ Author : ${anu.author.name}\n➤ Like : ${anu.like}\n➤ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		daisuxe.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		daisuxe.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		daisuxe.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		daisuxe.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		daisuxe.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
		daisuxe.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		daisuxe.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                asu = `${wet}`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
                let media = await daisuxe.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                daisuxe.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw '*「 TAG PESAN NYA 」*'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                daisuxe.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw man.kus
                if (!m.quoted) throw '*「 TAG PESAN NYA 」*'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw '*「 TAG PESAN NYA 」*'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                daisuxe.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                daisuxe.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await daisuxe.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, daisuxe.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await daisuxe.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, daisuxe.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, daisuxe.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await daisuxe.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, daisuxe.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, daisuxe.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await daisuxe.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, daisuxe.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await daisuxe.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, daisuxe.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await daisuxe.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, daisuxe.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw man.kus
                daisuxe.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw man.kus
                daisuxe.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                daisuxe.sendContact(m.chat, global.ownerr, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('lol', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `➤ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `➤ Name : ${i.name}\n`
            teks += `➤ Link : ${i.link}\n`
            teks += `➤ Developer : ${i.developer}\n`
            teks += `➤ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('lol', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `➤ Title: ${judul}
➤ Realease: ${rilis}
➤ Size: ${ukuran}
➤ Type: ${type}
➤ Storage: ${storage}
➤ Display: ${display}
➤ Inchi: ${inchi}
➤ Pixel: ${pixel}
➤ Video Pixel: ${videoPixel}
➤ Ram: ${ram}
➤ Chipset: ${chipset}
➤ Battery: ${batrai}
➤ Battery Brand: ${merek_batre}
➤ Detail: ${detail}`
            daisuxe.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('lol', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `➤ Title: ${i.title}\n`
            capt += `➤ Thumbnail: ${i.thumb}\n`
            capt += `➤ Url: ${i.url}\n\n──────────────────────\n`
            }
            daisuxe.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('lol', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `➤ Title: ${i.title}\n`
            capt += `➤ Url: ${i.url}\n`
            capt += `➤ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            daisuxe.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('lol', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `➤ Community: ${i.community}\n`
            capt += `➤ Community Link: ${i.community_link}\n`
            capt += `➤ Thumbnail: ${i.community_thumb}\n`
            capt += `➤ Description: ${i.community_desc}\n`
            capt += `➤ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            daisuxe.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('lol', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `➤ Judul: ${judul}\n`
            capt += `➤ Dibaca: ${dibaca}\n`
            capt += `➤ Divote: ${divote}\n`
            capt += `➤ Bab: ${bab}\n`
            capt += `➤ Waktu: ${waktu}\n`
            capt += `➤ Url: ${url}\n`
            capt += `➤ Deskripsi: ${description}`
            daisuxe.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('lol', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `➤ Judul: ${i.judul}\n`
            capt += `➤ Like: ${i.like}\n`
            capt += `➤ Creator: ${i.creator}\n`
            capt += `➤ Genre: ${i.genre}\n`
            capt += `➤ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('lol', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `➤ Judul: ${i.judul}\n`
            capt += `➤ Years: ${i.years}\n`
            capt += `➤ Genre: ${i.genre}\n`
            capt += `➤ Url: ${i.url}\n`
            capt += `➤ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            daisuxe.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw man.kus
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                daisuxe.sendListMsg(m.chat, `Please select the menu you want to change!`, daisuxe.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
case 'rulles': {
anu = `➤ 1.*JANGAN TELPON BOT/DI BLOKIR*\n➤ 2.*JANGAN SPAM/TELPON/VC OWNER KALO GA MAU DI BLOKIR*\n➤ 3.*JANGAN CHAT OWNER ANEH²*\n➤ 4.*OWNER TIDAK MELAYANI SV KONTAK, KALO LU BLUM PERKENALKAN DIRI LU*\n\n ${rulles}`
let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Github 🐈',
                                    url: 'https://www.github.com/dhaffnavyz'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script Bot',
                                    id: 'sc'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: 'allmenu'
                                }
                            }]
                            rulles = fs.readFileSync('./galery/image/rulles.jpg')
daisuxe.send5ButImg(m.chat, anu, global.terr, rulles, btn)
}
// case menu menu ya adick adick
break
            case 'menu': case 'help': case '?': {
                daisuxe.sendMessage(m.chat, { react: { text: "⏳", key: m.key }})                            
                anu = `*Hai Kk ${pushname} Ada Yang Bisa Saya Bantu 🙂*\n➤ _Nama Bot: ${bot}_\n➤ _Nama Owner: ${ownmy}_\n➤ _Runtime: ${runtime(process.uptime())}_`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Github 🐈',
                                    url: 'https://www.github.com/dhaffnavyz'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules Bot',
                                    id: 'rulles'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu 📑',
                                    id: 'allmenu'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        daisuxe.send5ButImg(m.chat, anu, global.terr, global.thumb, btn)
                        } else if (setbot.templateGif) {
                        daisuxe.send5ButGif(m.chat, anu, global.terr, global.daixsu, btn)
                        } else if (setbot.templateVid) {
                        daisuxe.send5ButVid(m.chat, anu, global.terr, global.daixsu, btn)
                        } else if (setbot.templateMsg) {
                        daisuxe.send5ButMsg(m.chat, anu, global.terr, btn)
                        }
                        await daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/menu.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
                     }
            break
/*                case 'listmenu': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Silahkan Klik List Menunya!! Bot Ini di Buat Sejak 26 Mei 2022 Oleh Developer (DHAFF OFFICIAL) \n\n`,
                    buttonText: "Menu",
                    footerText: `©DAISUKE-MD-BOTZ`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Main Features",
								"rows": [
									{
										"title": "Main Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "Rpg Menu",
										"description": "Displays The List Of Rpg Features",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										}
							]
							},
							{
								"title": "Chat With Fellow Users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            daisuxe.relayMessage(m.chat, template.message, { messageId: template.key.id })
            await daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/pewpw.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
*/
case 'thx': { 
asu = `*「 THANKS TO 」*\n➤ *Allah*\n➤ *My Ortu*\n➤ *DHAFF OFFICIAL*\n➤ *All SUBCRIBER*\n➤ *Penyedia Rest Api*\n➤ *My Patner FRMANZ*`
let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Github 🐈',
                                    url: 'https://www.github.com/dhaffnavyz'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script Bot',
                                    id: 'sc'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu',
                                    id: 'allmenu'
                                }
                            }]
daisuxe.send5ButMsg(m.chat, asu, global.copy, btn)
            await daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/menu.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
}
break
case 'allmenu': {
                daisuxe.sendMessage(m.chat, { react: { text: "⏳", key: m.key }})                
asu = `

▛▀▀▀▀▀▀▀▀▀
▌  🎑 *G R U P - M E N U*
▌╓───
▌╟ ❯▁ ${prefix}linkgroup
▌╟ ❯▁ ${prefix}ephemeral [option]
▌╟ ❯▁ ${prefix}setppgc [image]
▌╟ ❯▁ ${prefix}setname [text]
▌╟ ❯▁ ${prefix}setdesc [text]
▌╟ ❯▁ ${prefix}group [option]
▌╟ ❯▁ ${prefix}editinfo [option]
▌╟ ❯▁ ${prefix}add @user
▌╟ ❯▁ ${prefix}kick @user
▌╟ ❯▁ ${prefix}hidetag [text]
▌╟ ❯▁ ${prefix}tagall [text]
▌╟ ❯▁ ${prefix}antilink [on/off]
▌╟ ❯▁ ${prefix}mute [on/off]
▌╟ ❯▁ ${prefix}promote @user
▌╟ ❯▁ ${prefix}demote @user
▌╟ ❯▁ ${prefix}vote [text]
▌╟ ❯▁ ${prefix}devote
▌╟ ❯▁ ${prefix}upvote
▌╟ ❯▁ ${prefix}cekvote
▌╟ ❯▁ ${prefix}hapusvote
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🌐 *W E B - Z O N E*
▌╓───
▌╟ ❯▁ ${prefix}playstore
▌╟ ❯▁ ${prefix}gsmarena
▌╟ ❯▁ ${prefix}jadwalbioskop
▌╟ ❯▁ ${prefix}nowplayingbioskop
▌╟ ❯▁ ${prefix}aminio
▌╟ ❯▁ ${prefix}wattpad
▌╟ ❯▁ ${prefix}webtoons
▌╟ ❯▁ ${prefix}drakor
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃



▛▀▀▀▀▀▀▀▀▀
▌  📩 *D O W N L O A D*
▌╓───
▌╟ ❯▁ ${prefix}tiktoknowm [url]
▌╟ ❯▁ ${prefix}tiktokwm [url]
▌╟ ❯▁ ${prefix}tiktokmp3 [url]
▌╟ ❯▁ ${prefix}instagram [url]
▌╟ ❯▁ ${prefix}twitter [url]
▌╟ ❯▁ ${prefix}twittermp3 [url]
▌╟ ❯▁ ${prefix}facebook [url]
▌╟ ❯▁ ${prefix}pinterestdl [url]
▌╟ ❯▁ ${prefix}ytmp3 [url]
▌╟ ❯▁ ${prefix}ytmp4 [url]
▌╟ ❯▁ ${prefix}getmusic [query]
▌╟ ❯▁ ${prefix}getvideo [query]
▌╟ ❯▁ ${prefix}umma [url]
▌╟ ❯▁ ${prefix}joox [query]
▌╟ ❯▁ ${prefix}soundcloud [url]
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🔎 *S E A R C H - M E N U*
▌╓───
▌╟ ❯▁ ${prefix}play [query]
▌╟ ❯▁ ${prefix}yts [query]
▌╟ ❯▁ ${prefix}google [query]
▌╟ ❯▁ ${prefix}gimage [query]
▌╟ ❯▁ ${prefix}pinterest [query]
▌╟ ❯▁ ${prefix}wallpaper [query]
▌╟ ❯▁ ${prefix}wikimedia [query]
▌╟ ❯▁ ${prefix}ytsearch [query]
▌╟ ❯▁ ${prefix}ringtone [query]
▌╟ ❯▁ ${prefix}stalk [option] [query]
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🔮 *R A N D O M - M E N U*
▌╓───
▌╟ ❯▁ ${prefix}coffe
▌╟ ❯▁ ${prefix}quotesanime
▌╟ ❯▁ ${prefix}motivasi
▌╟ ❯▁ ${prefix}dilanquote
▌╟ ❯▁ ${prefix}bucinquote
▌╟ ❯▁ ${prefix}katasenja
▌╟ ❯▁ ${prefix}puisi
▌╟ ❯▁ ${prefix}couple
▌╟ ❯▁ ${prefix}couple
▌╟ ❯▁ ${prefix}menunsfw
▌╟ ❯▁ ${prefix}menuvirtex
▌╟ ❯▁ ${prefix}menuanime
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🤣 *F U N - M E N U*
▌╓───
▌╟ ❯▁ ${prefix}simih
▌╟ ❯▁ ${prefix}halah
▌╟ ❯▁ ${prefix}hilih
▌╟ ❯▁ ${prefix}huluh
▌╟ ❯▁ ${prefix}heleh
▌╟ ❯▁ ${prefix}holoh
▌╟ ❯▁ ${prefix}jadian
▌╟ ❯▁ ${prefix}jodohku
▌╟ ❯▁ ${prefix}delttt
▌╟ ❯▁ ${prefix}tictactoe
▌╟ ❯▁ ${prefix}family100
▌╟ ❯▁ ${prefix}tebak [option]
▌╟ ❯▁ ${prefix}math [mode]
▌╟ ❯▁ ${prefix}suitpvp [@tag]
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🌹 *P R I M B O N*
▌╓───
▌╟ ❯▁ ${prefix}nomorhoki
▌╟ ❯▁ ${prefix}artimimpi
▌╟ ❯▁ ${prefix}artinama
▌╟ ❯▁ ${prefix}ramaljodoh
▌╟ ❯▁ ${prefix}ramaljodohbali
▌╟ ❯▁ ${prefix}suamiistri
▌╟ ❯▁ ${prefix}ramalcinta
▌╟ ❯▁ ${prefix}cocoknama
▌╟ ❯▁ ${prefix}pasangan
▌╟ ❯▁ ${prefix}jadiannikah
▌╟ ❯▁ ${prefix}sifatusaha
▌╟ ❯▁ ${prefix}rezeki
▌╟ ❯▁ ${prefix}pekerjaan
▌╟ ❯▁ ${prefix}nasib
▌╟ ❯▁ ${prefix}penyakit
▌╟ ❯▁ ${prefix}tarot
▌╟ ❯▁ ${prefix}fengshui
▌╟ ❯▁ ${prefix}haribaik
▌╟ ❯▁ ${prefix}harisangar
▌╟ ❯▁ ${prefix}harisial
▌╟ ❯▁ ${prefix}nagahari
▌╟ ❯▁ ${prefix}arahrezeki
▌╟ ❯▁ ${prefix}peruntungan
▌╟ ❯▁ ${prefix}weton
▌╟ ❯▁ ${prefix}karakter
▌╟ ❯▁ ${prefix}keberuntungan
▌╟ ❯▁ ${prefix}memancing
▌╟ ❯▁ ${prefix}masasubur
▌╟ ❯▁ ${prefix}zodiak
▌╟ ❯▁ ${prefix}shio
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🤤 *M E N U 18+*
▌╓───
▌╟ ❯▁ ${prefix}pekob1
▌╟ ❯▁ ${prefix}pekob2
▌╟ ❯▁ ${prefix}pekob3
▌╟ ❯▁ ${prefix}pekob4
▌╟ ❯▁ ${prefix}pekob5
▌╟ ❯▁ ${prefix}pekob6
▌╟ ❯▁ ${prefix}pekob7
▌╟ ❯▁ ${prefix}pekob8
▌╟ ❯▁ ${prefix}menu18+
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🛠️ *C O N V E R T*
▌╓───
▌╟ ❯▁ ${prefix}attp
▌╟ ❯▁ ${prefix}ttp
▌╟ ❯▁ ${prefix}toimage
▌╟ ❯▁ ${prefix}removebg
▌╟ ❯▁ ${prefix}sticker
▌╟ ❯▁ ${prefix}emojimix
▌╟ ❯▁ ${prefix}emojimix2
▌╟ ❯▁ ${prefix}tovideo
▌╟ ❯▁ ${prefix}togif
▌╟ ❯▁ ${prefix}tourl
▌╟ ❯▁ ${prefix}tovn
▌╟ ❯▁ ${prefix}tomp3
▌╟ ❯▁ ${prefix}toaudio
▌╟ ❯▁ ${prefix}ebinary
▌╟ ❯▁ ${prefix}dbinary
▌╟ ❯▁ ${prefix}styletext
▌╟ ❯▁ ${prefix}smeme
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  📚 *M A I N- N M E N U*
▌╓───
▌╟ ❯▁ ${prefix}ping
▌╟ ❯▁ ${prefix}owner
▌╟ ❯▁ ${prefix}menu / ${prefix}help / ${prefix}?
▌╟ ❯▁ ${prefix}delete
▌╟ ❯▁ ${prefix}infochat
▌╟ ❯▁ ${prefix}quoted
▌╟ ❯▁ ${prefix}listpc
▌╟ ❯▁ ${prefix}listgc
▌╟ ❯▁ ${prefix}listonline
▌╟ ❯▁ ${prefix}speedtest
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  📂 *D A T A B A S E*
▌╓───
▌╟ ❯▁ ${prefix}setcmd
▌╟ ❯▁ ${prefix}listcmd
▌╟ ❯▁ ${prefix}delcmd
▌╟ ❯▁ ${prefix}lockcmd
▌╟ ❯▁ ${prefix}addmsg
▌╟ ❯▁ ${prefix}listmsg
▌╟ ❯▁ ${prefix}getmsg
▌╟ ❯▁ ${prefix}delmsg
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🎑 *A N O N Y M O U S*
▌╓───
▌╟ ❯▁ ${prefix}anonymous
▌╟ ❯▁ ${prefix}start
▌╟ ❯▁ ${prefix}next
▌╟ ❯▁ ${prefix}keluar
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🕋 *I S L A M I C - M E N U*
▌╓───
▌╟ ❯▁ ${prefix}iqra
▌╟ ❯▁ ${prefix}hadist
▌╟ ❯▁ ${prefix}alquran
▌╟ ❯▁ ${prefix}juzamma
▌╟ ❯▁ ${prefix}tafsirsurah
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🎤 *E F E K - S U A R A*
▌╓───
▌╟ ❯▁ ${prefix}bass
▌╟ ❯▁ ${prefix}blown
▌╟ ❯▁ ${prefix}deep
▌╟ ❯▁ ${prefix}earrape
▌╟ ❯▁ ${prefix}fast
▌╟ ❯▁ ${prefix}fat
▌╟ ❯▁ ${prefix}nightcore
▌╟ ❯▁ ${prefix}reverse
▌╟ ❯▁ ${prefix}robot
▌╟ ❯▁ ${prefix}slow
▌╟ ❯▁ ${prefix}tupai
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃


▛▀▀▀▀▀▀▀▀▀
▌  🎯 *O W N E R - M E N U*
▌╓───
▌╟ ❯▁ ${prefix}react [emoji]
▌╟ ❯▁ ${prefix}chat [option]
▌╟ ❯▁ ${prefix}join [link]
▌╟ ❯▁ ${prefix}leave
▌╟ ❯▁ ${prefix}block @user
▌╟ ❯▁ ${prefix}unblock @user
▌╟ ❯▁ ${prefix}bcgroup [text]
▌╟ ❯▁ ${prefix}bcall [text]
▌╟ ❯▁ ${prefix}setppbot [image]
▌╟ ❯▁ ${prefix}setexif
▌╟ ❯▁ ${prefix}setmenu [option]
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃
`
let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Github 🐈',
                                    url: 'https://www.github.com/dhaffnavyz'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules Bot',
                                    id: 'rulles'
                                }
                            }]
                            daisuxe.send5ButGif(m.chat, asu, daisuxe.user.name, global.daixsu, btn)
                             await daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/allmenu.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
}
break
//case pekob dewasa
    case 'pekob1': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://a.top4top.io/m_234463vfl8.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
    case 'pekob2': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://l.top4top.io/m_2344md6kd7.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
    case 'pekob3': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://k.top4top.io/m_2344jsrwb6.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
    case 'pekob4': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://i.top4top.io/m_2344c7czk5.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
    case 'pekob5': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://h.top4top.io/m_2344e1dm54.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
    case 'pekob6': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://g.top4top.io/m_2344r8ify3.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
    case 'pekob7': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://f.top4top.io/m_2344tu8uy2.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
    case 'pekob8': {
                daisuxe.sendMessage(m.chat, { video: { url: 'https://e.top4top.io/m_234468aaj1.mp4' }, caption: `*Hi Bro ${m.pushName}*\n\nTuh Pekob Nya Untuk cara download video nya tekan gambarnya lalu klik download Jangan Lupa Donasi Me : \n\n🍂 Qr Dana : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/6283824417034 (Click To Contact)` }, { quoted: m })
                daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
                daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
           }
            break
case 'menu18+': {
       daisuxe.sendMessage(m.chat, { react: { text: "🤤", key: m.key }})                
yamateh = `
▛▀▀▀▀▀▀▀▀▀
▌  🤤 *M E N U 18+*
▌╓───
▌╟ ❯▁ ${prefix}pekob1
▌╟ ❯▁ ${prefix}pekob2
▌╟ ❯▁ ${prefix}pekob3
▌╟ ❯▁ ${prefix}pekob4
▌╟ ❯▁ ${prefix}pekob5
▌╟ ❯▁ ${prefix}pekob6
▌╟ ❯▁ ${prefix}pekob7
▌╟ ❯▁ ${prefix}pekob8
▌╚════════
▙▃▃▃▃▃▃▃▃▃▃`
let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My YouTube ❤️',
                                    url: 'https://youtube.com/channel/UCIfD_R1Jph8MUe0ZbwKCstQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu Nya',
                                    id: 'manu'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, yamateh, global.copy, btn)
                            daisuxe.sendMessage(m.chat, {audio:  fs.readFileSync('./galery/audio/desah.mp3'), mimetype: 'audio/mp4', ptt:true}, {quoted:m})
}
break

//nfsw menu poto
case 'menunsfw': {
nsfw = `
▛▀▀▀▀▀▀▀▀▀
▌  💦 *N A F S W U*
▌╓───
▌╟ ❯▁ ${prefix}ahegao
▌╟ ❯▁ ${prefix}ass
▌╟ ❯▁ ${prefix}nsfwloli
▌╟ ❯▁ ${prefix}bdsm
▌╟ ❯▁ ${prefix}hentai
▌╟ ❯▁ ${prefix}yuri
▌╟ ❯▁ ${prefix}neko
▌╟ ❯▁ ${prefix}neko2
▌╟ ❯▁ ${prefix}ero
▌╟ ❯▁ ${prefix}cuckold
▌╟ ❯▁ ${prefix}cum
▌╟ ❯▁ ${prefix}zettai
▌╟ ❯▁ ${prefix}foot
▌╟ ❯▁ ${prefix}femdom
▌╟ ❯▁ ${prefix}galsses
▌╟ ❯▁ ${prefix}panties
▌╟ ❯▁ ${prefix}orgy
▌╟ ❯▁ ${prefix}manga
▌╟ ❯▁ ${prefix}gangbang
▌╟ ❯▁ ${prefix}jahy
▌╟ ❯▁ ${prefix}tentacles
▌╟ ❯▁ ${prefix}thighs
▌╟ ❯▁ ${prefix}pussy
▌╟ ❯▁ ${prefix}ecchi
▌╚════════
▙▃▃▃▃▃▃▃⌜*${bot}*⌟▃▃▃▃`
let btn = [{
                                urlButton: {
                                    displayText: 'My Owner 🦅',
                                    url: 'https://wa.me/6283824417034'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My YouTube ❤️',
                                    url: 'https://youtube.com/channel/UCIfD_R1Jph8MUe0ZbwKCstQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Thanks To 📌',
                                    id: 'thx'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu Nya',
                                    id: 'manu'
                                }
                            }]
                            daisuxe.send5ButMsg(m.chat, nsfw, global.copy, btn)
}
break
case 'annime': {
let sections = [
                {
                title: "Random Image Anime 🌛",
                rows: [
                {title: "Waifu", rowId: 'waifu'},
                {title: "Waifu2", rowId: 'waifu2'},
                {title: "loli", rowId: 'loli'},
                {title: "Yotsuba", rowId: 'yotsuba'},
                {title: "Minato", rowId: 'minato'},
                {title: "Kurumi", rowId: 'kurumi'},
                {title: "Sagiri", rowId: 'sagiri'},
                {title: "Megumin", rowId: 'megumin'},
                {title: "Miku", rowId: 'miku'},
                {title: "One Pice", rowId: 'onepice'},
                {title: "Shinomiya", rowId: 'shinomiya'},
                {title: "Yumeko", rowId: 'yumeko'},
                {title: "Boruto", rowId: 'boruto'},
                {title: "Tejina", rowId: 'tejina'},
                {title: "Kotori", rowId: 'kotori'},
                {title: "Eren", rowId: 'eren'},
                {title: "Kaori", rowId: 'kaori'},
                {title: "Shizuka", rowId: 'shizuka'},
                {title: "Touka Chan", rowId: 'toukachan'},
                {title: "Chiho", rowId: 'chiho'},
                {title: "Kaga", rowId: 'kaga'},
                {title: "Akiyama", rowId: 'akiyama'},
                {title: "Gremory", rowId: 'gremory'},
                {title: "Isuzu", rowId: 'isuzu'},
                {title: "Kagura", rowId: 'kagura'},
                {title: "Shina", rowId: 'shina'},
                {title: "Shinka", rowId: 'shinka'},
                {title: "eba", rowId: 'eba'},
                {title: "Elaina", rowId: 'Elaina'},
                {title: "Yuri", rowId: 'yuri'},
                {title: "Erza", rowId: 'erza'},
                {title: "Hinata", rowId: 'hinata'},
                {title: "Chitoge", rowId: 'chitoge'},
                {title: "Rize", rowId: 'rize'},
                {title: "Anna", rowId: 'anna'},
                {title: "Deidara", rowId: 'deidara'},
                {title: "Yuki", rowId: 'yuki'},
                {title: "Asuna", rowId: 'asuna'},
                {title: "Naruto", rowId: 'naruto'},
                {title: "Nezuko", rowId: 'nezuko'},
                {title: "Ayuzawa", rowId: 'ayuzawa'},
                {title: "Emilia", rowId: 'emilia'},
                {title: "Hestia", rowId: 'hestia'},
                {title: "Inori", rowId: 'inori'},
                {title: "Itachi", rowId: 'itachi'},
                {title: "Madara", rowId: 'madara'},
                {title: "Sasuke", rowId: 'sasuke'},
                {title: "Tsunade", rowId: 'tsunade'},
                {title: "Akira", rowId: 'akira'},
                {title: "Itori", rowId: 'itori'},
                {title: "Pokemon", rowId: 'pokemon'},
                {title: "My Owner", rowId: 'my', description: 'Nomor Pembuat Bot'},
                {title: "Rules Bot", rowId: 'rulles', description: 'Menampilkan Peraturan Penggunaan Bot'},
                {title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
                ]
                },
                ]
                daisuxe.sendListMsg(m.chat, `List Menu Image Random Anime 🌛 Nya Ada Di Bawah`, global.ownmy, `Haii Kk ${pushname}`, `Click Here 🦅`, sections, m)
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(man.kus)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(man.kus)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(man.kus)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    daisuxe.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
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
