
import { Fragment, Component } from "react";

class LifeCycleComp01 extends Component{
    state = {
        number: 0,
        color:null,
    }

    myRef = null; // ref를 설정하기 위한 부분
    
    constructor(props){
        super(props);
        console.log('constructor');
    }
    
    static getDerivedStateFromProps(nextProps, prevProps){
        console.log("getDerivedSateFromProps");
        if(nextProps.color !== prevProps.color){
            return {color:nextProps.color}
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4; // 끝자리가 4일 때는 렌더링 안함.
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number:this.state.number + 1,
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
        if(snapshot){
            console.log('업데이트 직전의 색상 :', snapshot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color:this.props.color,
        }

        return(
            <>
                <div className="comp class-comp life-comp">
                    {/* 고의로 오류 발생 */}
                    {/* 오류가 발생 한 컴포넌트에서는 에러 잡을 수 없음 따라서 별도의 에러처리용 컴포넌트를 만들고*/}
                    {/* 오류 핸들링 컴포넌트로 오류가 발생될 것으로 예상되는 컴포넌트를 감싸야 함 */}
                    {/* 그러므로 당연히, 오류 핸들링 컴포넌트는 별도로 그리고 사용 위치는 최소한 현재 컴포넌트보다 한단계 위(부모) 컴포넌트 여야함 */}
                    {/* 현재 예제에서는 에러를 핸들링 하는 위치기 App.js가 됨 */}
                    {this.props.missing.value}
                    <div>
                        <h1 style={style} ref={ref => this.myRef = ref}>
                            {this.state.number}
                        </h1>
                        <p>color : {this.state.color}</p>
                        <button onClick={this.handleClick}>
                            더하기
                        </button>
                    </div>
                </div>
            </>
        )
    }


}

export default LifeCycleComp01;
