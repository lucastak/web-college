// Questão 4 - cadastro-filme.js
// Controla o formulário de cadastro.
// ← PONTO CHAVE: usa <output> (não <div>) para exibir feedback ao usuário.

import { ServicoCadastroFilme } from './servico-cadastro-filme.js';

// script type="module" já é defer, então o DOM já está pronto aqui
const form = document.querySelector('form');
const outputFeedback = document.querySelector('output'); // ← selecionando o <output>

form.addEventListener('submit', evento => {
    evento.preventDefault();
    outputFeedback.textContent = ''; // limpa feedback anterior

    const titulo = document.getElementById('titulo').value;
    const ano = Number(document.getElementById('ano').value);
    const poster = document.getElementById('poster').value;

    ServicoCadastroFilme.cadastrar({ titulo, ano, poster })
        .then(() => {
            form.reset();
            // ← Colocar texto no <output> com textContent
            outputFeedback.textContent = 'Filme cadastrado com sucesso!';
        })
        .catch(erro => {
            // Erros (validação ou servidor) aparecem no <output>
            outputFeedback.textContent = 'Erro: ' + erro.message;
        });
});
