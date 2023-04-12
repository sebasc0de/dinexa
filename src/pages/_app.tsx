import "@/styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

// Project imports
import store from "../store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
