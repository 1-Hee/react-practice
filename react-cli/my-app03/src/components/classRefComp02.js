
import "../asset/refClassComp.css"

import React, { Component, Fragment } from "react";

class ClassRefComp02 extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }
  
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }
  scrollToTop = () => {
    this.box.scrollTop = 0;
  }

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '90%',
      overflow: 'auto',
      position: 'relative'
    }

    const innerStyle = {
      widht: '100%',
      height: '650px',
      background: 'background: linear-gradient(black, white);'
    }


    return (
      <>
        <div className="comp class-comp ref-comp">
          <input ref={this.input} />
          <button onClick=
            {() => { this.handleFocus(); this.scrollToBottom() }}
            onDoubleClick={this.scrollToTop}
          >포커스</button>
        </div>
        <div className="comp class-comp ref-comp">
          <div style={style}
          ref={(ref)=>{this.box=ref}}>
            <div style={innerStyle}>              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClassRefComp02;

