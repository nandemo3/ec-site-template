import type { ProductType } from '../ProductCard'

import Grid from '@mui/material/Grid'

import ProductCard from '../ProductCard'

interface GridItemLayoutType {
  products: ProductType[]
}

function GridItemLayout({ products }: GridItemLayoutType) {
  return (
    <Grid container columnSpacing={{ xs: 0, md: 2 }}>
      {products.map((product, index) => {
        return (
          <Grid item key={index} xs={4}>
            <ProductCard {...product}/>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default GridItemLayout
