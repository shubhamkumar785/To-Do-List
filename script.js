
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${taskText}</strong> - Priority: ${priority} - Due: ${dueDate}</span>
      <button onclick="removeTask(this)">Clear</button>
    `;
    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = '';
    document.getElementById('dueDate').value = '';
  }

  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }

  function clearAllTasks() {
    document.getElementById('taskList').innerHTML = '';
  }

  // Dark Mode Toggle
  document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Optional: toggle button text
    this.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

