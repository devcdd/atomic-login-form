import InputField from "@/app/component/molecule/InputField/InputField";
import Button from "@/app/component/atom/Button/Button";

interface LoginFormProps {
  handleButtonClick: () => void;
}

export default function LoginForm(props) {
  return (
    <>
      <InputField label={"Username"} type={"text"} />
      <InputField label={"Password"} type={"password"} />
      <Button handleButtonClick={props.handleButtonClick} />
    </>
  );
}
