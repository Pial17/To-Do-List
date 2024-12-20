<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> ad566f7fcd1fbfcbded7e80b07f463b5198ac5e4
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

<<<<<<< HEAD
const TodoList = ({text,id,isComplete,deleteTodo}) => {
=======
const TodoList = ({text}) => {
>>>>>>> ad566f7fcd1fbfcbded7e80b07f463b5198ac5e4
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex items-center w-full justify-start gap-3 mt-3'>
                <img className='size-6 cursor-pointer' src={tick} alt=''/>
                <p className='cursor-pointer'>{text}</p>
            </div>
<<<<<<< HEAD
            <img onClick={()=>deleteTodo(id)} src={delete_icon} className='size-5 cursor-pointer mt-3 '/>
=======
            <img src={delete_icon} className='size-5 cursor-pointer mt-3 '/>
>>>>>>> ad566f7fcd1fbfcbded7e80b07f463b5198ac5e4
        </div>
    );
};

export default TodoList;