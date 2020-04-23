import React from "react";
import { Link } from "react-router-dom";
import routesPaths from "../routesPaths";

const links = [
  { name: "Финансы", path: "#" },
  { name: "-Внесение средств", path: "#" },
  { name: "-Вывод средств", path: "#" },
  { name: "Контент", path: "#" },
  { name: "-Строки", path: routesPaths.strings },
  { name: "Администрирование", path: "#" },
];

const NavLinks = () => {
  return (
    <nav className="navLinks">
      <ul className="navLinks__list">
        {links.map(({ name, path }) => (
          <Link key={name} to={path} className="navLinks__item">
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
