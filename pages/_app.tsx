import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "@components/Header";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "@store/store";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />;
          <Header />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
