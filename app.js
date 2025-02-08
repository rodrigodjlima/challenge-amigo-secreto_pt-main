//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

//Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

//Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

let amigos = []

//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

function adicionarAmigo() {
    let listaAmigos = document.querySelector('input').value;
    if (listaAmigos <= 0 ) {alert("Por favor, insira um nome.") //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome.
    } else {amigos.push(listaAmigos); //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    exibirNomeDigitado ('ul', amigos);
    console.log(amigos);}
    limparCampo();}//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.


function limparCampo() {
listaAmigos = document.querySelector('input');
listaAmigos.value = '';}


// Obter o elemento da lista

function exibirNomeDigitado (tag, texto) {
    let nome = document.querySelector(tag);
    nome.innerHTML = texto;
    
}


//Implementa uma função para atualizar a lista de amigos

// Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. 

// Use innerHTML para limpar a lista antes de adicionar novos elementos.

// Tarefas específicas:

// Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.

// Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.

// Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.

// Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

