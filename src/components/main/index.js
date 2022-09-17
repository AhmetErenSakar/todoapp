import { useState, useEffect } from 'react'



function Main({ todos, deleteTodo, id }) {

    const [clas, setClas] = useState('')

    function formlist({ todos }) {
        return (todos.map((todo, index) => {
            todo.id = index
            return (
                <ul key={index} className="todo-list">
                    <li id={index} class={`lica ${clas}`} >
                        <div class="view" >
                            <input id='15' class="toggle" type="checkbox" onClick={(e) => {
                                if (e.target.parentNode.parentNode.className !== "completed ") {
                                    e.target.parentNode.parentNode.className = "completed "
                                    todo.isActive = "active"
                                } else {
                                    e.target.parentNode.parentNode.className = " "
                                }
                            }} />
                            <label>{todo.value}</label>
                            <button class="destroy" onClick={() => {
                                todo.id = index;
                                deleteTodo(id);
                            }} ></button>
                        </div>
                    </li>
                </ul>)
        }))
    }

    useEffect(() => {
        setClas(' ')
    }, [])

    return (
        <>
            <section class="main">
                <input class="toggle-all" type="checkbox" />
                <label for="toggle-all" onClick={() => {
                    const compB = document.querySelectorAll('.lica')
                    compB.forEach((com) => {
                        if (com.className !== "completed") {
                            setClas('completed')
                        } else {
                            console.log(com)
                        }

                    })

                }}>
                    Mark all as complete
                </label>
                {formlist({ todos })}

            </section>
        </>
    )
}

export default Main