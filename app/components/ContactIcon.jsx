import React from "react";
import Link from "next/link";

const ContactIcon = ({ href, img_src, alt, target = true }) => {
  return (
    <Link
      className="hover:text-primary"
      href={href}
      target={target ? "_blank" : ""}
    >
      <img className="width-[60px]" src={img_src} alt={alt} />
    </Link>
  );
};

export default ContactIcon;
