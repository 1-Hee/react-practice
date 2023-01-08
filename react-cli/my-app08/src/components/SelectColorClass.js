import { Component } from "react";
import ColorContext from "../contexts/color2";

const colors = ["red", "orangered", "orange", "yellow", "green", "blue", "skyblue", "navy", "violet", "pink"];

class SelectColorClass extends Component {
  state = {
    isClicked: false,
  };
  static contextType = ColorContext;
  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = (color) => {
    this.context.actions.setSubColor(color);
  };
  //  클래스형으로 context를 사용할 때의 장점 : 클래스 메서드에서도 Context에 넣어둔 함수 호출 가능
  // 단점 : 한 클래스에서 하나의 Context만 사용 가능
  // 향후 Context를 사용할 때는 대체로 함수형 컴포넌트로 사용.

  render() {
    return (
      <div>
        <h1>색상을 선택하세요.</h1>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              className="color-box"
              style={{
                background: color,
                cursor: "pointer",
              }}
              onMouseOver={() => {
                if (!this.state.isClicked) {
                  this.handleSetColor(color);
                }
              }}
              onClick={() => {
                let toggles = !this.state.isClicked;
                this.setState({ isClicked: toggles });
                this.handleSetColor(color);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SelectColorClass;
