export class Calculadora {

    /**
     * Retorna a soma de dois números.
     *
     * @param {string} n1
     * @param {string} n2
     * @returns {number}
     */
    somar( n1, n2 ) {
        const numero1 = Number( n1 );
        if ( isNaN( numero1 ) ) {
            throw new Error( 'Por favor, informe um número em n1.' );
        }
        const numero2 = Number( n2 );
        if ( isNaN( numero2 ) ) {
            throw new Error( 'Por favor, informe um número em n2.' );
        }
        return numero1 + numero2;
    }
}