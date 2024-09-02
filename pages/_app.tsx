import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLayout from '@components/Layout/AppLayout';
import { ChakraProvider } from '@chakra-ui/react';
import { notoSans } from '@configs/bigContents';
import { theme } from '@styles/theme';

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
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
