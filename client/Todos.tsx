import * as React from '../src/index'

type Props = {
  todos: Array<{ [index: string]: any }>
  addLabel?: string,
  handleAdd: () => void,
  handleDelete: (id: number) => void,
  children?: JSX.Element
}

export default function Todos({ todos, handleAdd, handleDelete, addLabel }: Props) {
  return (
    <div>
      <ul>
        {todos.length !== 0 ? (
          todos.map(({ id, text }) => (
            <li onClick={() => handleDelete(id)}>{text} (click to remove)</li>
          ))
        ) : (
          'Nenhum todo encontrado :('
        )}
      </ul>
      <ion-button onClick={handleAdd}>{addLabel || 'Add todo'}</ion-button>
    </div>
  )
}
