const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos"


function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); /* → todo 배열이 추가되는거임 */
}


function deleteToto(event) {
  const li = event.target.parentElement
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 아래 코드와 같은 결과 도출
  li.remove();
  saveTodos();
}

/* toDos 리스트의 array가 존재하는 상태 
    function sexyFilter (todo) { return toDo.id !== li.id};
    toDos.filter(sexyFilter); */



function paintTodo(newTodo) {
   const li = document.createElement("li");
   li.id = newTodo.id
   const span = document.createElement("span");
   span.innerText = newTodo.text;
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
    const newTodosOj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodosOj);
    paintTodo(newTodosOj);  /* 화면에 구현하는 함수*/
    saveTodos();        /*local storage에 저장하는 함수(새로고침해도 사라지지않음)*/
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);


if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}