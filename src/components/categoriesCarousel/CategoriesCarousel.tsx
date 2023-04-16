import React, { useState, useRef, useEffect, useCallback } from 'react';
import CategoriesCard from '../categoriesCard/CategoriesCard';
import { Product } from '@/pages/categories';
import { Box } from '@mui/material';
import styles from './CategoriesCarousel.module.css';

interface Props {
  productList: Product[]; 
}

const CategoriesCarousel: React.FC<Props> = ({ productList }) => {    
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const carouselBtn = (btnPress: string) => {
    const carouselContainer = carouselContainerRef.current;
    
    if (carouselContainer) {
      const { clientWidth } = carouselContainer;
      
      switch (btnPress) {
        case "prev": 
          carouselContainerRef.current.scrollLeft -= clientWidth;
          break;
        case "next":
          carouselContainerRef.current.scrollLeft += clientWidth;
          break;
        default:
          return null;
      }
    }
  }
  
  return (
    <Box className={styles.productCarouselWrapper}>
      <button  
        className={styles.carouselPreBtn}
        onClick={() => carouselBtn("prev")}
      >
        <p>&lt;</p>
      </button>
      <button 
        className={styles.carouselNextBtn}
        onClick={() => carouselBtn("next")}
      >
        <p>&gt;</p>
      </button>
      <Box className={styles.productCarouselContainer} ref={carouselContainerRef}>
        {
          productList.map((elem) => (
            <CategoriesCard 
              key={elem.name} 
              img={elem.img} 
              name={elem.name}
            />
          ))
        }
      </Box>
    </Box>
  )
};

export default CategoriesCarousel;