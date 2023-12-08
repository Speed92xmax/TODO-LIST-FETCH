import React, { useState } from "react";

const Input = () => {
  const [listValue, setListValue] = useState([]);
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
      if (inputValue == "") {
        return alert("Please enter a value");
      }

      setListValue([...listValue, inputValue]);
      setInputValue("");
    }
  };

  const removeElement = (indexId, value) => {
    const confirmMessage = confirm(`
    Are you sure want to delete : "${value}"`);

    if (confirmMessage) {
      const newList = listValue.filter((_, index) => indexId !== index);
      setListValue(newList);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="mb-3 w-50 ">
        <h2 className="form-label my-5">TODO LIST :</h2>
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
            +
          </button>
        </div>
        {listValue.length !== 0 ? (
          <div className="my-3 card d-flex flex-column gap-3">
            <h3 className="p-3 m-0 ">Tasks: {listValue.length}</h3>
            <ul className="list-group d-flex  flex-column gap-3 pb-5 align-items-center w-100">
              {listValue.map((value, index) => {
                return (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between w-75"
                  >
                    {value}
                    <a onClick={() => removeElement(index, value)}>
                      <i className="fa-regular fa-trash-can"></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Input;
