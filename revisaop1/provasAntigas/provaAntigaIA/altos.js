document.addEventListener('DOMContentLoaded', () => {
    const itens = JSON.parse(localStorage.getItem('itens') || '[]');
    
    // Filtro para atletas com altura > 1.90m usando filter()
    const altos = itens.filter(atleta => atleta.altura > 1.90);
    
    const tbody = document.querySelector('tbody');
    let somaPeso = 0;
    let maiorAltura = 0;

    altos.forEach(atleta => {
        const tr = document.createElement('tr');
        
        const tdNome = document.createElement('td');
        tdNome.textContent = atleta.nome;
        
        const tdPeso = document.createElement('td');
        tdPeso.textContent = atleta.peso.toString().replace('.', ',');
        
        const tdAltura = document.createElement('td');
        tdAltura.textContent = atleta.altura.toString().replace('.', ',');

        tr.appendChild(tdNome);
        tr.appendChild(tdPeso);
        tr.appendChild(tdAltura);
        
        // Uso de appendChild em vez de innerHTML
        tbody.appendChild(tr);

        somaPeso += atleta.peso;
        if (atleta.altura > maiorAltura) {
            maiorAltura = atleta.altura;
        }
    });

    const tfootTr = document.querySelector('tfoot tr');
    const tdFooterNodes = tfootTr.querySelectorAll('td');
    
    if (altos.length > 0) {
        const mediaPeso = somaPeso / altos.length;
        // Uso de textContent em vez de innerHTML
        tdFooterNodes[1].textContent = mediaPeso.toFixed(1).replace('.', ',');
        tdFooterNodes[2].textContent = maiorAltura.toFixed(2).replace('.', ',');
    }
});
