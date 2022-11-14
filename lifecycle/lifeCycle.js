 class Parent extends React.Component{
    constructor(props){
        // 1. used to initialise and binding
        super(props)
        this.state={
            text:"mounting phase",
            show:true
        }
        console.log("parent Constructor executed");
    }
    static getDerivedStateFromProps(props,state){
        // 1.return new state or if no change in required in state then return null
        console.log("parent getDerivedStateFromProps");
        return state
    }
    render(){
        // 1.return jsx and no side effect & should not update state in render
        console.log("parent render executed");
        return(
            <div>
                <p>{this.state.text}</p>
                <button onClick={()=>{
                    this.updateText("updating phase")
                }}>Click</button>
                {this.state.show ? <Child /> : null}
            </div>

        )
    }
    updateText(text){
        this.setState({
            text:text,
            show:false
        })
    }
    shouldComponentUpdate(){
        console.log("parent shouldComponentUpdate executed");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("parent  getSnapshotBeforeUpdate executed");
        return "Scrolling position"
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("parent componentDidUpdate executed");
        console.log("----------------------");
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
        console.log("snapshot",snapshot);
        console.log("----------------------");
    }
    componentDidMount(){
        // first time mounting to real dom
        // 1.used to make side effects i.e making api calls,interacting with dom
        // 2.used to update the state
        console.log("parent componentDidMount executed");
    }
}

class Child extends React.Component{
    render(){
        return <h1>I am Child</h1>
    }
    componentWillUnmount(){
        console.log("Child componentWillUnmount executed");
    }
}
ReactDOM.render(<Parent />,document.getElementById("container"))