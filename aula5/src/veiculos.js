export function obterVeiculos() {
    return JSON.parse(localStorage.getItem('veiculos') || '[]');
}

export function salvarVeiculos(veiculos) {
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
}
