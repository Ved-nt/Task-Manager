import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

function Tasks({ mode, tasks, onAddTask, onToggleComplete, onDeleteTask }) {
  if (mode === 'add') {
    return (
      <section className="tasks-page">
        <AddTask onAddTask={onAddTask} />
      </section>
    )
  }

  return (
    <section className="tasks-page">
      <h1>All Tasks</h1>
      <TaskList
        tasks={tasks}
        onToggleComplete={onToggleComplete}
        onDeleteTask={onDeleteTask}
      />
    </section>
  )
}

export default Tasks
