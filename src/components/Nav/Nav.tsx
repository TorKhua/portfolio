import React from "react";
import ToggleDarkModeButton from "../ToggleDarkModeButton";

function Nav() {
  return (
    <div className="w-full py-4 flex align-middle justify-between sticky">
      <div>alejandro(tm);</div>
        <ToggleDarkModeButton />
    </div>
  );
}

export default Nav;
