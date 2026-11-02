# ✦ BlogSphere - Modern Digital Publishing Platform

A responsive, feature-rich multi-page blogging web application built with clean HTML5, CSS3, and modern Vanilla JavaScript (ES6+). BlogSphere allows authors and readers to create, discover, search, edit, and engage with articles through an intuitive, persistent user experience powered by browser `localStorage`.

---

## 📁 Project Structure

```
BlogSphere/
├── index.html          # Public Landing Page, Hero & Filterable Blog Feed
├── login.html          # User Authentication & Demo Sign-in
├── register.html       # New Account Registration
├── dashboard.html      # Author Dashboard & Article Management
├── create-blog.html    # Markdown Article Editor & Post Creator
├── css/
│   └── style.css       # Complete Responsive Design System (Light/Dark themes)
├── js/
│   └── app.js          # Core Application Logic, State & LocalStorage Manager
└── README.md           # Documentation & Usage Guide
```

---

## ✨ Features & Highlights

### 1. 🏠 Dynamic Blog Feed & Discovery (`index.html`)
- **Instant Search**: Real-time filtering across titles, excerpts, tags, and author names.
- **Category Filter Chips**: Filter posts by Technology, Design, AI & Data, Lifestyle, and more.
- **Sorting Options**: Sort by Latest First, Most Popular (Likes), or Oldest.
- **Interactive Article Modal**: Click "Read" or post titles to read formatted markdown articles in a distraction-free dialog with a one-click share button.
- **Like Interaction**: Toggle likes with live counter updates saved to storage.

### 2. 🔐 Authentication System (`login.html` & `register.html`)
- **Sign In & Register**: Validation for names, usernames, emails, and passwords.
- **Show/Hide Password**: Convenient visibility toggles for inputs.
- **One-Click Demo Credentials**: Easily test the application using the pre-configured demo account button.
- **State Persistence**: Session state is preserved across page reloads and tab navigations.

### 3. 📊 Creator Dashboard (`dashboard.html`)
- **Author Profile Summary**: Custom avatar, author name, handle, and bio.
- **Performance Metrics**: Live statistics displaying Total Articles, Total Likes, and Estimated Views.
- **Article Management Table**: View published articles and drafts, edit existing posts, or permanently delete posts with confirmation dialogs.

### 4. ✍️ Markdown Article Editor (`create-blog.html`)
- **Dual Mode (Write & Live Preview)**: Toggle between writing markdown and viewing parsed HTML in real time.
- **Formatting Toolbar**: Quick-insert buttons for Bold, Italic, Headings (H2, H3), Blockquotes, Inline Code, Code Blocks, and Lists.
- **Preset Cover Chooser**: One-click selection of curated Unsplash covers or custom image URL input.
- **Drafts & Publishing**: Save articles as "Draft" or publish immediately to the public feed.
- **Edit Mode**: Passing `?id=<blog_id>` in the URL automatically pre-populates the editor for editing existing posts.

### 5. 🎨 Design System & Accessibility (`css/style.css`)
- **Light & Dark Mode**: Persistent theme switcher using CSS custom properties (`--bg-body`, `--bg-card`, `--primary`, etc.).
- **Mobile First & Responsive**: Optimized for phones, tablets, and wide desktop displays with hamburger navigation.
- **Feedback & Notifications**: Non-intrusive floating toast notification system.

---

## 🚀 Getting Started

No build tools, compilation steps, or backend servers are required!

### Option 1: Open Directly in Your Browser
Simply double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option 2: Run with a Local Static Server
If you prefer running via a local development server:

Using Python:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

Using Node.js (`serve` or `http-server`):
```bash
npx serve .
```

---

## 🛠️ Technology Stack

- **HTML5**: Semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: Custom properties (CSS variables), CSS Grid, Flexbox, smooth transitions, glassmorphism.
- **JavaScript (ES6+)**: Modular functions, URLSearchParams, DOM manipulation, custom event listeners.
- **Storage**: Browser `localStorage` for offline persistence of users, blogs, and preferences.

