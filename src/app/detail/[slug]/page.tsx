'use client'

import { ThemeProvider } from '@mui/material/styles'

import { products } from '@/assets/products'
import Footer from '@/components/Footer'
import SearchAppBar from '@/components/Header'
import GridItemLayout from '@/components/layouts/GridItemLayout'
import ProductDetailLayout from '@/components/layouts/ProductDetailLayout'
import ResponsiveBaseLayout from '@/components/layouts/ResponsiveBaseLayout'
import SectionTitleLayout from '@/components/layouts/SectionTitleLayout'
import theme from '@/utils/theme'

interface DetailProps {
  params: {
    slug: string
  }
}

export default function Detail({ params }: DetailProps) {
  const product = products.find(p => p.id.toString() === params.slug)

  return (
    <ThemeProvider theme={theme}>
      <main>
        <SearchAppBar />
        <ResponsiveBaseLayout>
          <ProductDetailLayout {...product!}/>
          <SectionTitleLayout title="関連アイテム">
            <GridItemLayout products={products}/>
          </SectionTitleLayout>
        </ResponsiveBaseLayout>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
