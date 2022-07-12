import React, { ChangeEvent, FormEvent } from "react";
import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export interface NewTaskProps{
  newTaskDescription: string;
  OnhandleCreateNewTask: (event: FormEvent) => void;
  OnhandleNewTaskDescriptionChange: (event:ChangeEvent<HTMLInputElement> ) => void;
}

export function NewTask({ 
  newTaskDescription,
  OnhandleCreateNewTask, 
  OnhandleNewTaskDescriptionChange 
}: NewTaskProps){
  return (
    <form className={styles.newTask} onSubmit={OnhandleCreateNewTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova Tarefa"
        required
        onChange={OnhandleNewTaskDescriptionChange}
        value={newTaskDescription}
      />
      <button>Criar <PlusCircle size={16}/></button>
    </form>
  )
}