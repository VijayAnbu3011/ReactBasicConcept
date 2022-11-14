class Parent extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome All, i m Parent {this.props.uname}</h1>
                <Child uname={this.props.uname} fName="teja" appName="NetFlex"/>
            </div>
        )
    }
}



class Child extends React.Component{
    render(){
        return(
            <div>
                <h1>hey, i am Child, {this.props.uname}</h1>
                <h1>FirstName: {this.props.fName}</h1>
                <h1>AppName :{this.props.appName}</h1>
            </div>
        )
    }
}
ReactDOM.render(<div><Parent uname="Raju"/>
</div>,document.getElementById("container"))