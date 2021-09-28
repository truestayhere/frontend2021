import React, { useState } from 'react'

function Todos() {
    const [todo, setTodo] = useState({ desc: '', date: '' })
    const [todos, setTodos] = useState([])


    const addTodo = () => {
        setTodos([...todos, todo])
    }

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <input name="desc" value={todo.desc} onChange={inputChanged} />
            <input name="date" value={todo.date} onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    {
                        todos.map((todo, index) => <tr key={index}><td>{todo.desc} {todo.date}</td></tr>)
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Todos;