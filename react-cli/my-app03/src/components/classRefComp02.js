import '../asset/refClassComp.css'

import React, { Component, Fragment } from 'react'

class ClassRefComp02 extends Component {
    input = React.createRef()

    handleFocus = () => {
        this.input.current.focus()
    }

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box
        this.box.scrollTop = scrollHeight - clientHeight
    }
    scrollToTop = () => {
        this.box.scrollTop = 0
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '90%',
            overflow: 'auto',
            position: 'relative',
        }

        const innerStyle = {
            widht: '100%',
            height: '650px',
            background: 'background: linear-gradient(black, white);',
        }

        return (
            <>
                <div className="comp class-comp ref-comp">
                    <input ref={this.input} />
                    <button
                        onClick={() => {
                            this.handleFocus()
                        }}
                    >
                        포커스
                    </button>
                    <button onClick={this.scrollToTop}>스크롤 UP</button>
                    <button onClick={this.scrollToBottom}>스크롤 DOWN</button>
                </div>
                {/* 스크롤 박스! */}
                <div className="comp class-comp ref-comp">
                    <div
                        style={style}
                        ref={(ref) => {
                            this.box = ref
                            // 별도로 변수를 선언하진 않았지만, 이런식으로 작성하면
                            // 자동으로 변수가 선언되 효과가 있으며 정상 작동함.
                        }}
                    >
                        <div style={innerStyle}></div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassRefComp02
