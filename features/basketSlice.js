import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  id: 0
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload],
      state.id = action.payload.id
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
        );

      let newBasket = [...state.items];

      if (index >= 0 ) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product ( id: ${action.payload.id}) as its not in basket!`
        )
      }

      state.items = newBasket;
    },
  },
})


export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state) => {
  return state.basket.items.filter((item) => item.id === state.basket.id);
}
  

export const selectBasketTotal = (state) => state.basket.items.reduce((total, items) => total += items.price, 0)

export default basketSlice.reducer