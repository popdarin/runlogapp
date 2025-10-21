# 🏃 RunLog Diary – With Random Motivational Quotes

RunLog Diary is a simple and interactive web application built with **React + TypeScript** that allows users to log their daily runs and get a **random motivational quote** for encouragement. This project is built as part of the **JavaScript + React final challenge** .

## 🌟 Features

- Add your daily run log: date, distance, pace, and a short note.
- Generate and display a **random quote** (from [quotable.io](https://api.quotable.io)) before saving your run.
- Display your logs as **responsive cards** for a better viewing experience.
- Built with **Functional Components**, and **TypeScript typing**.

## 🔧 Technologies Used

- React + TypeScript
- Fetch API (for quote API)
- HTML & CSS (custom styling)


## 📦 Installation & Run

```bash
# 1. Clone the repo
git clone https://github.com/your-username/runlog-app.git
cd runlog-app

# 2. Install dependencies
npm install

# 3. Run the app locally
npm run dev
```

> Recommended: Use [Vite](https://vitejs.dev/) for lightning-fast development server.

## 📸 Demo Preview

> Demo site coming soon via Netlify/Vercel...

![RunLog Screenshot](./screenshot.png)

## 📂 Folder Structure

```
├── public/
├── src/
│   ├── App.tsx         # Main app logic and components
│   ├── assets/
│   │   └── RunItem.tsx # Reusable Run card component
│   ├── index.css       # Styling
│   └── main.tsx        # Entry point
├── README.md
└── package.json
```

## 📃 API Reference

Quotes are fetched from:

https://api.quotable.io/random?tags=fitness|inspirational


Example response:
json
{
  "content": "Push yourself, because no one else is going to do it for you.",
  "author": "Anonymous"
}
