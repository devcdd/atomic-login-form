"use client";

import LoginForm from "@/app/component/organism/LoginForm/LoginForm";

export default function Login() {
  const handleButtonClick = () => {
    console.log("Function from Login.tsx");
  };

  return <LoginForm handleButtonClick={handleButtonClick} />;
}
