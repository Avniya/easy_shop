import React from 'react';
import Item from './Item';
import Carousel from 'react-material-ui-carousel';

const Home = () => {

    var items = [
        {
            id:1,
            image: "https://images.unsplash.com/photo-1560379790-d7f9dd2b6116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGxnYnRxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:2,
            image: "https://images.unsplash.com/photo-1562592619-908ca07deace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGxnYnRxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:3,
            image: "https://images.unsplash.com/photo-1628538060442-0e54be1d2497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxsZ2J0cXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
    ];

    return (<Carousel>{items.map( (item) => <Item key={item.id} image={item.image} /> )}</Carousel>)

}

export default Home;