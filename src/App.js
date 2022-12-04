import React, { useState } from "react";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import "./style.css";

function App() {
  const [addItem, setItem] = useState([]);
  const addNote = (note) => {
    setItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setItem((oldData) => {
      return oldData.filter((data, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            delItems={onDelete}
          />
        );
      })}
    </>
  );
}

export default App;
