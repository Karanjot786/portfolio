import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";
import { MDXProvider } from "@mdx-js/react";
// import Chat from "@/components/Chat";
import MDXComponents from "@/components/MDXComponents";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        {/* <Banner /> */}
        <Head>
          <link
            rel="icon"
            type="image/ico"
            href="/static/favicons/android-icon-192x192.ico" />
          <link
            rel="icon"
            type="image/ico"
            sizes="16x16"
            href="/static/favicons/android-icon-192x192.ico" />
          {/* <link rel="manifest" href="/static/favicons/manifest.json" /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/static/favicons/android-icon-192x192.ico"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
        {/* <Chat /> */}
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
