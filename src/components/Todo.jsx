import React, { useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoList from './TodoList';

const Todo = () => {
    const inputRef = useRef();
    const [todoList, setTodoList] = useState([]);
    const add = ()=>{
        const inputText = inputRef.current.value.trim();
        if(inputText===''){
            return null;
        }
        else{
            const newTodo = {
                id:Date.now(),
                text: inputText,
                isComplete: false
            }
            setTodoList((prev)=>[...prev,newTodo]);
            inputRef.current.value = '';
        }
        
    }
    const deleteTodo = (id)=>{
        setTodoList((prvTodo)=>{
           return prvTodo.filter((item1)=>item1.id!==id); 
        }) 
    }
    return (
        <div className='bg-white w-[400px] place-self-center max-w-md flex flex-col p-7
        min-h-[500px] rounded-xl'>
            {/* --------Title---------     */}
            <div className='flex items-center gap-1 mt-4'>
                <img className='size-8' src={todo_icon} alt=''/>
                <h1 className='text-3xl font-semibold'>To Do List</h1>

            </div>
            {/* --------Input Box---------     */}
            <div className='flex items-center  justify-center'>
                <div className='flex items-center w-full h-12 bg-gray-200 mt-6 rounded-full'>
                    <input ref={inputRef} placeholder='Add your items' className='w-9/12 h-12 font-semibold text-1xl p-2 px-4 pb-2 bg-gray-200 rounded-full outline-none' />
                    <button onClick={add} className='font-semibold text-center h-12 w-1/3 bg-red-500 rounded-3xl border-y-blue-950 text-xl text-slate-100'>ADD+</button>
                </div>
            </div>
            {/* --------Item Lists---------     */}
            <div>
                {todoList.map((item,index)=>{
                    return <TodoList key={index} text={item.text} id={item.id} 
                    isComplete={item.isComplete} deleteTodo={deleteTodo}/>
                })}
            </div>
        </div>
    );
};

export default Todo;