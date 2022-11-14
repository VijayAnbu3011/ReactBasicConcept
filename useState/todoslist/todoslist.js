function To(){
    const [todos, settodos] = React.useState([])
    const [todo, settodo] = React.useState("")
    return(
        <div className="main">
            <form>
                <input type="text"  onChange={(data)=>settodo(data.target.value)} value={todo}/>
                <button type="submit"> Submit</button>
            </form>

        </div>
    )
}
ReactDOM.render(<To/>,document.getElementById("container"))