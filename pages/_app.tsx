import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { notoSans } from '@configs/bigContents';

import theme from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    <style jsx global>
      {`
        :root {
          --font-noto-sans: ${notoSans.style.fontFamily};
        }
      `}
    </style>
    <ReactQueryDevtools initialIsOpen={false} />
    <Head>
      <title>Next Zustand React Query Template</title>
    </Head>
    <ChakraProvider value={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
