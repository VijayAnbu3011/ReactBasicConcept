class Welcome extends React.Component{
    state={
        firstName:"Ajay",
        age:18
    }
    changeDetails(){
        // never chane state like this
        // console.log("before update",this.state);
        // this.state.firstName="Vijay";
        // this.state.age=25
        // console.log("After update",this.state);
        
        // use below one 
        console.log("before update",this.state);
        this.setState({ 
            firstName:"Vijay",
            age:25
        },()=>{
            console.log("after update",this.state);
        })
    }
    render(){
        return(
            <div>
                <h1>Welcome,{this.props.brand}</h1>
                <h2>Person Name:{this.state.firstName},Age : {this.state.age}</h2>
                <button onClick={()=>{this.changeDetails()}}>Change person Details</button>
            </div>
        )
    }

}
ReactDOM.render(<Welcome brand="volvo"/>,document.getElementById("container"))