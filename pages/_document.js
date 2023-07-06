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

        {/**************** Favion **********/}
        <link rel="shortcut icon" href="/ashraf_chowdury.png" type="image/x-icon" />
        <title>Ashraf Chowdury</title>
        <meta
          name="description"
          content="I'm Ashraf Chowdury, I've been learning the art of Frontend development by building things and contributing to open-source."
        />
        {/**************** Meta tags for social medias **********/}
        <meta property="og:title" content="Ashraf Chowdury" />
        <meta
          property="og:description"
          content="I'm Ashraf Chowdury, I've been learning the art of Frontend development by building things and contributing to open-source."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ashrafchowdury.me" />
        <meta
          property="og:image"
          content="https://cloud.appwrite.io/v1/storage/buckets/647f538eb065d9f2b8d8/files/64a6893977806dad9f50/view?project=645dc450a76ad06dddca&mode=admin"
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
