const API_URL = 'http://localhost:3000/contas';

export function consultarContas() {
    return fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao conectar com a API');
            return response.json();
        });
}

export function criarConta(conta) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conta)
    }).then(response => {
        if (!response.ok) throw new Error('Erro ao criar conta');
        return response.json();
    });
}

export function alterarConta(id, conta) {
    return fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conta)
    }).then(response => {
        if (!response.ok) throw new Error('Erro ao alterar conta');
        return response.json();
    });
}

export function removerConta(id) {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) throw new Error('Erro ao remover conta');
        return response.json();
    });
}