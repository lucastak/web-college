import { VisaoCadastroClube } from './visao-cadastro-clube.js';
import { ServicoCadastroClube } from './servico-cadastro-clube.js';

export class ControladoraCadastroClube {
    constructor() {
        this.visao = new VisaoCadastroClube();
    }

    iniciar() {
        this.visao.aoDispararSalvar(this.salvar.bind(this));
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
