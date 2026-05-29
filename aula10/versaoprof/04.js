function f1() {
    return Promise.resolve( 10 );
}

async function f2() {
    return 10;
}

const valor1 = await f1();
console.log( valor1 );

const valor2 = await f2();
console.log( valor2 );