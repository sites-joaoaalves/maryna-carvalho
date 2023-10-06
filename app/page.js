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
const About = dynamic(() => import("./components/About"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});
const Contato = dynamic(() => import("./components/Contato"), {
  ssr: false,
});
const Servicos = dynamic(() => import("./components/Servicos"), {
  ssr: false,
});

const Avaliacoes = dynamic(() => import("./components/Avaliacoes"), {
  ssr: false,
});

const Parceiros = dynamic(() => import("./components/Parceiros"), {
  ssr: false,
});

// import About from "./components/About";
// import Footer from "./components/Footer";
// import Contato from "./components/Contato";
// import Servicos from "./components/Servicos";
// import Avaliacoes from "./components/Avaliacoes";
// import Parceiros from "./components/Parceiros";

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
