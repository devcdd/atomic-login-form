import ProfileField from "@/app/component/molecule/ProfileField/ProfileField";
import Button from "@/app/component/atom/Button/Button";
import React from "react";

interface ProfileFormProps {
  handleButtonClick: () => void;
}

const ProfileForm = (props: ProfileFormProps) => {
  const ProfileFormContainerStyle =
    "flex flex-col p-4 border border-gray-300 rounded-md w-96 h-72";

  return (
    <div className={ProfileFormContainerStyle}>
      <div className={"text-center text-lg h-[10%]"}>Profile</div>
      <div className={"h-[70%] p-5 flex justify-center items-center"}>
        <ProfileField />
      </div>
      <Button
        message={"로그아웃"}
        handleButtonClick={props.handleButtonClick}
      />
    </div>
  );
};

export default ProfileForm;
