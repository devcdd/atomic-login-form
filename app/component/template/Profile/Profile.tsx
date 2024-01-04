"use client";

import ProfileForm from "@/app/component/organism/ProfileForm/ProfileForm";

const Profile = () => {
  const handleButtonClick = () => {
    console.log("DD CONSOLE CHECK > click");
  };
  return <ProfileForm handleButtonClick={handleButtonClick} />;
};

export default Profile;
