import { Component } from "react";
import { Fragment } from "react";

class ClassComponent1 extends Component {
  constructor(props) {
    super(props);
    // 초기값을 설정한다.
    this.state = {
      count: 0,
      name: this.props.title,
    };
  }
  render() {
    const { count, name } = this.state;
    const { title } = this.props;
    return (
      <>
        <div className="class-comp">
          <div className="text-box">
            <h1>name : {name}</h1>
            <p>count : {count}</p>
          </div>
          <button
            // onClick 함수 지정
            onClick={() => {
              // this.setState를 통해 state에 새로운 값을 넣을 수 있다.
              this.setState({ count: count + 1 });
              // this.state.name += "o"; /// 이렇게 사용도 가능은 하다. // 근데 권장하지 않는 문법인듯 IDE가 오류 잡음.
              this.setState({ name: name + "o" }); // 문자열 연산~
              // 위처럼 작성하면 함수는 두번 호출되었음에도 가리키는 변수가 같다면 연산은 한번만 한다.
              // 함수를 두번 호출하고 싶다면 this.setState() 함수에 인자로 화살표 함수를 넣어주어야 한다.
              // 또한 prevState를 인자를 통해서 state 값에 접근하여 연산을 하여야 한다.
              this.setState((prevState) => {
                return {
                  count: prevState.count + 1,
                };
              });

              this.setState((prevState) => ({ count: prevState.count + 1 }));
              // setState 함수는 콜백 함수가 지원된다.
              this.setState(
                (prevState) => ({ count: prevState.count + 1 }),
                () => {
                  this.setState((prevState) => {
                    return {
                      name: prevState.name + "O",
                    };
                  });
                }
              );
            }}
          >
            Like
          </button>
        </div>
      </>
    );
  }
}

export default ClassComponent1;
