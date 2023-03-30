import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from 'src/commons/styles/globalStyles'
import LayoutHeader from 'src/components/Layout/LayoutHeader'
import LayoutFooter from 'src/components/Layout/LayoutFooter'
import { RecoilRoot } from 'recoil'
import { useRouter } from 'next/router'
// import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { LayoutGuideHeader } from 'src/components/Layout/LayoutGuide'
import PageTransition from 'src/components/Transition/PageTransition'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const router = useRouter()

  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      {router.pathname !== '/signup' && <LayoutHeader />}

      <PageTransition>
        {(router.pathname.startsWith('/guide') ||
          router.pathname.startsWith('/hero')) && (
          <LayoutGuideHeader router={router} />
        )}
        <Component {...pageProps} />
      </PageTransition>
      <LayoutFooter />
    </RecoilRoot>
  )
}
