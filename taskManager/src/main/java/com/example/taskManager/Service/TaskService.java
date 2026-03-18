package com.example.taskManager.Service;

import com.example.taskManager.entity.Task;
import com.example.taskManager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repo;

    public TaskService(TaskRepository repo){
        this.repo = repo;
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task getTaskById(Integer id){
        return repo.findById(id).orElse(null);
    }

    public Task addTask(Task task) {
        // default status if not provided
        if (task.getStatus() == null || task.getStatus().isEmpty()) {
            task.setStatus("Pending");
        }
        return repo.save(task);
    }

    public Task updateTask(Integer id, Task task) {
        Task existing = repo.findById(id).orElse(null);
        if (existing == null) return null;

        existing.setTitle(task.getTitle());
        existing.setDescription(task.getDescription());
        existing.setPriority(task.getPriority());
        existing.setCategory(task.getCategory());
        existing.setDueDate(task.getDueDate());
        existing.setStatus(task.getStatus());

        return repo.save(existing);
    }

    public void deleteTask(Integer id){
        repo.deleteById(id);
    }
}
