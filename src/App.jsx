import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [toDoInputValue, setToDoInputValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  function handleAddToDos(newToDo){
    if(newToDo === "")
      return;
    const newToDos = [...todos, newToDo];
    persistData(newToDos);
    setTodos(newToDos);
  }
  
  function handleDeleteToDo(index){
    const newToDos = todos.filter((todo,todoIndex) => {
      return todoIndex != index;
    });
    persistData(newToDos);
    setTodos(newToDos);
  }

  function handleEditToDo(index){
    const valueToBeEdited = todos[index];
    setToDoInputValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  useEffect(()=>{
    if(!localStorage)
      return;
    let localTodos = localStorage.getItem('todos');
    if(!localTodos)
      return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <ToDoInput toDoInputValue = {toDoInputValue} setToDoInputValue = {setToDoInputValue} handleAddToDos = {handleAddToDos}/>
      <ToDoList todos={todos} handleEditToDo = {handleEditToDo} handleDeleteToDo = {handleDeleteToDo}/>
    </>
  )
}

export default App
