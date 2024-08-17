var contr = 0;

function addTodo(){
    const inp = document.getElementById("input");
    const todo = document.getElementById("todo");
    const textNode = document.createElement("div");
    textNode.setAttribute("id","todo-" + contr);
    textNode.setAttribute("class","todo")
    textNode.innerHTML = inp.value + '<Button class="deletebutton" onclick="deleteTodo('+contr+ ')">Delete</Button>';
    todo.appendChild(textNode);
    contr +=1;
}

function deleteTodo(index){
    const getElement = document.getElementById("todo-" + index );
    getElement.parentNode.removeChild(getElement);
}