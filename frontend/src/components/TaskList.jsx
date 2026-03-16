import TaskCard from './TaskCard'

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add one from the Add Task tab.</p>
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  )
}

export default TaskList
