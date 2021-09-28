import React, { useState } from 'react'

function TodosWithDelete() {
    const [todo, setTodo] = useState({ desc: '', date: '' })
    const [todos, setTodos] = useState([])


    const addTodo = () => {
        setTodos([...todos, todo])
    }

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value })
    }

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index))
    }

    return (
        <div>
            <input name="desc" value={todo.desc} onChange={inputChanged} />
            <input name="date" value={todo.date} onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    {
                        todos.map((todo, index) => <tr key={index}><td>{todo.desc} {todo.date}</td>
                            <td><button onClick={() => deleteTodo(index)}>Delete</button></td></tr>)
                    }
                </tbody>
            </table>
        </div >
    )
}

export default TodosWithDelete;