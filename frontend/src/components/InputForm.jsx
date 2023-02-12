import React, { useState } from "react";
import axios from "axios";

const InputForm = ({fetchData}) =>{
  const baseUrl = "http://localhost:3005/api";
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios({
      method: "post",
      baseURL: baseUrl,
      URL: "/",
      data: {
        todo: value,
      },
    });
    setValue("")
    fetchData()
  };
  return (
    <div className=" flex h-2 justify-center items-center mt-10">
      <form onSubmit={handleSubmit}>
        <input className=" border border-black p-1 rounded-lg" value={value} placeholder="Enter item" onChange={handleChange} />
      </form>
    </div>
  );
}

export default InputForm;
