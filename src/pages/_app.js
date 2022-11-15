import "@styles/css/bootstrap.min.css";
// import "@styles/js/bootstrap.bundle.min.js";
import "@styles/css/style.css";
import "@styles/css/fontawesome-all.min.css";
import "../styles/style.scss";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import Script from "next/script";

//Modal Video
import "react-modal-video/scss/modal-video.scss";
import Head from "next/head";
import { Fragment } from "react";

//Third Party Imports
import { Toaster } from "react-hot-toast";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("@styles/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Fragment>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ME2GBL8395"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-ME2GBL8395");
    />
      `,
          }}
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ className: "react-hot-toast" }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
