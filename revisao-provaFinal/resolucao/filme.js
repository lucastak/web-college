// Questão 2 - filme.js
// Classe com atributos privados, propriedades somente-leitura,
// validação via método privado e método toJson().

export class Filme {
    // Atributos privados (não acessíveis de fora)
    #titulo;
    #ano;
    #poster;

    // Construtor recebe objeto desestruturado
    constructor({ titulo, ano, poster }) {
        this.#validar(titulo, ano, poster);
        this.#titulo = titulo;
        this.#ano = ano;
        // Prefixo adicionado com template literal
        this.#poster = `/img/posters/${poster}`;
    }

    // Propriedades públicas somente-leitura (getters sem setters)
    get titulo() {
        return this.#titulo;
    }

    get ano() {
        return this.#ano;
    }

    get poster() {
        return this.#poster;
    }

    // Método privado de validação — lança exceção em vez de retornar erro
    #validar(titulo, ano, poster) {
        if (typeof titulo !== 'string' || titulo.length < 1 || titulo.length > 100) {
            throw new Error('O título deve ter entre 1 e 100 caracteres.');
        }

        const anoAtual = new Date().getFullYear();
        if (!Number.isInteger(ano) || ano < 1888 || ano > anoAtual) {
            throw new Error(`O ano deve ser um inteiro entre 1888 e ${anoAtual}.`);
        }

        if (typeof poster !== 'string' || poster.length > 30 || poster.includes('/') || !poster.endsWith('.webp')) {
            throw new Error('O poster deve ter até 30 caracteres, não conter "/" e terminar com ".webp".');
        }
    }

    // Serializa os dados atuais do objeto para JSON
    toJson() {
        return JSON.stringify({
            titulo: this.#titulo,
            ano: this.#ano,
            poster: this.#poster
        });
    }
}
