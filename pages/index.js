import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Free Domain - Free Hosting - Free Everything</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Free next.js Site" />
        <p className="description">
          Just a little demo.
        </p>
      </main>

      <Footer />
    </div>
  )
}
