import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import avatar from "../assets/images/avatar.png";
import arrow from "../assets/images/Arrow 1.png";

const UserMenu = () => {
  const userName = useSelector(({ authAdmin }) => authAdmin.user.name);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className="user-menu__dropdown"
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <div className="user-menu">
          <img className="user-menu__avatar" src={avatar} alt="user avatar" />
          <p className="user-menu__name">{userName}</p>
          <div className="user-menu__arrow--container">
            <img src={arrow} alt=""></img>
          </div>
        </div>
      </DropdownToggle>

      <DropdownMenu className="user-menu__dropdown--menu">
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
