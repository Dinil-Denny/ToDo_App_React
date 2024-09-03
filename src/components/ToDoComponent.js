import React from "react";

const ToDoComponent = ({tasks}) => {
    console.log("task:",tasks);
    return(
        <div id="todos">
            {/* {tasks.map((task)=>
                <h1 className="taskText">{task.taskName}</h1>
            )} */}
            <p className="taskText">{tasks.taskName}</p>
        </div>
    )
}

export default ToDoComponent;