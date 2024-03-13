import React, { useState } from 'react'

export default function EditTask({editTask, title}) {
    const [value, setValue] = useState(title.title);
    const submit = (e) => {
      e.preventDefault()
      editTask(value, title.id)
    }
  return (
    <div className='flex justify-center'>
    <form onSubmit={submit}>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='w-64 outline-none bg-purple-600 text-white rounded-md shadow-xl p-2 border-2 border-purple-900'/>
        <button type="submit" className='uppercase text-lg ml-4 border-2 border-purple-400 hover:bg-purple-500 hover:text-white duration-300 text-purple-400 rounded-xl py-1 px-2'>Update task</button>
    </form>
  </div>
  )
}
