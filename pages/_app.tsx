import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@app/components/Layout/Layout';

import '@styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boniche Manager</title>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <meta name={'robots'} content={'noindex,nofollow'} />
        <meta name={'googlebot'} content={'noindex,nofollow'} />
        <meta name={'google'} content={'nositelinkssearchbox'} />
        <meta name={'google'} content={'notranslate'} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
