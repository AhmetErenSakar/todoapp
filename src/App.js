import { useState, useEffect } from 'react';
import Form from './components/form';
import Main from './components/main';
import Footer from './components/footer';


function App() {

  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  /*d1*/
  return (
    <section className='todoapp'>
      <Form />
      <Main />
      <Footer />
    </section>
  )
}

export default App;
