import { ServicoCadastroClube } from './servico-cadastro-clube.js';

export class ControladoraCadastroClube {
    constructor(visao) {
        this.visao = visao;
    }

    salvar() {
        this.visao.limparErros();
        const dados = this.visao.obterDadosClube();

        ServicoCadastroClube.cadastrar(dados)
            .then(() => {
                this.visao.limparFormulario();
                this.visao.mostrarSucesso();
            })
            .catch(erro => {
                this.visao.mostrarErro(erro.message);
            });
    }
}
