import { createElement } from './dom'

export { render, forceUpdate } from './fakeReconciler'
export { createElement } from './dom'

export function Fragment({ children }: { children?: JSX.Element[] }) {
   return createElement('fragment', {}, children)
}