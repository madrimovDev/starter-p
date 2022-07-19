import ReactDOM from 'react-dom/client'
import './assets/style/index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routers from './routers'
import theme from './config/themeConfig'
import setupStore from './store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <Router>
      <ChakraProvider theme={theme}>
        <Routers />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </ChakraProvider>
    </Router>
  </Provider>
)