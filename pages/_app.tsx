import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from 'src/commons/styles/globalStyles'
import LayoutHeader from 'src/components/Layout/LayoutHeader'
import LayoutFooter from 'src/components/Layout/LayoutFooter'
import { RecoilRoot } from 'recoil'
import { useRouter } from 'next/router'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LayoutGuideHeader } from 'src/components/Layout/LayoutGuide'
import PageTransition from 'src/components/Transition/PageTransition'
import { useEffect } from 'react'

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <Global styles={globalStyles} />
        {router.pathname !== '/signup' && <LayoutHeader />}

        <PageTransition>
          {router.pathname.startsWith('/hero') && (
            <LayoutGuideHeader router={router} />
          )}
          <Component {...pageProps} />
        </PageTransition>
        <LayoutFooter />
      </ThemeProvider>
    </RecoilRoot>
  )
}
