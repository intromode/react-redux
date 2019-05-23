const initialState = [];

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return [...state, { title: action.title, body: action.body }];
    case 'DELETE_POST':
      return { title: null, body: null };
    default:
      return state;
  }
}
