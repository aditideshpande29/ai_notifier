/* ================================
   IMPORTS
================================ */
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

/* ================================
   CONFIG
================================ */
dotenv.config();

const app = express();
app.use(bodyParser.json());

/* ================================
   TEST ROUTE
================================ */
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

/* ================================
   GEMINI FUNCTION
================================ */
async function getSummary(message) {
  try {

    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `Summarize this GitHub commit and explain its impact:\n${message}`
          }]
        }]
      }
    );

    return res.data.candidates[0].content.parts[0].text;

  } catch (err) {

    console.log("\n❌ Gemini Error:");
    console.log(err.response?.data || err.message);

    return "AI summary failed.";

  }
}

/* ================================
   GITHUB WEBHOOK
================================ */
app.post("/webhook", async (req, res) => {

  const commit = req.body.head_commit;

  if (!commit) {
    console.log("No commit data received");
    return res.sendStatus(200);
  }

  const message = commit.message;
  const author = commit.author.name;

  console.log("\n🚀 Commit received");
  console.log("Author:", author);
  console.log("Message:", message);

  /* ---- AI SUMMARY ---- */
  const summary = await getSummary(message);

  console.log("\n🧠 AI Summary:");
  console.log(summary);

  res.sendStatus(200);
});

/* ================================
   START SERVER
================================ */
app.listen(3000, () => {
  console.log("\nServer running on port 3000 🚀");
});
