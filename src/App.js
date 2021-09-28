import './App.css'
import React, { useState } from 'react'
import TodosWithDelete from './components/TodosWithDelete'
import Todos from './components/Todos'


function App() {

  const [index, setIndex] = useState(0)

  // code source: https://www.w3schools.com/howto/howto_js_treeview.asp ----
  const [toggler, setToggler] = useState(document.getElementsByClassName("caret"))

  for (let i = 0; i < toggler.length; i++) {
    setToggler(...toggler, toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active")
      this.classList.toggle("caret-down")
    }))
  }
  // ---------------------

  const switchAssignments = () => {
    switch (index) {
      case 0:
        return (
          <div>
            <h2>React</h2>
            <ul id="myUL">
              <li><span className="caret">Todos</span>
                <ul className="nested">
                  <li><button onClick={() => setIndex(1)}>Exercise 12</button></li>
                  <li><button onClick={() => setIndex(2)}>Exercise 13</button></li>
                </ul>
              </li>
            </ul>
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
