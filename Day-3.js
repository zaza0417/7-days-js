let Area = prompt('Qual área você quer seguir? Digite Frontend ou Backend');

let tecnologia = " "

if (Area === "Frontend"){
tecnologia = prompt("Você quer aprender React ou Vue? Digite React ou Vue");
}
else {
  tecnologia = prompt("Você quer Aprender C# ou Java? Digite  C# ou Java");
}

let especializacao = prompt("Você quer seguir se especializando na área escolhida ou se tornar Fullstack? (Digite 'Especialização' ou 'Fullstack')");

let mensagem = " "

if (especializacao === 'Especialização') {
    mensagem = `Você escolheu se especializar em ${tecnologia}. Boa sorte em sua jornada!`
} else {
    mensagem = `Você escolheu se tornar Fullstack, combinando ${Area} e ${tecnologia}. Uma jornada empolgante pela frente!`
} 

alert(mensagem);

let tecnologias = [];
let continuar = true;

while (continuar) {
    let tecnologiaAdicional = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
    if (tecnologiaAdicional) {
        tecnologias.push(tecnologiaAdicional);
        continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
    } else {
        continuar = false;
    }
}


tecnologias.forEach((tech) => {
    let comentario = "";
    switch (tech.toLowerCase()) {
        case 'react':
            comentario = "React é uma biblioteca JavaScript popular para construção de interfaces de usuário.";
            break;
        case 'vue':
            comentario = "Vue é um framework JavaScript progressivo para construção de interfaces e aplicações.";
            break;
        case 'c#':
            comentario = "C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft.";
            break;
        case 'java':
            comentario = "Java é uma linguagem de programação amplamente usada em sistemas corporativos e Android.";
            break;
        default:
            comentario = `A tecnologia ${tech} é interessante e pode ser uma ótima adição ao seu conjunto de habilidades!`;
    }
    alert(comentario);
});




