# 🚀 AI Event Notifier

An AI-powered DevOps notification system that detects GitHub commits in real time, summarizes them using AI, and sends alerts to Discord.

This project demonstrates how event-driven systems can be built using webhooks, APIs, and AI services.

---

## 📌 Overview

When a developer pushes code to a repository:

1. GitHub triggers a webhook event.
2. The event is sent to a Node.js server.
3. The server processes the commit information.
4. The frontend dashboard displays the latest commit.
5. AI (Gemini) generates a summary of the commit.
6. A notification is sent to a Discord channel.

This creates a real-time AI-powered monitoring pipeline for development activity.

---

## 🧠 Features

* 🔔 Real-time GitHub commit detection
* 🤖 AI commit summaries using Gemini
* 💬 Automatic Discord notifications
* 🌐 Frontend dashboard to view commits
* ⚡ Event-driven architecture
* 🛠 Local development using ngrok

---

## 🏗 System Architecture

Developer pushes code
↓
GitHub detects commit
↓
Webhook event sent
↓
ngrok tunnel forwards request
↓
Node.js server receives event
↓
Commit stored and processed
↓
Frontend fetches commit
↓
Gemini AI generates summary
↓
Discord webhook sends notification

---

## 🧰 Tech Stack

Backend:

* Node.js
* Express.js

AI:

* Google Gemini API

Notifications:

* Discord Webhooks

Infrastructure:

* GitHub Webhooks
* ngrok (for local tunnel)

Frontend:

* HTML
* JavaScript

Version Control:

* Git
* GitHub

---

## 📂 Project Structure

```
AI-EVENT-NOTIFIER
│
├── server.js           # Backend webhook server
├── index.html          # Frontend dashboard
├── package.json        # Node dependencies
├── package-lock.json
├── .env                # Environment variables (not committed)
├── .gitignore
└── node_modules
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/ai-event-notifier.git
cd ai-event-notifier
```

Install dependencies:

```
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root folder.

Example:

```
DISCORD_WEBHOOK=your_discord_webhook_url
GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Running the Server

Start the backend server:

```
node server.js
```

You should see:

```
Server running on port 3000
```

---

## 🌍 Expose Local Server

Run ngrok to expose the webhook endpoint:

```
ngrok http 3000
```

Copy the public URL and add it to your GitHub webhook settings.

Example:

```
https://xxxx.ngrok-free.dev/webhook
```

---

## 🔔 Setting Up GitHub Webhook

1. Go to your repository on GitHub
2. Navigate to **Settings → Webhooks**
3. Click **Add Webhook**
4. Set payload URL:

```
https://your-ngrok-url/webhook
```

5. Select **application/json**
6. Choose **Push Events**

---

## 💬 Discord Notification Setup

1. Open your Discord server
2. Go to **Channel Settings**
3. Navigate to **Integrations → Webhooks**
4. Create a webhook
5. Copy the webhook URL
6. Add it to your `.env` file

---

## 🧪 Testing the System

Make a commit and push:

```
git commit -m "Added new feature"
git push
```

Expected results:

Server terminal:

```
🚀 Commit received
Message: Added new feature
```

Discord channel:

```
🚀 New Commit
Author: <name>
Message: Added new feature
```

---

## 🚀 Future Improvements

* Add commit history dashboard
* Support multiple repositories
* Add local AI analysis using Gemma
* Risk analysis of commits
* Slack / Email notifications
* Database for storing events
* Deploy server to cloud

---

## 📖 Learning Outcomes

This project demonstrates:

* Webhooks and event-driven architecture
* API integrations
* AI service integration
* Real-time notification systems
* DevOps monitoring workflows

---

## 👨‍💻 Author

Built by **Aditi Deshpande**

---

## 📜 License

MIT License
