import { useState } from "react"
import "./InputTodo.css"
import axios from "axios"

const InputTodo = () => {
    const [description, setDescription] = useState("")

    const onSubmitForm = async (e: any) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            
            console.log(response)

            // setDescription("")
            window.location.assign("/");
        } catch (error) {   
            console.error(error)
        }
    }

    return (
        <>
            <div>
                <h1>Input Todo</h1>
                <form className="input-section" onSubmit={onSubmitForm}>
                    <input type="text" 
                           className="form-control search-bar" 
                           value={description} onChange={e => {
                                setDescription(e.target.value)
                            }}></input>
                    <button className="add-button"> Add</button>
                </form>
            </div>
        </>
    )
}

export default InputTodo