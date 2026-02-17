/* ================================
   IMPORTS
================================ */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const axios = require("axios");

const DISCORD_WEBHOOK =
  "PASTE_YOUR_WEBHOOK_URL_HERE";


/* ================================
   STORE LATEST COMMIT
================================ */
let latestCommit = "No commits yet";

/* ================================
   TEST ROUTE
================================ */
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

/* ================================
   WEBHOOK ROUTE
================================ */
app.post("/webhook", async (req, res) => {

  const commit = req.body.head_commit;

  if (!commit) {
    return res.sendStatus(200);
  }

  const message = commit.message;
  const author = commit.author.name;

  console.log("\n🚀 Commit received");
  console.log("Message:", message);

  /* ---- DISCORD SEND ---- */
  try {

    await axios.post(DISCORD_WEBHOOK, {
      content:
        `🚀 **New Commit**\n` +
        `👤 Author: ${author}\n` +
        `📝 Message: ${message}`
    });

    console.log("Discord notification sent ✅");

  } catch (err) {
    console.log("Discord error:", err.message);
  }

  res.sendStatus(200);
});


/* ================================
   SEND COMMIT TO FRONTEND
================================ */
app.get("/latest", (req, res) => {
  res.json({ message: latestCommit });
});

/* ================================
   START SERVER
================================ */
app.listen(3000, () => {
  console.log("\nServer running on port 3000 🚀");
});
//wow