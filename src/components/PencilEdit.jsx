import React from "react";

function PencilEdit(props) {
  return (
    <i
      className={
        props.me === true ? "fas fa-pencil-alt ml-3 mr-1 p-2" : "d-none"
      }
      style={{ color: "#666666" }}
    ></i>
  );
}

export default PencilEdit;
