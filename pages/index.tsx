import Head from 'next/head'
import { useQuery } from 'react-query'
import Header from '../components/Header';
import Products from '../components/Products';




// * types
export type CartItemType = [{
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: {
    rate: number;
    count: number;
  }
}]


export default function Home() {


  return (
    (
      <div>
        <Head>
          <title>
            Next.js + TypeScript + TailwindCSS + React + Firebase + RecoilJs
          </title>
        </Head>
        <main>
          <Header />
          <Products />
        </main>

      </div>

    )
  )
}
