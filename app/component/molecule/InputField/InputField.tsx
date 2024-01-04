import Label from "@/app/component/atom/Label/Label";
import Input from "@/app/component/atom/Input/Input";
import React from "react";

interface InputFieldProps {
  label: string; // Username, Password
  type: string; // text, password
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  return (
    <>
      <Label label={props.label} />
      <Input
        label={props.label}
        type={props.type}
        value={props.value}
        handleChange={props.handleChange}
      />
    </>
  );
};

export default React.memo(InputField);
