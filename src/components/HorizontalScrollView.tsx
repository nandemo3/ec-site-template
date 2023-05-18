import type { ProductType } from './ProductCard'

import Grid from '@mui/material/Grid'

import ProductCard from './ProductCard'

interface HorizontalScrollViewType {
  products: ProductType[]
}

function HorizontalScrollView({ products }: HorizontalScrollViewType) {
  return (
    <Grid sx={{ flexGrow: 1, overflow: 'scroll', flexWrap: 'noWrap' }} container spacing={2}>
      {products.map((product, index) => {
        return (
          <Grid item key={index}>
            <ProductCard {...product}/>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default HorizontalScrollView
