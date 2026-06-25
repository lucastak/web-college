import { VisaoListaClubes } from "./visao-lista-clubes.js";

export class ControladoraListaClubes {
    constructor() {
        this.visao = new VisaoListaClubes();
    }

    iniciar() {
        this.visao.aoMudarFiltro(this.atualizarTabela.bind(this));
        this.atualizarTabela();
    }

    atualizarTabela() {
        const valorNum = this.visao.obterFiltroDesde();

        if (Number.isInteger(valorNum) && valorNum >= 1800) {
            fetch('/api/clubes')
                .then(resposta => {
                    if (!resposta.ok) {
                        throw new Error('Falha ao consultar os clubes: ' + resposta.status);
                    }
                    return resposta.json();
                })
                .then(clubes => {
                    const filtrados = clubes.filter(clube => clube.fundacao >= valorNum);
                    this.visao.limparTabela();
                    filtrados.forEach(clube => {
                        this.visao.adicionarClubeNaTabela(clube, this.removerClube.bind(this));
                    });
                    this.visao.limparErro();
                })
                .catch(erro => {
                    this.visao.mostrarErro(erro.message);
                });
        }
    }

    removerClube(id, tr) {
        fetch(`/api/clubes/${id}`, { method: 'DELETE' })
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Falha ao remover o clube.');
                }
                this.visao.removerLinha(tr);
                this.visao.limparErro();
            })
            .catch(erro => {
                this.visao.mostrarErro(erro.message);
            });
    }

    async atualizarTabela2() {
        const valorNum = this.visao.obterFiltroDesde();

        if (Number.isInteger(valorNum) && valorNum >= 1800) {
            try {
                const resposta = await fetch('/api/clubes');
                
                if (!resposta.ok) {
                    throw new Error('Falha ao consultar os clubes: ' + resposta.status);
                }
                
                const clubes = await resposta.json();
                const filtrados = clubes.filter(clube => clube.fundacao >= valorNum);
                
                this.visao.limparTabela();
                filtrados.forEach(clube => {
                    // Usando o removerClube2 para manter a consistência com as funções async
                    this.visao.adicionarClubeNaTabela(clube, this.removerClube2.bind(this));
                });
                this.visao.limparErro();
            } catch (erro) {
                this.visao.mostrarErro(erro.message);
            }
        }
    }

    async removerClube2(id, tr) {
        try {
            const resposta = await fetch(`/api/clubes/${id}`, { method: 'DELETE' });
            
            if (!resposta.ok) {
                throw new Error('Falha ao remover o clube.');
            }
            
            this.visao.removerLinha(tr);
            this.visao.limparErro();
        } catch (erro) {
            this.visao.mostrarErro(erro.message);
        }
    }
}
