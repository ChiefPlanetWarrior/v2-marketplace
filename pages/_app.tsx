import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { NETWORK } from "../const/contractAddresses";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import NextNProgress from "nextjs-progressbar";
import { Navbar } from "../components/Navbar/Navbar";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={NETWORK}>
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {<Navbar />}

      {<Component {...pageProps} />}

    </ThirdwebProvider>
  );
}

export default MyApp;
