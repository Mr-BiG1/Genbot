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