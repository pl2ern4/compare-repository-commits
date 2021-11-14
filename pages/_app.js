import StoreProvider from '../context/store-context/StoreContext';
import { initialState, globalReducer } from '../store/globalReducer';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider initialState={initialState} reducer={globalReducer}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
