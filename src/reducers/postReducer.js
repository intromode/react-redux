const initialState = [];

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return [...state, { title: action.title, body: action.body }];
    case 'DELETE_POST':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      return state;
  }
}
