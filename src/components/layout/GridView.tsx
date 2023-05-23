import type { ProductType } from '../ProductCard'

import Grid from '@mui/material/Grid'

import ProductCard from '../ProductCard'

interface GridViewType {
  products: ProductType[]
}

function GridView({ products }: GridViewType) {
  return (
    <Grid sx={{ flexGrow: 1 }} container>
      {products.map((product, index) => {
        return (
          <Grid item key={index} sx={{ pr: 2 }}>
            <ProductCard {...product}/>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default GridView
