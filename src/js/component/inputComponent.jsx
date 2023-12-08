import React, { useState } from "react";

const InputComponent = ({ listValue, setListValue }) => {
  const [inputValue, setInputValue] = useState("");

  const addTaskHandle = () => {
    if (inputValue == "") {
      return alert("Please enter a value");
    }
    setListValue([...listValue, inputValue]);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePressKey = (event) => {
    if (event.key == "Enter") {
      addTaskHandle();
    }
  };

  return (
    <div className=" d-flex gap-4">
      <input
        value={inputValue}
        type="text"
        className="form-control "
        id="formGroupExampleInput"
        placeholder="Add your task"
        onChange={handleChange}
        onKeyDown={handlePressKey}
      />
      <button className="btn btn-success" onClick={addTaskHandle}>
        add
      </button>
    </div>
  );
};

export default InputComponent;
