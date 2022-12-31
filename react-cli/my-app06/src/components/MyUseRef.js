import {useState, useMemo, useCallback, useRef, useEffect} from "react";

const getAvg = numbers => {
    console.log('평균 계산중....');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a+b);
    return sum / numbers.length;
}

const MyUseRef = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

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
        inputEl.current.focus(); // useRef로 추가된 부분!;
    }, [number, list]); // number 또는 list가 바뀌었을 때만 작동!

    const avg = useMemo(()=>getAvg(list), [list]);


    // useRef를 사용하면 로컬변수를 사용할 수 있습니다.
    // 단, 로컬 변수는 바뀌더라도 리렌더링 되지 않으므로
    // 렌더링이 필요 없는 변수에 한해서 사용해야 합니다.
    // 변수에 useRef를 통해 할당한 후 current를 통해 접근하는 식으로 사용!
    const id = useRef(1);
    const setId = (n) => {
        this.id = n;
    }
    const printId = () => {
        console.log(`id : ${id.current}`); 
    }

    useEffect(()=>{
        printId();
    }, [list]);

    return(
        <>
            <div className="comp func-comp hook-comp">
                <h1>MyUseRef</h1>
                <input
                ref={inputEl} 
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

export default MyUseRef;