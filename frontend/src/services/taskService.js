const API_URL = "http://localhost:8080/tasks";

export const getTasks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}


//ADDING A NEW TASK
export const addTask = async(task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...task,
      status: "Pending"
    }),
  });

  if(!res.ok) throw new Error("Failed to add task");
  return res.json();
};


//UPDATE AN EXISTING TASK
export const updateTask = async(id, updateFields) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateFields),
  });
  if(!res.ok) throw new Error("Failed to update task");
  return res.json();
};

//DELETE A TASK
export const deleteTask = async(id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if(!res.ok) throw new Error("Failed to delete task");
};