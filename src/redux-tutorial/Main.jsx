import React from 'react'
import AddTodos from './AddTodos'
import ListTodos from './ListTodos'
import { useSelector } from 'react-redux'

function Main() {
  const value = useSelector((state) => state);
  console.log(value);
  return (
    <div className="container">
        <AddTodos />
        <ListTodos />
    </div>
  )
}

export default Main