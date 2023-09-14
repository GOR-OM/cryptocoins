
import { extendTheme } from '@chakra-ui/react';



const customTheme = extendTheme({
    config: {
      initialColorMode: 'dark', // Set the initial color mode to dark
    },
    styles: {
        global: (props) => ({
          body: {
          bg: props.colorMode === 'dark' ? '#3b3b3e': '#f2f7fb', // Change the background color here
        },
    }),
  },
}); 
  export default customTheme;