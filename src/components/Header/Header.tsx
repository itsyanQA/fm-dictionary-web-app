import React from "react";
import "./Header.scss";
import { ReactComponent as DicitionaryIcon } from "../../assets/logo.svg";
import { FontSelect } from "../FontSelect/FontSelect";
import { ThemeMode } from "../ThemeMode/ThemeMode";

export function Header() {
  return (
    <header className="header">
      <DicitionaryIcon />
      <div className="header__settings">
        <FontSelect />
        <ThemeMode />
      </div>
    </header>
  );
}
