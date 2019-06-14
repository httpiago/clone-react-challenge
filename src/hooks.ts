import { forceUpdate } from './fakeReconciler'
import { Context } from './context'

const stateMemorization = {}

/**
 * Salvar um estado na memória do React para ser lembrado a cada renderização.
 *
 * @param key Chave única para representar o estado.
 * @param initialState
 * @template S = Tipo do estado salvo no hook.
 */
export function useState<S>(key: string, initialState?: S) {
  if (!(key in stateMemorization)) {
    stateMemorization[key] = initialState
  }

  const recoveredState = stateMemorization[key]

  function setState(newState: S) {
    stateMemorization[key] = newState
    forceUpdate()
  }

  return [recoveredState, setState] as [Readonly<S>, typeof setState]
}

type Action = { type: string, payload?: any };
type Reducer<S> = (state: S, action: Action) => S;
export type Dispatch = (action: Action) => void;

/**
 * Salvar um estado na memória do React ao estilo Redux.
 *
 * @param key Chave única para representar o estado.
 * @param reducer Reducer que será usado para fazer as manipulações no estado com base na ação recebida.
 * @template S = Tipo do estado salvo no hook.
 */
export function useReducer<S = any>(
  key: string,
  reducer: Reducer<S>,
) {
  let initialState = !(key in stateMemorization) && reducer(undefined, { type: '@INIT'})
  const [state, setState] = useState<S>(key, initialState)

  function dispatch(action: Action) {
    const newState = reducer(state, action)
    setState(newState)
  }

  return [state, dispatch] as [Readonly<S>, Dispatch]
}

/**
 * Acessar o valor de um contexto criado em um componente mais acima na árvore.
 */
export function useContext<C>(context: Context<C>) {
  return context.value
}

export type RefObject<C = any> = {
  current?: C,
  updateRef: (newRef: any) => void,
}

/**
 * Criar referência a um elemento no DOM.
 */
export function useRef<T>(): RefObject<T> {
  let obj: RefObject = {
    updateRef(newRef) {
      obj['current'] = newRef
    }
  }

  return obj
}
