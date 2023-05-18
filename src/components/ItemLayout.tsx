import type { FC, ReactNode } from 'react'

import { Box, Link, Typography } from '@mui/material'

interface ItemLayoutProps {
  title: string
  children?: ReactNode
}

const ItemLayout: FC<ItemLayoutProps> = ({ title, children }) => {
  return (
    <Box sx={{ mx: 16, my: 8 }}>
      <Box sx={{ mx: 2, my: 4, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ color: '#222' }}>{title}</Typography>
        <Link href="/" underline="hover" sx={{ alignItems: 'center' }}>
          <Typography variant="caption" sx={{ ml: 2 }}>もっと見る</Typography>
        </Link>
      </Box>
      <Box sx={{ mx: 2 }}>
        {children}
      </Box>
    </Box>
  )
}

export default ItemLayout
