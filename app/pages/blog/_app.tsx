import type { AppProps } from "next/app";
import Layout from "../../pages/blog/layout";
import "tailwindcss/tailwind.css";
import { MdxComponentsProvider } from "../../pages/blog/mdxContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  );
}

export default MyApp;
