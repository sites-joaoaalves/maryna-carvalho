import "./globals.css";
import { Head } from "next/head";
import { Antic_Didone } from "next/font/google";
const antic = Antic_Didone({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Maryna Carvalho Advocacia",
  description: "Advocacia especializada em Direito de Família e Sucessões",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marynacarvalho.adv.br",
    title: "Maryna Carvalho Advocacia",
    description: "Advocacia especializada em Direito de Família e Sucessões",
    image:
      "https://marynacarvalho.adv.br/_next/image?url=%2Flogo.png&w=640&q=75 1x, /_next/image?url=%2Flogo.png&w=1080&q=75 2x",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-pt-[80px] !scroll-smooth">
      <body className={antic.className}>{children}</body>
    </html>
  );
}
