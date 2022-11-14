function Main() {
    const [todos, settodos] = React.useState([]);
    const [todo, settodo] = React.useState("");
  
    //to retrieve the data from local memory
    React.useEffect(() => {
      const getdata = localStorage.getItem("todos");
      const loadedtodos = JSON.parse(getdata);
  
      if (loadedtodos) {
        settodos(loadedtodos);
      }
    }, []);
  
    //to save  the data to local memory
    React.useEffect(() => {
      const todoData = JSON.stringify(todos);
      localStorage.setItem("todos", todoData);
    }, [todos]);
  
    //function to modify  state and give input to empty state or to add todo list
    function handleSubmit(e) {
      e.preventDefault();
  
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        // completed: false,
      }; 
      settodos([...todos].concat(newTodo));
      settodo("");
    }
  
    //to delet the todo list
    function deleteTodo(id) {
      const updatedTodos = [...todos].filter((todo) => todo.id !== id);
  
      settodos(updatedTodos);
    }
  
    return (
      <div id="toDoList" className="app">
        <div style={{ textAlign: "center" }}>
          <h1>Todo List</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="inputHead">
            <h4 style={{ marginLeft: 70 }}>Add TODO</h4>
            <input
              id="add"
              type="text"
              onChange={(e) => settodo(e.target.value)}
              value={todo}
              placeholder="Add new todo"
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: 10, marginLeft: 70 }}
            >
              SUBMIT
            </button>
          </div>
        </form>
        <br />
        <br />
  
        {todos.map((newTodo) => {
          return (
            <div
              id="todo-lists"
              className="col-sm-12 bg-white p-3 border"
              key={newTodo.id}
            >
              {newTodo.text}
              <div id="button-div">
                <button id="delButtons">
                  <span
                    className="material-icons"
                    style={{ color: "red" }}
                    onClick={() => deleteTodo(newTodo.id)}
                  >
                    close
                  </span>
                </button>
              </div>
              <div id="button-div1">
                <button id="addButtons">
                  <span className="material-icons" style={{ color: "green" }}>
                    done
                  </span>
                </button>
              </div>
            </div>
          );
        })}
  
        {/* 
        <input type="text" onChange={(e)=>settodo(e.target.value)} value={todo}/>
            <button type="submit">submit</button> */}
      </div>
    );
  }
  
  ReactDOM.render(<Main />, document.getElementById("container"));