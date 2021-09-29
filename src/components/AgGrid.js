import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'

function AgGrid() {
    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' })
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

    const columns = [
        { field: 'desc', sortable: true, filter: true },
        { field: 'date', sortable: true, filter: true },
        {
            field: 'priority', sortable: true, filter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ]

    return (
        <div>
            <input name="desc" value={todo.desc} onChange={inputChanged} />
            <input placeholder="date" name="date" value={todo.date} onChange={inputChanged} />
            <input placeholder="priority" name="priority" value={todo.priority} onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
            <div className='ag-theme-material' style={{ height: '700px', width: '70%', margin: 'auto' }}>
                <AgGridReact
                    rowData={todos}
                    columnDefs={columns}
                />
            </div>
        </div >
    )
}

export default AgGrid