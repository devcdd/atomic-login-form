import Label from "@/app/component/atom/Label/Label";
import Input from "@/app/component/atom/Input/Input";

interface InputFieldProps {
  label: string; // Username, Password
  type: string; // text, password
}

export default function InputField(props: InputFieldProps) {
  return (
    <>
      <Label label={props.label} />
      <Input label={props.label} type={props.type} />
    </>
  );
}
