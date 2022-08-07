import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    countOfProductKinds: 0,
    products: [],
    totalPrice: 0,
  },
  reducers: {
    incrementPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    decrementPrice: (state, action) => {
      state.totalPrice -= action.payload;
    },
    addProduct: (state, action) => {
      if (!state.products.find((product) => product.id === action.payload.id)) {
        const product = {
          count: 1,
          ...action.payload,
        };
        state.products.push(product);
      } else {
        for (let i = 0; i < state.products.length; i++) {
          if (state.products[i].id === action.payload.id) {
            state.products[i].count += 1;
          }
        }
      }
      state.countOfProductKinds = state.products.length;
    },
    deleteProduct: (state, action) => {
      if (
        state.products.find((product) => product.id === action.payload)
          ?.count === 1
      ) {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      } else {
        for (let i = 0; i < state.products.length; i++) {
          if (state.products[i].id === action.payload) {
            state.products[i].count -= 1;
          }
        }
      }
      state.countOfProductKinds = state.products.length;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrementPrice, incrementPrice, addProduct, deleteProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
