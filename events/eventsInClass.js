class Welcome extends React.Component {
    constructor(props){
        super(props)
        console.log("props",this.props);
        this.getAge=this.getAge.bind(this)
    }
    render(){
        return <div>
            <h1>Welcome to React,{this.props.fName}</h1>
            <button onClick={this.getName.bind(this)}>Get Name</button>
            <button onClick={this.getAge}>Get Age</button>
            {/* best way to call a function */}
            <button onClick={()=>{this.getPlace()}}>Get Place</button>
            <button onClick={()=>{this.getData("Google")}}>Get Data</button>
        </div>
    }
    getName(){
        console.log("getName Executed");
    }
    getAge(){
        console.log("Get Age Executed");
    }
    getPlace(){
        console.log("Get Place Goa Executed");
    }
    getData(data){
         console.log("Data",data);
    }
}
ReactDOM.render(<Welcome/>,document.getElementById("container")) 