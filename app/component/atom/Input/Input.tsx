import React from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.label}
      value={props.value}
      onChange={props.handleChange}
      className={
        "appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      }
    />
  );
};

export default Input;
