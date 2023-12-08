import React from "react";
import ToDoListComponent from "./toDoListComponent";

//create your first component
const Home = () => {
  return (
    <>
      <div className="container-fluid y-5 d-flex justify-content-center w-75">
        <ToDoListComponent />
      </div>
    </>
  );
};

export default Home;
