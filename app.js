let amigos = []

function adicionarAmigo() {
    let listaAmigos = document.querySelector('input').value.trim();
    //Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
    
    if (listaAmigos <= 0 ) {alert("Por favor, insira um nome.") //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    return }  //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome.
    
    if (amigos.includes(listaAmigos)) {
    alert("Você já digitou esse amigo. Por favor, digite outro nome"); // impedir nome duplicado.
    return
    ;}

    amigos.push(listaAmigos); //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    
    console.log(amigos); //conferir andamento das funções.
    
    exibirNomeDigitado ('ul', amigos); //Obter o elemento da lista

    limparCampo(); //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    
    atualizarListaAmigos() } //função para atualizar a lista de amigos.

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

// Implementa uma função para sortear os amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear."); return }; // Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.

        const amigosEmbaralhados = Math.floor(Math.random() * amigos.length);//Gerar um índice aleatório: 
        // Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

        const nomeSorteado = amigos [amigosEmbaralhados]; // Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
        console.log (nomeSorteado); //conferir andamento das funções.
        exibirNomeSorteado('#resultado', nomeSorteado);} //Mostrar o resultado

        function exibirNomeSorteado(tag2, texto2) {// Obter o elemento sorteado.
            let nomeSorteado = document.querySelector(tag2); ////Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() 
            nomeSorteado.innerHTML = texto2;}     // e innerHTML para exibir o amigo sorteado.
 
