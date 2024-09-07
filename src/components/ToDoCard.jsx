// import React from "react";
export default function ToDoCard(props){
    const { children, handleDeleteToDo, handleEditToDo, index } = props;
    return(
        <li className="todoItem" >
            {children}
            <div className = "actionsContainer">
                <button onClick={()=>{
                    handleEditToDo(index);
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteToDo(index);
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}