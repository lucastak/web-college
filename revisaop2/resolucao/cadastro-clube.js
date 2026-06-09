import { ServicoCadastroClube } from './servico-cadastro-clube.js';

const form = document.querySelector('form');
const divErro = document.querySelector('.erro');

form.addEventListener('submit', evento => {
    evento.preventDefault();
    divErro.textContent = ''; // Limpa os erros anteriores

    const nome = document.getElementById('nome').value;
    const fundacao = Number(document.getElementById('fundacao').value);
    const escudo = document.getElementById('escudo').value;

    ServicoCadastroClube.cadastrar({ nome, fundacao, escudo })
        .then(() => {
            form.reset();
            alert('Clube cadastrado com sucesso!');
        })
        .catch(erro => {
            divErro.textContent = erro.message;
        });
});
