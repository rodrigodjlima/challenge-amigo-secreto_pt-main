//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

//Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

//Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

let amigos = []
function adicionarAmigo() {
    let listaAmigos = document.querySelector('input').value;
    
    if (listaAmigos <= 0) {alert("Por favor, insira um nome.")
    } else {amigos.push(listaAmigos);

    console.log(listaAmigos);}
    limparCampo();}


function limparCampo() {
listaAmigos = document.querySelector('input');
listaAmigos.value = '';}

