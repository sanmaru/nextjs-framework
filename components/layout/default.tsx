import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import getConfig from 'next/config';

type Props = {
  children?: ReactNode;
  title?: string;
}

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder)

const Layout = ({children, title = 'This is the default Title'}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{ ' ' } | { ' ' }
        <Link href="/about">
          <a>About</a>
        </Link>{ ' ' } | { ' ' }
        <Link href="/users">
          <a>User List</a>
        </Link>{ ' ' } | { ' ' }
        <a href="/api/users">User API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout;