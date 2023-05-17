import React from 'react';

import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';

import { ProductType } from './ProductCard';

type HorizontalScrollViewType = {
    products: ProductType[]
}


const HorizontalScrollView = ({products}: HorizontalScrollViewType) => {
  return (
    <Grid sx={{ flexGrow: 1, overflow: "scroll" }} container spacing={2}>
        {products.map((product, index) => {
            return (
                <Grid item key={index}>
                    <ProductCard {...product}/>
                </Grid>
            )
        })}
    </Grid>
  );
}

export default HorizontalScrollView;