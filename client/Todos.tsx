import * as React from '../src/index'
import faker from 'faker'

type Props = {
  addLabel?: string,
  children?: JSX.Element
}

export default function Todos(props: Props) {
  const [todos, setTodos] = React.useState('todos', [ { id: 0, text: faker.lorem.words(5) } ])

  function handleAdd() {
    const newTodo = {
      id: Date.now(),
      text: faker.lorem.words(5),
    }

    setTodos([ ...todos, newTodo ])
  }

  function hanldeRemove(id: number) {
    setTodos(
      todos.filter(item => item.id !== id)
    )
  }

  return (
    <div>
      <ul>
        {todos.length !== 0 ? (
          todos.map(({ id, text }) => (
            <li onClick={() => hanldeRemove(id)}>{text} (click to remove)</li>
          ))
        ) : (
          'Nenhum todo encontrado :('
        )}
      </ul>
      <button onClick={handleAdd}>{props.addLabel || 'Add todo'}</button>
    </div>
  )
}
