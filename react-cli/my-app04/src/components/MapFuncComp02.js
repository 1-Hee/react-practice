import { Fragment, useState } from "react";

const MapFuncComp02 = () => {
  const [names, setNames] = useState([
    { id: 1, name: "봄" },
    { id: 2, name: "여름" },
    { id: 3, name: "가을" },
    { id: 4, name: "겨울" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(names.length + 1);

  const handleOnChange = (e) => setInputText(e.target.value);
  const handleOnClick = () => {
    const nextNames = names.concat({
      id: nextId,
      name: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const handleOnKeyDown = (e) => {
    if (e.key == "Enter") {
      handleOnClick();
    }
  };

  const doRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((item) => (
    <li key={item.id}>
      {item.name}{" "}
      <span
        onClick={() => {
          doRemove(item.id);
        }}
      >
        x
      </span>
    </li>
  ));

  return (
    <>
      <div className="comp func-comp map-comp">
        <input value={inputText} onChange={handleOnChange} onKeyDown={handleOnKeyDown} />
        <button onClick={handleOnClick}>추가</button>
        <ul>{nameList}</ul>
      </div>
    </>
  );
};

export default MapFuncComp02;
