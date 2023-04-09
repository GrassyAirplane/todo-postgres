interface TodoProps {
    id: number;
    description: string;
    onDelete: (id: number) => void;
}

const Todo = (props: TodoProps) => {

    const deleteTodo = async() => {
        try {
            await fetch(`http://localhost:5000/todos/${props.id}`, {
                method: "DELETE",
            });
            props.onDelete(props.id); // call the onDelete callback function
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <tr>
                <td>{ props.id }</td>
                <td>{ props.description }</td>
                <td><button onClick={deleteTodo}> delete </button></td>
                <td><button> edit </button></td>
            </tr>
        </>
    )
}

export default Todo