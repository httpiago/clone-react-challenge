import * as React from '.'

type FragmentProps = {
  children?: Array<JSX.Element>,
}

/**
 * Renderizar um elemento invisível no DOM.
 */
export function Fragment({ children }: FragmentProps) {
  return <>{children}</>
}
