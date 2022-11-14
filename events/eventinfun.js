function Welcome(props){
    let getName =()=>{
        console.log("getName Executed");
    }
    let getData = (data) =>{
        console.log("get Executed",data);
    }
    return(
        <div>
            <h1>Hello, {props.fName}</h1>
            {/* <button onClick={getName}>get Name</button> */}
            {/* this or below one */}
            <button onClick={()=>{getName()}}>Get Name</button>
            <button onClick={()=>{getData("google")}}>Get Data</button>
        </div>
    )
}
ReactDOM.render(<Welcome fName="Vijay"/>,document.getElementById("container")) 
