Amigo Secreto

📌 Descrição

Este é um projeto JavaScript para gerenciar uma lista de amigos, permitindo adicionar nomes à lista, evitar duplicatas e sortear um nome aleatório. 
O projeto é ideal para organização de eventos, brincadeiras como "amigo secreto" ou qualquer outra aplicação que envolva a seleção aleatória de participantes.
Projeto Challenge Amigo Secreto. 
Challenge-Based Learning, uma abordagem de aprendizagem baseada em desafios desenvolvida pela Apple. 
O Desafio Amigo Secreto é um passo importante para o sucesso no programa ONE. 

## 🚀 Funcionalidades
- Adicionar amigos à lista
- Evitar a inclusão de nomes duplicados
- Exibir a lista de amigos adicionados
- Sortear um amigo aleatoriamente
- Limpar o campo de entrada após adicionar um nome
- Validar a entrada de dados

## 🛠 Tecnologias Utilizadas
- **HTML**: Estrutura básica da página
- **CSS**: Estilização da interface
- **JavaScript**: Manipulação do DOM e lógica de funcionamento

## 📂 Estrutura do Projeto
```
|-- index.html       # Estrutura da página
|-- styles.css       # Estilos da interface
|-- script.js        # Lógica do aplicativo
```

## 📜 Como Usar

Pode acessar o link abaixo:

https://rodrigodjlima.github.io/challenge-amigo-secreto_pt-main/

ou clonar o repositório e abrir no seu navegador.

### 1️⃣ Clonar o repositório:
```
git clone https://github.com/rodrigodjlima/challenge-amigo-secreto_pt-main
```
### 2️⃣ Abrir o arquivo `index.html` no navegador.

![image](https://github.com/user-attachments/assets/a4bcc2fb-0abe-4e1f-80ce-7f2a86989fb8)




## 📌 Explicação do Código

### 🔹 Adicionar Amigo
A função `adicionarAmigo()` captura o nome digitado pelo usuário, verifica se está válido e se já foi adicionado, depois atualiza a lista.
```javascript
function adicionarAmigo() {
    let listaAmigos = document.querySelector('input').value.trim();
    if (listaAmigos.length === 0) {
        alert("Por favor, insira um nome.");
        return;
    }
    if (amigos.includes(listaAmigos)) {
        alert("Você já digitou esse amigo. Por favor, digite outro nome");
        return;
    }
    amigos.push(listaAmigos);
    atualizarListaAmigos();
    limparCampo();
}
```

### 🔹 Atualizar Lista de Amigos
A função `atualizarListaAmigos()` percorre o array `amigos` e exibe os nomes na interface.
```javascript
function atualizarListaAmigos() {
    let listaAmigos = document.querySelector('ul');
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
```

### 🔹 Sortear Amigo
A função `sortearAmigo()` escolhe aleatoriamente um amigo da lista e exibe o resultado.
```javascript
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];
    exibirNomeSorteado('#resultado', nomeSorteado);
}
```

### 🔹 Exibir Nome Sorteado
```javascript
function exibirNomeSorteado(tag2, texto2) {
    let nomeSorteado = document.querySelector(tag2);
    nomeSorteado.innerHTML = texto2;
}
```

### 🔹 Limpar Campo de Entrada
```javascript
function limparCampo() {
    let campoEntrada = document.querySelector('input');
    campoEntrada.value = '';
}
```
## 📝 Licença
Este projeto está sob a [MIT License](LICENSE).

## 📞 Contato
Caso tenha dúvidas ou sugestões, entre em contato:
- 💼 LinkedIn: https://www.linkedin.com/in/rodrigodejesuslima/
- 🐙 GitHub: https://github.com/rodrigodjlima

---
Feito por **rodrigodjlima** 

