import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputForm from './InputForm'
import TodoList from './TodoList'

const Todo = () => {
    const navigate =useNavigate()
    const baseUrl = "http://localhost:3005/api";
  const [listItems, setListItems] = useState([]);
  const fetchData = async () => {
    try {
      var response = await axios({
        method: "get",
        baseURL: baseUrl,
        URL: "/",
      });
    } catch (error) {
      console.log(error);
    }

    setListItems(response.data)
  };
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate("/login")
}
useEffect(() => {
  if(!localStorage.getItem("token")){
    navigate("/login")
  }
}, [])

  return (
    <div className="flex h-screen  justify-center items-center flex-col">
      <h1>Todo</h1>
      <button onClick={handleLogout}>Logout</button>
    <InputForm fetchData={fetchData} />
    <TodoList fetchData={fetchData} listItems={listItems} setListItems={setListItems}/>
    </div>
  )
}

export default Todo