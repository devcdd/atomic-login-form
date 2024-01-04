const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.label}
      className={
        "appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      }
    />
  );
};

export default Input;
