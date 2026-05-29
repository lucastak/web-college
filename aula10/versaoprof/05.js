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

try {
    const numero1 = await f1();
    console.log( numero1 );
    const numero2 = await f2();
    console.log( numero2 );
} catch ( erro ) {
    console.error( erro.message );
}