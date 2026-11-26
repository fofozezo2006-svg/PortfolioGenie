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

## 🔑 Backend Environment Variables

Create a `.env` file inside the `Backend` directory and configure the following environment variables:

```env
APP_NAME=PortfolioGenie
PORT=5000
NODE_ENV=development
HOST_NAME=localhost

DB_CONNECTION_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRE_DATE=90d

MAIL_HOST=your_mail_host
MAIL_PORT=your_mail_port
MAIL_USER=your_mail_username
MAIL_PASSWORD=your_mail_password
```

| Variable | Description |
|---|---|
| `APP_NAME` | Application name |
| `PORT` | Backend server port |
| `NODE_ENV` | Application environment (development/production) |
| `HOST_NAME` | Server hostname |
| `DB_CONNECTION_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `JWT_EXPIRE_DATE` | JWT token expiration period |
| `MAIL_HOST` | SMTP server hostname |
| `MAIL_PORT` | SMTP server port |
| `MAIL_USER` | Email account username |
| `MAIL_PASSWORD` | Email account password |

**Note:** Never commit your actual `.env` file or expose sensitive credentials on GitHub. Use placeholder values in `.env.example` instead.

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

## 🔗 API Routes

The backend provides RESTful API endpoints for authentication, user management, and portfolio management.

### 🔐 Authentication Routes

Base path: `/api/v1/auth`

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/signup` | Register a new user | Public |
| POST | `/signin` | Authenticate a user | Public |
| POST | `/forgotPassword` | Request a password reset code | Public |
| POST | `/verifyResetCode` | Verify the password reset code | Public |
| POST | `/resetPassword` | Reset account password | Public |

### 👤 User Routes

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/v1/me` | Get current user information | Private |
| PATCH | `/api/v1/me/changePassword` | Change account password | Private |
| PATCH | `/api/v1/me/update` | Update user information | Private |
| DELETE | `/api/v1/me/delete` | Delete user account | Private |

### 📁 Portfolio Routes

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/v1/portfolios` | Create a portfolio | Private |
| GET | `/api/v1/portfolios` | Get authenticated user's portfolios | Private |
| GET | `/api/v1/portfolios/:id` | Get portfolio by ID | Private |
| PATCH | `/api/v1/portfolios/:id` | Update portfolio | Private |
| DELETE | `/api/v1/portfolios/:id` | Delete portfolio | Private |
| PATCH | `/api/v1/portfolios/:id/publish` | Publish a portfolio | Private |
| GET | `/api/v1/portfolios/slug/:slug` | Get a public portfolio by slug | Public |

**Access Levels:**
- **Public:** Accessible without authentication.
- **Private:** Requires a valid JWT authentication token.
---

## 🎯 Project Goals

PortfolioGenie aims to simplify the process of building an online professional presence by providing developers with an accessible platform to showcase their skills, projects, and experience.

The goal is to make creating and sharing a professional portfolio simple, customizable, and accessible to everyone.

