import type { ProductType } from '../ProductCard'
import type { FC, ReactNode } from 'react'

import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ShareIcon from '@mui/icons-material/Share'
import { Box, Button, Divider, Grid, IconButton, Link, Typography, styled } from '@mui/material'

import BasicBreadcrumbs from '../UI/BasicBreadcrumbs'
import FavoriteCount from '../UI/FavoriteCount'

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
const SquareImage = styled('div') ({
  width: '100%',
  paddingTop: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#EEE',
  backgroundRepeat: 'no-repeat',
})

const ProductDetailLayout: FC<ProductType> = ({ name, description, price, imagePath, favorite, categories }) => {
  const breadcrumbs = categories.map((category) => {
    return { name: category, url: '/' }
  })

  return (
    <>
      <Box sx={{ my: 8, display: { xs: 'none', md: 'block' } }} />
      <Grid container
        direction="row" spacing={2}
      >
        <Grid item xs={12} md={6}>
          <SquareImage style={{ backgroundImage: `url(${imagePath})` }} />
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
          <Box sx={{ mt: 4, display: { xs: 'none', md: 'block' } }}>
            <ProductExplanation text={description}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ px: 4 }}>
            <BasicBreadcrumbs breadcrumbs={breadcrumbs} />
            <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>{name}</Typography>
            <Box display="flex" flexDirection="row">
              <Typography variant='h5' fontWeight="bold" color="error">{price.toLocaleString()}円</Typography>
              <Typography variant='caption' sx={{ ml: 1, display: 'flex', alignSelf: 'end' }}>{'(税込)'}</Typography>
            </Box>
            <Typography variant='body2' sx={{ mt: 0.5 }}>{'＋送料(550円) 一律'}</Typography>
            <Box sx={{ mt: 2, mb: 1 }}>
              <FavoriteCount count={favorite} />
              <IconButton
                size="small"
              >
                <ShareIcon fontSize="small"/>
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Button variant="contained" color="primary" sx={{ flexGrow: 1 }}>カートに入れる</Button>
            </Box>
            <Box sx={{ mt: 4, display: { md: 'none' } }}>
              <ProductExplanation text={description} />
              <Divider light sx={{ mt: 4 }}/>
            </Box>
            <Box sx={{ mt: 4 }}>
              <DetailItemLayout title="発送について">
                <Typography variant='subtitle2' fontWeight="bold">倉庫からの発送</Typography>
                <Typography variant='body2' color="text.secondary">倉庫から配送される商品です。入金が確認され次第、発送されます。</Typography>
                <Typography variant='subtitle2' fontWeight="bold" sx={{ mt: 1 }}>ダウンロード商品</Typography>
                <Typography variant='body2' color="text.secondary">入金が確認された後に「購入履歴」からいつでもダウンロードできるようになります。</Typography>
              </DetailItemLayout>
            </Box>
            <Divider light sx={{ mt: 4 }}/>
            <Box sx={{ mt: 4 }}>
              <ItemTitle text="取引の流れ" url="/"/>
              <ItemTitle text="お支払い方法" url="/"/>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </>
  )
}

function ProductExplanation({ text }: { text: string }) {
  return <DetailItemLayout title="商品について">
  <Typography variant="body2" >
  {text}
  </Typography>
</DetailItemLayout>
}

function ItemTitle({ text, url }: { text: string; url?: string }) {
  return (
    <Box flexDirection="row" display="flex" alignItems="center" sx={{ mb: 1 }}>
      <FiberManualRecordOutlinedIcon fontSize='small'/>
      {url
        ? (
          <>
            <Link href={url} underline="hover" color="inherit">
              <Typography variant="subtitle2" fontWeight="bold">{text}</Typography>
            </Link>
            <NavigateNextIcon fontSize="small" />
          </>
          )
        : <Typography variant="subtitle2" fontWeight="bold">{text}</Typography>
      }
    </Box>
  )
}

function DetailItemLayout({ title, children }: { title: string; children: ReactNode }) {
  return <>
      <ItemTitle text={title} />
      <Box sx={{ ml: 1 }}>
        {children}
      </Box>

  </>
}

export default ProductDetailLayout
