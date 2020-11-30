import React from "react";
import { Card } from "react-bootstrap";

function ProfileStrength() {
  return (
    <Card className="mt-4 p-4">
      <div className="d-flex justify-content-between">
        <h4 className="text-secondary" style={{ fontWeight: "normal" }}>
          Profile Strength: <strong className="text-dark">Intermediate</strong>
        </h4>
        <div>
          <i
            className="fas fa-caret-down fa-2x mr-1 py-0 px-2 "
            style={{ color: "#666666" }}
          ></i>
        </div>
      </div>
      <div className="mt-4 progressBar d-flex">
        <div
          className="ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(83,76,194,1) 28%, rgba(68,102,191,1) 66%)",
          }}
        ></div>
        <div
          className="ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(66,105,192,1) 28%, rgba(51,130,189,1) 80%)",
          }}
        ></div>
        <div
          className="ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(48,135,188,1) 28%, rgba(34,159,186,1) 80%)",
          }}
        ></div>
        <div
          className="ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(31,163,186,1) 28%, rgba(26,167,165,1) 80%)",
          }}
        ></div>
        <div
          className="ml-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(27,163,151,1) 28%, rgba(33,153,116,1) 80%)",
          }}
        ></div>
        <div
          className="ml-1"
          style={{
            background: "#e1e9ee",
          }}
        ></div>
        <div
          className="ml-1"
          style={{
            background: "#e1e9ee",
          }}
        ></div>
      </div>
    </Card>
  );
}

export default ProfileStrength;
