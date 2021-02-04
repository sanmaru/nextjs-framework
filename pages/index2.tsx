import Link from 'next/link';
import Layout from '../components/layout/default';
const IndexPage = () => ( 
  <Layout title="Home | Next.js + Typescript Example with Layout"> 
  <Link href="/about">
    <a>About</a>
  </Link>
  </Layout>
)

export default IndexPage