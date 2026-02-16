/* ================================
   IMPORTS
================================ */
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

/* ================================
   CONFIG
================================ */
dotenv.config();

const app = express();
app.use(bodyParser.json());

/* ================================
   GEMINI SETUP
================================ */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro"
});

/* ================================
   TEST ROUTE
================================ */
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

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

  try {

    console.log("\nSending commit to Gemini AI...");

    const result = await model.generateContent(
      `Summarize this GitHub commit and explain its impact:\n${message}`
    );

    const response = await result.response;
    const summary = response.text();

    console.log("\n🧠 AI Summary:");
    console.log(summary);

  } catch (err) {

    console.log("\n❌ Gemini Error:");
    console.log(err.message);

  }

  res.sendStatus(200);
});

/* ================================
   START SERVER
================================ */
app.listen(3000, () => {
  console.log("\nServer running on port 3000 🚀");
});
// test after enabling API
//wow