import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import TaskFilters from './components/TaskFilters'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { fetchTasks } from './redux/tasksSlice'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container';
function App() {
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(fetchTasks());
  },[dispatch])

  return (
    <>
    <NavBar/>
    <Container className='mt-2'>
      <h3>Task Manager</h3>
      <TaskInput/>
      <TaskFilters/>
      <TaskList/>
      </Container>
    </>
  )
}

export default App
