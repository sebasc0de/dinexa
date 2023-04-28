// Styles
import "@/styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";

// Translation
import "../config/i18n";

// Project imports
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../store";

// React imports
import type { AppProps } from "next/app";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback="Loading translate">
          <Component {...pageProps} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}
