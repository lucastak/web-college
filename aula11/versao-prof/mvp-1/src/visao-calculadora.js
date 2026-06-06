import { ControladoraCalculo } from "./controladora-calculo.js";

export class VisaoCalculadora {

    constructor() {
        this.controladora = new ControladoraCalculo( this );
    }

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

    // Disparo

    iniciar() {
        document.querySelector( 'button' ).addEventListener( 'click',
            event => {
                event.preventDefault();
                this.controladora.somar();
            } );
    }

}