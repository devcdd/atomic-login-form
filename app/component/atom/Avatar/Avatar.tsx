import Image from "next/image";

const Avatar = (props) => {
  return (
    <div className={"flex justify-center items-center"}>
      <Image
        src="https://avatars.githubusercontent.com/u/126233367?v=4"
        alt="avatar"
        className={props.className + " rounded-full "}
        width={150}
        height={150}
        priority={false}
      />
    </div>
  );
};

export default Avatar;
