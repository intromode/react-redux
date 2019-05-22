import { createStore } from 'redux';


const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};



function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    default:
      return state;
  }
}



const store = createStore(reducer);

//GO OVER HIS WAY OF SUBBING AND WHY 
// const mySubscribe = store.subscribe(() => {
//   console.log('STORE UPDATED');
// });

const ADD_DRINK = 'ADD_DRINK';
store.dispatch({
  type: ADD_DRINK,
  payload: 'juice'
});
console.log('added a drink', store.getState());

const ADD_SANDWICH = 'ADD_SANDWICH';
store.dispatch({
  type: ADD_SANDWICH,
  payload: 'veggie'
});
console.log('added a sandwich', store.getState());

const ADD_CHIPS = 'ADD_CHIPS';
store.dispatch({
  type: ADD_CHIPS,
  payload: 'salt and vinegar'
});
console.log('added chips', store.getState());





// const ADD_DRINK = 'ADD_DRINK';
// const addDrink = drink => ({
//   type: ADD_DRINK,
//   payload: drink
// });

// const ADD_SANDWICH = 'ADD_SANDWICH';
// const addSandwich = sandwich => ({
//   type: ADD_SANDWICH,
//   payload: sandwich
// });
