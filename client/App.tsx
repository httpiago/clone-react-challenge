import * as React from '../src/index'
import faker from 'faker'

import Header from './Header'
import Todos from './Todos';
import Counter from './Counter';

function App({}) {
  const [state, setState] = React.useState('global', { todos: [ { id: 0, text: faker.lorem.words(5) } ] })

  function handleAdd() {
    const newTodo = {
      id: Date.now(),
      text: faker.lorem.words(5),
    }

    setState({
      ...state,
      todos: [ ...state.todos, newTodo ]
    })
  }

  function handleDelete(id: number) {
    setState({
      ...state,
      todos: state.todos.filter(item => item.id !== id)
    })
  }

  return (
    <main className="wrapper">
      <Header showExclamation>Hello React</Header>
      <hr/>
      <>
        <Counter number={state.todos.length} />
        <hr/>
        <Todos
          todos={state.todos}
          addLabel="Add new todo"
          handleAdd={handleAdd}
          handleDelete={handleDelete}
        />
      </>
    </main>
  )
}

React.render(
  <App />,
  document.getElementById('root')
)
