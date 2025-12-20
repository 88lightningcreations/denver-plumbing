import type { Metadata } from "next";
import { Lilita_One, Lato } from "next/font/google";
import "./globals.css";
import "./styles/markdown.css";
import NavigationBar from "@/app/components/NavigationBar";
import Footer from "@/app/components/Footer";

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
  title: "Peach Tree Plumbing",
  description: "Your trusted local plumber in Denver, Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`d-flex flex-column min-vh-100 ${lilitaOne.variable} ${lato.variable}`}>
        <NavigationBar />
        <main className="flex-shrink-0">{children}</main>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
