import "../asset/mapClassComp01.css"

import { Fragment } from "react";

const MapFuncComp01 = () => {
  const names = ['봄', '여름', '가을', '겨울'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
{/* 리액트에서 인덱스를 키 값으로 사용하면 리렌더링할 때 효율적이지 못해서 좋지 않다. 
자바스크립트에서는 아이디가 겹치면 안되지만, 문법적으로 아이디가 겹치는 것을 막진 않는다. 
자바 IDE에서 컴파일 오류 등으로 강제로 오류를 잡아내지는 않는다. 콘솔에 오류 찍거나 기능이 정상수행 안되는 정도에 그친다.
이러한 특징 때문에 index를 아이디로 삼으면 리액트가 요소를 찾을 때 비효율이 발생할 수 있기 때문에 비권장한다
리스트로 요소를 
*/}
  
  return (
    <>
      <div className="comp func-comp map-comp">
        <ul>
          {nameList}
        </ul>
      </div>
    </>
  )
}


export default MapFuncComp01;