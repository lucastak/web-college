export class Calculadora {
    constructor(valor1 = 0, valor2 = 0){
        this.valor1 = Number(valor1);
        this.valor2 = Number(valor2);
    }

    somar(valor1, valor2) {
        if (valor1 !== undefined) this.valor1 = Number(valor1);
        if (valor2 !== undefined) this.valor2 = Number(valor2);
        return this.valor1 + this.valor2;
    }
}