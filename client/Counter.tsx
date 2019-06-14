import * as React from '../src/index'
import { GlobalContext } from './App';

export default function Counter(props) {
  return (
    <GlobalContext.Consumer
      children={({ state }) => (
        <div
          dangerouslySetInnerHTML={`Número de to-dos: ${state.todos.length}`}
        />
      )}
    />
  )
}
