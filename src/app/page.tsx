'use client';

import SearchAppBar from "@/components/Header";
import theme from '@/utils/theme'
import { ThemeProvider } from '@mui/material/styles';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <SearchAppBar />
      </main>
    </ThemeProvider>

  )
}
