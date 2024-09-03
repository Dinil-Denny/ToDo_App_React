import ToDoComponent from "./ToDoComponent";
import { useState } from "react";

const Body = ()=>{
    
    return(
        <div id="bodyDiv">
            <div id="addTaskDiv">
                <input></input>
                <button>Add Task</button>
            </div>
            <div>
                <ToDoComponent/>
            </div>
        </div>
    )
}

export default Body;