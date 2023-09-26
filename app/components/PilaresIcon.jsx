import React from "react";

const PilaresIcon = ({ src, text, bg }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div
        className={`flex flex-col items-center justify-center rounded-lg md:w-[25vw] md:h-[30vw] md:max-w-[300px] md:max-h-[300px] p-[12%]  ${bg}`}
      >
        <img src={src} alt={text} />
      </div>
      <span className="text-2xl font-roboto">{text}</span>
    </div>
  );
};

export default PilaresIcon;
