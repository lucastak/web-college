# 🎬 Revisão – Prova Final

Esta pasta contém uma **prova simulada** cobrindo todos os tópicos da P1 e P2, junto com a resolução comentada.

---

## 📂 Estrutura

```
revisao-provaFinal/
│
├── prova-simulada.md          ← Enunciado completo da prova (leia isso primeiro!)
│
├── lista-filmes.html          ← HTML da Questão 1 (fetch, filter, map, output)
├── cadastro-filme.html        ← HTML da Questão 4 (<output> para feedback)
├── cadastro-local.html        ← HTML da Questão 5a (localStorage + validação)
├── favoritos.html             ← HTML da Questão 5b (filter + DOM sem innerHTML)
├── meus-filmes.html           ← HTML da Questão 5c (map + interpolação + dblclick)
│
└── resolucao/
    ├── lista-filmes.js        ← Q1: fetch, filter(), map(), output.textContent
    ├── filme.js               ← Q2: classe com atributos privados e validação
    ├── servico-cadastro-filme.js ← Q3: serviço fetch sem async/await
    ├── cadastro-filme.js      ← Q4: formulário usando <output> para feedback
    ├── validacao-filme.js     ← Q5a: módulo de validação separado
    ├── cadastro-local.js      ← Q5a: salvar no localStorage
    ├── favoritos.js           ← Q5b: filtrar e exibir sem innerHTML
    ├── meus-filmes.js         ← Q5c: map + interpolação + remoção por dblclick
    └── respostas-q6.md        ← Q6: gabarito das questões V/F com explicações
```

---

## 📚 Tópicos Abordados

### Da P1
| Tópico | Onde aparece |
|--------|-------------|
| localStorage (salvar/carregar) | Q5a – `cadastro-local.js` |
| Validação em módulo separado | Q5a – `validacao-filme.js` |
| DOM sem `innerHTML` | Q5b – `favoritos.js` |
| `filter()` | Q5b – `favoritos.js` |
| `map()` + interpolação | Q5c – `meus-filmes.js` |
| Evento `dblclick` para remover | Q5c – `meus-filmes.js` |
| Redirecionamento (`location.href`) | Conceito (visto na P1 original) |

### Da P2
| Tópico | Onde aparece |
|--------|-------------|
| `fetch` + promessas (sem async/await) | Q1 – `lista-filmes.js` |
| `filter()` + `map()` em dados da API | Q1 – `lista-filmes.js` |
| `createElement` (sem string de tags) | Q1, Q5b, Q5c |
| `replaceChildren()` | Q1 – `lista-filmes.js` |
| DELETE na API | Q1 – `lista-filmes.js` |
| Classe com atributos privados (`#`) | Q2 – `filme.js` |
| Propriedades somente-leitura (getters) | Q2 – `filme.js` |
| Validação com método privado | Q2 – `filme.js` |
| `toJson()` / `JSON.stringify` | Q2 – `filme.js` |
| Classe de serviço (POST via fetch) | Q3 – `servico-cadastro-filme.js` |
| `Promise.reject()` para erros síncronos | Q3 – `servico-cadastro-filme.js` |
| Evento `submit` no formulário | Q4 – `cadastro-filme.js` |
| `<output>` para exibir feedback | Q4, Q1 – **ponto revisado!** |
| Questões V/F sobre promessas/ESM | Q6 – `respostas-q6.md` |

---

## ⭐ Ponto Especial: Como usar `<output>`

Este era o ponto que você queria revisar! O `<output>` é um **elemento HTML5 semântico** para exibir resultados de ações ao usuário. Usá-lo é simples:

```html
<!-- No HTML -->
<output></output>
```

```js
// No JavaScript — igual a qualquer outro elemento
const output = document.querySelector('output');

output.textContent = 'Exibindo filmes a partir de 2000'; // sucesso
output.textContent = 'Erro: falha ao conectar';          // erro
output.textContent = '';                                   // limpar
```

> A diferença para um `<div>` é **semântica**: o `<output>` indica ao navegador/leitor de tela que aquele conteúdo é o **resultado de uma ação do usuário** — como mudar um slider ou submeter um formulário.

---

## 🗺️ Sugestão de Estudo

1. Leia o enunciado em `prova-simulada.md`
2. Tente resolver cada questão **sem olhar a resolução**
3. Compare com os arquivos em `resolucao/`
4. Preste atenção especial em:
   - Como o `<output>` recebe texto com `textContent`
   - Como o `Promise.reject()` converte erros síncronos em assíncronos
   - A diferença entre `rowIndex` e `sectionRowIndex`
   - `setTimeout` (1x) vs `setInterval` (repetido)
