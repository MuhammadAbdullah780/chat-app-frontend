import { NextPageWithLayout } from "@typings/types/next-layout";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import "@styles/globals.css";
import store from "@store/index";
import AppWrapper from "@/components/providers";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Func
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppWrapper session={session}>
      {getLayout(<Component {...pageProps} />)}
    </AppWrapper>
  );
}
