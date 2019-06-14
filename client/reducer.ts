import faker from 'faker'

export type AppState = typeof initialState

type ActionType = {
  type: string,
  payload?: any
}

const initialState = {
  todos: [ { id: 0, text: faker.lorem.words(5) } ]
}

export function reducer(state = initialState, { type, payload }: ActionType): AppState {
  switch (type) {
    case 'ADD_TODO': return {
      ...state,
      todos: [ ...state.todos, payload ]
    };

    case 'REMOVE_TODO': return {
      ...state,
      todos: state.todos.filter(item => item.id !== payload)
    };

    default: return state;
  }
}
