import "./globals.css";

export const metadata = {
  title: "Cerámicas Puno",
  description: "Encuentra los mejores diseños para tu hogar",
};

export default function RootLayout({
  children,
}: {
    //"En ese espacio en blanco, solo voy a permitir que se inserten componentes válidos de React
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {/* 'children' es tu page.tsx. El layout lo envuelve. */}
        {children}
      </body>
    </html>
  );
}