import { ServicoJogos } from "./servico-jogos.js";

export class ControladoraListagemJogos { // Presenter

    constructor( visao ) {
        this.servico = new ServicoJogos(); // model
        this.visao = visao;
    }

    async listar() {
        try {
            const jogos = await this.servico.obterJogos();
            this.visao.desenharJogos( jogos );
        } catch ( erro ) {
            this.visao.mostrarErro( erro );
        }
    }

    async remover( id ) {
        try {
            await this.servico.removerJogoPeloId( id );
            this.visao.removerLinhaComId( id );
        } catch ( erro ) {
            this.visao.exibirErro( erro );
        }
    }

    async pesquisar() {
        const texto = this.visao.textoPesquisa();
        try {
            const jogos = await this.servico.obterJogos( texto );
            this.visao.desenharJogos( jogos );
        } catch ( erro ) {
            this.visao.mostrarErro( erro );
        }
    }
}