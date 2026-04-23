import { validarAtleta } from './validacao.js';

document.addEventListener('DOMContentLoaded', () => {
    const botaoSalvar = document.getElementById('salvar');
    
    botaoSalvar.addEventListener('click', () => {
        const nome = document.getElementById('nome').value.trim();
        const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
        const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
        
        if (!nome || isNaN(peso) || isNaN(altura)) {
            alert("Preencha todos os campos corretamente com valores numéricos.");
            return;
        }

        const erro = validarAtleta(nome, peso, altura);
        if (erro) {
            alert(erro);
            return;
        }

        const itens = JSON.parse(localStorage.getItem('itens') || '[]');
        itens.push({ nome, peso, altura });
        localStorage.setItem('itens', JSON.stringify(itens));

        // Enunciado diz "location.url", mas o correto no navegador é window.location.href
        window.location.href = 'atletas.html'; 
    });
});
