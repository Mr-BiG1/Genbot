module.exports = {
    isCommand: (text) => typeof text === "string" && text.startsWith("!")
};
