import Header from "./componentes/header.tsx/header";
import "./globals.css"; 

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
      </body>
    </html>
  );
}
