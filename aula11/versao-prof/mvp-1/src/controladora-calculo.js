import { Calculadora } from "./calculadora.js";

export class ControladoraCalculo {

    constructor( visao ) {
        this.modelo = new Calculadora();
        this.visao = visao;
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