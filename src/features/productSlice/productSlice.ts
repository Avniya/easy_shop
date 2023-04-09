import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  loading: boolean,
  products: string[],
  error: string
}

const initialState: InitialState = {
  loading: false,
  products: [],
  error: ''
}

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const response = await axios.get(`https://api.storerestapi.com/products`);
  const data = response.data.data;
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;