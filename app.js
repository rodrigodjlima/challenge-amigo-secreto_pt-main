let amigos = []

function adicionarAmigo() {
    let campoEntrada = document.querySelector('input').value.trim();
    if (campoEntrada.length === 0) {
        alert("Por favor, insira um nome.");
        return;
    }
    if (amigos.includes(campoEntrada)) {
        alert("Você já digitou esse amigo. Por favor, digite outro nome");
        return;
    }
    amigos.push(campoEntrada);
    console.log(amigos);
    atualizarListaAmigos(); // Atualizar a lista de amigos
    limparCampo(); // Limpar o campo de entrada
    exibirNomeDigitado ('ul', amigos); }//Obter o elemento da lista

    function limparCampo() {
        let campoEntrada = document.querySelector('input');
        campoEntrada.value = ''; // Limpa o campo de entrada
    }
    
    function exibirNomeDigitado (tag, texto) {// Obter o elemento da lista
    let nome = document.querySelector(tag);
    nome.innerHTML = texto;}
    
    function atualizarListaAmigos() { //função para atualizar a lista de amigos
        let listaAmigos = document.querySelector('ul'); 
        listaAmigos.innerHTML = ""; // Limpar a lista antes de adicionar novos elementos
    
        amigos.forEach(amigo => {  //função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. 
            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li); // Adicionar elementos à lista
        });}

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
 
