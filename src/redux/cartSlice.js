import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {
    addToCard: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity+=1;
      
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      
    },
    deleteFromCard: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToCard, clear, deleteFromCard } = ProductSlice.actions;
export default ProductSlice.reducer;
