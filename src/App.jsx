import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {



  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos(prev => [...prev, newTodo]);
  }

  const removeTodo = (todoId) => {
    const newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodos);
  }

  const updateTodo = (newTodo) => {
    const newTodos = todos.map(todo => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })

    setTodos(newTodos);
  }

  console.log(todos);

  return (
    <div className='app'>
      <div className='main' >
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList onRemoveTodo={removeTodo} todos={todos} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
