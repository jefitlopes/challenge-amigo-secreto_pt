let amigos = [];

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    amigos = []; 
    atualizarLista(); 
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    listaResultado.appendChild(li);
}
