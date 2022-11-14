function Parent(){
    let getDataFromChild=(childData)=>{
        console.log("child Data in parent",childData);
    }
    return(
        <div>
            <h1>I m Parent</h1>
            <Child getDataFromChild={getDataFromChild}/>
        </div>
    )
}
function Child (props){
    console.log("Child props",props);
    let data="hey i am child data"
    return(
        <div>
            <h1>i m Child </h1>
            <button onClick={()=>{props.getDataFromChild(data)}}>Send data to parent</button>
        </div>
    )
}
ReactDOM.render(<Parent/>,document.getElementById("container"))