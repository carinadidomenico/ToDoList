let digitar = document.querySelector ("#digitar");
let add = document.querySelector ("#add");
let tarefas = document.querySelector ("#tarefas");

add.addEventListener ('click', function(){
    tarefas.innerHTML += `<p> ${digitar.value} </p>`;
    

})