import InputField from "@/app/component/molecule/InputField/InputField";
import Button from "@/app/component/atom/Button/Button";
import React, { useEffect, useState } from "react";
import Title from "@/app/component/atom/Title/Title";

interface LoginFormProps {
  handleButtonClick: () => void;
  id: string;
  setId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const LoginFormContainerStyle =
    "flex flex-col p-4 border border-gray-300 rounded-md w-96 h-72";

  return (
    <div className={LoginFormContainerStyle}>
      <Title className={"h-[10%]"} text={"Login"} />
      <div className={"h-[70%] flex justify-center items-center"}>
        <div>
          <InputField
            label={"Username"}
            type={"text"}
            value={props.id}
            handleChange={props.setId}
          />
          <InputField
            label={"Password"}
            type={"password"}
            value={props.password}
            handleChange={props.setPassword}
          />
        </div>
      </div>
      <Button
        className={"w-full"}
        message={"로그인"}
        handleButtonClick={props.handleButtonClick}
      />
    </div>
  );
};

export default LoginForm;
// export default LoginForm;
