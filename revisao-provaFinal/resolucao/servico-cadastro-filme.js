// Questão 3 - servico-cadastro-filme.js
// Classe de serviço: valida os dados com Filme e envia via fetch (POST).
// Não faz interface com o usuário — apenas retorna promessas.

import { Filme } from './filme.js';

export class ServicoCadastroFilme {
    static cadastrar({ titulo, ano, poster }) {
        try {
            // Instanciar Filme já valida os dados; se inválido, lança exceção
            const filme = new Filme({ titulo, ano, poster });

            return fetch('/api/filmes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: filme.toJson()
            }).then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Falha ao cadastrar o filme no servidor. Status: ' + resposta.status);
                }
                return resposta.json();
            });
        } catch (erro) {
            // Converte exceção síncrona em promessa rejeitada,
            // para que o chamador use sempre .catch()
            return Promise.reject(erro);
        }
    }
}
