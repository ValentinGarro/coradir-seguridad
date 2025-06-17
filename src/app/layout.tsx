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
      <body className="font-dm ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
