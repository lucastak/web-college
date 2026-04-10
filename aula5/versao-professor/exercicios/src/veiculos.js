export function obterVeiculos() {
    let veiculos = JSON.parse( localStorage.getItem( 'veiculos' ) || '[]' );
    if ( veiculos.length == 0 ) {
        veiculos = [
            { cliente: 'Ana da Silva', telefone: '(22) 99998888', descricao: 'Monza ...', placa: 'XYZ 1234' },
            { cliente: 'João de Souza', telefone: '(22) 988887777', descricao: 'Chevette ...', placa: 'ABC 9876' },
        ];
    }
    // console.log( veiculos );
    return veiculos;
}


export function salvarVeiculos( veiculos ) {
    localStorage.setItem( 'veiculos', JSON.stringify( veiculos ) );
}