import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskListWrapper } from './components/TaskListWrapper';


import styles from './App.module.css';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';

interface ITask {
  id: string;
  description: string;
  isCompleted: boolean
}

function App() {
  const [ newTaskDescription, setNewTaskDescription ] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);  
  

  function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLInputElement> ){
    event.target.setCustomValidity('');
    setNewTaskDescription(event.target.value);
  }
  
  function handleNewCreateTask(event: FormEvent){
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      description: newTaskDescription,
      isCompleted: false
    }
    setTasks([...tasks,newTask]);    

    setNewTaskDescription('');

    toast.success('Tarefa incluída com sucesso!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleRemoveTask(taskId: string){    
    const indTask = tasks.findIndex(task => task.id === taskId);

    const isCompletedTask = tasks[indTask].isCompleted;

    const tasksWithoutDeletedOne = tasks.filter( task => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne);

    if (isCompletedTask){
      setCompletedTasks(completedTasks - 1);
    }

    toast.success('Tarefa removida com sucesso!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleChangeTaskState(taskId: string){    
    const taskList = tasks;
    const taskInd = taskList.findIndex( task => task.id === taskId);    
    
    taskList[taskInd].isCompleted = !taskList[taskInd].isCompleted;    
    setTasks(taskList);

    const isCompleted = taskList[taskInd].isCompleted;
    if (isCompleted){
      setCompletedTasks(completedTasks+1);
    }
    else{
      setCompletedTasks(completedTasks-1); 
    }
  }

  return (
    <div>  
      <Header />
      <div className={styles.wrapper}>
         <NewTask 
            OnhandleCreateNewTask={handleNewCreateTask} 
            OnhandleNewTaskDescriptionChange={handleNewTaskDescriptionChange}
            newTaskDescription={newTaskDescription}
         />
         <TaskListWrapper 
            tasks={tasks} 
            completedTasks={completedTasks} 
            onRemoveTask={handleRemoveTask}
            onChangeTaskState={handleChangeTaskState}
         />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'dark'}
      />
    </div>
  )
}

export default App
