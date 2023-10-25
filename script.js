function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
    } else {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskInput.value;

        taskItem.onclick = function () {
            taskItem.style.textDecoration = "line-through";
        };

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
