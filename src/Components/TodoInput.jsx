import React, { useState } from 'react'

const TodoInput = (props) => {
  const {handleAddTodos} = props;
  const [newTodo, setNewTodo] = useState('');

  return (
    <header className="flex justify-center items-center p-4">
      <input value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}} className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="Enter Todo..."/>
      <button onClick={()=>{
        handleAddTodos(newTodo)
        setNewTodo('')
        }} className="ml-4 p-2 text-white rounded-md bg-blue-300">Add</button>
    </header>
  )
}

export default TodoInput
