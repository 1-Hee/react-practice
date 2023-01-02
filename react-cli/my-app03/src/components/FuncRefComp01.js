import React, { useState, useRef } from 'react'

const FuncRefComp01 = () => {
    const [password, setPassword] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    let inputEle = React.createRef()

    // handleChange
    const handleChange = (e) => {
        setPassword(e.target.value)
    }

    // handleButtonClick
    const handleButtonClick = () => {
        setIsClicked(true)
        showAlert(password)
    }

    const checkValidation = (password) => {
        if (password === '0000') {
            return true
        }
        return false
    }

    // handleKeyDown
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsClicked(true)
            showAlert(password)
        }
    }

    const showAlert = (password) => {
        if (checkValidation(password)) {
            alert('비밀번호를 잘 입력하셨습니다.')
        } else {
            alert('비밀번호를 다시 확인 해주세요.')
        }
    }

    return (
        <>
            <div className="comp func-comp ref-comp">
                <input
                    type="password"
                    value={password}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={
                        // 클래스명에 함수를 주면, 동적으로 검사를 해준다.
                        // 그러나 변수를 주게 되면 동적으로 검사하지 못해
                        // 별도로 변수를 체크해주는 함수와 함께 쓰는 등의 문법이 필요하다.
                        isClicked
                            ? checkValidation(password)
                                ? 'success'
                                : 'fail'
                            : ''
                        // checkValidation(password) ? 'success' : 'fail' // 이렇게 쓰면 동적 체크 가능
                    }
                    // ref={(ref) => {
                    //     inputEle = ref
                    //     //  함수형 컴포넌트에서 변수를 선언했을 경우 this로 가리키면 안된다.
                    // }}
                    // 아래처럼 축약해서 사용 가능함!
                    ref={inputEle}
                />
                <button
                    onClick={() => {
                        handleButtonClick()
                        inputEle.current.focus()
                        // ref 변수를 참조 할 때는 반드시 current 프로퍼티러 접근!
                    }}
                >
                    확인
                </button>
            </div>
        </>
    )
}

export default FuncRefComp01
