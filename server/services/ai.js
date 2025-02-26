const { GoogleGenerativeAI } = require("@google/generative-ai");
const configData = require("../config/config");
const dotenv = require("dotenv")
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });

async function getAIResponse(userInput) {
    try {
        const result = await model.generateContent(userInput);
        return await result.response.text();
    } catch (error) {
        console.error("!!::Error with Gemini API:", error.response?.data || error);
        return " AI is currently unavailable !.";
    }
}

module.exports = getAIResponse;