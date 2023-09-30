import React from "react";
import Image from "next/image";

const PilaresIcon = ({ src, text, bg }) => {
  return (
    <div className="flex flex-col items-center justify-start grow basis-72 max-w-[300px] text-center shadow-[0_0px_5px_rgb(0,0,0,0.3)] rounded-lg ">
      <div
        className={`relative flex flex-col items-center justify-center rounded-t-lg w-[300px] h-[300px] p-[12%]  ${bg}`}
      >
        <Image width={246} height={286} loading="lazy" src={src} alt={text} />
      </div>
      <h2 className="text-2xl font-bold text-black my-8">{text}</h2>
    </div>
  );
};

export default PilaresIcon;
