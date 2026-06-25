// Questão 5a - cadastro-local.js
// Salva filmes no localStorage após validação.
// Importa validação de módulo separado (padrão da P1).

import { validarFilme } from './validacao-filme.js';

const btnSalvar = document.getElementById('salvar-local');

btnSalvar.addEventListener('click', () => {
    const titulo = document.getElementById('titulo-l').value;
    const ano = Number(document.getElementById('ano-l').value);

    const erro = validarFilme(titulo, ano);

    if (erro) {
        console.log('Dado inválido:', erro);
        return;
    }

    // Carrega array existente ou inicia um vazio
    const filmesLocais = JSON.parse(localStorage.getItem('filmes-locais') || '[]');
    filmesLocais.push({ titulo, ano });
    localStorage.setItem('filmes-locais', JSON.stringify(filmesLocais));

    // Feedback ao usuário e limpeza do form
    alert('Filme salvo localmente!');
    document.querySelector('form').reset();
});
