import './TodoHead.css'

function TodoHead({value,setValue,todos,setTodos,id,completed}){
    return(
        <div className='todoHead'>
                <input type="text" placeholder='Your Task'value={value} onChange={(e)=>{
                    setValue(e.target.value)
                }}/>
                <button onClick={()=>{
                    if(value.trim()){
                        setTodos((prev) =>{
                            return[
                                ...prev,
                                {id:Math.floor(Math.random() * 100),title:value,completed:false}
                            ]
                        })
                        setValue('')
                    }
                }}>Create</button>
        </div>
    )
}

export default TodoHead