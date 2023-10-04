"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar
      className="fixed top-0 w-screen !px-12 xl:!px-[17.5%] py-6 z-50 bg-bkg-primary"
      fluid
      id="navbar"
    >
      <Navbar.Brand href="#hero">
        <Image
          width={477}
          height={343}
          src="/logo.png"
          className="w-12"
          alt="Logo da Maryna Carvalho"
          priority
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className="font-roboto font-bold hover:!text-primary !text-white"
          href="#hero"
        >
          Início
        </Navbar.Link>
        <Navbar.Link
          className="font-roboto font-bold hover:!text-primary text-white"
          href="#sobre"
        >
          Sobre
        </Navbar.Link>
        <Navbar.Link
          className="font-roboto font-bold hover:!text-primary text-white"
          href="#servicos"
        >
          Serviços
        </Navbar.Link>
        <Navbar.Link
          className="font-roboto font-bold hover:!text-primary text-white"
          href="#parceiros"
        >
          Parceiros
        </Navbar.Link>
        <Navbar.Link
          className="font-roboto font-bold hover:!text-primary text-white"
          href="#depoimentos"
        >
          Depoimentos
        </Navbar.Link>
        <Navbar.Link
          className="font-roboto font-bold hover:!text-primary text-white"
          href="#contato"
        >
          Contato
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
