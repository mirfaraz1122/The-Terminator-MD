/*██▓▒­░⡷⠂𝚻𝚮𝚵 𝚻𝚵𝚪𝚳𝚰𝚴𝚫𝚻𝚯𝚪 𝚳𝐃⠐⢾░▒▓██

WHATSAPP BOT BY MR FARAZ AND MUHAMMAD SAQLAIN ( SIGMA MAKER OFC )

WHATSAPP - 923206629195,923082990885
SUPPORT GROUP - https://chat.whatsapp.com/LArHCfXJfwz3OSQIzQEy2A
YOUTUBE - 


ℹ️ SPECIAL INFORMATION ℹ️

Welcome to The Terminator Md Whatsapp Bot settings.js.
Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using Sex Video Downloader, you need to get permission from Bot Devoper. 

*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true " ,if you wanna active this type true, if no type false
global.READ_MASSAGE = false
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply  
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want DISABLE use "false" 
global.AUTO_BIO = false
//👇 Inbox massage block PM block 
global.INBOX_BLOCK = false
//👇 Auto react  , 
global.AUTO_REACT = false
//👇 Bad word Auto delete ( you must add bad words ) 
global.ANTI_BADWORD = false
//👇 Kick And Auto Delete Group link Senders 
global.ANTI_G_LINK = false
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) 
global.SEND_WELCOME = false
global.SEND_GOODBYE = false
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = false
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = true



/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['923206629195,923082990885'] 
//👇 Your Caption ( Image Video )
global.cap = '© ꧁༺𝚻𝚮𝚵 𝚻𝚵𝚪𝚳𝚰𝚴𝚫𝚻𝚯𝚪 𝚳𝐃 ༻꧂ ²⁰²³'
//👇 Your Bot Name
global.botnma =  'ꓚ⌊⌋ 𝚻𝚮𝚵 𝚻𝚵𝚪𝚳𝚰𝚴𝚫𝚻𝚯𝚪 𝚳𝐃 ⌊⌋ꓛ' 
//👇 Your name
global.ownernma =  'FARAZ AND HIS BRO SAQLAIN' 
//👇 Sticker Author Name
global.packname =  '꧁༺𝚻𝚮𝚵 𝚻𝚵𝚪𝚳𝚰𝚴𝚫𝚻𝚯𝚪 𝚳𝐃 ༻꧂' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '❤‍🩹|💀'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Karachi'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/e88dc66deb898c3f3dc94.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `𝗧𝗛𝗘 𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗧𝗢𝗥 𝗠𝗗 𝗜𝗦 𝗔𝗟𝗜𝗩𝗘 𝗕𝗥𝗨𝗛 {uptime}`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["94715166712","94719574492"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" )
global.CHATGPT_API = ''
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363168112502215@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = 'https://chat.whatsapp.com/LArHCfXJfwz3OSQIzQEy2A'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: 'Done 🐦‍⬛',
    admin: '*BRO YOU REALLY HAVE EYES THAT YOU ARE NOT ADMIN SO CANT USE THIS COMMAND SORRY !*',
    botAdmin: '*BOT MUST BE ADMIN FIRST BRUH !*',
    owner: '*ONLY FOR OWNER BRUH !*',
    group: '*ONLY IN GROUPS BRUH !*',
    private: '*ONLY IN INBOX BUT DONT GO TO GIRLS INBOX TO USE IT !*',
    bot: '*THIS COMMAND IS ONLY FOR BOT NUMBER !*',
    wait: '*♲ CAN YOU PLEASE JUST WAIT A LITTLE BIT ...*',
    endLimit: 'YOUR DAILY LIMIT EXPIRED SO PLEASE WAIT FOR 12 HOURS',
    BLOCK_CMD_MSG : '*⚠️  THIS COMMAND IS BLOCKED BY OWNER BRUH*',
    IMG_BLOCK : "THIS WORD IS BANNED FROM IMAGE DOWNLOADER",
    DISABLE_INBOX : "INBOX DISABLED BY OWNER PLEASE USE IN ONLY GROUS ",
    ONLY_SEX_GROUP : "ADULT VIDEOS HE HE BOY BUT ITS ALLOWED IN ONLY THIS GROUP \n\n https://chat.whatsapp.com/LArHCfXJfwz3OSQIzQEy2A",
    DISABLE_CMD : "🚫 COMMANDS ARE DISABLED BY OWNER",
    BAD_DETECT : 'HEY YOU PLEASE DONT USE BAD WORDS HERE OTHERWISE I WILL FUCK YOU BITCH',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['923206629195'] //Change  it 
global.premium = ['923206629195'] //Change it 
global.pengguna = 'SIGMA BOT MAKER' // Your name 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = '██▓▒­░⡷⠂𝚻𝚮𝚵 𝚻𝚵𝚪𝚳𝚰𝚴𝚫𝚻𝚯𝚪 𝚳𝐃⠐⢾░▒▓██'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //API PLEASE
}

//global.alivelogo = `https://telegra.ph/file/82c510779928a9d9db389.jpg`
global.imgalive = fs.readFileSync('./Media/image/TERMINATOR.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
