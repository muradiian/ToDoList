import TodoHead from './todohead/TodoHead'
import TodoBody from './todobody/TodoBody'
import { useState } from 'react'

function Todo({completed}){
    const [value,setValue] = useState('')
    const [todos,setTodos] = useState([])

    return(
        <>
            <TodoHead value={value} setValue={setValue} todos={todos} setTodos={setTodos} completed={completed}/>
            <TodoBody todos={todos} setTask={setTodos} setTodos={setTodos} completed={completed}/>
        </>
    )
}

export default Todo