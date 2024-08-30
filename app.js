document.getElementById('taskForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    // Send task to the server
    await fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
    });

    // Clear the input
    taskInput.value = '';

    // Refresh the task list
    loadTasks();
});

async function loadTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(taskObj => {
        const li = document.createElement('li');
        li.textContent = taskObj.task;
        taskList.appendChild(li);
    });
}

// Load tasks when the page loads
loadTasks();
