function TaskCard({ task, onToggleComplete, onDeleteTask }) {
  return (
    <article className={`task-card ${task.completed ? 'done' : ''}`}>
      <div>
        <h3>{task.title}</h3>
        {task.description ? <p>{task.description}</p> : <p>No description added.</p>}
      </div>

      <div className="task-actions">
        <button type="button" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Mark Pending' : 'Mark Done'}
        </button>
        <button type="button" className="danger" onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskCard
