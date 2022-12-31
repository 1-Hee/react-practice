
import {useState, useMemo, useCallback} from "react";

const getAvg = numbers => {
    console.log('평균 계산중....');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a+b);
    return sum / numbers.length;
}

const MyUseCallback = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    
    // useCallback
    const handleOnChange = useCallback(e=>{
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(()=>{
        if(isNaN(number) || number=='' || number == null){
            alert('잘못 값을 입력하셨습니다.');
            setNumber('');
            return;
        }
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]); // number 또는 list가 바뀌었을 때만 작동!

    const avg = useMemo(()=>getAvg(list), [list]);

    return(
        <>
            <div className="comp func-comp hook-comp">
                <h1>useCallback</h1>
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

export default MyUseCallback;
