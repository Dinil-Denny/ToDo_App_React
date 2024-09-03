import React from "react";

const ToDoComponent = ({tasks}) => {
    console.log("task:",tasks);
    return(
        <div id="todos">
            {/* {tasks.map((task)=>
                <h1 className="taskText">{task.taskName}</h1>
            )} */}
            <h1 className="taskText">{tasks.taskName}</h1>
        </div>
    )
}

export default ToDoComponent;