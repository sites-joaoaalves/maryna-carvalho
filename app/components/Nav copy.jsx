import React from "react";
import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between bg-bkg-primary h-[96px] w-full px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%]">
      <img
        loading="lazy"
        loading="lazy"
        src="/logo.png"
        alt="Logo da Maryna Carvalho"
        priority
      />
      <div className="flex items-center space-between text-white px-8">
        <a
          href="/#hero"
          className="mr-8 font-roboto font-bold hover:text-primary"
        >
          Inicio
        </a>
        <a
          href="/#sobre"
          className="mr-8 font-roboto font-bold hover:text-primary"
        >
          Sobre
        </a>
        <a
          href="/#servicos"
          className="mr-8 font-roboto font-bold hover:text-primary"
        >
          Serviços
        </a>
        <a
          href="/#depoimentos"
          className="mr-8 font-roboto font-bold hover:text-primary"
        >
          Depoimentos
        </a>
        <a
          href="/#contato"
          className="mr-8 font-roboto font-bold hover:text-primary"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Nav;
