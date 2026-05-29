function f1() {
    return Promise.resolve( 10 );
}

async function f2() {
    return 10;
}

// f1().then( valor => console.log( valor ) );
// f2().then( valor => console.log( valor ) );

f1().then( valor => {
    console.log( valor );
    f2()
        .then( valor => console.log( valor ) );
} )