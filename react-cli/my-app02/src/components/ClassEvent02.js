import { Component } from "react";
import { Fragment } from "react";

class ClassEvent02 extends Component {
  state = {
    text: "",
  };
  // 이곳에 메서드를 작성
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <>
        <div className="class-comp">
          <div className="text-box">
            <h1>이벤트 연습2</h1>
            <p>{text}</p>
            <input
              type="text"
              name="message"
              placeholder="아무 글자나 입력해 보세요"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleClick}>확인</button>
        </div>
      </>
    );
  }
}

export default ClassEvent02;
