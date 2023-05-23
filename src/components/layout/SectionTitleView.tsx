import type { FC, ReactNode } from 'react'

import { Box, Link, Typography } from '@mui/material'

interface SectionTitleViewProps {
  title: string
  children?: ReactNode
}

const SectionTitleView: FC<SectionTitleViewProps> = ({ title, children }) => {
  return (
    <Box sx={{ my: 8 }}>
      <Box sx={{ my: 4, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ color: '#222' }}>{title}</Typography>
        <Link href="/" underline="hover" sx={{ alignItems: 'center' }}>
          <Typography variant="caption" sx={{ ml: 2 }}>もっと見る</Typography>
        </Link>
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  )
}

export default SectionTitleView
