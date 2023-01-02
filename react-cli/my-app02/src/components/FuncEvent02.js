import { useState, Fragment } from "react";

const FuncEvent02 = () => {
  const [form, setForm] = useState({
    text: "",
    username: "",
  });
  const { text, username } = form;
  const handleChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 복사하고
      [e.target.name]: e.target.value, // 원하는 값 덮어쓰기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + " : " + text);
    this.setForm({
      text: "",
      username: "",
    });
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
          <h1>함수형 이벤트 연습2</h1>
          <p>{username}</p>
          <p>{text}</p>
          <input
            type="text"
            name="username"
            placeholder="아무 이름이나 입력해 보세요"
            value={username}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <input
            type="text"
            name="text"
            placeholder="아무 글자나 입력해 보세요"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button onClick={onClick}>확인</button>
      </div>
    </>
  );
};

export default FuncEvent02;
