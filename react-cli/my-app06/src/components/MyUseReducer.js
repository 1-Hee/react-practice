
import {useState, useReducer} from "react";


function reducerFunc(state, action){
    // action의 type에 따라 분기
    switch(action.type){
        case 'INC':
            return {value : state.value +1};
        case 'DEC':
            return {value : state.value -1};
        default:
            return state;
    }
}

// 이벤트 핸들러 하나로 처리듯이 하는 문법
function reducerFunc2(state, action){
    return{
        ...state,
        [action.name]:action.value
    };
}

const MyUseReducer = () => {
    // const [state, dispatch] = useReducer(reducerFunc, {value:0});
    const [state, dispatch] = useReducer(reducerFunc2, {
        name:'',
        nickname:'',
    });

    const {name, nickname} = state;
    const handleOnChange = e => {
        dispatch(e.target);
    }
    

    return(
        <>
            <div className="comp func-comp hook-comp">
                <h1>Reducer</h1>
                <p>count : <b>{state.value}</b></p>
                <button onClick={()=>{dispatch({type:'INC'})}}>+1</button>
                <button onClick={()=>{dispatch({type:'DEC'})}}>-1</button>
                <hr></hr>                
                <input name="name" value={name} onChange={handleOnChange} />
                <input name="nickname" value={nickname} onChange={handleOnChange} />
                <p>name : {name}</p>
                <p>nickname : {nickname}</p>
            </div>
            
        </>
    )
}

export default MyUseReducer;