import {useEffect,useState} from "react";
const Todos = () =>{
    const [todos,setTodos]=useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data.slice(0,10)));

    }, []);

    return(
        <div className="page">
            <h2>Todos</h2>
            <div className="todo-grid"> {todos.map((todo) =>(
                    <div key={todo.id} className="todo-card">
                        <h4>{todo.title}</h4>
                        <p>
                            Status:{" "}
                            <span className={todo.completed ? "completed":"not-completed"}>
                                {todo.completed ? "Completed" : "Not Completed"}
                            </span>
                            </p>
                            </div>
                ))}
            </div>
          </div>
    );
};

export default Todos;