import React from "react";
import "./styles.scss";

function DemoTipBox(props) {
  return (
    <div className="DemoTipBox">
      <div className="DemoTipBox__label">Demo tip</div>
      {props.children}
    </div>
  );
}

export default DemoTipBox;
