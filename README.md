# HR Time-Off Management Tool (Backend)

## 🛠 Project Overview
This is a **backend API** for an HR Time-Off Management system, built with:

- **Node.js + Express** for the server
- **MongoDB (Mongoose)** for database
- **JWT Authentication** & Role-Based Access Control (RBAC)
- **ES Modules (import/export)** modern structure
- Clean folder structure for maintainability and scalability

**Features:**

1. Employee:
   - Request time off
   - View own requests

2. Manager:
   - Approve or reject employee requests

3. HR:
   - View all time-off requests

---

## 📂 Folder Structure

backend/
│
├── src/
│   ├── app.js
│   ├── server.js
│
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│
│   ├── models/
│   │   ├── user.model.js
│   │   └── timeoff.model.js
│
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.routes.js
│   │   │   └── auth.controller.js
│   │   │
│   │   └── timeoff/
│   │       ├── timeoff.routes.js
│   │       ├── timeoff.controller.js
│   │       └── timeoff.service.js
│
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│
│   ├── routes.js
│   └── utils/
│       └── error.js
│
├── .env
├── package.json
└── README.md

---

## ⚡ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcryptjs
- **Dev Tools:** nodemon
- **Module System:** ES Modules (`import/export`)

---

## 🚀 Installation & Setup

1. Clone the repo:

```bash
git clone https://github.com/Nasfan2296/HR-Tool.git
cd HR-Tool/backend
Install dependencies:

npm install


Setup environment variables (.env):

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/hr_timeoff
JWT_SECRET=your_super_secret_key


Start the server:

npm run dev


Server should start on http://localhost:5000.
