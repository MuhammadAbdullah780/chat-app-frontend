import GlobalModal from "@/components/modals";
import AppProvider from "@/components/providers";
import { NextPageWithLayout } from "@/typings/types/next-layout.type";
import "@styles/globals.css";
import { AppProps } from "next/app";

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
    <AppProvider session={session}>
      <GlobalModal />
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
}
