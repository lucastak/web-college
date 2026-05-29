function f1() {
    return new Promise( ( resolve, reject ) => {
        const numero = Math.random();
        if ( numero < 0.5 ) {
            resolve( numero );
        } else {
            reject( new Error( 'Número inválido.' ) );
        }
    } );
}

async function f2() {
    const numero = Math.random();
    if ( numero < 0.5 ) {
        return numero;
    }
    throw new Error( 'Número inválido.' );
}

f1()
    .then( valor => console.log( valor ) )
    .catch( erro => console.error( erro.message ) );

f2()
    .then( valor => console.log( valor ) )
    .catch( erro => console.error( erro.message ) );