
import {useState, useEffect} from "react";

const MyUseEffectComp = () => {
    const [name, setName] = useState('');

    useEffect(()=>{
        console.log('렌더링 완료!');
    });

    // 마운트 시에만 사용하고 싶을 때
    useEffect(()=>{
        console.log('렌더링 완료!');
    },[]);

    // 일반적인 용례    
    useEffect(()=>{
        console.log('렌더링 완료!');
    },[name]); // 배열안에 들어가는 값이 변할때!


    const handleKeyDown = e => {
        if(e.key==='Enter'){
            alert(`name : ${name}`);
            setName('');
        }
    }


    return(
        <>
            <div className="comp func-comp hook-comp">
                <h1>useEffect</h1>
                <input value={name} 
                onChange={(e)=>{setName(e.target.value)}}
                onKeyDown={handleKeyDown}
                />
                <p> name : {name} </p>
            </div>
        </>
    )
}

export default MyUseEffectComp;