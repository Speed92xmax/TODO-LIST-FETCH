import React from "react";

const ListItemsComponent = ({ listValue, editListFetch }) => {
  const removeElement = (id, value) => {
    let confirmMessage = confirm(`
        Are you sure want to delete : "${value}"`);

    if (confirmMessage) {
      const newList = listValue.filter((element) => element.id !== id);

      const fetchParams = {
        method: "PUT",
        body: JSON.stringify(newList),
        headers: {
          "Content-type": "application/json",
        },
      };

      editListFetch(fetchParams);
    } else {
      return;
    }
  };

  return (
    <div className="my-3 card d-flex flex-column gap-3">
      <h3 className="p-3 m-0 ">Tasks: {listValue.length}</h3>
      <ul className="list-group d-flex  flex-column gap-3 pb-5 align-items-center w-100">
        {listValue.map((value, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between w-75"
            >
              {value.label}
              {value.task}
              <div className="form-check d-flex  gap-5">
                <a onClick={() => removeElement(value.id, value.label)}>
                  <i className="fa-regular fa-trash-can"></i>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItemsComponent;
