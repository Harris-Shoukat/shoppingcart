import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price;
      state.totalQuantity += 1;
    },
    

    removeCart: (state, action) => {


      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload
      );

      if (itemToRemove) {
        const prize = state.totalPrice - itemToRemove.price;
        state.totalPrice = prize.toFixed(2);
        state.totalQuantity -= 1;
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        if (state.cart.length === 0) {
          state.totalPrice = 0;
          state.totalQuantity = 0;
        }
      }
    },
  },
});

export const { AddCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
