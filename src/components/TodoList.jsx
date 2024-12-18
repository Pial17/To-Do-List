import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoList = ({text}) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex items-center w-full justify-start gap-3 mt-3'>
                <img className='size-6 cursor-pointer' src={tick} alt=''/>
                <p className='cursor-pointer'>{text}</p>
            </div>
            <img src={delete_icon} className='size-5 cursor-pointer mt-3 '/>
        </div>
    );
};

export default TodoList;