import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pilares from "./components/Pilares";
import About from "./components/About";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import Servicos from "./components/Servicos";
import Avaliacoes from "./components/Avaliacoes";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pilares />
        <About />
        <Servicos />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
