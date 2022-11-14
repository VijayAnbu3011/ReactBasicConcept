let url="https://jsonplaceholder.typicode.com/users"
let api=async()=>{
    let response= await fetch(url)
    let data=await response.json()
    let title=data.map((val,id)=>{
        return <li key ="id">{val.name}</li>
    })
    ReactDOM.render(title,document.getElementById("container"))
}
api() 