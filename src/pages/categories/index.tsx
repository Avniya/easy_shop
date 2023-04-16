import React from 'react';
import CategoriesCarousel from '../../components/categoriesCarousel/CategoriesCarousel';
import { Box, Typography } from '@mui/material';

export interface Product {
  img: string;
  name: string;
};

const Categories: React.FC = () => {
  const productList = [
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone1"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone2"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone3"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone4"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone5"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone6"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone7"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone8"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone9"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone10"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone11"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone12"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone13"
    },
    {
      "img": "https://images.philips.com/is/image/PhilipsConsumer/TAUH202BK_00-IMS-en_IN?$jpglarge$&wid=960", 
      "name": "headphone14"
    },
  ];
  
  return (
    <>
      <Typography variant='h4'>Categories</Typography>
      <Box>
        <Typography>Electronics</Typography>
        <CategoriesCarousel productList={productList} />        
      </Box>
    </>
  )
}

export default Categories;