export class Clube {
    #nome;
    #fundacao;
    #escudo;

    constructor({ nome, fundacao, escudo }) {
        this.#validar(nome, fundacao, escudo);
        this.#nome = nome;
        this.#fundacao = fundacao;
        this.#escudo = `/img/escudos/${escudo}`;
    }

    get nome() {
        return this.#nome;
    }

    get fundacao() {
        return this.#fundacao;
    }

    get escudo() {
        return this.#escudo;
    }

    #validar(nome, fundacao, escudo) {
        if (typeof nome !== 'string' || nome.length < 3 || nome.length > 60) {
            throw new Error('O nome deve ter entre 3 e 60 caracteres.');
        }

        const anoAtual = new Date().getFullYear();
        if (!Number.isInteger(fundacao) || fundacao < 1800 || fundacao > anoAtual) {
            throw new Error(`A fundação deve ser um número inteiro entre 1800 e ${anoAtual}.`);
        }

        if (typeof escudo !== 'string' || escudo.length > 20 || escudo.includes('/') || !escudo.endsWith('.webp')) {
            throw new Error('O escudo deve ter até 20 caracteres, não conter "/" e terminar com ".webp".');
        }
    }

    toJson() {
        return JSON.stringify({
            nome: this.#nome,
            fundacao: this.#fundacao,
            escudo: this.#escudo
        });
    }
}
