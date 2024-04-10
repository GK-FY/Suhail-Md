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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_18_04_10_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0FCMXZxTmdIR1A5QjQvbmpSS2ZlTWUzQnlJOU1OVkVsZnBWclkxS2lHMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkkwY3dDM08rdW1idk9ZWXl5b25WNlVxV2RyUFZKQmZpWE1mSHZsSWFBVGc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUh6bjhnZzl3ZEQ2c3ViQ1h3L2lHMUExSkVUM29MV1IyR3Z1c2hMTG1GUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlhFL2lZQVNrWVYyL1hiQkR4V2NVTmw1c2tsM1FZVldZRktvOGlzdENkbG89XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUURsZ3JFQzNnNDdoVzRhR3dnWmt1RG9wQWszTjg3N3JsZUNZY1ZJd1pGYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIktPeXVuai9icmdnVXhOb2lGeVpjUnpkd1g5L1BBTVdsUGlFN1lRUWlxMzQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRQUVxMVlEcXdoOWY1dm1UTDZsY0h4Ti95OGZWV1dwcEN1ZjJTaVZVWEVBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOFhyUHo5M2Y3UWpRMlRjVDJiRlYzbFdRMmNHZC9FQUMxdUg4STNRMWZGVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDWUxhWEVBcGhEbklCcjA3bU9HTnlOQmVaelhUUElXWnJrdG5DMEVEN1hrRThVZ0FDSWFqbUh3eHRORXd4YTgrZmRIZzlwN2kxeFJMdDV2NkhLNzhDZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NTMsXCJhZHZTZWNyZXRLZXlcIjpcIm41UjRyRmc2T0VwdzR1dlV0bXpwaU1wN2FUdHFPNGMvTkZxRktQUzFtZlU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3ODQ2NDMwMDdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMTUyNDMzRTU1QkE1MkY1MEFCNTJBRjI4OTExODIyMjNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjc2OTQ3Nn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3ODQ2NDMwMDdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNzA2ODk2QkVDRjYxNjVDMjk1RDk2RTIwOTZCMzg5RjJcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjc2OTQ3N30se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3ODQ2NDMwMDdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiODQyODRCODg0NjBCRUVEQjBDRDJGODAxQjhEQThBRDFcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjc2OTQ4Mn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3ODQ2NDMwMDdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiOTEyMThBMDFDN0QxRjQzRjhERTM1RTRBQjgxREVCRjRcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjc2OTQ4Mn1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInpGTzZiV1pkUnV5ajhqdVZwTGVxWkFcIixcInBob25lSWRcIjpcIjIzN2U2MTcwLWIzY2EtNGEyYy05ZjZiLTFhMmMwZmNjMDM1M1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0hnSjRFWS9ybHExUlNDUW1VN0srZ1Y1T0FrPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFSbk9CUXFNR2E1UE94c2VEVFR1R2YvNThBND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJHWUZNSldUMlwiLFwibWVcIjp7XCJpZFwiOlwiMjU0Nzg0NjQzMDA3OjFAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiOTQxNTg5ODc0OTc2MDY6MUBsaWRcIixcIm5hbWVcIjpcIkouU/CfjLrwn4y68J+MulwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSS9WNXU4REVMNlQyN0FHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInNWeXlJdTdKdGE5STM2ZUVmb2VncmRtT2o1NVIxVW5tQmlIb1NuaS9kMDQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIwZ3JSa3B5L1ZWQ3hIR0Rmay9IM0pQakFENGtncFB1T0s5M21sSkRHcTZ3bzhHeUpVZFV2dFJFWjQ2OXpMT2kwNEJnQ0twN3lrTGNFZnBKbDd4SkdEQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkpMODV1dUdjcHNxRUJveGhlNnlGanE1T2Y4bHpBcG91d0FOSXh1c1ArR1poWFMydThMditUU09NNXBVQzNqMUZOSGtyNnF2QWZQZWhxeUlhZzROSkNBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3ODQ2NDMwMDc6MUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJiRmNzaUx1eWJXdlNOK25oSDZIb0szWmpvK2VVZFZKNWdZaDZFcDR2M2RPXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjc2OTQ3NX0iCn0=" ;


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
