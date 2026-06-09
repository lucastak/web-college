export class ControladoraListaClubes {
    constructor(visao) {
        this.visao = visao;
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
                        this.visao.adicionarClubeNaTabela(clube);
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
}
