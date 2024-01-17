import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/png"
          sizes="256x256"
        />
        <meta name="author" content="Melissa" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
