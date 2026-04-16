## Task Manager
A full‑stack **Task Management Application** built with **React (frontend)**, **Spring Boot (backend)**, and **TailwindCSS (styling)**.  
This project allows users to create, update, delete, and organize tasks with a modern, responsive UI and a robust backend API.

## 🚀 Features
- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Responsive UI with TailwindCSS
- RESTful API powered by Spring Boot
- Persistent storage with relational database(PostgreSQL)
- Modular frontend components with React
- Clean separation of concerns (frontend ↔ backend)

  ## 🛠️ Tech Stack
**Frontend**
- React
- TailwindCSS
- Axios (for API calls)

**Backend**
- Spring Boot
- Spring Data JPA
- REST API

**Database**
- PostgreSQL (configurable)

## 📂 Project Structure

### Frontend (`frontend/`)
```
frontend/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── AddTask.jsx
│   │   ├── Navbar.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskList.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Tasks.jsx
│   └── services/
│       └── taskService.js

```
### Backend (`taskManager/`)
```
taskManager/
├── pom.xml
├── src/
│   ├── main/java/com/example/taskManager/
│   │   ├── TaskManagerApplication.java
│   │   ├── controller/TaskController.java
│   │   ├── entity/Task.java
│   │   ├── repository/TaskRepository.java
│   │   └── Service/TaskService.java
│   └── main/resources/
│       ├── application.properties
│       ├── static/
│       └── templates/
└── test/java/com/example/taskManager/
└── TaskManagerApplicationTests.java
```

## ⚙️ How It Works

### Frontend (React + Tailwind)
- The frontend is developed and run in **VS Code**.
- Start the app with:
  ```bash
  cd frontend
  npm install
  npm run dev

### Backend (Spring Boot)
- Developed and run in IntelliJ IDEA.
- Open the taskManager project in IntelliJ.
- Run the main class:
     TaskManagerApplication.java
