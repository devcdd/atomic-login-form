import InputField from "@/app/component/molecule/InputField/InputField";
import Button from "@/app/component/atom/Button/Button";

interface LoginFormProps {
  handleButtonClick: () => void;
}

export default function LoginForm(props: LoginFormProps) {
  const LoginFormContainerStyle =
    "flex flex-col gap-6 p-4 border border-gray-300 rounded-md w-96";

  return (
    <div className={LoginFormContainerStyle}>
      <div className={"text-center text-lg"}>Login</div>
      <div>
        <InputField label={"Username"} type={"text"} />
        <InputField label={"Password"} type={"password"} />
      </div>
      <Button
        className={
          "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded w-full"
        }
        handleButtonClick={props.handleButtonClick}
      />
    </div>
  );
}
