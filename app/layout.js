import "./globals.css";
import { Antic_Didone } from "next/font/google";

const antic = Antic_Didone({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Maryna Carvalho Advocacia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-pt-[96px] !scroll-smooth">
      <body className={antic.className}>{children}</body>
    </html>
  );
}
