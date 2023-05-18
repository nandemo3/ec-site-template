import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'

export interface ProductType {
  name: string
  description: string
  price: number
  imagePath: string
  favorite: number
}

function ProductCard({ name, description, price, imagePath, favorite }: ProductType) {
  return (
    <Card sx={{ maxWidth: 270, boxShadow: 0 }}>
      <CardMedia
        component="img"
        height="194"
        image={imagePath}
        alt=""
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.primary" noWrap>
          {name}
        </Typography>
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
        <IconButton aria-label="add to favorites">
          <StarOutlineIcon fontSize='small'/>
        </IconButton>
        <Typography variant="caption" color="text.secondary">
          {favorite}
        </Typography>
        <Typography variant="body1" color="error.main" sx={{ marginLeft: 'auto' }}>
          {price}円
        </Typography>
      </CardActions>
    </Card>
  )
}

export default ProductCard
