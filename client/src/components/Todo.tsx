import { useState } from "react";

interface TodoProps {
    id: number;
    description: string;
    onDelete: (id: number) => void;
    onUpdate: (id: number, newDescription: string) => void;
}

const Todo = (props: TodoProps) => {

    const [editMode, setEditMode] = useState(false);
    const [editedDescription, setEditedDescription] = useState(props.description);

    const deleteTodo = async() => {
        try {
            await fetch(`http://localhost:5000/todos/${props.id}`, {
                method: "DELETE",
            });
            props.onDelete(props.id);
        } catch (error) {
            console.error(error);
        }
    };

    const saveEdit = async() => {
        try {
            await fetch(`http://localhost:5000/todos/${props.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ description: editedDescription }),
            });
            setEditMode(false);
            props.onUpdate(props.id, editedDescription);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <tr>
                <td>{ props.id }</td>
                {editMode ? (
                    <td>
                        <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                        <button onClick={() => setEditMode(false)}> Cancel </button>
                        <button onClick={saveEdit}> Save </button>
                    </td>
                ) : (
                    <td>{ props.description }</td>
                )}
                <td><button onClick={deleteTodo}> delete </button></td>
                {editMode ? null : <td><button onClick={() => setEditMode(true)}> edit </button></td>}
            </tr>
        </>
    )
}

export default Todo;