const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_59_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDYzLFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjExLFxuICAgICAgICA5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidjE5Tk9hS3VCSjFoalo0NHRjakZ2ekg0a01tOHhBWFk4QnZhRXgyaUY5dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ1E5OEttY0FTWXlhVXZQd3dMTmxrQVwiLFxuICBcInBob25lSWRcIjogXCI0MWZjNWQ1Yy03ODAyLTRiM2EtOGM1Ny04NWE4MDZkNDVjNzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgNjcsXG4gICAgICAzNSxcbiAgICAgIDc0LFxuICAgICAgMTAsXG4gICAgICAxNjMsXG4gICAgICAxNTcsXG4gICAgICAxNDMsXG4gICAgICAyNixcbiAgICAgIDMzLFxuICAgICAgMTgxLFxuICAgICAgMTk5LFxuICAgICAgMjAxLFxuICAgICAgMTQ3LFxuICAgICAgMjYsXG4gICAgICAxMDIsXG4gICAgICAxNTMsXG4gICAgICA2OSxcbiAgICAgIDY5LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDIxLFxuICAgICAgMSxcbiAgICAgIDM4LFxuICAgICAgMTkzLFxuICAgICAgMjYsXG4gICAgICAyMjEsXG4gICAgICA3MixcbiAgICAgIDgyLFxuICAgICAgMTM5LFxuICAgICAgMjM1LFxuICAgICAgMTUxLFxuICAgICAgNixcbiAgICAgIDE3NSxcbiAgICAgIDIwNyxcbiAgICAgIDIzMSxcbiAgICAgIDIyMyxcbiAgICAgIDEwMixcbiAgICAgIDExNixcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNQSkFHRzhHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTQ4NDAwOTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZldC5Eb2N0ZXJcIixcbiAgICBcImxpZFwiOiBcIjE4MzE1OTExNTI3NjI4ODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05LNTA2UUJFTWVMM0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOGFxOU5vZ1VUdHFzb290QktJZVVGSHRCd2VBYTBzamNBb2lSNnA4Wm5Gcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrQmhRZWdib0xKZ29EczVtekpaSWdVUG16QW5FWEo2TS95VEFKR2k0YTU0SDU3R1NpREtZQVhyUXpzaGw5TE9SY3ZFbU9kUy9ZNThiTlY3TFVqVEREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJROGJ3UjduUTNXSVNscmx1MGM4WnUwRlV1aklxS2VjNURHQStSSXpFYUF4TDdRSkVDZzJqS0tSL3ZScFhBTE1KUmgySHN0MkkxL3RjeHFnL3JHWHJoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNTQ4NDAwOTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzc1NjM2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
