import { Fragment, useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "@/store";
import { setProducts } from "@/store/slices/product-slice";
import { toStorefrontProduct } from "@/lib/listing-format";
import Preloader from "@/components/preloader";
import { ToastProvider } from "@/components/ui/ToastProvider";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'react-modal-video/scss/modal-video.scss';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import '../assets/sass/style.scss';
import '../assets/responsive.css';

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const siteTitle = "Sammy Realty | Property Sales, Rentals & Management in Ajah, Lagos";
  const siteDescription =
    "Sammy Realty helps buyers, renters, landlords, and sellers move faster across Ajah, Lagos, Nigeria with property sales, property management, real estate consulting, rentals, and shortlets.";
  const siteUrl = "https://sammyrealty.com";

  useEffect(() => {
    let active = true;

    async function loadListings() {
      store.dispatch(setProducts([]));
      try {
        const response = await fetch("/api/v1/listings?limit=100&status=active");
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Failed to load listings");
        }

        const listings = Array.isArray(payload.data)
          ? payload.data.map(toStorefrontProduct)
          : [];

        if (active) {
          store.dispatch(setProducts(listings));
        }
      } catch (error) {
        console.error("Listings preload failed:", error);
        if (active) {
          store.dispatch(setProducts([]));
        }
      }
    }

    loadListings();

    return () => {
      active = false;
    };
  }, [store]);

  return (
    <Fragment>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B5D3B" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NG" />
        <meta property="og:site_name" content="Sammy Realty" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/img/main-logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}/img/main-logo.png`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/main-logo.png" />
      </Head>
      
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader />}>
          <ToastProvider />
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
