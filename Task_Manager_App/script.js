
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task) => createTaskElement(task));
    };

    // Save tasks to local storage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll(".task-item").forEach((item) => {
            tasks.push(item.querySelector(".task-text").textContent);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // Create a task element
    const createTaskElement = (task) => {
        const li = document.createElement("li");
        li.className = "task-item";

        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task;

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.addEventListener("click", () => {
            const newTask = prompt("Edit task:", span.textContent);
            if (newTask) {
                span.textContent = newTask;
                saveTasks();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
    };

    // Add task event
    addTaskBtn.addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task) {
            createTaskElement(task);
            saveTasks();
            taskInput.value = "";
        }
    });

    // Load tasks on page load
    loadTasks();
});
