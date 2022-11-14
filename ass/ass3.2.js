class Condition extends React.Component{
    state={
        switchOn:"light glow",
        switchOff:"light not glowing",
        isSwitch:true
    }
    changeView(){
        if(this.state.isSwitch){
            this.setState({
                isSwitch:false
            })
        }else{
            this.setState({
                isSwitch:true
            })
        }
    }
    render(){
        let {switchOn,switchOff,isSwitch}=this.state
        let renderLight=null
        if(isSwitch){
            renderLight=(
                <div>
                    <h1>Light :{switchOn}</h1>
                    <h2>Happy</h2>
                </div>
            )
        }else{
            renderLight=(
                <div>
                    <h1>Light :{switchOff}</h1>
                    <h2>Not Happy</h2>
                </div>
            )
        }
        return(
            <div>
                {renderLight}
                <button onClick={()=>{this.changeView()}}>{isSwitch ? "Turn off":"Turn On"}</button>
            </div>
        )
    }
}
ReactDOM.render(<Condition/>,document.getElementById("container"))