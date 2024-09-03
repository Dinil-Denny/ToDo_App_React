import ToDoComponent from "./ToDoComponent";
import { useState } from "react";

const Body = ()=>{

const [toDoList,setToDoList] = useState([]);
const [task,setTask] = useState('');

    return(
        <div id="bodyDiv">
            <div id="addTaskDiv">
                <input type="text" value={task} placeholder="Add your task here" onChange={(e)=>{
                    setTask(e.target.value);
                }}></input>
                <button id="addTaskBtn" onClick={()=>{
                    setToDoList([...toDoList,{id:Date.now(),taskName:task,done:false}]);
                    
                }}>Add Task</button>
            </div>
            <div id="toDoList">
                {console.log(toDoList)}
                {
                    toDoList.map((toDo)=>(
                        <ToDoComponent key={toDo.id} tasks = {toDo}/>
                    ))
                } 
                {/* <ToDoComponent tasks = {toDoList}/> */}
            </div>
        </div>
    )
}

export default Body;