import React, { useState, useEffect } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'

const App = () => {
  
  const [todos, setTodos] = useState([]);
  
  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:newList}));
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleDeletTodos(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return index !== todoIndex;
    })
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  useEffect(()=>{
    if(!localStorage){
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  },[])

  return (
    <div>
      <TodoInput handleAddTodos = {handleAddTodos}/>
      <TodoList todos={todos} handleDeletTodos={handleDeletTodos}/>
    </div>
  )
}

export default App
