import { Component } from "react";
import { Fragment } from "react";

class ClassEvent01 extends Component {
  state = {
    text: "",
  };
  render() {
    const { text } = this.state;
    return (
      <>
        <div className="class-comp">
          <div className="text-box">
            <h1>이벤트 연습1</h1>
            <p>{text}</p>
            <input
              type="text"
              name="message"
              placeholder="아무 글자나 입력해 보세요"
              onChange={(e) => {
                console.dir(e);
                this.setState({ text: e.target.value });
              }}
            />
          </div>
          <button
            onClick={(e) => {
              alert(text);
              this.setState({ text: "" });
            }}
          >
            확인
          </button>
        </div>
      </>
    );
  }
}

export default ClassEvent01;
