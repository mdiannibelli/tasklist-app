import React, { useEffect, useState } from 'react'
import Form from './Form';
import EditTask from './EditTask';
import TaskList from './TaskList';


export default function TaskLocalStore() {
    const taskFromLocalStorage = JSON.parse(localStorage.getItem('tasks') || '[]')
    const [tasks, setTasks] = useState(taskFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = task => {
        const id = Math.random();
        const newTasks = setTasks([...tasks, {title: task, completed: false, isEditing: false, id}])
        setTasks(newTasks)
        //console.log(tasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }
    
    const handleCompleted = (id) => {
        const newTasks = setTasks(tasks.map(task => task.id === id ? {
            ...task, completed: !task.completed} : task
        ))
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    const handleEdit = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {
            ...task, isEditing: !task.isEditing} : task))
    }

    const editTask = (title, id) => {
        const newTasks = setTasks(tasks.map((todo) => todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo
          )
        );
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
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
                <TaskList key={i} task={task} deleteTask={deleteTask} handleCompleted={handleCompleted} handleEdit={handleEdit}/>
            </div>
    ))}
</div>
  )
}
