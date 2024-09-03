import React from "react";
import {FaCheck, FaTrash} from "react-icons/fa";

const ToDoComponent = ({task,index,toggleDone,deleteTask}) => {
    //this handleToggle function calls the togleDone function with parameters, 
    //index of the task object displaying and an updated task object with 'done' updated to a value just opposite of its initial value 
    const handleToggle = ()=>{
        toggleDone(index,{...task,done:!task.done});
    }

    const handleDelete = ()=>{
        deleteTask(index);
    }

    console.log("task:",task);
    console.log("index:",index);
    return(
        <div id="todos">
            {(task.done)?<s className="taskText">{task.taskName}</s>:<p className="taskText">{task.taskName}</p>}
            <div>
                {/* while clicking tick icon handleToggle function is called*/}
                <FaCheck className="icon" onClick={handleToggle}/>
                {/* while clicking trash icon handleDelete function is called */}
                <FaTrash className="icon" onClick={handleDelete}/>  
            </div>
        </div>
    )
}

export default ToDoComponent;