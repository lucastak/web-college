// Questão 5a - validacao-filme.js
// Função de validação separada, a ser importada por outros módulos.
// Retorna null se válido, ou uma string de erro se inválido.

export function validarFilme(titulo, ano) {
    const anoAtual = new Date().getFullYear();

    if (typeof titulo !== 'string' || titulo.length < 1 || titulo.length > 100) {
        return 'O título deve ter entre 1 e 100 caracteres.';
    }

    const anoNum = Number(ano);
    if (!Number.isInteger(anoNum) || anoNum < 1888 || anoNum > anoAtual) {
        return `O ano deve ser um inteiro entre 1888 e ${anoAtual}.`;
    }

    return null; // válido
}
