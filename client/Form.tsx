import * as React from '../src/index'
import { GlobalContext } from './App';

type Props = {
  addLabel?: string
}

export default function Form({ addLabel = 'Add todo' }: Props) {
  const { dispatch, state } = React.useContext(GlobalContext)
  const [newTodoText, setNewTodoText] = React.useState('newtext', '')

  function handleSubmit(event: Event) {
    event.preventDefault()
    if (newTodoText === '') return;

    const newTodo: typeof state['todos'][0] = {
      id: Date.now(),
      text: newTodoText
    }
    dispatch({ type: 'ADD_TODO', payload: newTodo })
    setNewTodoText('')
  }

  function handleChange(event: Event) {
    setNewTodoText( event.target.value )
    document.getElementById('txt').focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodoText} onInput={handleChange} id="txt" />
      <input type="submit" value={addLabel} />
    </form>
  )
}
