// color2.js로부터 ColorConsumer를 삽입
import { ColorConsumer } from "../contexts/color2";

const ColorBox2 = () => {
  return (
    <>
      <ColorConsumer>
        {(value) => (
          <>
            <div className="color-box" style={{ background: value.state.color }} />
            <div className="color-box" style={{ background: value.state.subColor }} />
          </>
        )}
      </ColorConsumer>
    </>
  );
};

export default ColorBox2;
