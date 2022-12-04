import React from "react";
import logo from "../Images/coollogo.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <img alt="logo" src={logo} width="200" height="70" />
      </div>
    </>
  );
}
