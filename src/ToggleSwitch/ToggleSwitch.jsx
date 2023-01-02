import React, { useState } from "react";
import "./ToggleSwitch.scss";
import Light from "../assets/icon-light-mode.svg";
import Dark from "../assets/icon-dark-mode.svg";

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);
  const handleChecked = (evt) => {
    setChecked(evt.target.checked);
    console.log(evt);
    console.log(checked);
  };
  return (
    <div className="toggle-container">
      <img src={Dark} alt="" />
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          onChange={handleChecked}
          checked={checked}
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" data-yes="Yes" data-no="No" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
      <img src={Light} alt="" />
    </div>
  );
}

export default ToggleSwitch;
