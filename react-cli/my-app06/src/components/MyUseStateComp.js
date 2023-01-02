import { useState } from "react";

const MyUseStateComp = () => {
  // 카운터
  const [value, setValue] = useState(0);
  // 입력창
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  // 함수 선언
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`name : ${name}`);
      setName("");
    }
  };
  const handleNickNameKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`nick-name : ${nickName}`);
      setNickName("");
    }
  };

  return (
    <>
      <div className="comp func-comp hook-comp">
        <h1> useState </h1>
        <p>
          {" "}
          <b>value</b> : {value}{" "}
        </p>
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -1
        </button>
        <br />
        <input value={name} onChange={handleChangeName} onKeyDown={handleNameKeyDown} />
        <input value={nickName} onChange={handleChangeNickName} onKeyDown={handleNickNameKeyDown} />
        <p>name : {name}</p>
        <p>nickName : {nickName}</p>
      </div>
    </>
  );
};

export default MyUseStateComp;
