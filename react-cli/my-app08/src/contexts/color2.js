import { createContext, useState } from "react";

// createContext를 통해 생성하는 ColorContext의 state 값은
// 아래의 ColorProvider에서 실제로 사용할 객체의 기본 값으로 일치시켜주는 것이 좋다.
// 나중에 실수해서 값을 안넣어도 오류 안나기도 하고, 코드를 분석하는데도 도움을 준다.
const ColorContext = createContext({
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider, ColorConsumer 내보내기

export { ColorProvider, ColorConsumer };

export default ColorContext;
