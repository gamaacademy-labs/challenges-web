import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, SmashGlobalStyle } from '@gama-academy/smash-web'
import { ThemeProvider }  from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <SmashGlobalStyle/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
