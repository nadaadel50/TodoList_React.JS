import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons';

const TodoCard = (props) => {
  const {children, handleDeletTodos, index} = props;

  return (
    <li
      className='p-3 border-b text-m text-gray-700 flex justify-between items-center'>
      {children}
      <button onClick={()=>{
        handleDeletTodos(index);}}><FontAwesomeIcon icon={faDeleteLeft} className='cursor-pointer'/>
      </button>
    </li>
  )
}

export default TodoCard
