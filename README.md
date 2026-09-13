# n8n AI Chat with Google Docs

An AI-powered chat application built with **Next.js** and **n8n**, connected to **Google Docs** to retrieve and use document content in AI conversations.

## 🎥 Watch the Tutorial

[![n8n AI Chat with Google Docs](https://img.youtube.com/vi/0uHeVYH7ZL8/maxresdefault.jpg)](https://www.youtube.com/watch?v=0uHeVYH7ZL8)

**▶️ [Watch the full tutorial on YouTube](https://www.youtube.com/watch?v=0uHeVYH7ZL8)**

## ✨ Features

* 🤖 AI-powered chat interface
* 🔗 n8n workflow integration
* 📄 Google Docs integration
* 💬 Ask questions about Google Docs content
* ⚡ Next.js frontend
* 🔄 AI workflow automation
* 📱 Responsive interface

## 🛠️ Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **n8n**
* **Google Docs**
* **AI / LLM**
* **Tailwind CSS**

## 🏗️ How It Works

```text
User
  ↓
Next.js Chat Interface
  ↓
n8n Webhook
  ↓
Google Docs
  ↓
Document Content
  ↓
AI Agent / LLM
  ↓
AI Response
  ↓
Next.js Chat Interface
```


## 🔧 Customization

You can extend this project to support:

* Multiple Google Docs
* Multiple documents and knowledge sources
* RAG-based document search
* Different AI models
* Custom AI prompts
* AI agents
* Additional n8n workflows
* Other Google Workspace integrations

## 🌐 Deployment

The Next.js application can be deployed to platforms such as **Vercel**.

Make sure the following environment variable is configured in your production environment:

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=your_production_n8n_webhook_url
```

Your n8n webhook must also be publicly accessible so the deployed application can communicate with it.

## 📚 Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [n8n Documentation](https://docs.n8n.io/)
* [Google Docs API](https://developers.google.com/docs/api)
* [Vercel](https://vercel.com/)

## 🎥 Tutorial

**n8n AI Chat with Google Docs Connection**

https://www.youtube.com/watch?v=0uHeVYH7ZL8

## 📄 License

This project is intended for educational and demonstration purposes.
