import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import 'antd/dist/reset.css';
import Router from './routers';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  )
}

export default App
