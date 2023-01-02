import { useState, Fragment } from "react";

const FuncEvent01 = () => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  // 함수형 컴포넌트의 이벤트 핸들링 메서드
  // 일단 가장 쉬운 방법은 이벤트에 맞게 메서드를 별도로 선언하는 것이다.
  // 하지만 이런 식의 코드 스타일은 프로젝트가 커지면 하드코딩으로 변하기 딱 좋다...
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeText = (e) => setText(e.target.value);
  const onClick = () => {
    alert(username + " : " + text);
    setUsername("");
    setText("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <>
      <div className="class-comp">
        <div className="text-box">
          <h1>함수형 이벤트 연습1</h1>
          <p>{username}</p>
          <p>{text}</p>
          <input
            type="text"
            name="username"
            placeholder="아무 이름이나 입력해 보세요"
            value={username}
            onChange={onChangeUsername}
            onKeyDown={handleKeyDown}
          />
          <input
            type="text"
            name="text"
            placeholder="아무 글자나 입력해 보세요"
            value={text}
            onChange={onChangeText}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button onClick={onClick}>확인</button>
      </div>
    </>
  );
};

export default FuncEvent01;
