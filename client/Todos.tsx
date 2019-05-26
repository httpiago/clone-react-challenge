import * as React from '../src/index'

let state = {
  todos: [
    { id: 0, text: 'initial todo' }
  ]
}

type Props = {
  addLabel?: string,
  children?: JSX.Element
}

export default function Todos(props: Props) {

  const handleAdd = () => {
    state.todos.push({
      id: Date.now(),
      text: 'New todo'
    })
    React.forceUpdate()
  }

  const hanldeRemove = (id: number) => {
    state.todos = state.todos.filter(item => item.id !== id)
    React.forceUpdate()
  }

  return (
    <div>
      <ul>
        {state.todos.length !== 0 ? (
          state.todos.map(({ id, text }) => (
            <li onClick={() => hanldeRemove(id)}>{text + ' ' + id}</li>
          ))
        ) : (
          'Nenhum todo encontrado :('
        )}
      </ul>
      <button onClick={handleAdd}>{props.addLabel || 'Add todo'}</button>
    </div>
  )
}