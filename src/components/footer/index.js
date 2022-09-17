import React from 'react'

function Footer({ todos, setTodos }) {

  return (
    <>
      <footer class="footer">
        <span class="todo-count">
          <strong>2</strong>
          items left
        </span>

        <ul class="filters">
          <li>
            <a class="selected">All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
        <button class="clear-completed" onClick={() => {
          const removeTodo = todos.filter((todo, index) => {
            return todo.isActive !== 'active';
          })
          setTodos(removeTodo)
        }}>
          Clear completed
        </button>
      </footer>
      <footer class="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  )
}

export default Footer