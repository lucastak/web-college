document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista-atletas');
    
    renderizarLista();

    // Delegação de evento para o double-click na lista
    lista.addEventListener('dblclick', (e) => {
        if (e.target.tagName === 'LI') {
            const index = e.target.getAttribute('data-index');
            const itens = JSON.parse(localStorage.getItem('itens') || '[]');
            
            // Remove do array
            itens.splice(index, 1);
            
            // Atualiza o array no localStorage
            localStorage.setItem('itens', JSON.stringify(itens));
            
            // Re-renderiza a lista (remove da tela e atualiza os índices dos demais)
            renderizarLista();
        }
    });
});

function renderizarLista() {
    const itens = JSON.parse(localStorage.getItem('itens') || '[]');
    const lista = document.getElementById('lista-atletas');
    
    // Produzir as frases com método map() e interpolação
    const elementsHTML = itens.map((atleta, index) => {
        const pesoStr = atleta.peso.toString().replace('.', ',');
        const alturaStr = atleta.altura.toString().replace('.', ',');
        return `<li data-index="${index}">${atleta.nome} possui ${pesoStr} kg e mede ${alturaStr}m.</li>`;
    });
    
    lista.appendChild(elementsHTML.join(''))
}
