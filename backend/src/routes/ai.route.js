import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import Groq from "groq-sdk";

const router = express.Router();

router.post("/polish", protectRoute, async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: "Text is required" });
        }

        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a grammar and spelling correction tool. You receive raw chat messages and output only a corrected version. You never reply to the message content. You never answer questions. You only fix grammar, spelling, punctuation and clarity."
                },
                // Few-shot examples so the model learns the pattern
                { role: "user", content: "Fix: hey how r u" },
                { role: "assistant", content: "Hey, how are you?" },
                { role: "user", content: "Fix: wats up?" },
                { role: "assistant", content: "What's up?" },
                { role: "user", content: "Fix: i wanna go 2 the movies tmrw" },
                { role: "assistant", content: "I want to go to the movies tomorrow." },
                { role: "user", content: "Fix: can u come over 2nite" },
                { role: "assistant", content: "Can you come over tonight?" },
                // Actual user message
                { role: "user", content: `Fix: ${text}` }
            ],
            model: "llama-3.3-70b-versatile",
        });

        const polishedText = (completion.choices[0]?.message?.content || text).trim().replace(/^["']|["']$/g, "");
        res.status(200).json({ polishedText });
    } catch (error) {
        console.error("Error in AI Polish:", error.message);
        res.status(500).json({ error: "Failed to polish text" });
    }
});

export default router;
