import { useEffect, useState } from "react";
import Todo from "./Todo"
import "./TodoTable.css"

interface TodoProps {
    todo_id: number;
    description: string;
}

const TodoTable = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const data = await response.json();
            setTodos(data)
        } catch (error) {
            
        }
    }

    const handleDeleteTodo = () => {
        getTodos()
    };

    const updateTodo = () => {
        getTodos()
    };
    
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <section className="todo-table">
                <h2>List of Todo's</h2>
                <table className="the-table">
                    <tr>
                        <thead>
                            <td>Dennomination</td>
                            <td>Description</td>
                            <td>Delete</td>
                            <td>Edit</td>
                        </thead>
                        <tbody>
                            {/* <Todo id={0} description={"HSHSH I washagha kasfdkhaks hfakfdkhsakjfd hakjshfdkja hs"} onDelete={handleDeleteTodo}/> */}
                            {todos.map((todo: TodoProps) => (
                            <Todo
                                key={todo.todo_id}
                                id={todo.todo_id}
                                description={todo.description}
                                onDelete={handleDeleteTodo}
                                onUpdate={updateTodo}
                            />
                            ))}
                        </tbody>
                    </tr>
                </table>
            </section>  
        </>
    )
}

export default TodoTable