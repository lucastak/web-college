import { Calculadora } from "./calculadora.js";
import { VisaoCalculadora } from "./visao-calculadora.js";

export class ControladoraCalculo {
    constructor() {
        this.visaoCalculadora = new VisaoCalculadora();
        this.calculadora = new Calculadora();
    }

    iniciar(){
        this.visaoCalculadora.addEventoCalcular(() => {
            const dados = this.visaoCalculadora.obterDados();
            const resultado = this.calculadora.somar(dados.n1, dados.n2);
            this.visaoCalculadora.exibirResultado(resultado);
        });
    }
}