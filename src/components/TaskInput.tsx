import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTask } from "../redux/tasksSlice";
import Button from 'react-bootstrap/Button';

const TaskInput = () => {
 const [taskTitle,setTaskTitle]=useState<string>('');
 const dispatch=useDispatch();
 const handleAddTask=()=>{
    if(taskTitle.trim()){
        dispatch(addTask(taskTitle));
        setTaskTitle('');
    }
 };
  return (
    <div className="d-flex align-items-center">
        <div><input type="text" value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)}
        placeholder="Add a new task" className="me-2"/></div>
        <div>
        <Button variant="primary" onClick={handleAddTask} className="btn-align">Add Task</Button>
        </div>
    </div>
  )
}

export default TaskInput