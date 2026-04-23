function oi() {
    console.log( 'oi' );
}

let ooi = oi;
ooi();

let telefone = {
    ddd: '22',
    numero: '988887777',
    formatar: function() {
        return `(${this.ddd}) ${this.numero}`;
    },
    formatar2: () => {
        return `(${this.ddd}) ${this.numero}`; // this não é o telefone
    }
};
console.log( telefone.formatar() );

let fmt = telefone.formatar;
console.log( fmt() ); // Erro (undefined)

fmt = telefone.formatar.bind( telefone ); // telefone será o this
console.log( fmt() );

fmt = telefone.formatar2;
console.log( fmt() ); // Erro (undefined)

fmt = telefone.formatar2.bind( telefone );
console.log( fmt() ); // Erro (undefined)

// Ou seja: this não é o objeto atual em arrow functions