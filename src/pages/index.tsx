import Head from 'next/head'
import Link from "next/link";

function Home() {
  return (
      <>
        <Head>
            <title>Home</title>
        </Head>
        <div>
            <h1>Home</h1>
            <Link href={'/books/book/1'}>Link</Link>
        </div>
      </>
    )
}

export default Home