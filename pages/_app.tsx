import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import "~/styles/global.css";
import { useApollo } from "../lib/apollo";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
