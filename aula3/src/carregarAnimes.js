export function carregarAnimes() {
    return JSON.parse(localStorage.getItem('animes') || '[]');
}