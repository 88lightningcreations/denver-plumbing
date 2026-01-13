import type { Metadata } from "next";
import { Lilita_One, Lato } from "next/font/google";
import "./globals.css";
import "./styles/markdown.css";
import NavigationBar from "@/app/components/NavigationBar";
import Footer from "@/app/components/Footer";
import Script from 'next/script';

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita-one",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peachtreeplumbing5280.com'),
  title: "Peach Tree Plumbing",
  description: "Your trusted local plumber in Denver, Colorado.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Peach Tree Plumbing',
    'image': 'https://peachtreeplumbing5280.com/PTP-LOGO.jpg',
    '@id': 'https://peachtreeplumbing5280.com',
    'url': 'https://peachtreeplumbing5280.com',
    'telephone': '720-298-1900',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '4210 S Galapago St',
      'addressLocality': 'Englewood',
      'addressRegion': 'CO',
      'postalCode': '80110',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 39.642220,
      'longitude': -104.993050
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://www.facebook.com/peachtreeplumbing',
      'https://twitter.com/peachtreeplumbing'
    ] 
  };
  
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`d-flex flex-column min-vh-100 ${lilitaOne.variable} ${lato.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavigationBar />
        <main className="flex-shrink-0">{children}</main>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}