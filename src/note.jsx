import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 contenteditable="true">{props.title}</h1>
      <p contenteditable="true">{props.titlepros}</p>
    </div>
  );
}

export default Note;
