import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTask, toggleTaskCompletion } from '../redux/tasksSlice';
import Button from 'react-bootstrap/esm/Button';

const TaskList = () => {
    const tasks=useSelector((state:RootState)=>state.tasks.tasks);
    const dispatch=useDispatch();
  return (
    <>
    <ul>
        {tasks.map((task) => (<li key={task.id}>
            <input type='checkbox'
            checked={task.completed}
            onChange={()=> dispatch(toggleTaskCompletion(task.id))}/>
            <span>{task.title}</span>
            <Button variant="outline-danger" className='ms-2 btn-align' onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
        </li>))}
    </ul>
    </>
  )
}

export default TaskList