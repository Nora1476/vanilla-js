const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];


function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); /* → todo 배열이 추가되는거임 */
}


function deleteToto(event) {
  const li = event.target.parentElement
  li.remove();
}


function paintTodo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;
   const button = document.createElement("button")
   button.innerText="❌";
   button.addEventListener("click", deleteToto)

   li.appendChild(span);
   li.appendChild(button);
  
   toDoList.appendChild(li);

}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);  /* 화면에 구현하는 함수*/
    saveTodos();        /*local storage에 저장하는 함수(새로고침해도 사라지지않음)*/
}

toDoForm.addEventListener("submit", handleTodoSubmit)