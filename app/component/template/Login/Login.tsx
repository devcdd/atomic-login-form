"use client";

import LoginForm from "@/app/component/organism/LoginForm/LoginForm";
import React, { useCallback } from "react";
import useInput from "@/app/hook/useInputChange";

const Login = () => {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");

  const handleButtonClick = useCallback(() => {
    const obj = {
      id: id,
      password: password,
    };
    console.log(obj);
    alert("로그인 되었습니다.");
  }, [id, password]);

  return (
    <LoginForm
      id={id}
      setId={setId}
      password={password}
      setPassword={setPassword}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default Login;
