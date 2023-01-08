import "./App.css";
import "./Custom.css";

//컴포넌트 삽입
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

// color2로부터 ColorProvider를 최상위 컴포넌트에 삽입
import { ColorProvider } from "./contexts/color2";

// colorBox2를 삽입
import ColorBox2 from "./components/ColorBox2";
// colorBox2의 함수형 컴포넌트인 ColorBox3 삽입
import ColorBox3 from "./components/ColorBox3";

// SelectColor 컴포넌트를 삽입
import SelectColor from "./components/SelectColor";

// 클래스형 SelectColor 컴포넌트를 삽입
import SelectColorClass from "./components/SelectColorClass";

const App = () => {
  return (
    <>
      <h1>기본 context 사용하기</h1>

      <div className="color-div">
        {/* Context를 설정하는 첫번째 방법! */}
        <ColorBox />

        {/* Context를 설정하는 두번째 방법! */}
        {/* Context.Provider를 통해 이미 작성 된 값의 변경 => props와 유사하나 props와 구분 됨. */}
        <ColorContext.Provider value={{ color: "red" }}>
          <ColorBox />
        </ColorContext.Provider>
      </div>
      <hr></hr>
      <h1>동적으로 context 사용하기1</h1>
      {/* 직접 작성한 ColorProvider를 통해 컴포넌트를 작성 */}
      <ColorProvider>
        <div>
          <SelectColor />
          <ColorBox2></ColorBox2>
        </div>
      </ColorProvider>
      <hr></hr>
      <h1>동적으로 context 사용하기2 (with useContext Hook )</h1>
      <ColorProvider>
        <div>
          <SelectColor />
          <ColorBox3></ColorBox3>
        </div>
      </ColorProvider>
      <hr></hr>
      <h1>클래스형 컴포넌트에서 context 사용하기 (with static contextType )</h1>
      <ColorProvider>
        <div>
          <SelectColorClass />
          <hr></hr>
          <ColorBox3 />
        </div>
      </ColorProvider>
    </>
  );
};

export default App;
