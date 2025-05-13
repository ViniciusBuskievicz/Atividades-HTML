// Elementos do DOM
const nomeUsuario = document.getElementById("nomeUsuario");
const saudacao = document.getElementById("saudacao");
const botaoCurtir = document.getElementById("botaoCurtir");
const contador = document.getElementById("contador");

let cliques = 0;

// Saudação ao digitar o nome e contador
nomeUsuario.addEventListener("input", () => {
    const nome = nomeUsuario.value.trim();
    saudacao.innerText = nome ? `Olá, ${nome}!` : "Olá, visitante!";
    cliques = 0; // Reseta o contador de cliques
    contador.innerText = `Cliques: ${cliques}`;
});

// Logar no console ao pressionar uma tecla
nomeUsuario.addEventListener("keydown", (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
});

// Incrementar o contador ao clicar no botão
botaoCurtir.addEventListener("click", () => {
    cliques++;
    contador.innerText = `Cliques: ${cliques}`;
});

// Estilizar o botão ao passar o mouse
botaoCurtir.addEventListener("mouseover", () => {
    botaoCurtir.style.backgroundColor = "#0056b3";
    botaoCurtir.style.color = "#fff";
});

botaoCurtir.addEventListener("mouseout", () => {
    botaoCurtir.style.backgroundColor = "#007bff";
    botaoCurtir.style.color = "#fff";
});