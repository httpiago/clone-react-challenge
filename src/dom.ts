import { RefObject } from './hooks';

/**
 * Criar um elemento JSX válido para ser entendido pelo algoritmo.
 */
export function createElement(type: string, props: object, ...children): JSX.Element {
  if (!props) props = {};
  return {
    type,
    props,
    children: props.children || children
  }
}

/**
 * Criar um elemento HTML válido baseado no elemento JSX recebido.
 */
export function mountElement(element: JSX.Element): HTMLElement {
  let node;

  // Permitir renderização condicional
  if (element === null || element === false) {
    node = document.createDocumentFragment()
  }
  // Renderizar textos e números dentro das tags
  else if (typeof element === 'string' || typeof element === 'number') {
    node = document.createTextNode(String(element))
  }
  // Permitir fragmentos
  else if (typeof element.type === 'function' && element.type.name === 'Fragment') {
    node = document.createDocumentFragment()
    renderChildren(node, element.children)
  }
  // Montar componente de função
  else if (typeof element.type === 'function') {
    node = mountComponent(element.type, { ...element.props, children: element.children })
  }
  // Criar um novo elemento no DOM
  else if (typeof element.type === 'string') {
    node = document.createElement(element.type)

    // Definir propriedades do elemento
    Object.entries(element.props).forEach(([name, value]) => {
      setProp(node, name, value)
    })

    renderChildren(node, element.children)
  }

  return node
}

type PropValue = string | number | boolean | EventHandler | RefObject
type EventHandler = (event: Event) => void

/**
 * Set property
 */
function setProp(node: HTMLElement, propName: string, propValue: PropValue) {
  if (/^on/.test(propName) && typeof propValue === 'function') {
    const eventType = propName.substring(2).toLowerCase()
    node.addEventListener(eventType, propValue)
  }
  else if (propName === 'ref') {
    (propValue as RefObject).updateRef(node)
  }
  else {
    node[propName] = propValue
  }
}

/**
 * Renderizar filhos de um elemento de forma recursiva.
 */
function renderChildren(node: HTMLElement, children: JSX.Element[]) {
  children.forEach((child) => {
    if (child === null || child === false) return;

    if (Array.isArray(child)) {
      // Renderizar uma lista
      child.forEach((child) => {
        if (child === null || child === false) return;

        node.appendChild( mountElement(child) )
      })
    } else {
      // Renderizar filho
      node.appendChild( mountElement(child) )
    }
  })
}

/**
 * Montar um componente de função.
 */
function mountComponent(Component: Function, props: object) {
  const domNode = Component(props)

  return mountElement( domNode )
}
