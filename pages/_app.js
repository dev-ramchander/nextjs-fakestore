import "../styles/globals.css";
import LayouApp from "../layout/LayoutApp";

function MyApp({ Component, pageProps }) {
  return (
    <LayouApp>
      <Component {...pageProps} />
    </LayouApp>
  );
}

export default MyApp;
