
import "../asset/refClassComp.css"

import { Component, Fragment } from "react";

class ClassRefComp01 extends Component {
  state = {
    password: '',
    isClicked: false,
    isVailidated: false    
  };


  shouldComponentUpdate(nextProps, nextState) {
    // 라이프 사이클을 통해 비밀번호 입력 시 번호가 같은지 바로바로 검증하는 기능 구현
    // 이거 안쓰고 사용하면, 버튼 클릭 말고 입력할때마다 값을 바로 검증하는 것은 한템포 늦게 나옴.
    nextState.isVailidated = nextState.password === '0000' ? true : false;
    console.log(nextState.isVailidated);
    return true;
  }


  handleChange = (e) => {
    this.setState({
      password : e.target.value
    });
    this.handleButtonClick();
  }

  handleButtonClick = () => {    
    this.setState({
      isClicked: true,
      // isVailidated: this.state.password === '0000'
    })
  }

  // 엔터 누르면 alert로 값이 같은지 확인하는 값을 알려줌
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { password } = this.state;
      if (password == '0000') {
        alert('비밀번호를 잘 입력하셨습니다.');
      } else {
        alert('비밀번호를 다시 확인 해주세요.');      
      }
    }
  }

  render() {
    const { password, isClicked, isVailidated } = this.state;
    return (
      <div className="comp class-comp ref-comp" >
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className={isClicked ? (isVailidated ? 'success' : 'fail') : ''} />
        <button onClick={this.handleButtonClick}>확인</button>
        <span>버튼에는 ref적용, 자동으로 비밀번호 검사는 LifeCycle 적용</span>
      </div>

    );
  }
}

export default ClassRefComp01;

