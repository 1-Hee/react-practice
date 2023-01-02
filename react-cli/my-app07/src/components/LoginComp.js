import { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginComp = () => {
  const [text, setText] = useState("");
  const [login, setLogin] = useState(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        alert("로그인 되었습니다.!");
        setText("");
        setLogin(true);
      }
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  if (login) {
    return <Navigate to="/my-page" replace={true} />;
  }
  return (
    <>
      <div className="comp class-comp login-comp">
        <span>ID : </span>
        <input placeholder="아이디를 입력해주세요" value={text} onKeyDown={handleKeyDown} onChange={handleOnChange} />
        <p>입력 값 : {text}</p>
      </div>
    </>
  );
};

export default LoginComp;
