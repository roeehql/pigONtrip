import "styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import wrapper from "@data/store/store";
import ToastContainer from "@components/atomic/ToastContainer";

function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
