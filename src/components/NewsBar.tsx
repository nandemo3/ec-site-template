import type { FC } from 'react'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Box, Typography } from '@mui/material'

interface NewsBarProps {
  title: string
}

const NewsBar: FC<NewsBarProps> = ({ title }) => {
  return (
    <Box sx={{ px: 2, py: 1, display: 'flex' }}>
      <InfoOutlinedIcon fontSize='small' color="primary" />
      <Typography variant="body2" color="primary.main">{title}</Typography>
    </Box>
  )
}

export default NewsBar
