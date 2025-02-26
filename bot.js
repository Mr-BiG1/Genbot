// const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
// const qrcode = require("qrcode-terminal");
// const axios = require("axios");
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

// async function startBot() {
//     const { state, saveCreds } = await useMultiFileAuthState("auth_info");
//     const sock = makeWASocket({
//         auth: state,
//         printQRInTerminal: true,
//         syncFullHistory: false,
//         emitOwnEvents: false,
//     });

//     sock.ev.on("creds.update", saveCreds);

//     sock.ev.on("connection.update", async (update) => {
//         const { connection, lastDisconnect } = update;

//         if (connection === "close") {
//             const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
//             console.log("⚠️ Disconnected. Reason:", lastDisconnect?.error);
            
//             if (shouldReconnect) {
//                 console.log("🔄 Reconnecting in 10 seconds...");
//                 setTimeout(startBot, 10000);
//             } else {
//                 console.log("Logged out. Please scan QR again.");
//                 process.exit();
//             }
//         } else if (connection === "open") {
//             console.log("Connected to WhatsApp!");
//         }
//     });

//     sock.ev.on("messages.upsert", async (m) => {
//         try {
//             const msg = m.messages[0];
//             if (!msg.message || msg.key.fromMe) return;

//             const sender = msg.key.remoteJid;
//             let text = msg.message.conversation || msg.message.extendedTextMessage?.text || "";

//             console.log(` Message from ${sender}: ${text}`);

//             let aiResponse = "";

//             if (text.toLowerCase() === "!help") {
//                 aiResponse = "🤖 *AI Bot Help Menu*\n\n- *!help*: Show this message\n- *Ask anything* and I'll try to respond!";
//             } else if (text.toLowerCase() === "!joke") {
//                 aiResponse = "😂 Here's a joke: Why don't programmers like nature? Because it has too many bugs!";
//             } else {
//                 aiResponse = await getAIResponse(text);
//             }

//             await sock.sendMessage(sender, { text: aiResponse });
//         } catch (error) {
//             console.error("❌ Error processing message:", error);
//         }
//     });
// }

// // ✅ Fixed Gemini API Authentication

// async function getAIResponse(userInput) {
//     try {
//         const result = await model.generateContent(userInput);
//         const response = await result.response.text();
//         return response || "⚠️ AI is currently unavailable.";
//     } catch (error) {
//         console.error("❌ Error with Gemini API:", error.response?.data || error);
//         return "⚠️ AI is currently unavailable.";
//     }
// }


// // Start the bot
// startBot();

const connectWhatsApp = require("./server/services/whatsapp");
const getAIResponse = require("./server/services/ai");
const commands = require("./server/bot/commands");
const { isCommand } = require("./server/bot/utils");



async function onMessageReceived(sock, sender, text) {
    let response = "";

    if (isCommand(text)) {
        response = commands[text] ? commands[text]() : "!! Unknown command !!";
    } else {
        response = await getAIResponse(text);
    }

    await sock.sendMessage(sender, { text: response });
}

connectWhatsApp(onMessageReceived);