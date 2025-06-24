import Header from "./componentes/header.tsx/header";
import "./globals.css"; 
import Footer from "./componentes/footer/footer"; 
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <head>
        <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-K747C6S23H"></Script>
        <Script id="gtag2" async src="https://www.googletagmanager.com/gtag/js?id=G-0FW1131XF8"></Script>
        <Script id="gtag3" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-K747C6S23H'); ` }}></Script>
        <Script id="gtag4" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-0FW1131XF8');` }}></Script>
    </head>
    <body className="font-dm scroll-smooth">
      {/* Google Tag Manager (noscript) */}
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPC2GBF9"
       height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
      </noscript> 
      <Header />
      {children}
      <Footer />
    </body>
  </html>
  );
}
