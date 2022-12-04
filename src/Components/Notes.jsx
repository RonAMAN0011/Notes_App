import React from "react";

export default function Notes(props) {
  const noteDel = () => {
    props.delItems(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="deleteIcons btndel" onClick={noteDel}>
          <lord-icon
            src="https://cdn.lordicon.com/gsqxdxog.json"
            trigger="hover"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </button>
      </div>
    </>
  );
}
