import type { ProductType } from '../ProductCard'

import { Grid } from '@mui/material'

import ProductCard from '../ProductCard'

interface HorizontalItemViewType {
  products: ProductType[]
}

function HorizontalItemView({ products }: HorizontalItemViewType) {
  return (
    <Grid container wrap='nowrap' columnSpacing={{ xs: 0, md: 2 }} sx={{ overflow: 'scroll' }}>
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

export default HorizontalItemView
