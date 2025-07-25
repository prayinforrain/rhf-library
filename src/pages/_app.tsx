import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import globalStyles from "@/styles/globalStyles";
import { reset } from "@/styles/reset";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={[reset, globalStyles]} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
