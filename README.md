# ✦ BlogSphere – Modern Digital Publishing Platform

A responsive, feature-rich multi-page blogging web application built using HTML5, CSS3, Vanilla JavaScript (ES6+), Node.js, and Express.js.

BlogSphere allows users to register, log in, create, discover, and manage blog articles through an intuitive interface. The application combines a responsive frontend with a REST API backend for user authentication and blog management.

---

## 📁 Project Structure

```text
BlogSphere/
│
├── index.html                 # Public Landing Page & Blog Feed
├── login.html                 # User Login
├── register.html              # User Registration
├── dashboard.html             # Author Dashboard
├── create-blog.html           # Blog Editor & Publisher
│
├── css/
│   └── style.css              # Responsive Design & Theme Styling
│
├── js/
│   ├── app.js                 # Frontend Application Logic
│   └── api.js                 # Backend API Integration
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js  # Registration & Login Logic
│   │   └── blogController.js  # Blog Management Logic
│   │
│   ├── data/
│   │   ├── users.js           # In-Memory User Storage
│   │   └── blogs.js           # In-Memory Blog Storage
│   │
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication Routes
│   │   └── blogRoutes.js      # Blog Routes
│   │
│   ├── server.js              # Express Server
│   ├── package.json           # Backend Dependencies
│   ├── package-lock.json      # Dependency Lock File
│   └── .env.example           # Environment Variable Template
│
├── .gitignore
└── README.md
```

---

## ✨ Features & Highlights

### 1. 🏠 Dynamic Blog Feed & Discovery

- Instant search across blog titles, excerpts, tags, and author names.
- Category-based filtering.
- Sorting by latest, oldest, and popularity.
- Interactive article reading interface.
- Like interaction with counter updates.

### 2. 🔐 User Authentication

- User registration with input validation.
- User login using email or username.
- Password hashing using bcryptjs.
- Duplicate user validation.
- Login and registration REST APIs.
- Frontend session information stored in browser localStorage.

### 3. 📊 Creator Dashboard

- Author profile summary.
- Total articles, likes, and views statistics.
- View published articles and drafts.
- Edit and delete blog articles.
- Manage personal blog content.

### 4. ✍️ Markdown Article Editor

- Write and preview Markdown content.
- Formatting toolbar for headings, bold, italic, lists, and code blocks.
- Custom cover image URL support.
- Save articles as drafts or publish them.
- Edit existing articles.

### 5. ⚙️ Backend & REST API Development

- Node.js runtime environment.
- Express.js server configuration.
- RESTful API architecture.
- User registration and login endpoints.
- Blog creation and retrieval endpoints.
- JSON request and response handling.
- CORS middleware for frontend-backend communication.
- Password hashing using bcryptjs.

### 6. 🎨 Responsive Design & Accessibility

- Light and dark theme support.
- Responsive layouts for desktop, tablet, and mobile.
- CSS custom properties.
- CSS Grid and Flexbox.
- Toast notifications for user feedback.

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check backend server status |
| GET | `/api/test` | Test API connectivity |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate a user |
| POST | `/api/blogs` | Create a new blog |
| GET | `/api/blogs` | Retrieve all blogs |

### Example Registration Request

```json
{
  "fullname": "Bharath S",
  "username": "bharath",
  "email": "bharath@example.com",
  "password": "your-password"
}
```

### Example Blog Creation Request

```json
{
  "title": "Getting Started with Node.js",
  "content": "Node.js is a JavaScript runtime environment.",
  "category": "Technology",
  "author": "bharath"
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- A modern web browser
- Postman (optional, for API testing)

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd BlogSphere
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
```

The `.env` file is excluded from GitHub. Use `.env.example` as the configuration template.

### Step 4: Start the Backend Server

```bash
npm run dev
```

Backend server:

`http://localhost:5000`

### Step 5: Run the Frontend

Open `index.html` in your browser or use a local static server.

Using Python:

```bash
python -m http.server 8000
```

Open:

`http://localhost:8000`

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Backend | Node.js, Express.js |
| API | REST APIs |
| Authentication | bcryptjs |
| Middleware | CORS, Express JSON |
| Storage | Browser localStorage and in-memory backend arrays |
| API Testing | Postman |
| Version Control | Git and GitHub |

---

## ⚠️ Current Implementation Notes

- Backend user and blog data are currently stored in in-memory JavaScript arrays.
- Data stored in backend arrays resets when the server restarts.
- MongoDB or another persistent database has not yet been integrated.
- The current login API does not issue JWT tokens.
- Blog creation currently accepts the author field from the request body; production applications should implement authenticated ownership and authorization.
- The demo authentication implementation is intended for learning and development, not production deployment.

---

## 🎯 Project Objective

The objective of BlogSphere is to develop a complete blogging platform while learning frontend development, backend development, REST API integration, user authentication, and full-stack web application architecture.

---

## 👨‍💻 Developer

**Bharath S**

B.E. Computer Science and Engineering

---

## 📌 Future Enhancements

- MongoDB database integration.
- JWT-based authentication and authorization.
- Secure blog ownership and access control.
- Comments and bookmarks.
- Image upload functionality.
- Pagination and advanced search.
- Deployment to a cloud platform.

---

⭐ If you find this project useful, consider giving it a star on GitHub.
