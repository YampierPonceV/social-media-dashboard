import React, { useRef } from "react";
import "./Switch.css";

const Switch = ({ setIsDarkMode, checked, setChecked }) => {
  const ref = useRef(null);

  function handleChange() {
    setChecked(ref.current.checked);
    setIsDarkMode(ref.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={checked}
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
};

export default Switch;
