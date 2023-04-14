import "react-toastify/dist/ReactToastify.css";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";

// Project imports
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store, { persistor } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <ToastContainer position="bottom-left" />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
