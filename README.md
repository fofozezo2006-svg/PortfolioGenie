# PortfolioGenie

**Build, Customize, and Publish Your Professional Portfolio.**

PortfolioGenie is a full-stack web application that allows users to create, manage, and publish personalized developer portfolios without having to build a website from scratch.

Users can manage their personal information, showcase their projects and educational background, and publish their portfolios through unique, shareable URLs.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login.
- Secure password hashing.
- JWT-based authentication.
- Protected routes.
- Email verification and password recovery.

### 👤 Portfolio Management
- Create and manage personal portfolios.
- Update portfolio information.
- Add and manage projects.
- Showcase educational background.
- Customize portfolio titles and descriptions.
- Choose between different portfolio templates.

### 🌐 Portfolio Publishing
- Publish portfolios publicly.
- Generate unique portfolio URLs using slugs.
- Access published portfolios without authentication.
- Manage portfolio publishing status.

### 🎨 Portfolio Templates
Choose from different design styles:
- Modern
- Minimal
- Creative

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

### Frontend
- React
- TypeScript

---

## 📁 Project Structure

```text
PortfolioGenie/
│
├── Backend/
│   ├── src/
│   │   ├── config/          # Application configuration
│   │   ├── controllers/     # Request handlers
│   │   ├── errors/          # Custom error handling
│   │   ├── middlewares/     # Authentication and validation middleware
│   │   ├── models/          # MongoDB models and schemas
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions and utilities
│   │   └── index.ts         # Backend entry point
│   │
│   ├── .env                 # Environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── Frontend/
│   ├── src/
│   │   ├── api/             # API integration
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── templates/       # Portfolio templates
│   │   ├── App.tsx          # Root application component
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # Frontend entry point
│   │
│   ├── .env                 # Frontend environment variables
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
└── README.md                # Project documentation
```

## ⚙️ Getting Started

Follow these instructions to run PortfolioGenie locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB

### 1. Clone the Repository

```bash
git clone https://github.com/fofozezo2006-svg/PortfolioGenie.git

cd PortfolioGenie
```

### 2. Setup the Backend

```bash
cd Backend

npm install
```

Create a `.env` file in the Backend directory and configure your environment variables.

Example:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=your_jwt_expiration
```

Start the backend:

```bash
npm run dev
```

### 3. Setup the Frontend

Open another terminal:

```bash
cd Frontend

npm install
```

Configure the frontend environment variables if required.

Start the frontend:

```bash
npm run dev
```

---

## 🔗 API Overview

The backend exposes RESTful API endpoints for authentication, user management, and portfolio management.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/signup` | Register a new user |
| POST | `/api/v1/auth/login` | Authenticate a user |
| GET | `/api/v1/me` | Get authenticated user |
| POST | `/api/v1/portfolios` | Create a portfolio |
| GET | `/api/v1/portfolios` | Get user portfolios |
| GET | `/api/v1/portfolios/:id` | Get portfolio by ID |
| PATCH | `/api/v1/portfolios/:id` | Update portfolio |
| DELETE | `/api/v1/portfolios/:id` | Delete portfolio |
| POST | `/api/v1/portfolios/:id/publish` | Publish a portfolio |
| GET | `/api/v1/portfolios/:slug` | Access a public portfolio |

*Note: Adjust endpoint paths to match your implemented routes.*

---

## 🎯 Project Goals

PortfolioGenie aims to simplify the process of building an online professional presence by providing developers with an accessible platform to showcase their skills, projects, and experience.

The goal is to make creating and sharing a professional portfolio simple, customizable, and accessible to everyone.

---

## 👨‍💻 Author

**Youssef Ehab**

Computer Science & Artificial Intelligence Student  
Cairo University

GitHub: [@fofozezo2006-svg](https://github.com/fofozezo2006-svg)

---

⭐ If you find PortfolioGenie interesting, consider giving the repository a star!
