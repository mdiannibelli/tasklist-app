import React, { useState } from 'react'
import Form from './Form';
import TaskList from './TaskList';
import EditTask from './EditTask'

export default function Task() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        const id = Math.random();
        setTasks([...tasks, {title: task, completed: false, isEditing: false, id}])
        //console.log(tasks)
    }
    
    const handleCompleted = (id) => {
        setTasks(tasks.map(task => task.id === id ? {
            ...task, completed: !task.completed} : task
        ))
    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks);
    }

    const handleEdit = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {
            ...task, isEditing: !task.isEditing} : task))
    }

    const editTask = (title, id) => {
        setTasks(tasks.map((todo) => todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo
          )
        );
      };

  return (
    <div>
        <Form addTask={addTask} />
        <div className='flex flex-col mt-8 gap-y-4 justify-center items-center'>
            <h1 className='text-4xl text-purple-500 uppercase font-thin'>Task List</h1>
        </div>
        {tasks.map((task,i) => (
            task.isEditing ? (
                    <EditTask key={i} title={task} editTask={editTask}/>
                ) :
                <div className='flex flex-col mt-1'>
        <TaskList key={i} task={task} deleteTask={deleteTask} handleCompleted={handleCompleted} handleEdit={handleEdit}/></div>
        ))}
    </div>
  )
}
