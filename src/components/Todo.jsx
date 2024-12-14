import React from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoList from './TodoList';

const Todo = () => {
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
                    <input placeholder='Add your items' className='w-9/12 h-12 font-semibold text-1xl p-2 px-4 pb-2 bg-gray-200 rounded-full outline-none' />
                    <button className='font-semibold text-center h-12 w-1/3 bg-red-500 rounded-3xl border-y-blue-950 text-xl text-slate-100'>ADD+</button>
                </div>
            </div>
            {/* --------Item Lists---------     */}
            <div>
                <TodoList text="First Item"/>
                <TodoList text="Second Item"/>
            </div>
        </div>
    );
};

export default Todo;