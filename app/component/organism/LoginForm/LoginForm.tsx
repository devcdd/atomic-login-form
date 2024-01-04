import InputField from "@/app/component/molecule/InputField/InputField";
import Button from "@/app/component/atom/Button/Button";
import useInput from "@/app/hook/useInputChange";
import React, { useEffect, useState } from "react";

interface LoginFormProps {
  handleButtonClick: () => void;
}

const LoginForm = (props: LoginFormProps) => {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");

  const LoginFormContainerStyle =
    "flex flex-col gap-6 p-4 border border-gray-300 rounded-md w-96";

  return (
    <div className={LoginFormContainerStyle}>
      <div className={"text-center text-lg"}>Login</div>
      <div>
        <InputField
          label={"Username"}
          type={"text"}
          value={id}
          handleChange={setId}
        />
        <InputField
          label={"Password"}
          type={"password"}
          value={password}
          handleChange={setPassword}
        />
      </div>
      <Button
        className={"w-full"}
        handleButtonClick={props.handleButtonClick}
      />
    </div>
  );
};

export default LoginForm;
// export default LoginForm;
