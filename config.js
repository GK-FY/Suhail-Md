const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="gk-fy@iname.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://darkdragonv4:ameesha@cluster0.ttcxkqt.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/IFjfD82QnjfFfuriqBw4Aw";
global.website=process.env.GURL || "https://chat.whatsapp.com/IFjfD82QnjfFfuriqBw4Aw" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1343c53e5d3a68d58c434.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254701339573" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254100736783";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254100736783";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_56_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrRUw2Y29KUWk5eDQ1Z2JvcEVMSDVGKy9oaUVjUFpTamdGZzlFVkMzRHFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDczMjQ1MTc3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDY2OTQ5MURDOUM1MDQzREZDN0Y4NkE4MzJGMzBERThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDE5Mzg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzMyNDUxNzcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxODVBQjdCMkYyRUI4NDQ4MTEzMzY4QUVCMzA2QUJBMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc0MTkzODhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGIwamFSTEJRaHltTTcyQWVVLWRoZ1wiLFxuICBcInBob25lSWRcIjogXCIwNzEzMDZhZC00N2M5LTRmZjYtYTVlOC02ZWQ1ZmY1NGEyMGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgOTEsXG4gICAgICAxMDAsXG4gICAgICAxOTMsXG4gICAgICA0NSxcbiAgICAgIDYyLFxuICAgICAgMTMyLFxuICAgICAgMjIxLFxuICAgICAgMjQ0LFxuICAgICAgMTcyLFxuICAgICAgMTc1LFxuICAgICAgOTAsXG4gICAgICAxNTMsXG4gICAgICAxNDgsXG4gICAgICAxLFxuICAgICAgMjIxLFxuICAgICAgMTIwLFxuICAgICAgMTU0LFxuICAgICAgNzgsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxNDgsXG4gICAgICA0OSxcbiAgICAgIDIyNixcbiAgICAgIDExMSxcbiAgICAgIDE1MSxcbiAgICAgIDMwLFxuICAgICAgMzcsXG4gICAgICAxODgsXG4gICAgICAxMDIsXG4gICAgICA5MyxcbiAgICAgIDEzNyxcbiAgICAgIDM3LFxuICAgICAgMTcsXG4gICAgICA2MixcbiAgICAgIDgxLFxuICAgICAgMjAsXG4gICAgICAxNjQsXG4gICAgICAyMjQsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzJRTFpaSEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDczMjQ1MTc3MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTMzOTQ5ODM4NTQyMDA6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmO8J2Zg/CdmLzwnZmJ8J2ZhiDwnZmB8J2ZlFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xVjBvd0JFUFQ2OXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieTRqNVE3b1RTcnlHNThlN3FIR0cxcTB3NmxScTI5Y0xURC9VMHQ0eEFWWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJycCtPWFdJSUFZZXVYRDY5NFM0UU13WFRCV2RCWmQ4UTlmaG5pK3hZU1pjUlhzZXJIWHhSYjlLZ3hxSDRKV1o2M1BVV29BTzFKTGFlRmp4Z2R3ODlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVemEyRzNGL1ZSZFNIMUhJTzNtN3ovUFJodldoRExMSCtzY2FpSFhsVmxHeW0xN0FWc2YrZ3dkMWxLNjNrVm9KWjR6VU83c3ZObU1lOGpSNlB4aXVEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MzI0NTE3NzA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzQxOTM4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURNQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRE1CLmpzb24iOiAie1wia2V5RGF0YVwiOlwieStmRDcyL3FQMCszeE0xb0F0V1gxVUEzZUVsY01WU3FPUStHbFpwa0w3ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTQ5NDc1NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "GK-FY",
  packname: process.env.PACK_NAME || "FYS-PROPERTY🕊️",
  botname : process.env.BOT_NAME  || "FYS-BOT🕊️",
  ownername:process.env.OWNER_NAME|| "GK-FY🕊️",


  errorChat : process.env.ERROR_CHAT || "error contact owner for more information",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
