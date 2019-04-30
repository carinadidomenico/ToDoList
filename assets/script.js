let texto = document.querySelector('#texto');
let btn = document.querySelector('#btn');
let marcar = document.querySelector ('#marcar');
let limpar = document.querySelector ('#limpar');
let tarefas = document.querySelector('#tarefas ul');

//Adicionar as tarefas

btn.addEventListener('click', function () {
    if (texto.value == false)
    return;
    tarefas.innerHTML += `<li class="item" id="li" onclick="ticar(this)"> ${texto.value} <span onclick="excluir(this)"><img class="fechar" src="assets/img/error.png" alt="fechar"><span></li>`;
    texto.value = "";
    opcoes.style.display = 'flex';
})

// Função riscar a tarefa

function ticar(elemento) {
    
    elemento.classList.toggle ('ticarTarefa');
}

//Função clicar no x e apagar um elemento

function excluir(elemento) {
    elemento.parentElement.remove();
}  

//Apagar todos os elementos

limpar.addEventListener ('click', function(){   
    tarefas.innerHTML = '<ul></ul>';
    limpar.checked = false;   
})

//Marcar todos 

marcar.addEventListener ('click', function(){

    let item = document.querySelectorAll ('li');
    item.forEach(function(elemento){
        elemento.classList.toggle ('ticarTarefa');
        marcar.checked = false; 
    })
    
})


