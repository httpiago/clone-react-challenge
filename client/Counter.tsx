import * as React from '../src/index'
import { GlobalContext } from './App';
import { AppState } from './reducer';

export default function Counter(props) {
  return (
    <GlobalContext.Consumer
      children={({ state }: AppState) => {
        return (
          <div>
            Counter: {state.todos.length}
          </div>
        )
      }}
    />
  )
}
