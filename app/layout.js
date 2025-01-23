import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./statemanage/context";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horse Fire Tablet",
  description: "Horse Fire Tablet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href={
          "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/30df694e-2a8a-423e-0bbc-e76cb744aa00/public"
        }
      />

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NEFKW6614N`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-NEFKW6614N', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Script strategy="lazyOnload" src="https://cdn.ocmhood.com/sdk/osw.js" />

      <Script strategy="lazyOnload">
        {`
        !function(h,oo,d,y,t,a,g){h[y] = t[y] || function () { (h[y].q = h[y].q || []).push(arguments) }, h[y].l = 1 * new Date, a = oo.createElement(d), g = oo.getElementsByTagName(d)[0], a.async = 1, a.crossOrigin = 'anonymous', a.src = t, g.parentNode.insertBefore(a, g)}(window,document,'script','Hood','https://sdk.ocmhood.com/sdk/ht.js?tag=NjY4UpByNLeVvzQ2B4kxNDY4MjE0NmUv');
        `}
      </Script>

      <Script strategy="lazyOnload">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W7N2XRZM');
        `}
      </Script>

      <body className={inter.className}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W7N2XRZM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>

        {/* START ExoClick Goal Tag | Website Interation  */}
        <script
          type="application/javascript"
          src="https://a.exoclick.com/tag_gen.js"
          data-goal="7e5b498a58b821e11d9820a8460f60de"
        ></script>
        {/* END ExoClick Goal Tag | Website Interation */}

        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
