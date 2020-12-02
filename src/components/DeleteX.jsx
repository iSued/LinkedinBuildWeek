import React from "react";

export default function DeleteX(props) {
  return (
    <i
      className={
        props.me === true ? " fas fa-times  ml-3 mr-1 py-1 px-2" : "d-none"
      }
      style={{ color: props.color }}
      onClick={() => props.onClicked()}
    ></i>
  );
}
