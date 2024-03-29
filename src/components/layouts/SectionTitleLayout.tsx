import type { FC, ReactNode } from 'react'

import { Box, Link, Typography } from '@mui/material'

interface SectionTitleLayoutProps {
  title: string
  children?: ReactNode
}

const SectionTitleLayout: FC<SectionTitleLayoutProps> = ({ title, children }) => {
  return (
    <Box sx={{ my: 8 }}>
      <Box sx={{ my: 4, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ ml: 4, display: { md: 'none' } }} />
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

export default SectionTitleLayout
