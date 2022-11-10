import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME =
  "EV Initiative - eMobility Service Provider & Charge Port Operator";
const APP_DESCRIPTION = "eMobility Service Provider & Charge Port Operator";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
