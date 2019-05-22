import { createStore } from 'redux';
import { addDrink, addChips, addSandwich } from './directory/lunchActions';


const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

//have to be before you make your reducer function. dont get why though since i thought functions were hoisted?

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_CHIPS':
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






