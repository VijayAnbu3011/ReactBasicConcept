function Header(props){
    return <h1>i AM Header {props.fName}</h1>
}
function Content({fName,person:{uName,uID}}){
    return <h2>I am Content {uName} {uID} {fName}</h2>
}
function Footer({fName,lName}){
    return <h1>I am Footer {fName} {lName}</h1>
}
ReactDOM.render(<div>
    <Header fName="Vijay" />
    <Content person={{uName:"suriya",uID:"1234"}} fName="Vijay"/>
    <Footer fName="sandi" lName="k"/>
</div>,document.getElementById("container"))