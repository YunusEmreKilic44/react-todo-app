import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onRemoveTodo, onUpdateTodo }) => {
    return (
        <div style={{ width: "100%", marginTop: "50px" }}>
            {todos.length > 0 && todos.map(todo => (
                <Todo onRemoveTodo={onRemoveTodo} key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} />
            ))}
        </div>
    )
}

export default TodoList