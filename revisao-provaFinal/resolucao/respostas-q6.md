# Respostas da Questão 6 – Verdadeiro ou Falso

### a) Verdadeiro (V)
`Promise.all()` aguarda **todas** as promessas do array serem resolvidas.
Se qualquer uma rejeitar, ele rejeita **imediatamente** com o motivo da primeira rejeição, sem esperar as demais.

```js
Promise.all([p1, p2, p3])
    .then(resultados => console.log(resultados)) // array com todos os resultados
    .catch(erro => console.log(erro));            // primeiro erro que ocorrer
```

---

### b) Verdadeiro (V)
O `<output>` é um elemento semântico HTML5 projetado exatamente para exibir resultados de cálculos ou ações.
Em JavaScript, você define seu conteúdo com **`textContent`** como qualquer outro elemento:

```js
const output = document.querySelector('output');
output.textContent = 'Resultado: 42';        // ← define texto
output.textContent = 'Erro: dado inválido'; // ← reutiliza para erros também
output.textContent = '';                     // ← limpa o conteúdo
```

> **Este é exatamente o ponto que você queria revisar!**

---

### c) Verdadeiro (V)
A propriedade `rowIndex` retorna o índice da linha (`<tr>`) em relação à **tabela inteira** (contando thead, tbody e tfoot juntos).

Já a propriedade `sectionRowIndex` (vista na P2) retorna o índice apenas dentro da seção em que a linha está (`<tbody>`, `<thead>` ou `<tfoot>`).

```js
const tr = document.querySelector('tr');
console.log(tr.rowIndex);        // índice global na tabela
console.log(tr.sectionRowIndex); // índice dentro da seção (tbody/thead/tfoot)
```

---

### d) Falso (F)
`setInterval(função, tempo)` executa a função **repetidamente** a cada intervalo.
A função que executa **apenas uma vez** é o `setTimeout`.

```js
setTimeout(() => console.log('Uma vez'), 1000);           // executa 1x após 1s
setInterval(() => console.log('Repetindo...'), 1000);     // executa a cada 1s
```

---

### e) Falso (F)
Módulos ESM exportam *bindings* somente-leitura. Quem importa **não pode reatribuir** o valor diretamente:

```js
// modulo.js
export let contador = 0;

// main.js
import { contador } from './modulo.js';
contador = 10; // ← TypeError! Não é permitido reatribuir imports diretamente
```
