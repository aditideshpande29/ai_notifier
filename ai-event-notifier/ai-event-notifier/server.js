const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Webhook route
app.post("/webhook", async (req, res) => {

  const commit = req.body.head_commit;

  if (!commit) {
    return res.sendStatus(200);
  }

  const message = commit.message;
  const author = commit.author.name;

  console.log("Commit received:", message);

  try {

    const aiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `Summarize this GitHub commit and explain its impact:\n${message}`
          }]
        }]
      }
    );

    const summary =
      aiRes.data.candidates[0].content.parts[0].text;

    console.log("AI Summary:");
    console.log(summary);

  } catch (err) {
    console.log("Gemini error:", err.message);
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
// webhook test change
