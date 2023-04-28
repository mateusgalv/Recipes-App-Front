import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LoadingContextProvider } from './context/LoadingProvider.tsx'
import { ApiContextProvider } from './context/ApiProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingContextProvider>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </LoadingContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
