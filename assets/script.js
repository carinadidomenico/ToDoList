let texto = document.querySelector('#texto');
let btn = document.querySelector('#btn');
let form = document.querySelector ('#form');
let marcar = document.querySelector ('#marcar');
let limpar = document.querySelector ('#limpar');
let tarefas = document.querySelector('#tarefas ul');
let item = document.querySelectorAll ('#li')

//Adicionar as tarefas

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (texto.value == false)
    return;
    tarefas.innerHTML += `<li draggable="true" class="item" id="li" onclick="ticar(this)"> ${texto.value} <span onclick="excluir(this)"><img class="fechar" src="assets/img/error.png" alt="fechar"><span></li>`;
    texto.value = "";
    opcoes.style.display = 'flex';
    btn.style.borderRadius = '0';
})

// Função riscar a tarefa

function ticar(elemento) {
    
    elemento.classList.toggle('ticarTarefa');
}

//Função clicar no x e apagar um elemento

function excluir(elemento) {
    elemento.parentElement.remove();
}  

//Apagar todos os elementos

limpar.addEventListener ('click', function(){   
    tarefas.innerHTML = '<ul></ul>';
    limpar.checked = false;
    opcoes.style.display = 'none';
    btn.style.borderRadius = '0 0 10px 10px';
})

//Marcar todos

marcarTodas.addEventListener ('click', function(){

    let item = document.querySelectorAll ('li');
    item.forEach(function(elemento){
        elemento.classList.toggle ('ticarTarefa');
        marcarTodas.checked = false; 
    });
});

//Arrastar


tarefas.addEventListener("dragstart", dragStart);

tarefas.addEventListener("dragover", dragOver);

tarefas.addEventListener("dragend", dragEnd);


// Arrastando

function dragStart (evento) {
    dragging = evento.target.closest(".item");
    item.style.opacity = '0.9';
    item.style.backgroundColor = "#ba7af8";
}


// Largar

function dragOver(evento) {
    evento.preventDefault ();
    const location = evento.target.closest(".item");
    this.insertBefore(dragging, location);
    
    // this. equivale a class timeline
}

function dragEnd(evento) {
    dragging = null;
    this.style.backgroundColor = "white";
    //usamos o dragging = null para dizer que deve parar o movimento

}