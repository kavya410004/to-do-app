import { useState } from "react";

export default function ToDoInput(props){
    const {handleAddToDos, toDoInputValue, setToDoInputValue} = props;
    
    return(
        <header>
            <input value={toDoInputValue} onChange={(e) => {
                setToDoInputValue(e.target.value);
            }} type="text" placeholder="Enter to do..."/>
            <button onClick={() => {
                handleAddToDos(toDoInputValue);
                setToDoInputValue("");
            }}>Add</button>
        </header>
    )
}