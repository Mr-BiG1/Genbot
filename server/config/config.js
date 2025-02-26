// require('dotenv').config();
const dotenv = require("dotenv")
dotenv.config();
//Load from .env

let data = {
    WHATSAPP_SESSION_PATH: "auth_info",
    GEMINI_API_KEY: process.env.GEMINI_API_KEY, 
    GEMINI_MODEL: "gemini-1.5-flash", 
}

module.exports = data;


