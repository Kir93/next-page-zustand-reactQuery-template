import '@styles/antd.css';
import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const notoSans = Noto_Sans_KR({ weight: '400', subsets: ['korean'] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppLayout>
        <main className={notoSans.className}>
          <Component {...pageProps} />
        </main>
      </AppLayout>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
