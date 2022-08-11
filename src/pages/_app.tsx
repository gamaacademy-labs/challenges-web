import * as React from 'react'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, SmashGlobalStyle } from '@gama-academy/smash-web'
import { ThemeProvider }  from 'styled-components'
import {Header} from '../components/header'


const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
        <SmashGlobalStyle/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
