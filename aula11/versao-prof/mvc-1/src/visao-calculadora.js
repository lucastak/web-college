export class VisaoCalculadora {

    // Entradas

    obterNumero1() {
        return document.getElementById( 'n1' ).value;
    }

    obterNumero2() {
        return document.getElementById( 'n2' ).value;
    }

    // Saídas

    mostrarResultado( resultado ) {
        document.querySelector( 'output' ).textContent = String( resultado );
    }

    mostrarErro( erro ) {
        document.querySelector( 'output' ).textContent = erro.message;
    }

    // Eventos

    aoDispararSomar( cb ) {
        document.querySelector( 'button' ).addEventListener( 'click',
            event => {
                event.preventDefault();
                cb(); // Invoca a função parametrizada
            } );
    }

}