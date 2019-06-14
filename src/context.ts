export interface Context<V> {
  Provider(props: ProviderProps): JSX.Element,
  Consumer(props: ConsumerProps<V>): JSX.Element,
  value: V,
}

type ProviderProps = {
  value?: any,
  children?: JSX.Element,
}

type ConsumerProps<V = any> = {
  children: (value: V) => JSX.Element,
}

/**
 * Criar uma espécie de portal para passar uma informação para
 * um componente muito abaixo na árvore do React.
 */
export function createContext<V>(initialValue: V = null): Context<V> {
  const context = {
    value: initialValue,

    Provider: function(props: ProviderProps) {
      context.value = props.value

      return props.children[0]
    },
    Consumer: function(props: ConsumerProps<V>) {
      return props.children(context.value)
    }
  }

  return context
}
