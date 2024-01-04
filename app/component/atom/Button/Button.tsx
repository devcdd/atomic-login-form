"use client";

import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleButtonClick: () => void;
  message: string;
}

const Button = (props: ButtonProps) => {
  const ButtonStyle =
    " bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded ";

  return (
    <button
      className={props.className + ButtonStyle}
      onClick={props.handleButtonClick}
    >
      {props.message}
    </button>
  );
};

export default React.memo(Button);
