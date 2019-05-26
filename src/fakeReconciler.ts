import { mountElement } from './dom'

let memorization = {
  rootDOMElement: null,
  lastReactTree: null,
}

/**
 * Renderizar a árvore do React no DOM.
 */
export function render(reactElement: JSX.Element, rootDOMElement: HTMLElement) {
  memorization = {
    rootDOMElement,
    lastReactTree: reactElement,
  }

  forceUpdate()
}

/**
 * Renderizar elementos do React em formato de texto.
 */
export function renderToString(reactElement: JSX.Element): string {
  const mountedTree = mountElement(reactElement)

  return mountElement.outerHTML
}

/**
 * Atualizar a renderização no DOM.
 */
export function forceUpdate() {
  const { rootDOMElement, lastReactTree } = memorization
  let mountedTree

  try {
    mountedTree = mountElement(lastReactTree)
  } catch(err) {
    console.log('Ocorreu um erro ao renderizar um componente:', err)
    console.trace()
    return;
  }

  if (!rootDOMElement.lastChild) {
    rootDOMElement.append(mountedTree)
  } else {
    rootDOMElement.replaceChild(mountedTree, rootDOMElement.lastChild)
  }
}
