function Welcome(){
    // state on top
    const [name,setname] = React.useState("Ajay")
    const [age,setage] = React.useState(18)

    let changeName=()=>{
        setname("Vijay")
        setage(20)
    }
    return(
        <div>
            <h1>Welcome,{name},{age}</h1>
            <button onClick={()=>{changeName()}}>Change Name</button>
        </div>
    )
}
ReactDOM.render(<Welcome />,document.getElementById("container"))