import React from "react";
import ToggleDarkModeButton from "../ToggleDarkModeButton";

function Nav() {
  return (
    <div className="w-full py-4 flex align-middle justify-between">
      <div>alejandro(tm);</div>
      <div>
        <ToggleDarkModeButton />
      </div>
    </div>
  );
}

export default Nav;
