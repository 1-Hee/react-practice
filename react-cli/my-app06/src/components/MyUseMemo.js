
import {useState, useMemo} from "react";

const getAvg = numbers => {
    console.log('평균 계산중....');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a+b);
    return sum / numbers.length;
}


const MyUseMemo = () =>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const handleOnChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    // useMemo
    const avg = useMemo(()=>getAvg(list), [list]); 
    // 이렇게 해두면 렌더링 될때마다 함수가 호출되지 않는다.
    // 캐싱된 데이터를 참조하는 듯?

    return(
        <>
            <div className="comp func-comp hook-comp">
                <h1>useMemo</h1>
                <input 
                value={number} 
                onChange={handleOnChange}
                />
                <button onClick={onInsert}>등록</button>
                <p>평균 : <b>{avg}</b></p>
                <ul>
                    {list.map((value, index)=>(
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MyUseMemo;