const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const qrCode = require("qrcode-terminal");
const configData = require("../config/config");




async function connectWhatsApp(onMessageReceived) {
    const { state, saveCreds } = await useMultiFileAuthState(configData.WHATSAPP_SESSION_PATH);
    const sock = makeWASocket({ auth: state, printQRInTerminal: true });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection == "close") {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log("Disconnected. Reconnecting...");
            if (shouldReconnect) connectWhatsApp(onMessageReceived);
        } else if (connection === "open") {
            console.log("WhatsApp Connected!::..");
        }
    })

    sock.ev.on("messages.upsert", async (m) => {
        const msg = m.messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;
        const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

        console.log(`<::: Message from ${sender}: ${text}`);
        onMessageReceived(sock, sender, text);
    });
    return sock;
}

module.exports = connectWhatsApp;
