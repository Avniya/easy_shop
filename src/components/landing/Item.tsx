import React from 'react';
import { Paper } from '@mui/material';
interface propsType {
  image: string,
}

const Item : React.FC<propsType> = ({image}) => {

  return (
    <Paper>
       <img src={image} alt={image} style={{width:"100%", height:"50vh"}}/>
    </Paper>
  )
}

export default Item;