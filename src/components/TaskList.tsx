import React from 'react';

import { Task } from './Task';

import styles from './TaskList.module.css';

interface ITask {
  id: string;
  description: string;
  isCompleted: boolean
}

interface TaskListProps {
  tasks: ITask[];
  onRemoveTask: (taskId: string) => void;
  onChangeTaskState: (taskId: string) => void;
}

export function TaskList({ tasks, onRemoveTask, onChangeTaskState }: TaskListProps){
  return (
    <div className={styles.taskList} >
      { 
        tasks.map( task => {
          return <Task 
                    {...task}
                    key={task.id}
                    onRemoveTask={onRemoveTask} 
                    onChangeTaskState={onChangeTaskState} 
                  />
        })
      }       
    </div>
  )
}