import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '@/features/productSlice/productSlice';
import store from '../../features/store';

const ProductsPage = () => {
  const productStore = useSelector((state) => state.productObj.products);

  useEffect(() => {
    store.dispatch(fetchProducts())
  }, []);

  console.log(productStore)

  return (
    <div>productsPage</div>
  )
}

export default ProductsPage;