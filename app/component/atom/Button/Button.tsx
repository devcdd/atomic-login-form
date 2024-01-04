"use client";

import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleButtonClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={props.handleButtonClick}>
      로그인
    </button>
  );
};

export default Button;
