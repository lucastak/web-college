export class VisaoCadastroClube {
    obterDadosClube() {
        return {
            nome: document.getElementById('nome').value,
            fundacao: Number(document.getElementById('fundacao').value),
            escudo: document.getElementById('escudo').value
        };
    }

    mostrarErro(mensagem) {
        document.querySelector('.erro').textContent = mensagem;
    }

    limparErros() {
        document.querySelector('.erro').textContent = '';
    }

    limparFormulario() {
        document.querySelector('form').reset();
    }

    mostrarSucesso() {
        alert('Clube cadastrado com sucesso!');
    }

    aoDispararSalvar(cb) {
        document.querySelector('form').addEventListener('submit', evento => {
            evento.preventDefault();
            cb();
        });
    }
}
