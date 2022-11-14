class Condition extends React.Component{
    state={
        userName:"Ajay",
        adminName:"Vijay",
        isAdmin:false
    }

changeView(){
    if(this.state.isAdmin){
        this.setState({
            isAdmin:false
        })
    }else{
        this.setState({
            isAdmin:true
        })
    }
}
render(){
    let {userName,adminName,isAdmin}=this.state
    let renderData=null
    if(isAdmin){
        renderData=(
            <div>
                <h1>Admin Name:{adminName}</h1>
                <h1>Home</h1>
                <h2>Product</h2>
                <h2>Add Product</h2>
            </div>
        )
    }else{
        renderData=(
            <div>
            <h1>User Name:{userName}</h1>
            <h1>Home</h1>
            <h2>Product</h2>
        </div>
        )
    }
    return(
        <div>
            {renderData}
            <button onClick={()=>{this.changeView()}}>{isAdmin ? "Change to User":"Change to Admin"}</button>
        </div>
    )
}

}
ReactDOM.render(<Condition/>,document.getElementById("container"))