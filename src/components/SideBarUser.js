import React from "react";
import { useSelector } from "react-redux";
import avatar from "../assets/images/avatar.png";

const SideBarUser = () => {
  const userName = useSelector(({ authAdmin }) => authAdmin.user.name);
  return (
    <div className="sideBarUser">
      <img className="sideBarUser__avatar" src={avatar} alt="user avatar" />
      <p className="sideBarUser__name">{userName}</p>
    </div>
  );
};

export default SideBarUser;
