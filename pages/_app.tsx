import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Global } from '@emotion/react'
import { globalStyles } from 'src/commons/styles/globalStyles'
import LayoutHeader from 'src/components/Layout/LayoutHeader'
import LayoutFooter from 'src/components/Layout/LayoutFooter'
import { RecoilRoot } from 'recoil'
export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <LayoutHeader />
        <Component {...pageProps} />
        <LayoutFooter />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
