import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Aos from 'aos'

import "swiper/css/bundle";
import "../styles/global.scss"
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { makeServer } from '../services/miragejs';
import { createServer } from 'miragejs';


makeServer();

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])


  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
