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

        {/**************** Favion **********/}
        <link rel="shortcut icon" href="/ashraf.png" type="image/x-icon" />

        <title>Ashraf Chowdury Portfolio | Front-End Developer</title>
        <meta
          name="description"
          content="Hi, My name is Ashraf Chowdury and I am a Front-End Developer. I like to build excellent Web applications using Javascript and React.js. Currently, I am focused on empowering myself by learning some new technologies that will help me to better myself in my future journey."
        />

        {/**************** Googles Search **********/}
        <meta
          name="google-site-verification"
          content="SkzTyqV-NOmWDfjN3HNuF2i1b9yWH3u0LtxOZpKmYc0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
