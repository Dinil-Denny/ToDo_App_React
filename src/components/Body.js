import ToDoComponent from "./ToDoComponent";
import { useState } from "react";

const Body = ()=>{

    const [toDoList,setToDoList] = useState([]);
    const [task,setTask] = useState('');

    //this function will toggle the 'done' status of each tasks
    const toggleDone = (idx,updatedTaskObj)=>{
        //if the index of object is equal to 
        let updatedTask = toDoList.map((taskObj,index) => (index===idx) ? updatedTaskObj : taskObj);
        setToDoList(updatedTask);
    }

    //here we filter and find all objects other than the object with passed in index. 
    //using array.filter method will return an array of objects other than specified index's object.
    //then update the toDoList state variable with this array of objects.
    // Now automatically the object with specified index will be removed
    const deleteTask = (idx)=>{
        const filteredList = toDoList.filter((_,index)=>(index !== idx));
        setToDoList(filteredList);
    }

    return(
        <div id="bodyDiv">
            <div id="addTaskDiv">
                <input className="inputBox" type="text" value={task} placeholder="Add your task here" onChange={(e)=>{
                    setTask(e.target.value);
                }}></input>
                <button id="addTaskBtn" onClick={()=>{
                    setToDoList([...toDoList,{taskName:task,done:false}]);
                    setTask('');
                }}>Add Task</button>    
            </div>
            <div id="toDoList">
                {console.log(toDoList)}
                {
                    toDoList.map((toDo,index)=>(
                        <ToDoComponent key={index} task={toDo} index={index} toggleDone={toggleDone} deleteTask={deleteTask}/>
                    ))
                } 
            </div>
        </div>
    )
}

export default Body;