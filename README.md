# 📋 CRUD Application with React, Node.js, and MySQL

This is a full-stack **CRUD (Create, Read, Update, Delete)** application that enables users to manage user data effectively. Built with **React** on the frontend, **Node.js & Express** on the backend, and **MySQL** for data persistence.

---

## 🚀 Features

* ✅ Add a new user
* ✅ View a list of users
* ✅ Update user information
* ✅ Delete a user
* ✅ Fully responsive UI with real-time updates

---

## 🛠️ Tech Stack

* **Frontend**: React.js
* **Backend**: Node.js, Express.js
* **Database**: MySQL

---

## 🗂️ Project Structure

```
CRUD-application/
├── config/
│   └── db.js                     # Database connection setup
├── controllers/
│   └── userController.js        # Backend logic for user operations
├── routes/
│   └── userRoutes.js            # Express routes for user APIs
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddUser.jsx
│   │   ├── Navbar.jsx
│   │   ├── UpdateUser.jsx
│   │   └── UserList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── server.js                    # Express app entry point
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adityadinkarpatil684/CRUD-application.git
cd CRUD-application
```

### 2. Set up MySQL Database

* Create a MySQL database (e.g., `crud_db`)
* Update database connection in `config/db.js`

### 3. Backend Setup

```bash
npm install
node server.js
```

Server will start on `http://localhost:5000`

### 4. Frontend Setup

```bash
cd src
npm install
npm run dev
```

Frontend will start on `http://localhost:5173`

---

## 🌐 API Endpoints

```
GET     /api/users          -> Fetch all users
POST    /api/users          -> Add new user
PUT     /api/users/:id      -> Update user
DELETE  /api/users/:id      -> Delete user
```

---

## 📸 Screenshots

*(Add screenshots showing form UI, user list, edit view, etc.)*

---

## ✍️ Author

**Aditya Dinkar Patil**
[GitHub](https://github.com/adityadinkarpatil684)

---

## 📃 License

This project is licensed under the **MIT License**.

---

Manage users efficiently with this simple and complete CRUD solution! 🧑‍💻
