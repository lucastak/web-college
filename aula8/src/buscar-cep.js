const form = document.getElementById('formBuscaCep');
const inputCep = document.getElementById('inputCep');
const btnBuscar = document.getElementById('btnBuscar');
const loading = document.getElementById('loading');
const resultados = document.getElementById('resultados');
const conteudoResultados = document.getElementById('conteudoResultados');
const errorMessage = document.getElementById('errorMessage');

inputCep.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, '');
    e.target.value = valor;
    errorMessage.textContent = '';
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const cep = inputCep.value.trim();
    
    if (!validarCep(cep)) {
        errorMessage.textContent = 'CEP deve conter 8 dígitos';
        resultados.style.display = 'none';
        return;
    }
    
    errorMessage.textContent = '';
    await buscarCep(cep);
});

function validarCep(cep) {
    const cepLimpo = cep.replace(/[\s-]/g, '');
    return /^\d{8}$/.test(cepLimpo);
}

function buscarCep(cep) {
    btnBuscar.disabled = true;
    loading.style.display = 'block';
    resultados.style.display = 'none';
    
    const cepLimpo = cep.replace(/[\s-]/g, '');
    
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao conectar com a API');
            }
            return response.json();
        })
        .then(dados => {
            if (dados.erro) {
                throw new Error('CEP inválido ou não encontrado');
            }
            exibirResultados(dados);
        })
        .catch(erro => {
            conteudoResultados.innerHTML = `<div class="error">${erro.message}</div>`;
            resultados.style.display = 'block';
        })
        .finally(() => {
            btnBuscar.disabled = false;
            loading.style.display = 'none';
        });
}

function exibirResultados(dados) {
    let html = '';
    
    const campos = [
        { chave: 'cep', label: 'CEP' },
        { chave: 'logradouro', label: 'Endereço' },
        { chave: 'bairro', label: 'Bairro' },
        { chave: 'localidade', label: 'Cidade' },
        { chave: 'uf', label: 'Estado' }
    ];
    
    campos.forEach(campo => {
        const valor = dados[campo.chave] || 'Não informado';
        html += `
            <div class="resultado-item">
                <div class="resultado-label">${campo.label}</div>
                <div class="resultado-valor">${valor}</div>
            </div>
        `;
    });
    
    conteudoResultados.innerHTML = html;
    resultados.style.display = 'block';
}
