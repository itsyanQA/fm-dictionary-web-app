import React, { useState } from "react";
import "./ThemeMode.scss";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";

export function ThemeMode() {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const themeClickHandler = () => setIsToggled((prevState) => !prevState);

  return (
    <div className="theme-mode">
      <div className={`theme-mode__toggle ${isToggled ? "theme-mode__toggle--is-toggled" : ""}`} onClick={themeClickHandler}>
        <div className={`theme-mode__toggle-circle ${isToggled ? "theme-mode__toggle-circle--is-toggled" : ""}`} />
      </div>
      <MoonIcon className={`theme-mode__moon-icon ${isToggled ? "theme-mode__moon-icon--is-toggled" : ""}`} onClick={themeClickHandler} />
    </div>
  );
}
