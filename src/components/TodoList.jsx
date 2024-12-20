import React, { useState } from 'react';

import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';


const TodoList = ({text,id,isComplete,deleteTodo,toggle}) => {

    return (
        <div className='flex  items-center my-3 gap-2'>
            <div onClick={()=>toggle(id)} className='flex items-center w-full justify-start gap-3 mt-3'>
                <img className='size-6 cursor-pointer' src={isComplete?tick:not_tick} alt=''/>
                <p className={`cursor-pointer text-[17px] pb-[6px] decoration-slate-500 ${isComplete?"line-through":""}`}>{text}</p>
            </div>

            <img onClick={()=>deleteTodo(id)} src={delete_icon} className='size-5 cursor-pointer mt-3 '/>

        </div>
    );
};

export default TodoList;