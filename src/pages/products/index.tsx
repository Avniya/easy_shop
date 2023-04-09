import React, { useEffect, useState } from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { fetchProducts } from '@/features/productSlice/productSlice';
import store from "@/app/store"
import { useAppSelector } from "@/app/hooks";

const ProductsPage = () => {
  const productStore = useAppSelector((state) => state.productObj.products);

  useEffect(() => {
    store.dispatch(fetchProducts())
  }, []);

  console.log(productStore)

  return (
    <div>productsPage</div>
  )
}

export default ProductsPage;