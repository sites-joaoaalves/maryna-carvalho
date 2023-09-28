import React from "react";

const Input = ({ label, type, placeholder, inputRef }) => {
  return (
    <div className="form-control w-full mb-4">
      <label className="label">
        <span className="label-text font-roboto text-black">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full bg-white"
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
