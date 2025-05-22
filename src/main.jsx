import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router"
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider> 
  </BrowserRouter>

)
