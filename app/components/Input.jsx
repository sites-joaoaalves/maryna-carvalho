import React from "react";

const Input = ({ label, type, placeholder, inputRef }) => {
  return (
    <div className="form-control w-full mb-4">
      <label className="label">
        <span className="label-text font-roboto text-black font-bold">
          {label}
        </span>
      </label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full bg-white text-black border-zinc-400 border-2"
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
