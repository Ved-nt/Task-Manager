import { useState } from 'react'

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedDescription = description.trim()

    if (!trimmedTitle) {
      return
    }

    onAddTask({ title: trimmedTitle, description: trimmedDescription })
    setTitle('')
    setDescription('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <label htmlFor="task-title">Task Title</label>
      <input
        id="task-title"
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="task-description">Description</label>
      <textarea
        id="task-description"
        placeholder="Enter task details"
        rows="4"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTask
