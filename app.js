let amigos = []


function adicionarAmigo() {
    let listaAmigos = document.querySelector('input').value;
    //Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
    
    if (listaAmigos <= 0 ) {alert("Por favor, insira um nome.") //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    return }  //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome.
    
    if (amigos.includes(listaAmigos)) {
    alert("Você já digitou esse amigo. Por favor, digite outro nome"); // impedir nome duplicado.
    return;}

    amigos.push(listaAmigos); //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    
    exibirNomeDigitado ('ul', amigos); //Obter o elemento da lista

    console.log(amigos); //conferir andamento das funções.
    
    limparCampo();} //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
   
    atualizarListaAmigos() //função para atualizar a lista de amigos.


function limparCampo() { //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    listaAmigos = document.querySelector('input');
    listaAmigos.value = '';}

function exibirNomeDigitado (tag, texto) {// Obter o elemento da lista
    let nome = document.querySelector(tag);
    nome.innerHTML = texto;}

function atualizarListaAmigos() { //função para atualizar a lista de amigos
    let novaListaAmigos = document.querySelector ('input');
    novaListaAmigos.innerHTML = ""; // innerHTML para limpar a lista antes de adicionar novos elementos.

        amigos.forEach(amigo => { //função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. 
            const li = document.createElement('li');
            li.textContent = amigo;
            novaListaAmigos.appendChild(li); // Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
        });
    }

