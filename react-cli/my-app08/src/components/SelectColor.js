import { ColorConsumer } from "../contexts/color2";

const colors = ["red", "orangered", "orange", "yellow", "green", "blue", "skyblue", "navy", "violet", "pink"];

const SelectColor = () => {
  return (
    <>
      <div>
        <h1>색상을 선택하세요.</h1>
        <ColorConsumer>
          {({ actions }) => (
            <>
              <div style={{ display: "flex" }}>
                {colors.map((color) => (
                  <div
                    key={color}
                    className="color-box"
                    style={{
                      background: color,
                      cursor: "pointer",
                    }}
                    onClick={() => actions.setColor(color)}
                    onContextMenu={(e) => {
                      e.preventDefault(); // 마우스 오른쪽 버튼 클릭시 메뉴가 뜨는 것을 방지함
                      actions.setSubColor(color);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </ColorConsumer>
        <hr />
      </div>
    </>
  );
};

export default SelectColor;
