
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro! Divisão por zero não é permitida.";
    }
    return a / b;
}


function calculadora() {
    let operacao;
    do {
      
        operacao = prompt("Escolha uma operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair\nDigite o número correspondente à operação:");
        
        
        if (operacao === "5") {
            alert("Até a próxima!");
            break;
        }
        
        
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado;

        
        switch (operacao) {
            case "1":
                resultado = soma(num1, num2);
                alert(`Resultado da soma: ${resultado}`);
                break;
            case "2":
                resultado = subtracao(num1, num2);
                alert(`Resultado da subtração: ${resultado}`);
                break;
            case "3":
                resultado = multiplicacao(num1, num2);
                alert(`Resultado da multiplicação: ${resultado}`);
                break;
            case "4":
                resultado = divisao(num1, num2);
                alert(`Resultado da divisão: ${resultado}`);
                break;
            default:
                alert("Operação inválida! Tente novamente.");
        }
    } while (operacao !== "5");
}


calculadora();
