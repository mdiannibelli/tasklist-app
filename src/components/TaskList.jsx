import React from 'react'

export default function TaskList({deleteTask, handleEdit, handleCompleted, task, i}) {
  return (
        <div className='flex justify-between' key={i}>
            <h1 onClick={() => handleCompleted(task.id)} className={`${task.completed ? 'completed' : ''} text-2xl cursor-pointer text-[#eee] select-none`}>{task.title}</h1>
            <div className='ml-4'>
            <button onClick={() => handleEdit(task.id)}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit text-purple-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></button>
            <button onClick={() => deleteTask(task.id)}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-square-letter-x text-purple-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M10 8l4 8" /><path d="M10 16l4 -8" /></svg></button>
            </div>
        </div>
  )
}
