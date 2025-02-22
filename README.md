# 🏪 Store Product Catalog Application

This project is a **full-stack catalog application** with a **ReactJS frontend** and a **Node.js + Express + MongoDB backend**. Below are the setup instructions for each part.

---

## 📌 Table of Contents
1. [Backend Setup](#-backend-setup-nodejs--express--mongodb)
2. [Frontend Setup](#-frontend-setup-reactjs--material-ui)

---

## 🛠️ Project Structure

```
/Catalog-Application
│
├── /frontend                # Frontend (React)
│   ├── /public
│   ├── /src
│   │   ├── /components      # Reusable components
│   │   │   ├── ProductFilter.js
│   │   │   ├── ProductList.js
│   │   │   ├── StoreList.js
│   │   │   ├── ProductList.js
│   │   │   ├── ProductDetailsDialog.js
│   │   ├── /context         # Context API for global state management
│   │   │   ├── ApiContext.js
│   │   ├── /utils           # Utility functions
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
├── /server                # Backend (Node.js + Express)
│   ├── /src
|   ├── dotenv.js
│   │   ├── /config        # Database connection
│   │   │   ├── db.js
│   │   ├── /models        # Mongoose models
│   │   │   ├── Product.js
│   │   │   ├── Store.js
│   │   ├── /routes        # API routes
│   │   │   ├── product.js
│   │   │   ├── store.js
│   │   ├── /controllers   # Business logic
│   │   │   ├── product.controller.js
│   │   │   ├── store.controller.js
│   │   ├── server.js       # Main server entry
│   ├── package.json
│
└── README.md              # Project documentation

```

## 📋 API Endpoints

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| GET    | `/api/stores`             | Stores list            |
| GET    | `/api/products/:storeId`  | Stores Product list    |


---

## 🚀 Backend Setup (Node.js + Express + MongoDB)

### **1️⃣ Install Dependencies**
Navigate to the `backend` directory and install required dependencies:
```sh
cd backend
npm install

### **2️⃣ Setup Environment Variables**
Create a .env file inside the backend directory and add the following:
```sh
PORT=any_port_number
MONGO_URI=your_mongodb_connection_string

### **3️⃣ Start the Backend Server**
```sh
npm start

## 🎨 Frontend Setup (ReactJS + Material-UI)

### **1️⃣ Install Dependencies**
Navigate to the frontend directory and install dependencies:
```sh
cd frontend
npm install

### **2️⃣ Start the Frontend**
```sh
npm start
