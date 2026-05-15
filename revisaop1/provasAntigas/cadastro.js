import { validarAtleta } from "./validacao";


document.addEventListener("DOMContentLoaded", () => {
    const buttonEnviar = document.querySelector("salvar");

    buttonEnviar.addEventListener("click", () => {
        const nome = document.querySelector("#nome").value;
        const peso = document.querySelector("#peso").value;
        const altura = document.querySelector("#altura").value;

        const erro = validarAtleta(nome, peso, altura);

        if(erro){
            alert(erro);
            return;
        };

        const itens = JSON.parse(localStorage.getItem("items") || "[ ]");
        itens.push({nome, peso, altura});
        localStorage.setItem('itens', JSON.stringify(itens));

        window.location.href = 'atletas.html';
    });
})