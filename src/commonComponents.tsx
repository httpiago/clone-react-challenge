import * as React from '.'
import { mountElement } from './dom';

type FragmentProps = {
  children?: Array<JSX.Element>,
}

/**
 * Renderizar um elemento invisível no DOM.
 */
export function Fragment({ children }: FragmentProps) {
  return <>{children}</>
}

type PortalProps = {
  /** O elemento DEVE estar vazio. */
  node: HTMLElement,
  children?: JSX.Element,
}

/**
 * Renderizar elementos do React fora da árvore atual.
 */
export function Portal({ node, children }: PortalProps) {
  const elemToTeletransport = children[0]
  if (!elemToTeletransport || elemToTeletransport === null || elemToTeletransport === false) {
    try {
      node.removeChild(node.lastChild)
    } catch {}
    return null;
  }

  const mountedTree = mountElement(elemToTeletransport)

  if (!node.lastChild) {
    node.append(mountedTree)
  } else {
    node.replaceChild(mountedTree, node.lastChild)
  }

  return null
}
