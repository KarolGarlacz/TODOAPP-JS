//SELECTORS
const h1Text = document.querySelector(".text");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

const txt = "TODO LIST";

let indexText = 0;

const addLetter = () => {
  h1Text.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexType);
};

const indexType = setInterval(addLetter, 800);

//EVENT LISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteChacked);
filterOption.addEventListener("click", filterTodo);

function addTodo(event) {
  if (todoInput.value === "") {
    alert("Puste");
  } else {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // CHECK BUTTON
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"><i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"><i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //CLEAR TO DO INPUT
    todoInput.value = "";
  }
}
function deleteChacked(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
