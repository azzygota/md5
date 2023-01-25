const fs = require('fs')
const chalk = require('chalk')
global.autoTyping = false
global.autoRecord = false
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//Ini Jangan di hapus ya mas Nanti eror//
//============[ Pembatas ]==========
global.owner = ["6289513081052"]
global.ownername = "𝐴𝑑𝑟𝑖𝑎𝑛𝑛𝑛" //nama bot
global.ytname = "YT: AdrianPreset03" //yt lu kalau ada
global.socialm = "𝑁𝑔𝑎𝑝𝑎 𝐵𝑟𝑜?, 𝐷𝑜𝑛𝑎𝑡𝑒 𝐿𝑎ℎ 𝐵𝑟𝑜"
global.location = "Indonesia, Jabar, Bandung"
global.ownernomer = ["6289513081052"]
global.premium = ['629513081052'] //ur premium number
global.botname = '𝐴𝑑𝑟𝑖𝑎𝑛𝐵𝑂𝑇.             ||               𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐵𝑂𝑇'
global.linkz = "https://chat.whatsapp.com/CRWogYlwSNrCWCIoBhfLyJ"
global.websitex = "https://youtu.be/2jwHrc68KBQ"
global.botscript = 'https://github.com/azzygota'
global.themeemoji = "🥶"
global.packname = "𝑆𝑡𝑖𝑐𝑘𝑒𝑟 𝐵𝑦 𝐴𝑑𝑟𝑖𝑎𝑛𝐵𝑂𝑇" 
global.author = "𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐵𝑂𝑇 | 𝐴𝑑𝑟𝑖𝑎𝑛𝑋𝐷"
global.wm = "𝐴𝑑𝑟𝑖𝑎𝑛𝐵𝑂𝑇 | 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐵𝑂𝑇" 
global.snk = "𝐻𝑎𝑙𝑙𝑜\n"
global.paymentowner = "6289513081052"
global.dana = "6289513081052"
global.pulsa ="6289513081052"
global.gopay = "-"
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//=================[kontolnya baeleyd]===========
global.mess = {
    success: '*Nih Kak Hehehe ><*',
    admin: '*< ! > Mohon Maaf Fitur Hanya Bisa Di gunakan Oleh Admin*',
    botAdmin: '*< ! > Mohon Maaf Fitur Ini Bisa Di gunakan Apabila Bot telah Di Angkat Menjadi Admin*',
    premime: '*< ! > Mohon Maaf Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium*',
    owner: '*< ! > [Anda Bukan Owner Saya -_-] jangan Menggunakan Fitur ini !!!!!!*',
    group: '*< ! > Mohon Maaf Fitur Hanya Bisa Di Gunakan Di dalam Group!!*',
    private: '*< ! > Mohon Maaf Fitur Ini Hanya Bisa di Gunakan di Dalam Private Chat*',
    bot: '*< ! > Fitur Khusus Bot*',
    wait: '*⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙*',
    linkm: '*< ! > Mana Link Nya?*',
    endLimit: '*< ! > Limit Kamu Telah Habis!! Tunggu jam 12 malam Atau bisa membeli paket Limit*',
    nsfw: '*< ! > Fitur Paket Premium Mohon Beli Paket Premium Terlebih dahulu!!*',
}
global.thum = fs.readFileSync("./gambar/maslent.jpg") 
global.log0 = fs.readFileSync("./gambar/maslent.jpg")
global.err4r = fs.readFileSync("./gambar/maslent.jpg")
global.thumb = fs.readFileSync("./gambar/maslent.jpg")
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
