// Select the form
const form = document.getElementById("create-task-form");

// Add submit event listener
form.addEventListener("submit", (event) => {
  // Prevent default form submission
  event.preventDefault();

  // ✅ Use name="new-task-description" via event target
  const task = {
    description: event.target.elements["new-task-description"].value
  };

  // Build and display task
  buildToDo(task);

  // Clear the form
  form.reset();
});

// Function to add task to the DOM
function buildToDo(task) {
  // Select the task list
  const taskList = document.getElementById("tasks");

  // Create new list item
  const li = document.createElement("li");

  // Add task text
  li.textContent = task.description;

  // Append to list
  taskList.appendChild(li);
}
