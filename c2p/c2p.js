 class Parent extends React.Component{
    state={
        text:"hello"
    }
    // chocolate function
    getDataFromChild(childData){
        console.log("CHild Data in Parent",childData);
        this.setState({
            text:childData
        })
    }
    render(){
        return(
            <div>
                <h1>Welcome,{this.state.text}</h1>
                <h2>I m Parent</h2>
                <Child getDataFromChild={this.getDataFromChild.bind(this)}/>
            </div>
        )
    }
}
class Child extends React.Component{
    
    render(){
        let data="I am child in child components"
        return(
            <div>
                <h1>I am Child</h1>
                <button onClick={()=>{this.props.getDataFromChild(data)}}>send data to Parent</button>
            </div>
        )
    }
}
ReactDOM.render(<Parent/>,document.getElementById("container"))