import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactIcon = ({ href, img_src, alt, target = true }) => {
  return (
    <Link
      className="hover:text-primary"
      href={href}
      target={target ? "_blank" : ""}
    >
      <Image
        width={60}
        height={60}
        loading="lazy"
        className="w-[45px] lg:w-[60px]"
        src={img_src}
        alt={alt}
      />
    </Link>
  );
};

export default ContactIcon;
