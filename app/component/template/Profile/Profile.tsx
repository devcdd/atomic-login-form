"use client";

import ProfileForm from "@/app/component/organism/ProfileForm/ProfileForm";

const Profile = () => {
  const handleButtonClick = () => {
    alert("로그아웃 되었습니다.");
  };
  return <ProfileForm handleButtonClick={handleButtonClick} />;
};

export default Profile;
