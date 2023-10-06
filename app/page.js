import dynamic from "next/dynamic";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pilares from "./components/Pilares";

const FloatingWhatsapp = dynamic(
  () => import("./components/FloatingWhatsapp"),
  {
    ssr: false,
  }
);

import About from "./components/About";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import Servicos from "./components/Servicos";
import Avaliacoes from "./components/Avaliacoes";
import Parceiros from "./components/Parceiros";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pilares />
        <About />
        <Servicos />
        <Parceiros />
        <Avaliacoes />
        <Contato />
        <FloatingWhatsapp />
      </main>
      <Footer />
    </>
  );
}
