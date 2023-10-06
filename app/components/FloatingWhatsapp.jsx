"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  const handleWhatsappRedirect = () => {
    window.open("https://wa.me/5561993290307");
  };
  return (
    <div
      onClick={handleWhatsappRedirect}
      className="bg-green-500 rounded-full w-16 h-16 fixed right-4 bottom-4 lg:right-12 lg:bottom-12 flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition duration-500 ease-in-out"
    >
      <FaWhatsapp className="text-4xl text-white" />
    </div>
  );
};

export default FloatingWhatsapp;
