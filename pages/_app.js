import StoreProvider from '../context/store-context/StoreContext';
import { initialState, globalReducer } from '../store/globalReducer';
import ErrorBoundary from '../components/error-boundry';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <StoreProvider initialState={initialState} reducer={globalReducer}>
        <Component {...pageProps} />
      </StoreProvider>
    </ErrorBoundary>
  )
}

export default MyApp
