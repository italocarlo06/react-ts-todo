import React, { useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  id: string;
  description: string;
  isCompleted: boolean;

  onRemoveTask: (taskId: string) => void;
  onChangeTaskState: (taskId: string) => void;
}

interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function Task({ id, description, isCompleted, onRemoveTask, onChangeTaskState }: TaskProps){  

  function handleOnChange(){
    onChangeTaskState(id);
  }

  function handleDeleteTask(){    
    onRemoveTask(id);
  }
  return (
    <div className={styles.task}>
      <label className={styles.container+' '+ (isCompleted? styles.taskCompleted: "")}>
          {description}
          <input type="checkbox" checked={isCompleted} onChange={handleOnChange}/>
          <span className={styles.checkmark}></span>
      </label>
      <button title="Remover task" onClick={handleDeleteTask}><Trash  size={14}/></button>
    </div>
  )
}