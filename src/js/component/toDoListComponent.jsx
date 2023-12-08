import React, { useState } from "react";
import InputComponent from "./inputComponent";
import ListItemsComponent from "./listItemsComponent";

const ToDoListComponent = () => {
  const [listValue, setListValue] = useState([]);

  return (
    <>
      <div className="mb-3 w-50 ">
        <h2 className="form-label my-5">TODO LIST :</h2>
        <InputComponent listValue={listValue} setListValue={setListValue} />
        {listValue.length !== 0 ? (
          <ListItemsComponent
            listValue={listValue}
            setListValue={setListValue}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ToDoListComponent;
