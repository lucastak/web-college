import { Calculadora } from "./calculadora.js";
import { VisaoCalculadora } from "./visao-calculadora.js";

export class ControladoraCalculo {

    constructor() {
        this.modelo = new Calculadora();
        this.visao = new VisaoCalculadora();
    }

    iniciar() {
        this.visao.aoDispararSomar( this.somar.bind( this ) );
    }

    somar() {
        const n1 = this.visao.obterNumero1();
        const n2 = this.visao.obterNumero2();
        try {
            const resultado = this.modelo.somar( n1, n2 );
            this.visao.mostrarResultado( resultado );
        } catch ( erro ) {
            this.visao.mostrarErro( erro );
        }
    }
}