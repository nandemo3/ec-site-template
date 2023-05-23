import type { ReactNode } from 'react'

import Grid from '@mui/material/Grid'

interface BaseLayoutProps {
  children: ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Grid container direction="row">
      <Grid item sm={0} md={2} />
      <Grid item sm={12} md={8}>
        {children}
      </Grid>
      <Grid item sm={0} md={2} />
    </Grid>
  )
}

export default BaseLayout
