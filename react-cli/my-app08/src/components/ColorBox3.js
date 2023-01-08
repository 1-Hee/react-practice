// Hook을 사용한 ColorBox

import { useContext } from "react";
import ColorContext from "../contexts/color2";

const ColorBox3 = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        className="color-box"
        style={{
          background: state.color,
        }}
      />
      <div
        className="color-box"
        style={{
          background: state.subColor,
        }}
      />
    </>
  );
};

export default ColorBox3;
