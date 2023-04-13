import { ContextProvider } from '@/contexts/MainContext/mainContext'
import '@/styles/globals.css'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  return <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>;
};
