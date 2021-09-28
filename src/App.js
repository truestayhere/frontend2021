import './App.css'
import React, { useState } from 'react'
import TodosWithDelete from './components/TodosWithDelete'
import Todos from './components/Todos'


function App() {

  const [index, setIndex] = useState(0)

  const switchAssignments = () => {
    switch (index) {
      case 0:
        return (
          <div>
            <h2>Create React App</h2>
            <button onClick={() => setIndex(1)}>Todos</button>
            <button onClick={() => setIndex(2)}>Todos with delete</button>
          </div>
        )
      case 1:
        return (
          <div>
            <Todos />
          </div>
        )
      case 2:
        return (
          <div>
            <TodosWithDelete />
          </div>
        )
    }

  }


  return (
    <div className="App">
      {switchAssignments()}
    </div>
  )
}

export default App
