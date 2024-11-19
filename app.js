const addBtn = document.querySelector("#addBtn");
const taskSec = document.querySelector(".taskSec");
const form = document.querySelector("form");


// Form event listener
form.addEventListener("submit", (event) => {
    display();
    event.preventDefault();
  },
  false,
);


// Display tasks
function display() {
  const inputBar = document.querySelector("#inputBar").value;
  const taskTitle = document.querySelector("#taskTitle").value;
  const yellow = document.querySelector("#yellow");
  const red = document.querySelector("#red");
  const blue = document.querySelector("#blue");
  const green = document.querySelector("#green");
  const noColor = document.querySelector("#noColor");
  const pastelBlue = document.querySelector("#pastelBlue");
  const pastelYellow = document.querySelector("#pastelYellow");
  const pastelPink = document.querySelector("#pastelPink");
  const pastelGreen = document.querySelector("#pastelGreen");
  const noBg = document.querySelector("#noBg");

  // div
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("taskDiv");
  taskSec.appendChild(taskDiv);

  // div for title & task 
  const middle = document.createElement("div");
  middle.classList.add("middle");
  taskDiv.appendChild(middle);

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.setAttribute("type", "checkbox");
  taskDiv.appendChild(checkbox);

  checkbox.addEventListener('change', function() {
    if (this.checked) {
    //   alert("Checkbox is checked..");
    title.style.textDecoration = "line-through";
    title.style.fontStyle = "italic";
    title.style.color = "gray";

    task.style.textDecoration = "line-through";
    task.style.fontStyle = "italic";
    task.style.color = "gray";
    } else {
      //   alert("Checkbox is not checked..");
      title.style.textDecoration = "none";
      title.style.fontStyle = "normal";
      title.style.color = "black";

      task.style.textDecoration = "none";
      task.style.fontStyle = "normal";
      task.style.color = "black";
    }
  });

  // title
  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = taskTitle;
  middle.appendChild(title);

  // task content
  const task = document.createElement("p");
  task.classList.add("task");
  task.textContent = inputBar;
  middle.appendChild(task);

  // delete icon
  const deleteIcon = document.createElement("img");
  deleteIcon.classList.add("deleteIcon");
  deleteIcon.setAttribute("src", "/Images/delete.svg");
  deleteIcon.setAttribute("title", "Delete");
  taskDiv.appendChild(deleteIcon);

  deleteIcon.addEventListener('click', function() {
    taskDiv.parentNode.removeChild(taskDiv);
  });

  // Highlights
  yellow.addEventListener("click", () => {
    taskSec.lastChild.style.borderLeft = "8px solid yellow";
  });

  red.addEventListener("click", () => {
    taskSec.lastChild.style.borderLeft = "8px solid red";
  });

  blue.addEventListener("click", () => {
    taskSec.lastChild.style.borderLeft = "8px solid blue";
  });

  green.addEventListener("click", () => {
    taskSec.lastChild.style.borderLeft = "8px solid green";
  })

  noColor.addEventListener("click", () => {
    taskSec.lastChild.style.borderLeft = "none";
  });

  // bg color
  pastelYellow.addEventListener("click", () => {
    taskSec.lastChild.style.backgroundColor = "#fcf5c7";
  });

  pastelPink.addEventListener("click", () => {
    taskSec.lastChild.style.backgroundColor = "#fce1e4";
  });

  pastelBlue.addEventListener("click", () => {
    taskSec.lastChild.style.backgroundColor = "#d7e3fc";
  });

  pastelGreen.addEventListener("click", () => {
    taskSec.lastChild.style.backgroundColor = "#d6eadf";
  });

  noBg.addEventListener("click", () => {
    taskSec.lastChild.style.backgroundColor = "#e7e9eb";
  });
}


