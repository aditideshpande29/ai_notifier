/* ================================
   IMPORTS
================================ */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

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
app.post("/webhook", (req, res) => {

  const commit = req.body.head_commit;

  if (!commit) {
    console.log("No commit data received");
    return res.sendStatus(200);
  }

  latestCommit = commit.message;

  console.log("\n🚀 Commit received");
  console.log("Message:", latestCommit);

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
