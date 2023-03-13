import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from 'src/commons/styles/globalStyles'
import LayoutHeader from 'src/components/Layout/LayoutHeader'
import LayoutFooter from 'src/components/Layout/LayoutFooter'
import { RecoilRoot } from 'recoil'
import { useRouter } from 'next/router'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  LayoutGuideHeader,
  LayoutGuideLeft,
} from 'src/components/Layout/LayoutGuide'
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 770,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const router = useRouter()

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {router.pathname !== '/signup' && router.pathname !== '/login' && (
          <LayoutHeader />
        )}
        {router.pathname.startsWith('/guide') && <LayoutGuideHeader />}
        {/* {router.pathname.startsWith('/guide') ? (
          <div style={{ display: 'flex' }}>
            <LayoutGuideLeft />
            <Component {...pageProps} />
          </div>
        ) : (
          <Component {...pageProps} />
        )} */}
        <Component {...pageProps} />
        <LayoutFooter />
      </ThemeProvider>
    </RecoilRoot>
  )
}
