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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_10_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDkwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTZvM2tIUXZzU2hFaFBBbGtKc0I1aWR3RUxaQkNRLzdmalBQRTlTSVFCWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMDM3MjUyNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZCRjFCMEM4OUQ3QkFBNzY5OEI1RTgxMEUxMUVCNzEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQyMDIwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIcy1NRjhHVVIxQzVKamdQdTJVNTF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmM2IyMWFjLTJmYWQtNGUwZi05Y2ZlLWU0NjIwMmI2NzA4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxOTksXG4gICAgICA5LFxuICAgICAgMSxcbiAgICAgIDg4LFxuICAgICAgMjcsXG4gICAgICAyMzYsXG4gICAgICAxMzQsXG4gICAgICAxMDQsXG4gICAgICAxODIsXG4gICAgICAxMjYsXG4gICAgICAxNjMsXG4gICAgICAyMjMsXG4gICAgICAyNTAsXG4gICAgICA5OSxcbiAgICAgIDIyNyxcbiAgICAgIDMzLFxuICAgICAgMTYwLFxuICAgICAgNzUsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAyMDgsXG4gICAgICA1MCxcbiAgICAgIDEwNyxcbiAgICAgIDU1LFxuICAgICAgMjA3LFxuICAgICAgODEsXG4gICAgICA3MCxcbiAgICAgIDIxMyxcbiAgICAgIDY0LFxuICAgICAgMTg0LFxuICAgICAgMjUsXG4gICAgICAxNjksXG4gICAgICAxOCxcbiAgICAgIDMwLFxuICAgICAgMjQ3LFxuICAgICAgMjI5LFxuICAgICAgMjM1LFxuICAgICAgNTEsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkNZTTczRDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwMzcyNTI2ODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1SLiBTSVZBUlwiLFxuICAgIFwibGlkXCI6IFwiMTk5ODAyMzMxNjQ4MTE0OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyOHU1RUJFS1dCOTdJR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSjNVL25EMU9NNU1yOUFTaGhFbitUNEF6dXM3VWVWdENDNHdVTFpBcC9odz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtWWlEVGsyQ1IycGJ6L0gvNkVjR2ovQms0SFpaL1k4UkExYWVaV3Y0ZTl3T3hXMHVkZ01lUzhzZWlJZkpiRzJrcWxVYURMMjJiUFhHOVFFVkFqQ2ZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyNys4SWJ4cEpWL093a1l5b2Y2QmcyTjkwWFdLbmtXMXNPSEdvNElrZFdFZWtsNlVLTHpQS291c2g4V1NUNWN3MmRNSG9pZTZDTFV6bmVLRVM3enZpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDM3MjUyNjg6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0MjAyMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQSGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBIZC5qc29uIjogIntcImtleURhdGFcIjpcIldVVUQ1WjlReVRkUUtyTVFsTFhqVXNueU50alkwdkF6SmgwU0VCaVZVSkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA1MDY5NjEwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


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
