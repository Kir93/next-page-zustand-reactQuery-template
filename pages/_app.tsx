import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '@styles/theme';

import { notoSans } from '@config/bigContents';

import AppLayout from '@components/layout/AppLayout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
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
