import { useState, useEffect } from 'react'
import Footer from './footer'
import Main from './main'
import Form from './form'

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id === id));
  }


  return (
    <section className='todoapp'>
      <Form addtodos={setTodos} todos={todos} />
      <Main todos={todos} deleteTodo={deleteTodo} />
      <Footer todos={todos} setTodos={setTodos} />
    </section >
  )
}

export default Todo