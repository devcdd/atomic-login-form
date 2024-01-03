import Label from "@/app/component/atom/Label/Label";
import Input from "@/app/component/atom/Input/Input";

interface InputFieldProps {
  label: string;
  type: string;
}

export default function InputField(props) {
  return (
    <div>
      <Label label={props.label} />
      <Input label={props.label} type={props.label} />
    </div>
  );
}
