# Genbot 🤖 📲

## 📌 Project Overview
This WhatsApp AI Chatbot is a powerful and intelligent assistant that integrates Google's Gemini AI with WhatsApp using the Baileys library. The bot can chat intelligently, handle custom commands (like jokes, quotes, or help), and provide automated responses in a secure and efficient manner.

## ✨ Features
- *Smart AI Responses* – Uses Gemini AI to generate natural and meaningful replies.
- *Custom Commands* – Supports commands like !joke, !quote, and more.
- *WhatsApp Integration* – Connects to WhatsApp Web and listens for in
- *Secure API Handling* – Uses environment variables to protect sensitive keys.
- *Structured & Modular Code* – Organized for scalability and easy maintenance.
-  *revents Bans* – Implements best practices to reduce the risk of being banned by WhatsApp.

## Technologies Used 🛠
- *Node.js* – Backend runtime
- *Google Gemini AI* -  AI-powered responses
- *check-password-strength* for password strength evaluation
- *dotenv* – Secure API key handling
- *qrcode-terminal* – QR Code generation for WhatsApp login

## ⚙️ How It Works
- *User sends a message* → The bot listens via Baileys.
-  *Bot processes the message* → It checks if it’s a command or a general query.
-  ### AI or Predefined Response
-  If it’s a command (!joke), it responds with a predefined message.
-  Otherwise, it sends the message to Gemini AI and retrieves a smart response.
-   *Bot replies on WhatsApp* – The response is sent back to the user.

## Getting Started 🚀

### Prerequisites
Ensure you have *Node.js* and *npm* installed on your machine.

### Installation

1. nstall dependencies:
    bash
    `npm install @whiskeysockets/baileys @google/generative-ai dotenv qrcode-terminal`
    
2. Set up API keys in .env:
    bash
   ` GEMINI_API_KEY=your_google_gemini_api_key_here `
    
3.  Run the bot:
    bash
   ` node src/bot.js `
    
   
### Send a message on WhatsApp
- "Hello" – AI responds with a smart reply
- "!joke" – Sends a joke
- "!quote" – Sends a motivational quote

  
## ⚠️ Preventing WhatsApp Ban

- Use a WhatsApp Business Account
- Limit message frequency to avoid spam detection
-  Avoid sending bulk messages automatically
-  Respond only to relevant messages

## 📌 Why Use This Bot?
- Automate responses on WhatsApp
- Enhance engagement with AI-powered chats
- Personal assistant for quick information
- Fully customizable for different use cases (customer support, chatbots, etc.)
- Ideal for small businesses, AI enthusiasts, and automation lovers! 🚀



## Contributing 🤝
Contributions are welcome! Please feel free to submit issues or pull requests.

  ## License 📝
  This project is licensed under the [LICENSE](LICENSE).
  
  ## Acknowledgements 🙏
  - *GoogleGenerativeAI : * for providing API
  
  ---
  
  Feel free to reach out if you have any questions or feedback!
