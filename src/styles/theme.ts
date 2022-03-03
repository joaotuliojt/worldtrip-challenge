import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B",
      "600": "#999999",
      "50": "#F5F8FA",
      "100": "#F5F8FA",
      "300": "#DADADA"
      /* "900": "#181b23",
      "800": "#1f2029",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      */

    },
    brand: {
      "yellow": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700'
      }
    }
  }
})