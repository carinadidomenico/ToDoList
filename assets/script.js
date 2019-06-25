let texto = document.querySelector('#texto');
let btn = document.querySelector('#btn');
let form = document.querySelector ('#form');
let marcar = document.querySelector ('#marcarTodas');
let desmarcar = document.querySelector ('#desmarcarTodas');
let limpar = document.querySelector ('#limpar');
let tarefas = document.querySelector('#tarefas ul');
let item = document.querySelectorAll ('#li');
let opcoes = document.querySelector ('#opcoes');


//Adicionar as tarefas

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (texto.value == false)
    return;
    tarefas.innerHTML += `<li draggable="true" class="item" id="li" onclick="ticar(this)"> ${texto.value} <span onclick="excluir(this)"><img class="fechar" src="assets/img/error.png" alt="fechar"><span></li>`;
    texto.value = "";
    opcoes.style.display = 'flex';
    limpar.style.display = 'flex';
    desmarcar.style.display = 'flex';
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
    opcoes.style.display = 'none';
    btn.style.borderRadius = '0 0 10px 10px';
})

//Marcar todos

desmarcar.addEventListener ('click', function(){

    let item = document.querySelectorAll ('li');
    item.forEach(function(elemento){
        elemento.classList.add ('ticarTarefa');
        marcar.style.display = 'flex';
        desmarcar.style.display = 'none';
    });
});

// Desmarcar todos

marcar.addEventListener ('click', function(){

    let item = document.querySelectorAll ('li');
    item.forEach(function(elemento){
        elemento.classList.remove ('ticarTarefa');
        marcar.style.display = 'none';
        desmarcar.style.display = 'flex';

    });
});


//Arrastar

tarefas.addEventListener("dragstart", dragStart);

tarefas.addEventListener("dragover", dragOver);

tarefas.addEventListener("dragend", dragEnd);


// Arrastando

function dragStart (evento) {
    dragging = evento.target.closest(".item");
    item.style.cursor = 'grabbing';
}


// Largar

function dragOver(evento) {
    evento.preventDefault ();
    const location = evento.target.closest(".item");
    this.insertBefore(dragging, location); // this. equivale a class timeline
    this.style.cursor = "grabbing";
}

function dragEnd(evento) {
    dragging = null;
    //usamos o dragging = null para dizer que deve parar o movimento
}