function Parent(props){
    let data=["banana","lichi","mango","kiwi"]
    return(
        <div>
            <h1>I am Parent,{props.uname}  </h1>
            <Child fruits={data} uname={props.uname} />
        </div>
    )
}
function Child(props){
    console.log("props in child",props);
    return(
        <div>
            <h1>I am Child {props.uname}</h1>
            {props.fruits.map((val,idx) => { return( <li key={idx}>{val}</li>)})}
        </div>
    )
}
ReactDOM.render(<Parent uname="Ajay" />,document.getElementById("container"))