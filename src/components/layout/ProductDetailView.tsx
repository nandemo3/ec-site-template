import type { FC } from 'react'

import { Box, Button, Grid, Typography } from '@mui/material'

import FavoriteCount from '../FavoriteCount'
import BasicBreadcrumbs from '../UI/BasicBreadcrumbs'

interface ProductDetailViewProps {}

const images = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image3.png',
  '/images/image3.png',
  '/images/image3.png',
  '/images/image3.png',
  '/images/image3.png',
]

const ProductDetailView: FC<ProductDetailViewProps> = () => {
  return (
    <Grid container
      direction="row"
      sx={{ my: 8 }}
      spacing={2}
    >
      <Grid item xs={12} md={5}>
        <img src="/images/image1.png" alt="" style={{ maxWidth: '100%' }}/>
        {/* <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={164}>
          {images.map(item => (
            <ImageListItem key={item}>
              <img
                src={item}
                srcSet={item}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          商品説明AAAAAAAAAAAAAAAAA
        </Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box sx={{ pl: 4 }}>
          <BasicBreadcrumbs breadcrumbs={[{ name: '家電・カメラ・AV機器', url: '/' }, { name: 'イヤホン', url: '/' }]} />
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>アクティブフィットワイヤレスイヤフォン</Typography>
          <Typography variant='h5' fontWeight="bold" color="error">XXX,XXX円</Typography>
          <FavoriteCount count={23} />
          <div>
            <Button variant="outlined">カートに入れる</Button>
          </div>
          <Typography variant='subtitle2' sx={{ mt: 2 }}>発送について</Typography>
          <Typography variant='caption' sx={{ mt: 1 }}>AAAAAAAAAAAAA</Typography>
          <Typography variant='subtitle2' sx={{ mt: 2 }}>支払いについて</Typography>
          <Typography variant='caption' sx={{ mt: 1 }}>AAAAAAAAAAAAA</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProductDetailView
