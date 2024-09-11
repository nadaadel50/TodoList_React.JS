import React from 'react'
import TodoCard from './TodoCard';

const TodoList = (props) => {
  const {todos} = props;
  return (
    <div className='h-screen flex flex-col items-center p-8 bg-blue-300'>
      <ul className='w-2/5 bg-white shadow-lg rounded-lg'>
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard {...props} key= 'todoIndex' index={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList
