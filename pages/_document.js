import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/**************** Logo font family **********/}
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />

        {/**************** Body font family **********/}
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/**************** Font Awesome CDN **********/}
        <script
          src="https://kit.fontawesome.com/3e892a7f39.js"
          crossorigin="anonymous"
        ></script>

        {/**************** Font Awesome CDN **********/}
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icons/icon-96x96.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
