// Styles
import "@/styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";

// Translation
import global_en from "../translations/en/global.json";
import global_es from "../translations/es/global.json";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";

// Project imports
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../store";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  i18next.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      es: { global: global_es },
      en: { global: global_en },
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <Component {...pageProps} />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
