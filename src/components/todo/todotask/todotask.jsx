import './todotask.css'

function TodoTask({value,setValue,setTodos,todos, id,completed}){
    return(
        <>
            <div className='todoTask'>
                <div className='title-Box'>
                    <p>{value}</p>
                </div>
                <div className='options-Box'>
                    <div className='delete-option' onClick={() => {
                        setTodos(prev => {
                            return prev.filter((item)=> item.id !== id)
                        })
                    }}>
                        X
                    </div>
                    <div className='check_box' onClick={()=>{
                        setTodos((prev)=>{
                            return prev.map((item)=>{
                                if(id === item.id){
                                    return {
                                        ...item,
                                        completed:!item.completed
                                    }
                                }
                                return item
                            })
                        })
                        console.log(todos);
                    }}>
                    
                        C
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoTask