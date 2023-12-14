import React, { useState, useEffect } from "react";
import InputComponent from "./inputComponent";
import ListItemsComponent from "./listItemsComponent";

const ToDoListComponent = () => {
  const [listValue, setListValue] = useState([]);

  const endpointGetList =
    "https://playground.4geeks.com/apis/fake/todos/user/speed92xmax";

  const fetchList = async (action) =>
    await fetch(endpointGetList)
      .then((res) => res.json())
      .then((res) => {
        setListValue(res);
      });

  const editListFetch = async (params) =>
    await fetch(endpointGetList, params)
      .then((res) => res.json())
      .then((res) => {
        alert(`${res.msg}`);
        fetchList();
      });

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <div className="mb-3 w-50 ">
        <h2 className="form-label my-5">TODO LIST :</h2>

        <InputComponent listValue={listValue} editListFetch={editListFetch} />

        {listValue.length !== 0 ? (
          <ListItemsComponent
            listValue={listValue}
            editListFetch={editListFetch}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ToDoListComponent;
