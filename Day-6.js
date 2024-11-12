let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let acao = ""; 

while (acao !== "sair") {
    acao = prompt("Você deseja 'adicionar', 'remover' um item da lista ou 'sair'?");
    
    while (acao !== "adicionar" && acao !== "remover" && acao !== "sair") {
        alert("Operação não reconhecida!");
        acao = prompt("Você deseja 'adicionar', 'remover' um item da lista ou 'sair'?");
    }

    if (acao === "sair") {
        break;
    }

    if (acao === "adicionar") {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticinios', 'doces' ou 'congelados'?");

        if (categoria === 'frutas') {
            frutas.push(comida);
        } else if (categoria === 'laticinios') {
            laticinios.push(comida);
        } else if (categoria === 'doces') {
            doces.push(comida);
        } else if (categoria === 'congelados') {
            congelados.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.");
        }

    } else if (acao === "remover") {
        categoria = prompt("De qual categoria você deseja remover um item: 'frutas', 'laticinios', 'doces' ou 'congelados'?");
        let listaCategoria;

        
        if (categoria === 'frutas') {
            listaCategoria = frutas;
        } else if (categoria === 'laticinios') {
            listaCategoria = laticinios;
        } else if (categoria === 'doces') {
            listaCategoria = doces;
        } else if (categoria === 'congelados') {
            listaCategoria = congelados;
        } else {
            alert("Essa categoria não foi pré-definida.");
            continue;
        }

        if (listaCategoria.length === 0) {
            alert(`Não há itens para remover na categoria ${categoria}.`);
        } else {
            let itemRemover = prompt(`Itens em ${categoria}: ${listaCategoria.join(", ")}\nQual item você deseja remover?`);
            let index = listaCategoria.indexOf(itemRemover);
            
            if (index !== -1) {
                listaCategoria.splice(index, 1);
                alert(`Item removido! Lista atualizada de ${categoria}: ${listaCategoria.join(", ")}`);
            } else {
                alert("Item não encontrado na lista.");
            }
        }
    }
}


alert(`Lista de compras final:\n  Frutas: ${frutas.join(", ")}\n  Laticínios: ${laticinios.join(", ")}\n  Doces: ${doces.join(", ")}\n  Congelados: ${congelados.join(", ")}`);
