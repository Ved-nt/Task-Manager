const STORAGE_KEY = 'task-manager-tasks'

export function getTasks() {
  const storedTasks = localStorage.getItem(STORAGE_KEY)

  if (!storedTasks) {
    return []
  }

  try {
    return JSON.parse(storedTasks)
  } catch {
    return []
  }
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}
