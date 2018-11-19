import React from "react";
import "./Backdrop.css";

const Backdrop = ({ show, drawerClickHandler }) => {
  let backDropClass = "backdrop";
  if (show) {
    backDropClass = "backdrop open";
  }
  return <div onClick={drawerClickHandler} className={backDropClass} />;
};
export default Backdrop;
