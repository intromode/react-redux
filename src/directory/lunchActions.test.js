import { addDrink, addChips, addSandwich } from './lunchActions';

describe('tests lunch actions', () => {
  it('tests drink action', () => {
    const drink = addDrink('juice');
    expect(drink).toEqual({
      type: 'ADD_DRINK',
      payload: 'juice'
    });
  });

  it('tests chips action', () => {
    const chips = addChips('salt and vinegar');
    expect(chips).toEqual({
      type: 'ADD_CHIPS',
      payload: 'salt and vinegar'
    });
  });

  it('tests sandwich action', () => {
    const sandwich = addSandwich('veggies');
    expect(sandwich).toEqual({
      type: 'ADD_SANDWICH',
      payload: 'veggies'
    });
  });
});
