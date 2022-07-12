import React from 'react';
import { ClipboardText } from 'phosphor-react';


import styles from './TaskListWrapper.module.css';
import { TaskList } from './TaskList';

interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface ToDoListProps {
  tasks: ITask[];
  completedTasks: number;

  onRemoveTask: (taskId: string) => void;
  onChangeTaskState: (taskId: string) => void;
}

export function TaskListWrapper({ tasks, completedTasks, onRemoveTask, onChangeTaskState }: ToDoListProps){
   
  return (
    <div className={styles.todoList}>
        <header>
          <div className={styles.createdTasks}>
            <p>Tarefas Criadas</p>
            <span className={styles.counter}>{tasks.length}</span>
          </div>
          <div className={styles.completedTasks}> 
            <p>Tarefas Concluídas</p>
            <span className={styles.counter}>{ completedTasks !== 0 ? `${completedTasks} de ${tasks.length}`:'0'}</span>
          </div>
        </header>
        {
          tasks.length === 0? (
            <div className={styles.emptyList}>
                <ClipboardText size={56}/>
                <p>
                  <strong>Você ainda não possui tarefas cadastradas</strong>
                  <br />Crie tarefas e organize seus itens a fazer
                </p>                
            </div>
          ): <TaskList 
                tasks={tasks} 
                onRemoveTask={onRemoveTask}
                onChangeTaskState={onChangeTaskState}
              />
        }

    </div>
  )
}