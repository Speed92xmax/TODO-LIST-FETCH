import React, { useState } from "react";

const Input = () => {
  const [listValue, setListValue] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTaskHandle = () => {
    setListValue([...listValue, inputValue]);
    setInputValue("");
    console.log(listValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="mb-3 ">
        <label className="form-label">TODO LIST</label>
        <div className=" d-flex gap-4">
          <input
            value={inputValue}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Add your task"
            onChange={handleChange}
          />
          <button className="btn btn-primary" onClick={addTaskHandle}>
            +
          </button>
        </div>
        <div className="card"></div>
      </div>
    </>
  );
};

export default Input;
