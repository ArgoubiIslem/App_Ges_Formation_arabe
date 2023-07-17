import '../styles/globals.css';
import '../styles/test.css';
import { StoreProvider } from '../utils/Store';
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
