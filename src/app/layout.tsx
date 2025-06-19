import Header from "./componentes/header.tsx/header";
import "./globals.css"; 
import Footer from "./componentes/footer/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <head>
      {/* Google Tag Manager */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-K747C6S23H"></script> <script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-K747C6S23H'); `}</script>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-0FW1131XF8"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0FW1131XF8');`}
      </script>
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
