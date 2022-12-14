import '../styles/tailwind.css';
import { ChakraProvider } from '@chakra-ui/react';
import store from '../src/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
