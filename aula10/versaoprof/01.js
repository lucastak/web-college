function f1() {
    return Promise.resolve( 10 );
}

function f2() {
    return new Promise( ( resolve, reject ) => {
        resolve( 10 );
    } );
}

f1().then( valor => console.log( valor ) );
f2().then( valor => console.log( valor ) );