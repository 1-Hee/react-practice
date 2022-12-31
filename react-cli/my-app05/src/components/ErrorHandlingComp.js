

import { Component } from "react";

class ErrorHandlingComp extends Component{
    state = {
        isError : false,
    };

    componentDidCatch(error, info){
        this.setState({
            isError:true
        });
        console.log({error, info});
    }

    render(){
        if(this.state.isError) return <div>에러가 발생했습니다.</div>;
        return this.props.children;
        
    }
}

export default ErrorHandlingComp;