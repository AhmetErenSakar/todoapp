import { useState, useEffect } from 'react'

function Form({ addtodos, todos }) {
    const [todoValue, setTodoValue] = useState({ value: ' ', isactive: " " });

    const onchangeInput = (e) => {
        setTodoValue({ ...todoValue, value: e.target.value, isactive: " " });
    }
    const onchange = (e) => {
        e.preventDefault();
        setTodoValue({ ...todoValue, value: e.target.value, isactive: " " });
        addtodos([...todos, todoValue]);
        setTodoValue({ value: ' ', isactive: " " });
    }

    return (
        <>
            <header class="header">
                <h1>todos</h1>
                <form onSubmit={onchange}>
                    <input name="value" id='form-imput' value={todoValue.value} className="new-todo" placeholder="What needs to be done?" onChange={onchangeInput} />
                </form>
            </header>
        </>
    )
}

export default Form