// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Congarts,{this.props.fName}</h1>
//                 <Child fName={this.props.fName} lName="K" cName="TY"/>
//             </div>
//         )
//     }
// }
// class Child extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>lastName:{this.props.fName}.{this.props.lName}</h1>
//                 <h1>Company Name:{this.props.cName}</h1>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Header fName="Vijay"/>,document.getElementById("container"))



class Head extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to,{this.props.showName}</h1>
                <Tail showName={this.props.showName} showTime="Evening" ticketTime="Evening"/>
            </div>
        )
    }
}
class Tail extends React.Component{
    render(){
        return(
           <div>
               <h1>Kirigalan {this.props.showName}</h1>
               <h1>ShowTime :{this.props.showTime}</h1>
               <h1>Tickect Timeing :{this.props.ticketTime}</h1>
           </div>
        )
    }
}
ReactDOM.render(<Head showName="Magic show"/>,document.getElementById("container"))