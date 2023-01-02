import { Component } from "react";
import { Fragment } from "react";

class ClassEvent03 extends Component {
  state = {
    username: "",
    text: "",
  };
  // 이곳에 메서드를 작성
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + " : " + this.state.text);
    this.setState({
      text: "",
      username: "",
    });
  };

  render() {
    const { text, username } = this.state;
    return (
      <>
        <div className="class-comp">
          <div className="text-box">
            <h1>이벤트 연습3</h1>
            <p>{username}</p>
            <p>{text}</p>
            <input
              type="text"
              name="username"
              placeholder="아무 이름이나 입력해 보세요"
              value={username}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="text"
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

export default ClassEvent03;
