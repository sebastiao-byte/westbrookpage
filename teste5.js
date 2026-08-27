
const titulo = document.querySelector("header h1");
const header = document.querySelector("header");

let corAtual = "#9030df";

const botaoBoasVindas = document.createElement("button");
const botaoCor = document.createElement("button");
const campoNome = document.createElement("input");
const botaoNome = document.createElement("button");
const mensagem = document.createElement("p");
    

botaoBoasVindas.textContent = "what sup nig";
botaoCor.textContent = "muda cor";

campoNome.type = "text";
campoNome.placeholder = "your nick man";

botaoNome.textContent = "mandai";

mensagem.style.fontSize = "20px";
mensagem.style.fontWeight = "bold";

header.appendChild(botaoBoasVindas);
header.appendChild(document.createElement("br"));

header.appendChild(botaoCor);
header.appendChild(document.createElement("br"));

header.appendChild(campoNome);
header.appendChild(botaoNome);
header.appendChild(mensagem);


function darBoasVindas() {
    alert("he yo fella");
}


function mudarCor() {
    if (corAtual === "#9030df") {
        corAtual = "#facc15";
    } else {
        corAtual = "#9030df";
    }

    titulo.style.color = corAtual;
}


function mostrarNome() {
    const nome = campoNome.value;

    if (nome === "") {
        mensagem.textContent = "your nick man";
    } else {
        mensagem.textContent =
            "he yo fella, " + nome + " in the gan now bro";
    }
}


botaoBoasVindas.addEventListener("click", darBoasVindas);
botaoCor.addEventListener("click", mudarCor);
botaoNome.addEventListener("click", mostrarNome);