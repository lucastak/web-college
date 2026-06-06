export class VisaoCalculadora {
    constructor(){
        this.resultado = document.querySelector('#resultado');
        this.form = document.querySelector('form');
    }

    exibirResultado(resultado){
        this.resultado.textContent = resultado;
    }

    obterDados(){
        const n1 = document.querySelector('#n1').value;
        const n2 = document.querySelector('#n2').value;
        return {n1, n2};
    }

    addEventoCalcular(callback){
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            callback();
        });
    }
}