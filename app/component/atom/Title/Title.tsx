interface TitleProps {
  text: string;
  className: string;
}

const Title = (props: TitleProps) => {
  return (
    <div className={"text-center text-lg " + props.className}>{props.text}</div>
  );
};

export default Title;
