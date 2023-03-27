import '../styles/globals.scss'
import Background from '../components/Background'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Background />
        <Component {...pageProps} />
    </>
  )
}
