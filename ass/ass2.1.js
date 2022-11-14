// class Hi extends React.Component {
//     render(){
//         return <div>
//             <h1>Hello Boys</h1>
//             <button onClick={()=>{this.getAssign()}}>Get Assign</button>
//         </div>
//     }
//     getAssign(){
//         console.log("Get Assign Executed");
//     }
// }
// ReactDOM.render(<Hi />,document.getElementById("container"))

function Hii(props){
    let getOk =(data)=>{
       console.log("Get Exected",data);
       alert ("WELCOME")
    }
    return <div>
    <h1>Welcome</h1>
    <button onClick={()=>{getOk(prompt("Enter Name"))}}>Get ok</button>
    </div>
}
ReactDOM.render(<Hii />,document.getElementById("container"))