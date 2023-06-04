import { Nunito_Sans } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const Nunito = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
});
import 'animate.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/sass/style.scss";
import "@/styles/responsive.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${Nunito.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
