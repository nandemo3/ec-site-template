'use client'

import { ThemeProvider } from '@mui/material/styles'

import Footer from '@/components/Footer'
import SearchAppBar from '@/components/Header'
import ImageSlider from '@/components/ImageSlider'
import type { ProductType } from '@/components/ProductCard'
import ResponsiveBaseLayout from '@/components/layouts/ResponsiveBaseLayout'
import SectionTitleLayout from '@/components/layouts/SectionTitleLayout'
import HorizontalScrollView from '@/components/views/HorizontalScrollView'
import theme from '@/utils/theme'

const products: ProductType[] = [
  {
    name: 'プレミアムサロンヘアドライヤー',
    description: 'プレミアムサロンヘアドライヤーは、パワフルな風力と先進のイオン技術を組み合わせ、素早く髪を乾かしながら、髪の健康を保つことができます。さらに、3つの熱設定と2つの風速設定で、個々のスタイリングニーズに合わせてカスタマイズすることができます。',
    price: 9800,
    favorite: 12,
    imagePath: '/images/image1.png',
  },
  {
    name: 'アクティブフィットワイヤレスイヤフォン',
    description: 'アクティブフィットワイヤレスイヤフォンは、高品質なサウンドと快適なフィット感を提供する最新のスポーツ用イヤフォンです。防水性能を備え、ジムでのワークアウトやアウトドアでの活動に最適です。また、ワイヤレスデザインにより、邪魔なケーブルの心配なく自由に動けます。',
    price: 7980,
    favorite: 242,
    imagePath: '/images/image2.png',
  },
  {
    name: 'プレミアムスマートウォッチX',
    description: 'プレミアムスマートウォッチXは、最新のテクノロジーと洗練されたデザインを備えた高機能スマートウォッチです。心拍計、歩数計、睡眠トラッカーなどの健康機能に加え、スマートフォンの通知を表示したり、音楽を再生したりすることも可能です。さらに、長持ちするバッテリーと耐久性のある防水設計も特徴です。',
    price: 25500,
    favorite: 43,
    imagePath: '/images/image3.png',
  },
  {
    name: 'アクティブノイズキャンセリングワイヤレスヘッドフォン',
    description: '周囲の騒音を抑えるアクティブノイズキャンセリング機能を搭載し、ワイヤレスで音楽を楽しめるヘッドフォンです。Bluetooth接続に対応し、最大20時間の連続再生が可能です。',
    price: 10000,
    favorite: 76,
    imagePath: '/images/image2.png',
  },
  {
    name: 'プロテインダイエットシェイク',
    description: '低カロリーで高たんぱく質のプロテインを配合したダイエットシェイクです。食事の置き換えとして利用することで、ダイエットをサポートします。バナナやストロベリーなど、豊富な味わいがあります。',
    price: 3000,
    favorite: 23,
    imagePath: '/images/image3.png',
  },
  {
    name: 'スマートフォン三脚',
    description: 'スマートフォンをしっかりと固定し、手ぶれを防止してクリアな写真や動画を撮影できる三脚です。高さは最大1.5mまで伸縮可能で、付属のリモコンでワイヤレスシャッターが操作できます。折りたたみ式で持ち運びに便利です。',
    price: 5000,
    favorite: 8,
    imagePath: '/images/image1.png',
  },
]

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <SearchAppBar />
        <ImageSlider />
        <ResponsiveBaseLayout>
          <SectionTitleLayout title="セール">
            <HorizontalScrollView products={products}/>
          </SectionTitleLayout>
          <SectionTitleLayout title="おすすめ">
            <HorizontalScrollView products={products.slice(3, 5)}/>
          </SectionTitleLayout>
          <SectionTitleLayout title="新着アイテム">
            <HorizontalScrollView products={products.slice(1, 4)}/>
          </SectionTitleLayout>
          <SectionTitleLayout title="最近チェックしたアイテム">
            <HorizontalScrollView products={products.slice(2, 3)}/>
          </SectionTitleLayout>
        </ResponsiveBaseLayout>
        <Footer />
      </main>
    </ThemeProvider>

  )
}
