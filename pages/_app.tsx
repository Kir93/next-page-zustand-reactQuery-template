import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme, GlobalFontStyle } from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={false} />
    <GlobalFontStyle />
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next Zustand React-Query Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppLayout>
        <main>
          <Component {...pageProps} />
        </main>
      </AppLayout>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
