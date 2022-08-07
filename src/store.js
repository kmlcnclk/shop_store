import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cart';
import productsReducer from '../store/products';

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
