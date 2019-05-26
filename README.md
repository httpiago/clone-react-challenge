Sim, outro projeto que tenta recriar a API do [ReactJS](https://reactjs.org).

 **Por quê?**

Bom, eu acho o React muito legal e estava sem o que fazer 😄.

>  ⚠ Sob nenhuma hipótese use isso em produção! Se o que você quer é uma versão mais leve do React, então lhe apresento meu outro amigo, o [Preact](https://github.com/preactjs/preact).

## Instalação

```
git clone https://github.com/httpiago/react-clone-challenge.git
cd clone-react-challenge
yarn install
yarn run start
```

## Cobertura da API

| Função                                    | Implementado? | Link |
| ----------------------------------------- | -  | ------------- |
| Virtual DOM.                              | ✔️ | - |
| Renderizar elementos no DOM usando JSX.   | ✔️ | - |
| Atualizar a renderização no DOM.          | ✔️ | - |
| Atualizar o DOM de forma eficiente.       | ❌ | - |
| Manipular eventos.                        | ✔️ | - |
| Renderização condicional.                 | ✔️ | - |
| Renderizar listas.                        | ✔️ | - |
| Componentes!                              | ✔️ | - |
| Estados.                                  | ✔️ (com gambiarra) | - |
| Métodos de ciclo de vida.                 | ❌ | - |
| Fragmentos (<React.Fragment>).            | ✔️ | - |
| Criar referência a um elemento.           | ❌ | - |
| Tratar erros durante a renderização.      | ️️️️✔️ | - |
| .renderToString(...)                      | ✔️ | - |

## Inspirações

- [pomber/didact](https://github.com/pomber/didact)
- [cyan33/v-dom](https://github.com/cyan33/v-dom/)