import { ContextProvider } from '@/contexts/MainContext/mainContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ContextProvider><Component {...pageProps} /></ContextProvider>;
};
