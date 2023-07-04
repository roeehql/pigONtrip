import "styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@data/store/store";
import Header from "@components/profile/Header";
import ToastContainer from "@components/atomic/ToastContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Header />
      <ToastContainer />
    </Provider>
  );
}
