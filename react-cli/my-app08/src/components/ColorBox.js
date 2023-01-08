import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {/* 
        Consumer 태그를 열고 중괄호를 열어서 이 사이에 함수를 넣어주었다.
        이러한 패턴으로 코드를 작성하는 것을 Function as a child 혹은 Render Props라고 한다. 
        컴포넌트의 JSX가 있어야 할 자리에 문자열이 아닌 함수 자체를 전달하는 것
      */}
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
