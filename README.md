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
├── server.
```
