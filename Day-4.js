let numeroCorreto = Math.floor(Math.random() * 11);
let tentativas = 3;

for (let i = 0; i < tentativas; i++) {
    let chute = parseInt(prompt("Tente adivinhar o número entre 0 e 10:"));

    if (chute === numeroCorreto) {
        alert("Parabéns! Você acertou!");
        break;
    } else {
        alert("Errou! Tente novamente.");
    }

    if (i === tentativas - 1) {
        alert("Suas tentativas acabaram! O número era " + numeroCorreto);
    }
}
