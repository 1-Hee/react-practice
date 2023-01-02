import "./App.css";
import "./asset/Custom.css";
import "./asset/LifeCycleComp.css";

import { Fragment, Component } from "react";
import LifeCycleComp01 from "./components/LifeCycleComp01";
import ErrorHandlingComp from "./components/ErrorHandlingComp";

// 컴포넌트 입력

// function App() {
//   const [name, setName] = useState('lifeCycle');
//   return (
//     <>
//       <div className="main-header">
//         <p>React의 <span>{name}</span> 에 대해 알아보기</p>
//       </div>
//       <LifeCycleComp01 />
//     </>
//   );
// }

// export default App;

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
    name: "LifeCycle",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <div className="main-header">
          <p>
            React의 <span>{name}</span> 에 대해 알아보기
          </p>
          <button onClick={this.handleClick}>랜덤 색상</button>
        </div>
        <ErrorHandlingComp>
          <LifeCycleComp01 color={this.state.color} />
        </ErrorHandlingComp>
      </>
    );
  }
}

export default App;
