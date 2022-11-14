function Welcome(){
    const [person, setperson] = React.useState({
        firstName:"Vijay",
        lastName:"k",
        age:25
    })
    let changeDetails=()=>{ 
        // never update state like this
        // setperson({
        // firstName:"Suriya9"
        // })
        setperson({
            ...person,
            firstName:"Suriya",
            age:25,
            lastName:"V"
        })
    }
    return(
        <div>
            <h1>Welcome,{person.firstName} {person.lastName} {person.age}</h1>
            <button onClick={()=>{changeDetails()}}>Change Details</button>
        </div>
    )
}
ReactDOM.render(<Welcome/>,document.getElementById("container"))