import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import FavoriteCount from './UI/FavoriteCount'

export interface ProductType {
  id: number
  name: string
  description: string
  price: number
  imagePath: string
  favorite: number
  categories: string[]
}

function ProductCard({ id, name, description, price, imagePath, favorite }: ProductType) {
  const router = useRouter()

  const onClickDetail = (id: number) => {
    router.push(`/detail/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 270, boxShadow: 0 }} >
      <CardMedia
        height={270}
        width={270}
        component="img"
        image={imagePath}
        onClick={() => onClickDetail(id)}
        sx={{
          'objectFit': 'contain',
          'bgcolor': '#EEE',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      />
      <CardContent>
        <Link href={`/detail/${id}`}>
          <Typography variant="subtitle1" color="text.primary" noWrap>
            {name}
          </Typography>
        </Link>
        <Box sx={{ height: 30 }}>
          <Typography variant="caption" color="text.secondary"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteCount count={favorite} />
        <Typography variant="body1" color="error.main" sx={{ marginLeft: 'auto' }}>
          {price.toLocaleString()}円
        </Typography>
      </CardActions>
    </Card>
  )
}

export default ProductCard
