import "./App.css"
import "./asset/Custom.css"

import { Fragment, Component } from "react";

// 컴포넌트 import
import ClassRefComp01 from "./components/classRefComp01";
import ClassRefComp02 from "./components/classRefComp02";


// const App = () => {
//   const name = "ref"
//   return (
//     <>
//       <div className="main-header">
//         <p>React의 <span>{name}</span> 에 대해 알아보기</p>        
//       </div>
//       <ClassRefComp01 />
//     </>
//   );
// };

class App extends Component{
  state = {
    name: 'ref'
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <div className="main-header">
        <p>React의 <span>{name}</span> 에 대해 알아보기</p>        
        </div>
        <ClassRefComp01 />        
        <ClassRefComp02 />        
      </>
    )
  }
}


export default App;
