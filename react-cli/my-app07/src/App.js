import "./App.css";
import "./asset/Custom.css";

import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Router");
  return (
    <>
      <div className="main-header">
        <p>
          React의 <span>{name}</span> 에 대해 알아보기
        </p>
      </div>
    </>
  );
};

export default App;
