import * as React from '../src/index'
import { reducer, AppState } from './reducer'

import Header from './Header'
import Todos from './Todos'
import Counter from './Counter'

type GlobalContextType = {
  state: AppState,
  dispatch: React.Dispatch
}
export const GlobalContext = React.createContext<GlobalContextType>()

function App(props) {
  const [state, dispatch] = React.useReducer<AppState>('global-state', reducer)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <main className="wrapper">
        <Header repeatExclamation={3}>Hello React</Header>
        <hr/>
        <>
          <Counter />
          <hr/>
          <Todos />
        </>
      </main>
    </GlobalContext.Provider>
  )
}

React.render(
  <App />,
  document.getElementById('root')
)
