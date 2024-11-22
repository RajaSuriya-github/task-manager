import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Button from 'react-bootstrap/esm/Button';

const TaskFilters = () => {
    const[filter,setFilter]=useState<string>('all');
    const tasks=useSelector((state:RootState)=>state.tasks.tasks);

    const filteredTasks= filter === 'completed'?tasks.filter((task)=>task.completed)
    :filter==='pending'?tasks.filter((task)=>!task.completed):tasks;
  return (
    <div className='mt-4'>
        <div className='d-flex' style={{gap:"15px"}}>
        <Button variant="outline-success" onClick={()=>setFilter('all')}>All</Button>
        <Button variant="outline-success" onClick={()=>setFilter('completed')}>completed</Button>
        <Button variant="outline-success" onClick={()=>setFilter('pending')}>pending</Button>
        </div>
        <ul className='mt-2' style={{height: "200px",overflow: "auto"}}>
            {filteredTasks.map((task)=>(
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default TaskFilters