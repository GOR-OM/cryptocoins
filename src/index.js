import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import {ChakraProvider} from '@chakra-ui/react'
import customTheme from './component/CustomeThem'; // Import your custom theme

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme = {customTheme}>
      
    <App />
    </ChakraProvider>

    
  </StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;