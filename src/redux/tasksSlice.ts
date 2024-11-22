import {createSlice,PayloadAction,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export interface Task{
    id:number;
    title:string;
    completed:boolean;
}
interface TasksState{
    tasks:Task[];
    status:'idle'|'loading'|'failed';
}
const initialState:TasksState = {
    tasks:[],
    status:'idle',
}
export const fetchTasks:any=createAsyncThunk('tasks/fetchTasks',async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return response.data;
});
export const addTask:any=createAsyncThunk('tasks/addTask',async(title:string)=>{
    const response=await axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed:false
    });
    return response.data;
});
export const deleteTask:any=createAsyncThunk('tasks/deleteTask',async(id:number)=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
});
const tasksSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{
        toggleTaskCompletion:(state,action:PayloadAction<number>)=>{
            const task = state.tasks.find((task)=>task.id === action.payload);
            if(task) task.completed = !task.completed;
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTasks.fulfilled,(state,action)=>{
            state.tasks=action.payload;
            state.status='idle'
        })
        .addCase(addTask.fulfilled,(state,action)=>{
            state.tasks.push(action.payload);
        })
        .addCase(deleteTask.fulfilled,(state,action)=>{
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        })
    },
});
export const {toggleTaskCompletion}=tasksSlice.actions;
export default tasksSlice.reducer;
