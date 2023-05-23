import type { ReactNode } from 'react'

import Grid from '@mui/material/Grid'

interface BaseLayoutProps {
  children: ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Grid container direction="row">
      <Grid item xs={0} sm={1} md={2} />
      <Grid item xs={12} sm={10} md={8}>
        {children}
      </Grid>
      <Grid item xs={0} sm={1} md={2} />
    </Grid>
  )
}

export default BaseLayout
