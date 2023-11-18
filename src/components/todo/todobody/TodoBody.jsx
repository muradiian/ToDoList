import './TodoBody.css'
import TodoTask from '../todotask/todotask'

function TodoBody({todos,setTodos,setValue,completed}){
    return(
        <>
            <section className='todoBody'>
                {todos && todos.map(({id,title,completed})=>{
                    return <TodoTask key={id} todos={todos} value={title} setValue={setValue} setTodos={setTodos} id={id} completed={completed}/>
                })}
            </section>
        </>
    )
}

export default TodoBody