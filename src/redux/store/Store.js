import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../productSlice";
import cartSlice from "../cartSlice";

export const Store = configureStore({
  reducer: {
    products: ProductSlice,
    cart:cartSlice
  },
});
