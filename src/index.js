import { createStore } from 'redux';


const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

//have to be before you make your reducer function. dont get why though since i thought functions were hoisted?
const ADD_DRINK = 'ADD_DRINK';
const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

const ADD_SANDWICH = 'ADD_SANDWICH';
const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

const ADD_CHIPS = 'ADD_CHIPS';
const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});



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

store.dispatch(addDrink('juice'));
console.log('added a drink', store.getState());

store.dispatch(addSandwich('veggie'));
console.log('added a sandwich', store.getState());

store.dispatch(addChips('salt and vinegar'));
console.log('added chips', store.getState());






