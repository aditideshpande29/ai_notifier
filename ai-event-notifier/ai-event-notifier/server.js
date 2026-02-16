const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(bodyParser.json());

/* -------------------------------
   Test route (browser check)
--------------------------------*/
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

/* -------------------------------
   GitHub Webhook Route
--------------------------------*/
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

    const aiRes = await axios.post(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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

    console.log("\n🧠 AI Summary:");
    console.log(summary);

  } catch (err) {

    console.log("\n❌ Gemini Error:");
    console.log(err.response?.data || err.message);

  }

  res.sendStatus(200);
});

/* -------------------------------
   Start Server
--------------------------------*/
app.listen(3000, () => {
  console.log("\nServer running on port 3000 🚀");
});
