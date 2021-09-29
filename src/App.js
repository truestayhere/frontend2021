import './App.css'
import React, { useState } from 'react'
import TodosWithDelete from './components/TodosWithDelete'
import Todos from './components/Todos'
import SeparateComponents from './components/SeparateComponents'
import AgGrid from './components/AgGrid'


function App() {

  const [index, setIndex] = useState(0)

  // code source: https://www.w3schools.com/howto/howto_js_treeview.asp ----
  const [toggler, setToggler] = useState(document.getElementsByClassName("Caret"))

  const Toggler = () => {
    for (let i = 0; i < toggler.length; i++) {
      setToggler(...toggler, toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".Nested").classList.toggle("Active")
        this.classList.toggle("Caret-down")
      }))
    }
  }
  // ---------------------

  const SwitchAssignments = () => {
    switch (index) {

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
      case 3:
        return (
          <div>
            <SeparateComponents />
          </div>
        )
      case 4:
        return (
          <div>
            <AgGrid />
          </div>
        )
      default:
        return (
          <div>
            <h2>React</h2>
            <p>Right now the javascript code starts working only when a DeveloperTools console is opened. I am working on solving this issue.</p>
            <ul id="myUL">
              <li><span className="Caret">Todos</span>
                <ul className="Nested">
                  <li><span className="Caret">Create Todo app</span>
                    <ul className="Nested">
                      <li><button onClick={() => setIndex(1)}>Exercise 12</button></li>
                      <li><button onClick={() => setIndex(2)}>Exercise 13</button></li>
                      <li><button onClick={() => setIndex(3)}>Exercise 14</button></li>
                    </ul></li>
                  <li><span className="Caret">3rd party components</span>
                    <ul className="Nested">
                      <li><button onClick={() => setIndex(4)}>Exercise 18</button></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            {Toggler()}
          </div>
        )
    }

  }


  return (
    <div className="App">
      {SwitchAssignments()}
    </div>
  )
}

export default App
