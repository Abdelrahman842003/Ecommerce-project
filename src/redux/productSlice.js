import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTiming = createAsyncThunk(
  "timingSlice/fetchTiming",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);
export const timingSlice = createSlice({
  name: "timingSlice",
  initialState: [],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchTiming.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export default timingSlice.reducer;
