import "./App.css";
import "./assets/Custom.css";
import { Fragment } from "react";

// 컴포넌트 삽입
// 클래스형 컴포넌트
import ClassEvent01 from "./components/ClassEvent01";
import ClassEvent02 from "./components/ClassEvent02";
import ClassEvent03 from "./components/ClassEvent03";
import ClassEvent04 from "./components/ClassEvent04";

// 함수형 컴포넌트
import FuncEvent01 from "./components/FuncEvent01";
import FuncEvent02 from "./components/FuncEvent02";

const App = () => {
  const title = "리액트 컴포넌트의 EVENT HANDLING";
  return (
    <>
      <div className="header-div">
        <h1>{title}</h1>
      </div>
      <ClassEvent01 />
      <ClassEvent02 />
      <ClassEvent03 />
      <ClassEvent04 />
      <FuncEvent01 />
      <FuncEvent02 />
    </>
  );
};

export default App;
