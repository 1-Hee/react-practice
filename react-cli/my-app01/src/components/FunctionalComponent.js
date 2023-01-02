import { Fragment } from "react";
import { useState } from "react";
import ProtoTypes from "prop-types";

const FunctionalComponent = ({ title, count }) => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const onClickEnter = () => setMessage("어서오세요");
  const onClickOuter = () => setMessage("안녕히가세요");

  return (
    <>
      <div className="func-comp">
        <div className="text-box">
          <h1 style={{ color }}>{title}</h1>
          <p>{message}</p>
        </div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickOuter}>퇴장</button>
        <div className="color-btn-div">
          <button onClick={() => setColor("white")}>하얀색</button>
          <button onClick={() => setColor("red")}>빨간색</button>
          <button onClick={() => setColor("skyblue")}>파란색</button>
        </div>
      </div>
    </>
  );
};

export default FunctionalComponent;
