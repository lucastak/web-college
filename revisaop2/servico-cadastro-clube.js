import { Clube } from './clube.js';

export class ServicoCadastroClube {
    static cadastrar({ nome, fundacao, escudo }) {
        try {
            const clube = new Clube({ nome, fundacao, escudo });
            return fetch('/api/clubes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: clube.toJson()
            }).then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Falha ao cadastrar o clube no servidor. Status: ' + resposta.status);
                }
                return resposta.json();
            });
        } catch (erro) {
            return Promise.reject(erro);
        }
    }
}
