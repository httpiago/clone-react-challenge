Sim, outro projeto que tenta recriar a API do [ReactJS](https://reactjs.org).

**Por quê?**

Bom, eu acho o React muito legal e estava sem o que fazer 😄.

> ⚠ Sob nenhuma hipótese use isso em produção! Se o que você quer é uma versão mais leve do React, então lhe apresento meu outro amigo, o [Preact](https://github.com/preactjs/preact).

## Instalação

```bash
git clone https://github.com/httpiago/react-clone-challenge.git
cd clone-react-challenge
yarn install
yarn run start
```

## Cobertura da API

| Função                                    | Implementado? | Link |
| ----------------------------------------- | -  | ------------- |
| Virtual DOM.                              | ✔️ | [Implementação](/src/dom.ts#L4) |
| Renderizar elementos no DOM usando JSX.   | ✔️ | [Implementação](/src/dom.ts#L12) |
| Atualizar a renderização no DOM.          | ✔️ | [Implementação](/src/fakeReconciler.ts#L32) |
| Atualizar o DOM de forma eficiente.       | ❌ | - |
| Manipular eventos.                        | ✔️ | [Implementação](/src/dom.ts#L55) |
| Renderização condicional.                 | ✔️ | [Implementação](/src/dom.ts#L16) |
| Renderizar listas.                        | ✔️ | [Implementação](/src/dom.ts#L69) |
| Renderizar web components.                | ✔️ | - |
| Componentes!                              | ✔️ | [Implementação](/src/dom.ts#L29) |
| Estados.                                  | ✔️ | [Implementação](/src/hooks.ts#L11) |
| Hooks!                                    | ✔️ | [Implementação](/src/hooks.ts) |
| Métodos de ciclo de vida.                 | ❌ | - |
| Fragmentos (<React.Fragment>).            | ✔️ | [Implementação](/src/commonComponents.tsx#L10) |
| Criar referência a um elemento.           | ❌ | - |
| Tratar erros durante a renderização.      | ️️️️✔️ | [Implementação](/src/fakeReconciler.ts#L23) |
| .renderToString(...)                      | ✔️ | [Implementação](/src/fakeReconciler.ts#L23) |

## Inspirações

- [pomber/didact](https://github.com/pomber/didact)
- [cyan33/v-dom](https://github.com/cyan33/v-dom/)
