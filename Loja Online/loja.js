// Saldo inicial do cliente
let saldo = 200.00;

// Produtos disponíveis na loja
let produtos = [
    { id: 1, nome: "Camiseta", preco: 50.00 },
    { id: 2, nome: "Meia", preco: 30.00 },
    { id: 3, nome: "Tênis", preco: 80.00 },
    { id: 4, nome: "Calça", preco: 100.00 }
];

// Carrinho de compras
let carrinho = [];

// Função para exibir os produtos disponíveis
function exibirProdutos() {
    console.log("Produtos disponíveis:");
    for (let produto of produtos) {
        console.log(`${produto.id} - ${produto.nome} - R$${produto.preco.toFixed(2)}`);
    }
    console.log("Digite 0 para finalizar a compra.");
}

// Simulando a escolha de produtos pelo cliente
const prompt = require("prompt-sync")(); // Biblioteca para entrada do usuário
let continuar = true;

while (continuar) {
    exibirProdutos();
    let escolha = parseInt(prompt("Digite o ID do produto que deseja adicionar ao carrinho: "));

    if (escolha === 0) {
        continuar = false; // Finaliza a escolha de produtos
        console.log("Finalizando a escolha de produtos...");
    } else {
        let produtoEscolhido = produtos.find(produto => produto.id === escolha);

        if (produtoEscolhido) {
            carrinho.push(produtoEscolhido);
            console.log(`${produtoEscolhido.nome} foi adicionado ao carrinho.`);
        } else {
            console.log("Produto inválido. Tente novamente.");
        }
    }
}

// Calculando o total da compra
let totalCompra = 0;
for (let item of carrinho) {
    totalCompra += item.preco;
}

// Verificando se o cliente pode pagar usando operador ternário
totalCompra > saldo
    ? console.log(`Saldo insuficiente!\nTotal da compra: R$${totalCompra.toFixed(2)}\nSaldo disponível: R$${saldo.toFixed(2)}`)
    : (saldo -= totalCompra,
       console.log(`Compra realizada com sucesso!\nTotal da compra: R$${totalCompra.toFixed(2)}\nSaldo restante: R$${saldo.toFixed(2)}`));