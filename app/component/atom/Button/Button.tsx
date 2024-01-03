interface ButtonProps {
  handleButtonClick: () => void;
}

const Button = (props) => {
  return <button onClick={props.handleButtonClick}>로그인</button>;
};

export default Button;
