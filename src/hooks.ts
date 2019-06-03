import { forceUpdate } from './fakeReconciler'

const stateMemorization = {}

/**
 * Salvar um estado na memória do React para ser lembrado a cada renderização.
 *
 * @param key Chave única para representar o estado.
 * @param initialState
 */
export function useState<K extends string, I>(key: string, initialState?: I) {
  if (!(key in stateMemorization) && typeof initialState !== 'undefined') {
    stateMemorization[key] = initialState
  }

  const recoveredState = stateMemorization[key]

  function setState(newState:I) {
    stateMemorization[key] = newState
    forceUpdate()
  }

  return [recoveredState, setState] as [I, typeof setState]
}
