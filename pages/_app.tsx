import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@app/components/Layout/Layout';

import '@styles/globals.scss';



export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000,
      },
    },
  });

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
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>

    </>
  );
}
