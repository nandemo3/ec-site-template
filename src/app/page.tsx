'use client'

import { ThemeProvider } from '@mui/material/styles'

import { products } from '@/assets/products'
import Footer from '@/components/Footer'
import SearchAppBar from '@/components/Header'
import ImageSlider from '@/components/ImageSlider'
import ResponsiveBaseLayout from '@/components/layouts/ResponsiveBaseLayout'
import SectionTitleLayout from '@/components/layouts/SectionTitleLayout'
import HorizontalItemView from '@/components/views/HorizontalItemView'
import theme from '@/utils/theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <SearchAppBar />
        <ImageSlider />
        <ResponsiveBaseLayout>
          <SectionTitleLayout title="セール">
            <HorizontalItemView products={products}/>
          </SectionTitleLayout>
          <SectionTitleLayout title="おすすめ">
            <HorizontalItemView products={products.slice(3, 5)}/>
          </SectionTitleLayout>
          <SectionTitleLayout title="新着アイテム">
            <HorizontalItemView products={products.slice(1, 4)}/>
          </SectionTitleLayout>
          <SectionTitleLayout title="最近チェックしたアイテム">
            <HorizontalItemView products={products.slice(2, 3)}/>
          </SectionTitleLayout>
        </ResponsiveBaseLayout>
        <Footer />
      </main>
    </ThemeProvider>

  )
}
