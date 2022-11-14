let list=React.createElement("ul",null,
React.createElement("li",{id:"car"},"Car"),
React.createElement("li",{className:"jeep"},"Jeep")
)
// ReactDOM.render(list,document.getElementById("container"))

// Array
let moblie = ["onepus","redmi","samsung","pixel"]
let mobileItem=moblie.map((value,index)=>{
    return React.createElement("li",{key : index},value)
})
// ReactDOM.render(mobileItem,document.getElementById("container"))

// wrapping inside single div

let singleDiv = React.createElement("div",null,list,mobileItem)
ReactDOM.render(singleDiv,document.getElementById("container"))