import { ValidationError } from "./validation-error.js";

export class Telefone {

    #ddd = '';
    #numero = '';
    static instancias = 0;

    constructor( ddd, numero ) {
        this.#ddd = ddd;
        this.#numero = numero;
        this.#validar();
        Telefone.instancias++;
    }

    #validar() {
        if ( isNaN( Number( this.#ddd ) ) ) {
            throw new ValidationError( 'O ddd deve ser numérico.' )
        }
        if ( isNaN( Number( this.#numero ) ) ) {
            throw new ValidationError( 'O numero deve ser numérico.' )
        }
    }

    formatar() {
        return `(${this.#ddd}) ${this.#numero}`;
    }

    static criarFormatado( texto = '' ) { // (22) 99999999
        const ddd = texto.substring( 1, 3 );
        const numero = texto.substring( 5 );
        return new Telefone( ddd, numero );
    }

    getDdd() { return this.#ddd; }
    getNumero() { return this.#numero; }
}


class TelefoneComPais extends Telefone {

    #pais = '+55';

    constructor( ddd, numero, pais = '+55' ) {
        super( ddd, numero );
        this.#pais = pais;
        if ( isNaN( Number( this.#pais ) ) ) {
            throw new ValidationError( 'O país precisa ser numérico.' );
        }
    }

    formatar() {
        return this.#pais + ' ' + super.formatar();
    }
}

// console.log( Telefone.instancias );
// const t = new Telefone( '22', '988887777' );
// console.log( Telefone.instancias );
// console.log( t );
// t.ddd = '21';
// console.log( t.formatar() );

// const t2 = new TelefoneComPais( 'A22', '988887777' );
// console.log( t2.formatar() );
// console.log( Telefone.instancias );
