import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../feautures/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {todos.map((todo) => (
        <div key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red border-0 p-5'>❌</button>
        </div>
    ))}
    </>
  )
}

export default Todos