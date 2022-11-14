let uname="Vijay"
let element=<h1>Hello,{uname}</h1>

let mobiles=["oppo","realme","Iphone","Pixel","Samsung"]
let mobileList=mobiles.map((value,index)=>{
    return <li key={index}>{value}</li>
})
let allItem=<div>
    {element}{mobileList}
</div>

ReactDOM.render(allItem,document.getElementById("container"))