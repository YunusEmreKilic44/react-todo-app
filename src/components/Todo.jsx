import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../App.css"

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {

    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        console.log()
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid lightgray", padding: "10px", marginTop: "10px" }}>
            <div>
                {
                    editable ? <input value={newTodo} style={{ width: "380px" }} onChange={e => setNewTodo(e.target.value)} className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                {editable ? <FaCheck className='todo-icons' onClick={updateTodo} />

                    : <FaEdit onClick={() => setEditable(true)} className='todo-icons' />}

            </div>
        </div>
    )
}

export default Todo