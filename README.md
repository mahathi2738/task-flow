# 🌸 TaskFlow – Full Stack Task Manager

A modern, responsive Full Stack Task Management Web Application built using the MERN-style architecture with **React, Node.js, Express.js, and MySQL**. TaskFlow helps users organize their daily work, track productivity, and manage tasks efficiently through an intuitive interface.

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Logout

### 📋 Task Management
- Create Tasks
- Edit Tasks
- Delete Tasks
- Mark Tasks as Completed/Pending
- Search Tasks
- Filter Tasks
- Drag & Drop Task Reordering
- Due Date Tracking
- Priority Levels
- Task Categories

### 📊 Dashboard
- Welcome Card
- Live Clock
- Calendar Widget
- Statistics Cards
- Progress Overview
- Goals Section
- Quick Notes
- Responsive Layout

### 📈 Analytics
- Productivity Chart
- Total Tasks
- Completed Tasks
- Pending Tasks
- Completion Rate

### 📅 Calendar
- Overdue Tasks
- Today's Tasks
- Upcoming Tasks

### ⚙️ Settings
- Profile Information
- Dark Mode
- Logout

### 📝 Notes
- Save Quick Notes
- Local Storage Support

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Hot Toast
- Recharts
- DnD Kit

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Authentication
- JWT
- bcrypt

---

# 📂 Project Structure

```
TaskFlow
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── models
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/taskflow.git
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

## Backend

```bash
cd server

npm install

npm start
```

---

# 🗄 Database

Create a MySQL database named

```sql
taskflow
```

Import your SQL file.

Update your database credentials inside

```
server/config/db.js
```

---

# 🔑 Environment Variables

Create a `.env` file inside the server folder.

```
PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=taskflow

JWT_SECRET=your_secret_key
```

---

# Screenshots

## Login

![Login](assets/login.png)

---

## Dashboard

![Dashboard](assets/dashboard.png)

---

## Analytics

![Analytics](assets/analytics.png)

---

## Calendar

![Calendar](assets/calendar.png)

---

# ✨ Future Improvements

- Email Notifications
- Task Reminders
- File Attachments
- Team Collaboration
- Mobile App
- Google Login
- Export Tasks
- Task Labels
- Recurring Tasks

---

# 👩‍💻 Developed By

**Mahathi**

B.Tech – Computer Science & Engineering

Madanapalle Institute of Technology & Science

---

# 📄 License

This project is developed for educational purposes.

---

# ⭐ If you like this project

Please give this repository a ⭐ on GitHub.