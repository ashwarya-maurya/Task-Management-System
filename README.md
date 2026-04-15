<h1 align="center">Task Management System</h1>

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/LocalStorage-FFD966?style=for-the-badge" />
<img src="https://img.shields.io/badge/Role--Based-4FD1A5?style=for-the-badge" />
</p>

---

## 🟦 Overview

A comprehensive **Task Management Dashboard** designed to streamline workflows between administrators and employees. The application features a secure, role-based interface where admins can assign tasks and monitor progress, while employees can view and update their specific assignments in real-time.

### Highlights

- **Dual-Role Architecture:** Distinct dashboards for Admin and Employee views  
- **Persistent Sessions:** Uses localStorage for authentication and data persistence  
- **Modern UI:** Built with React Hooks and Tailwind CSS for a responsive experience  
- **Scalable Design:** Modular component structure for easy feature expansion  

---

## 🟩 Tech Stack

- **Frontend:** React.js (Hooks, Functional Components)  
- **Styling:** Tailwind CSS (Responsive Design)  
- **State/Auth:** localStorage & Context-like state management  
- **Icons:** React Icons or Lucide (if applicable)  

---

## 🟨 Features

### Admin Dashboard
- Create and assign tasks to specific employees  
- Track task status (Active, New, Completed, Failed)  
- Real-time task summary cards  

### Employee Dashboard
- View personalized task lists  
- Accept or complete tasks with status updates  

### Security
- Login system with role validation  
- Protected routes based on user type  

---

## 🟪 Preview

<p align="center">
<img src="/images/Admin Dashboard.png" alt="Admin Dashboard" style="border-radius:10px; width:45%;">
<img src="/images/Employee Dashboard.png" alt="Employee Dashboard" style="border-radius:10px; width:45%;">
</p>

---

## 🟧 Project Structure

```plaintext
📦 task-management-system
├── src
│   ├── components
│   │   └── Dashboard    
│   ├── context         
│   ├── utils
│   │   └── LocalStorage          
│   ├── App.jsx         
│   └── main.jsx       
└── public              
```

---

## 🟫 Usage

1. **Clone**

```bash
git clone https://github.com/ashwarya-maurya/Task-Management-System.git
cd Task-Management-System
```

2. **Install Dependencies** `npm install`

3. **Run Development Server** `npm run dev`

---
