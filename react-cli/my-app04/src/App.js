import './App.css';
import "./asset/Custom.css"

import { Fragment } from "react";

// 컴포넌트 삽입
import MapFuncComp01 from "./components/MapFuncComp01"
import MapFuncComp02 from "./components/MapFuncComp02"


const App = () => {
  // const [name, setName] = useState("");
  const name = "map";
  return (
    <>
      <div className="main-header">
      <p>React의 <span>{name}</span> 에 대해 알아보기</p>        
      </div>
      <MapFuncComp01 />
      <MapFuncComp02 />
    </>
  );
}

export default App;
