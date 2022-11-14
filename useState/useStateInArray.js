function Welcome() {
  const [bikes, setbikes] = React.useState([
    "Tiger",
    "RX100",
    "KTM",
    "Daytona",
    "600i",
    "Perak",
  ]);
  let removeKtm = () => {
    let value = prompt("enter bikes to remove :");
    let findIndexOfKTM = bikes.indexOf(value.toUpperCase());
    console.log("findIndexOfKTM", findIndexOfKTM);
    if (findIndexOfKTM >= 0) {
      bikes.splice(findIndexOfKTM, 1);
      setbikes([...bikes]);
    }
  };
  return (
    <div>
      {bikes.map((val, idx) => {
        return <li key={idx}>{val}</li>;
      })}
      <button onClick={removeKtm}>Remove KTM</button>
    </div>
  );
}
ReactDOM.render(<Welcome />, document.getElementById("container"));
