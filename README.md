# 📧 BulkMail – Bulk Email Sending Application

BulkMail is a full-stack web application that allows users to upload a list of email addresses from an Excel file, compose an email, preview the content, and send emails to multiple recipients.

The project is built using React for the frontend and Node.js, Express.js, MongoDB, and Nodemailer for the backend.

## 🚀 Live Demo

🌐 **Frontend:**  
https://bulkmail-amber.vercel.app/

> The frontend is deployed on Vercel. The complete email-sending functionality can be tested by running the backend locally.

---

## ✨ Features

- 📤 Upload email contacts using an Excel file
- 📋 Extract email addresses from Excel
- ✍️ Compose email subject and message
- 👀 Live email preview
- 📧 Send emails to multiple recipients
- 🌙 Dark mode support
- 🔔 Success and error notifications
- 📱 Responsive user interface
- 🔗 Frontend and backend integration
- 📦 REST API communication

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript
- Axios
- React Icons
- React Hot Toast
- XLSX
- React Context API

### Backend

- Node.js
- Express.js
- Nodemailer
- MongoDB
- Mongoose
- CORS

### Deployment

- Vercel – Frontend
- MongoDB Atlas – Database

---

## 📂 Project Structure

    BulkMail/
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── assets/
    │   │   ├── usecontext/
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   │
    │   ├── package.json
    │   └── ...
    │
    ├── backend/
    │   ├── index.js
    │   ├── package.json
    │   └── .env
    │
    ├── .gitignore
    └── README.md

---

## ⚙️ How to Run the Project Locally

### 1. Clone the Repository

Clone the GitHub repository:

    git clone https://github.com/Karthik27345/bulkmail.git

Go to the project folder:

    cd BulkMail

---

## 🖥️ Frontend Setup

Go to the frontend folder:

    cd frontend

Install the required dependencies:

    npm install

Start the frontend development server:

    npm run dev

The frontend will normally run at:

    http://localhost:5173

---

## ⚙️ Backend Setup

Open another terminal.

Go to the backend folder:

    cd backend

Install the required dependencies:

    npm install

Create a `.env` file inside the backend folder.

Add your MongoDB connection string:

    MONGO_URL=your_mongodb_connection_string

Start the backend:

    npm start

The backend will normally run at:

    http://localhost:8000

---

## 📧 Email Configuration

The backend uses Nodemailer with Gmail SMTP for sending emails.

For local testing, configure your Gmail credentials securely.

If you are using Gmail, it is recommended to use a Gmail App Password instead of your normal Gmail password.

Do not publish your email password or App Password on GitHub.

---

## 📊 Excel File Format

The application accepts an Excel file containing email addresses.

Example:

    Email
    example1@gmail.com
    example2@gmail.com
    example3@gmail.com

The application reads the email addresses from the Excel file and sends them to the backend.

---

## 🔄 Application Flow

    User
      ↓
    Upload Excel Contact List
      ↓
    React Frontend
      ↓
    Extract Email Addresses
      ↓
    Compose Email
      ↓
    Preview Email
      ↓
    Send Request using Axios
      ↓
    Node.js + Express Backend
      ↓
    MongoDB
      ↓
    Nodemailer
      ↓
    Gmail SMTP
      ↓
    Email Recipients

---

## 🔐 Security

Sensitive information should never be committed to GitHub.

Make sure your `.env` file is included in `.gitignore`.

Example `.gitignore`:

    .env
    node_modules

You can create an `.env.example` file for other developers.

Example:

    MONGO_URL=your_mongodb_connection_string

Never publish:

- MongoDB passwords
- Gmail passwords
- Gmail App Passwords
- API keys
- Private credentials

---

## 🎯 Project Purpose

This project was developed as a full-stack web development project to understand and implement:

- React component development
- React Context API
- Excel file processing
- REST API communication
- Node.js and Express.js
- MongoDB database connectivity
- Email automation using Nodemailer
- Frontend and backend integration
- API requests using Axios
- Frontend deployment using Vercel

---

## 📌 Deployment

### Frontend

The frontend application is deployed on Vercel.

🌐 **Live Application:**

https://bulkmail-amber.vercel.app/

### Backend

The Nodemailer-based backend is designed to be run locally for complete email-sending functionality.

The backend uses:

- Node.js
- Express.js
- MongoDB
- Nodemailer
- Gmail SMTP

---

## 💡 Important Note

The live Vercel deployment is primarily provided to demonstrate the frontend application.

For complete email-sending functionality, clone the GitHub repository and run the backend locally with your own MongoDB and Gmail configuration.

This allows the user to test the complete application locally.

---

## 👨‍💻 Developer

### Karthik V

B.E. Electronics and Communication Engineering

### Technologies

React | JavaScript | Tailwind CSS | Node.js | Express.js | MongoDB | Nodemailer

---

## ⭐ Feedback

If you find this project useful, feel free to explore the source code and try the application.
