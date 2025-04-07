import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Recoil
import { RecoilRoot } from 'recoil'
// Translation
import './18n.ts'
// React Query
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// Уточняем тип rootElement, чтобы исключить возможность null
const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

  const queryClient = new QueryClient()

  root.render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
} else {
  console.error("Root element not found")
}
