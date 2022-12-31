import './App.css';
import './asset/Custom.css';
import './asset/Hook.css'

import {useState} from "react";

// 컴포넌트 삽입
import MyUseStateComp from "./components/MyUseStateComp";
import MyUseEffectComp from "./components/MyUseEffectComp";
import MyUseReducer from "./components/MyUseReducer";
import MyUseMemo from "./components/MyUseMemo";
import MyUseCallback from "./components/MyUseCallback";
import MyUseRef from "./components/MyUseRef";

function App() {
  const [name, setName] = useState('Hook');
  return (    
    <>
      <div className="main-header">
        <p>React의 <span>{name}</span> 에 대해 알아보기</p>  
      </div>
      <MyUseStateComp />
      <MyUseEffectComp />
      <MyUseReducer />
      <MyUseMemo />
      <MyUseCallback />
      <MyUseRef />
    </>
  );
}

export default App;
