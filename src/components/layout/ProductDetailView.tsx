import type { FC, ReactNode } from 'react'

import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined'
import ShareIcon from '@mui/icons-material/Share'
import { Box, Button, Grid, IconButton, Typography, styled } from '@mui/material'

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
const SquareImage = styled('div') ({
  width: '100%',
  paddingTop: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#EEE',
  backgroundRepeat: 'no-repeat',
})

const ProductDetailView: FC<ProductDetailViewProps> = () => {
  return (
    <>
      <Box sx={{ my: 8, display: { xs: 'none', md: 'block' } }} />
      <Grid container
        direction="row" spacing={2}
      >
        <Grid item xs={12} md={6}>
          <SquareImage style={{ backgroundImage: 'url(/images/image1.png)' }} />
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
            <ProductExplanation />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ px: 4 }}>
            <BasicBreadcrumbs breadcrumbs={[{ name: '家電・カメラ・AV機器', url: '/' }, { name: 'イヤホン', url: '/' }]} />
            <Typography variant="h6" fontWeight="bold" sx={{ my: 2 }}>アクティブフィットワイヤレスイヤフォン</Typography>
            <Box display="flex" flexDirection="row">
              <Typography variant='h5' fontWeight="bold" color="error">7,980円</Typography>
              <Typography variant='caption' sx={{ ml: 1, display: 'flex', alignSelf: 'end' }}>{'(税込)'}</Typography>
            </Box>
            <Typography variant='body2' sx={{ mt: 0.5 }}>{'＋送料(550円) 一律'}</Typography>
            <Box sx={{ mt: 2, mb: 1 }}>
              <FavoriteCount count={23} />
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
              <ProductExplanation />
            </Box>
            <Box sx={{ mt: 4 }}>
              <DetailItemLayout title="発送について">
                <Typography variant='subtitle2' fontWeight="bold">倉庫からの発送</Typography>
                <Typography variant='body2' color="text.secondary">倉庫から配送される商品です。入金が確認され次第、発送されます。</Typography>
                <Typography variant='subtitle2' fontWeight="bold" sx={{ mt: 1 }}>ダウンロード商品</Typography>
                <Typography variant='body2' color="text.secondary">入金が確認された後に「購入履歴」からいつでもダウンロードできるようになります。</Typography>
              </DetailItemLayout>
            </Box>
            <Box sx={{ mt: 4 }}>
              <ItemTitle text="取引の流れ" />
              <ItemTitle text="お支払い方法" />
            </Box>

          </Box>
        </Grid>
      </Grid>
    </>
  )
}

function ProductExplanation() {
  return <DetailItemLayout title="商品について">
  <Typography variant="body2" >
  アクティブフィットワイヤレスイヤフォンは、高品質なサウンドと快適なフィット感を提供する最新のスポーツ用イヤフォンです。防水性能を備え、ジムでのワークアウトやアウトドアでの活動に最適です。また、ワイヤレスデザインにより、邪魔なケーブルの心配なく自由に動けます。
  </Typography>
</DetailItemLayout>
}

function ItemTitle({ text }: { text: string }) {
  return <Box flexDirection="row" display="flex" alignItems="center" sx={{ mb: 1 }}>
    <FiberManualRecordOutlinedIcon fontSize='small'/>
    <Typography variant="subtitle2" fontWeight="bold">{text}</Typography>
  </Box>
}

function DetailItemLayout({ title, children }: { title: string; children: ReactNode }) {
  return <>
      <ItemTitle text={title} />
      <Box sx={{ ml: 1 }}>
        {children}
      </Box>

  </>
}

export default ProductDetailView
