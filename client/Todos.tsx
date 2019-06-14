import * as React from '../src/index'
import { GlobalContext } from './App';

import Form from './Form';

type Props = {
  children?: JSX.Element
}

export default function Todos(props: Props) {
  const { state: { todos }, dispatch } = React.useContext(GlobalContext)

  function handleDelete(payload: number) {
    dispatch({ type: 'REMOVE_TODO', payload })
  }

  return (
    <div>
      <ul>
        {todos.length !== 0 ? (
          todos.map(({ id, text }) => (
            <li onClick={handleDelete.bind(null, id)}>{text} (click to remove)</li>
          ))
        ) : (
          'Nenhum todo encontrado :('
        )}
      </ul>

      <Form
        addLabel="Adicionar todo"
      />
    </div>
  )
}
