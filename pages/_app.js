import '../styles/globals.scss'
import Background from '../components/Background'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    <>
    <AnimatePresence mode='wait'>
        <Background />
        <Component {...pageProps} />
    </AnimatePresence>
        
    </>
  )
}
