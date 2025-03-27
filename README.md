# URL Shortener using Bitly API

This is a simple and efficient **URL shortener** built using **Next.js** and the **Bitly API**. It allows users to quickly shorten long URLs and manage them efficiently.

## 🚀 Features

- 🔗 **Shorten Long URLs** – Converts long URLs into short, shareable links.
- 📊 **Track Clicks** – Retrieve basic analytics (if enabled in Bitly).
- ⚡ **Fast & Secure** – Ensures quick response times and secure link processing.

## 🛠️ Tech Stack

- **React Vite** – React framework for server-side rendering and static site generation.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Bitly API** – For shortening URLs and retrieving analytics.

## 🔧 Installation & Setup

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Bitly API Key](https://dev.bitly.com/)

### Steps to Install

```bash
# Clone the repository
git clone https://github.com/your-username/url-shortener.git

# Navigate to the project directory
cd url-shortener

# Install dependencies
npm install  # or yarn install
```

### Running the Project Locally

```bash
# Start the development server
npm run dev  # or yarn dev
```

Visit **[http://localhost:3000/](http://localhost:3000/)** in your browser to test the application.

## ⚙️ Environment Variables

Create a **.env.local** file in the root directory and add your Bitly API key:

```env
NEXT_PUBLIC_BITLY_ACCESS_TOKEN=your_bitly_api_key
```
