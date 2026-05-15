1. Questões entregues à lápis não têm direito à revisão.
2. Ao usar caneta esferográfica, usar tinta azul ou preta.
3. Usar EcmaScript 6 ou superior e EcmaScript Modules (ESM).
4. Não utilizar frameworks ou bibliotecas de código externas.
1) [3,0] Considere o código abaixo, pertencente ao corpo da página "cadastro.html":
<script src="cadastro.js" type="module" ></script>
<h1>Cadastro de Atleta</h1>
<form>
<label for="nome">Nome:</label> <input type="text" id="nome" />
<label for="peso">Peso:</label> <input type="text" id="peso" />
<label for="altura">Altura:</label> <input type="text" id="altura" />
<button type="button" id="salvar">Salvar</button>
</form>

Implemente o arquivo "cadastro.js" de forma que, quando o botão Salvar for acionado, dados do
formulário sejam obtidos, validados e, se válidos, salvos em um array de objetos em localStorage, a ser
mantido na chave "itens". Caso haja algum dado inválido, exibir uma mensagem que detalhe ao usuário o
problema. As validações devem ser feitas por uma função no arquivo "validacao.js" — a ser criado por
você —, que deve ser utilizado por "cadastro.js". As seguintes validações devem ocorrer: nome deve ter
entro 2 e 100 caracteres: a altura não deve ser negativa e ser de no máximo 2,99 metros; o peso não deve
ser negativo e ser de no máximo 299,9 kg. Após salvar, redirecionar o usuário para "atletas.html",
modificando o valor de location.url.


2) a) [2,0] Considere o contendo do corpo da página "altos.html" abaixo. Utilizando objetos do DOM, sem
utilizar innerHTML, preencha o corpo da tabela com os dados dos atletas salvos no localStorage, que
contenham altura superior a 1.90m. Utilize filter() para filtrar os atletas.
<h1>Atletas Altos</h1>
<table>
<thead> <tr><th>Nome</th><th>Peso (kg)</th><th>Altura (m)</th></tr></thead>
<tbody></tbody>
<tfoot><tr><td></td><td>0,0</td><td>0,00</td></tr></tfoot>
</table>

B) [1,0] Calcule a média de peso dos atletas e a maior das alturas, então exiba-as no rodapé da tabela, sem
utilizar innerHTML.
3) a) [2.0] Produza o corpo da página "atletas.html" com uma lista não ordenada (<ul>) de atletas, em que
cada item deve ser exibido com dados dos atletas (armazenados em localStorage) como na frase "Ana possui
52,3 kg e mede 1,62m.". Use interpolação para gerar as frases, que devem ser produzidas com o método
map() sobre os atletas.
b) [2.0] Faça com que o duplo clique sobre um item da lista remova-o da lista e do array de atletas em
localStorage.