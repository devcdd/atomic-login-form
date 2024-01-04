"use client";

import LoginForm from "@/app/component/organism/LoginForm/LoginForm";
import React, { useCallback } from "react";

const Login = () => {
  const handleButtonClick = useCallback(() => {
    alert("로그인 버튼이 클릭되었습니다.");
  }, []);

  return <LoginForm handleButtonClick={handleButtonClick} />;
};

export default Login;
