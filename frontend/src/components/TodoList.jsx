import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = ({ fetchData, listItems }) => {
  const [value, setValue] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({});
  const baseUrl = "http://localhost:3005/api";

  const handleUpdate = async () => {
    try {
      const response = await axios({
        method: "put",
        baseURL: baseUrl,
        url: `edit/${selectedTodo._id}`,
        data: {
          todo: value,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setSelectedTodo("");
    fetchData();
  };

  const handleDelete = async (id) => {
    try {
      var response = await axios({
        method: "delete",
        baseURL: baseUrl,
        url: `delete/${id}`,
      });
    } catch (error) {
      console.log(error);
    }
    fetchData();
    console.log(response.data);
  };
  const handleComp = async (id) => {
    try {
      var response = await axios({
        method: "put",
        baseURL: baseUrl,
        url: `comp/${id}`,
        data: {
          comp: true,
        },
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div >
      <div className=" flex  flex-col items-center">
      <h1 className=" border-b-2 border-black mb-3 mt-5">List</h1>
      {listItems.map((item) => (
        <>
          {!item.comp ? (
            <div key={item._id}>
              {selectedTodo._id === item._id ? (
                <>
                  <p>{item.todo}</p>
                  <input
                    type={"text"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button onClick={handleUpdate}>Update</button>
                </>
              ) : (
                <div className=" flex justify-center items-center">
                  <p>{item.todo}</p>
                  <button
                  className=" ml-3 border bg-slate-500 p-1"
                    onClick={() => {
                      setSelectedTodo(item);
                      setValue(item.todo);
                    }}
                  >
                    Edit
                  </button>
                  <button className="ml-3 mr-3 border bg-red-800 text-white p-1" onClick={() => handleDelete(item._id)}>Delete</button>
                  <button className=" bg-green-500 p-1" onClick={() => handleComp(item._id)}>Complete</button>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </>
      ))}
      <h1 className="mt-10 mb-4 border-b-2 border-black">Completed List</h1>
      {listItems.map((item) => (
        <>
          {item.comp ? (
            <div key={item._id} className=" flex mt-2">
              <div className="flex justify-start">
              <p>{item.todo}</p>
              </div>
              <div>
              <button className="ml-3 bg-red-800 p-1 flex" onClick={() => handleDelete(item._id)}>Delete</button>

              </div>

            </div>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
    </div>
  );
};

export default TodoList;
