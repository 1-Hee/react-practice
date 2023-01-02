import "./App.css";
import "./Custom.css";
import { Fragment } from "react";

// 컴포넌트 삽입
import ClassComponent1 from "./components/ClassComponent1";
import FunctionalComponent from "./components/FunctionalComponent";

const App = () => {
  const title = "리액트 컴포넌트의 STATE";
  return (
    <>
      <div className="header-div">
        <h1>{title}</h1>
      </div>
      <ClassComponent1 title={"클래스형 컴포넌트"} />
      <FunctionalComponent title={"함수형 컴포넌트"}></FunctionalComponent>
    </>
  );
};

export default App;
