class Header extends React.Component{
    render(){
        return <h1>I am Header {this.props.uname}</h1>
    }
}
class Content extends React.Component{
    render(){
        return <h2>I am Something {this.props.firstName} {this.props.lastName}</h2>
    }
}
class Footer extends React.Component{
    render(){
        return <h1>I am Footer</h1>
    }
}

ReactDOM.render(
    <div>
        <Header uname="Leader"/>
        <Content firstName="Vijay" lastName="k"/>
        <Content firstName="prathish" lastName="p"/>
        <Content />
        <Footer />
    </div>,document.getElementById("container")
)


