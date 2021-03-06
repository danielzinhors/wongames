import NextNprogress from 'nextjs-progressbar'
import { ApolloProvider } from '@apollo/client'
import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Provider as AuthProvider } from 'next-auth/client'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                  name="description"
                  content="The best store the games in the world"
                />
              </Head>
              <DefaultSeo {...SEO} />
              <GlobalStyles />
              <NextNprogress
                color={theme.colors.primary}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                options={{ easing: 'ease', speed: 500 }}
              />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
