# Task Manager – MERN Assignment :-

##  Project Overview :

  This project is a full-stack MERN (MongoDB, Express, React, Node.js) CRUD application developed as part of the internship assignment.

  The application allows users to manage tasks through a responsive web interface with full Create, Read, Update, and Delete functionality. It also includes search and filtering features along with an animated landing page inspired by the provided reference website.

## Features :

  1. Animated landing page (desktop & mobile responsive)
  2. View tasks in table format
  3. Create new task
  4. Edit existing task (pre-filled form)
  5. Delete task
  6. Search tasks by title
  7. Filter tasks by status
  8. MongoDB Atlas database integration
  9. RESTful API using Express & Node.js

## Project Structure :

taskManager_MERNassignment/
├── frontend/              # React application (React + React Router Dom)
│   ├── src/
│   │   ├── components/    # Reusable components (Header, Footer, Hero, etc.)
│   │   ├── pages/         # Page components (TaskTable, AddTask, EditTask)
│   │   ├── context/       # React Context for state management (TaskContext)
│   │   ├── services/      # API service layer (TaskAPI)
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
└── backend/           # Node.js + Express API server + MongoDB atlas
|   ├── config/        # Database configuration
|   ├── models/        # Mongoose schemas
|   ├── controllers/   # Route controllers
|   ├── routes/        # API routes
|   └── server.js
|   └── .env           # secure database key
|
└──  README.md

##  Tech Stack :

  # Frontend 
    1 React (19.2.0)
    2 React Router DOM
    3 Axios
    4 CSS

  # Backend

    1 Node.js
    2 Express.js
    3 MongoDB Atlas
    4 Mongoose
    5 RESTful API

## Running the Application

  1. Start Backend Server (Terminal 1):
    ```bash
    cd backend
    npm start
    ```
    Backend runs on: http://localhost:5000
    
  2. Start Frontend Dev Server (Terminal 2):
    ```bash
    cd frontend
    npm run dev
    ```
    Frontend runs on: http://localhost:5173


##  Database :

  MongoDB Atlas cloud database is used.

  Connection is configured using environment variables in `.env` file to ensure security and portability.

  Create `.env` file inside backend folder: 
          MONGO_URI=mongodb+srv://ritujasonawane_db_user:Rituja454@taskmanagercluster.ydib3w8.mongodb.net/tasks_db?appName=TaskManagerCluster
          PORT=5000


##  Design Choices :

  - Chose a **Task Manager** theme for simplicity and clarity.
  - Used React Router for page navigation.
  - Implemented reusable components for table and forms.
  - Focused on clean UI and responsive layout.
  - Landing page animations implemented using CSS for smooth performance.

  # Landing Page
    - Modern, animated landing page with spotlight effects
    - Google Fonts integration (Fraunces, Space Grotesk)
    - Responsive design
    - Hero section with CTAs
    - Features, Testimonials, and FAQ sections

  # Task Management
    -  Create tasks with title, description, and status
    -  Edit existing tasks
    -  Delete tasks with confirmation
    -  Filter tasks by status (All, Pending, In Progress, Completed)
    -  Search tasks by title/description
    -  Real-time updates with MongoDB

## API Endpoints

    Base URL: `http://localhost:5000/api`

    | Method | Endpoint | Description |
    |--------|----------|-------------|
    | GET    | `/tasks` | Get all tasks |
    | GET    | `/tasks/:id` | Get single task |
    | POST   | `/tasks` | Create new task |
    | PUT    | `/tasks/:id` | Update task |
    | DELETE | `/tasks/:id` | Delete task |
    | GET    | `/health`| API health check |

