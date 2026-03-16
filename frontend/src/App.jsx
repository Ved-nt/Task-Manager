import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import { getTasks, saveTasks } from './services/taskService'

function App() {
  const [activeView, setActiveView] = useState('home')
  const [tasks, setTasks] = useState(() => getTasks())

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const handleAddTask = ({ title, description }) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }

    setTasks((prevTasks) => [newTask, ...prevTasks])
    setActiveView('tasks')
  }

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  const renderPage = () => {
    if (activeView === 'home') {
      return <Home />
    }

    if (activeView === 'add') {
      return (
        <Tasks
          mode="add"
          tasks={tasks}
          onAddTask={handleAddTask}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      )
    }

    return (
      <Tasks
        mode="tasks"
        tasks={tasks}
        onAddTask={handleAddTask}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
    )
  }

  return (
    <div className="app-shell">
      <Navbar activeView={activeView} onNavigate={setActiveView} />
      <main className="app-content">{renderPage()}</main>
    </div>
  )
}

export default App
