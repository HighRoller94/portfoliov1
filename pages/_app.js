import "../styles/globals.scss";
import Background from "../components/Background";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReactLenis root >
        <Background />
        <Component {...pageProps} />
      </ReactLenis>
    </>
  );
}
