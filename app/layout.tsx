import type { Metadata } from "next";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Preloader from "../components/Preloader";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
// import Header from "../components/Header";
// import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Didi Finance - Stronger Farms. Stronger Futures",
  // fix this error 
  // content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  description: "We help farmers create a digital profile for their farm, making it easier to access services, track farm activities, and build credibility in the marketplace.",
  keywords: ["software development", "web development", "mobile app", "IT solutions", "Python", "PHP", "ML"],
  authors: [{ name: "Didi Finance" }],
  openGraph: {
    title: "Didi Finance - Stronger Farms. Stronger Futures",
    description: "We help farmers create a digital profile for their farm, making it easier to access services, track farm activities, and build credibility in the marketplace.",
    url: "https://www.didifinance.africa",
    siteName: "Didi Finance",
    images: [
      {
        url: "https://www.didifinance.africa/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Didi Finance Company Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Didi Finance - Stronger Farms. Stronger Futures",
    description: "We help farmers create a digital profile for their farm, making it easier to access services, track farm activities, and build credibility in the marketplace.",
    creator: "@Didi Finance",
    images: ["https://www.didifinance.africa/images/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cssFiles = [
    "css/fontawesome.min.css",
    "css/bootstrap.min.css",
    "css/bootstrap.rtl.min.css",
    "css/magnific-popup.min.css",
    "css/swiper-bundle.min.css",
    "css/style.css"
  ];

  return (
    <html lang="en">
      <head className="no-js" lang="en">
        <link rel="shortcut icon" href="/img/pics/Favicon.png" type="image/x-icon" />
        {cssFiles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/venobox/2.1.8/venobox.min.css" integrity="sha512-GypU0XXzM1fTasrwwQdNWacbV5aRsbJCjDdxfRyiYwDMvFkAI1LMny6mDbrM19kKGMCA+dQpilQgRZoPjhsGfg==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/venobox/2.1.8/venobox.css" integrity="sha512-UjYHRtLJUrbgyFmRQoounxMKKUS/bnvKt0YO0VUEWwZzJvh1KF2EGQmTobRsN/7ZUGGzCdKvozYcuHUvxK0ldA==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}
      </head>
      <body style={{}}>
        <div className="body-overlay"></div>

        {/* <Preloader /> */}
          <Header />
          <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}

          {/* <Footer /> */}
          </div>
        </div>
        {/* JS in the exact same blocking order as original theme */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script> */}
        <Script src="js/swiper-bundle.min.js"/>
        <Script src="js/main.js" />
        <Script src="js/imagesloaded.pkgd.min.js"/>
        <Script src="js/bootstrap.min.js"/>
        <Script src="js/isotope.pkgd.min.js"/>
        <Script src="js/jquery-ui.min.js"/>
        <Script src="js/jquery.counterup.min.js"/>
        <Script src="js/jquery.magnific-popup.min.js"/>
        {/* function.js runs last after DOM is interactive */}
        {/* <Script src="/js/function.js" strategy="afterInteractive" /> */}
        <Script src="js/vendor/jquery-3.7.1.min.js"/>
      </body>
    </html>
  );
}