import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputNotes = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };
  const getNotes = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="main_note">
        <form>
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={inputNotes}
            value={note.title}
          />
          <textarea
            name="content"
            rows=""
            column=""
            placeholder="Write a Note...."
            value={note.content}
            onChange={inputNotes}
          />
          <button onClick={getNotes} className="sub_btn">
            <lord-icon
              src="https://cdn.lordicon.com/mecwbjnp.json"
              trigger="hover"
              style={{
                width: "50px",
                height: "50px",
                top: "-5px",
                left: "-5px",
              }}
            ></lord-icon>
          </button>
        </form>
      </div>
    </>
  );
};
export default CreateNote;
