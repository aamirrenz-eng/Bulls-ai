const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Manually parse .env.local to avoid adding 'dotenv' dependency if not present
function loadEnv() {
    try {
        const envPath = path.join(__dirname, '.env.local');
        if (fs.existsSync(envPath)) {
            const content = fs.readFileSync(envPath, 'utf8');
            content.split('\n').forEach(line => {
                const parts = line.split('=');
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    const val = parts.slice(1).join('=').trim().replace(/^"|"$/g, '');
                    if (key && val) process.env[key] = val;
                }
            });
        }
    } catch (e) {
        console.error("Error reading .env.local", e);
    }
}

loadEnv();

async function testConnection() {
    console.log("1. Reading API Key from .env.local...");
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
        console.error("❌ ERROR: No API Key found in .env.local");
        return;
    }
    console.log("✅ Key found: " + apiKey.substring(0, 5) + "...");

    try {
        console.log("2. Connecting to Google Gemini...");
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        console.log("3. Sending Test Message...");
        const result = await model.generateContent("Hello! Are you working?");
        const response = await result.response;
        const text = response.text();

        console.log("\n✅ SUCCESS! The API is working.");
        console.log("🤖 AI Replied: " + text);
    } catch (error) {
        console.error("\n❌ CONNECTION FAILED");
        console.error("Error Details:", error.message);
        if (error.message.includes("404")) {
            console.log("\n⚠️ DIAGNOSIS: The 'Generative Language API' is likely disabled in Google Cloud Console.");
        }
    }
}

testConnection();
