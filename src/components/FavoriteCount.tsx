import type { FC } from 'react'

import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { IconButton, Typography } from '@mui/material'

interface FavoriteCountProps {
  count: number
}

const FavoriteCount: FC<FavoriteCountProps> = ({ count }) => {
  return (
    <>
      <IconButton aria-label="add to favorites">
            <StarOutlineIcon fontSize='small'/>
      </IconButton>
      <Typography variant="caption" color="text.secondary">
        {count}
      </Typography>
    </>
  )
}

export default FavoriteCount
