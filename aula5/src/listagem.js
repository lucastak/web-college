export function listarVeiculos(veiculos){
  console.log("veiculos", veiculos);
  const container = document.getElementById("card-container");
  
  container.innerHTML = "";

  veiculos.forEach((veiculo, index) => {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `
      <h3 class="card-title">${veiculo.nome_cliente}</h3>
      <p class="card-subtitle">${veiculo.telefone}</p>
      <p class="card-body">${veiculo.descricao_veiculo}</p>
      <span class="card-badge">${veiculo.placa_veiculo}</span>
      <button class="card-btn-remover" data-index="${index}">remover</button>
      <button class="card-btn-alterar" data-index="${index}">alterar</button>
    `;
    container.appendChild(card);
  });
}