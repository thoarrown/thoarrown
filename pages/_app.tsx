import { useEffect } from "react";
import Router from "next/router";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import "~/styles/global.css";
import { useApollo } from "../lib/apollo";
import { ThemeProvider } from "next-themes";
import { GTMPageView } from "../lib/gtm";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
