import "./App.css";

// Hooks Import
import { useRef, useCallback, useState } from "react";
import produce from "immer";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });
  /*
     immer에서 제공하는 produce 함수를 호추할 때 첫 번째 파라미터가 함수형태라면 업데이트 함수를 반환함.
  */

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        // { // immer가 없을 경우
        // ...form,
        // [name]: value,
        // }
        // produce(form, (draft) => {// immer를 사용한 경우
        //   draft[name] = value;
        // })
        // immer를 간략하게 사용하는 경우 !
        produce((draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData(
        // { // immer가 없을 경우
        // ...data,
        // array: data.array.concat(info),
        // }
        // produce(data, (draft) => { // immer를 사용한 경우
        //   draft.array.push(info);
        // })
        // immer를 간략하게 사용하는 경우 !
        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData();
      // { // immer가 없을 경우!
      // ...data,
      // array: data.array.filter((info) => info.id !== id),
      // }
      // produce(data, (draft) => {// immer를 사용한 경우
      //   draft.array.splice(
      //     draft.array.findIndex((info) => info.id === id),
      //     1
      //   );
      // })
      // immer를 간략하게 사용하는 경우 !
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      });
    },
    [data]
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="ID를 입력하세요" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름을 입력하세요" value={form.name} onChange={onChange} />
        <button type="submit">등록하기</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
