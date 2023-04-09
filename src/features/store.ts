import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";

const store = configureStore({
  reducer: {
    productObj: productReducer,
  }
});

export default store;