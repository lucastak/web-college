class Telefone {

    #ddd;
    #numero;

    constructor( ddd, numero ) {
        this.ddd = ddd;
        this.numero = numero;
    }

    get ddd() {
        return this.#ddd;
    }

    set ddd( value ) {
        // TODO: validar
        this.#ddd = value;
    }

    get numero() {
        return this.#numero;
    }

    set numero( value ) {
        this.#numero = value;
    }

    get formatado() {
        return `(${this.#ddd}) ${this.#numero}`;
    }
}

const t = new Telefone( '22', '9999999999' );
console.log( t.ddd, t.numero );
t.ddd = '21';
console.log( t.formatado );
