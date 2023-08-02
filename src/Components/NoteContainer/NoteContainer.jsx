import React from "react";
import "./noteContainer.css";
import Note from "../Note/Note";

export default function NoteContainer(props) {
  return (
    <div className="note_container">
      <h2>Notes</h2>
      <div className="note_container_notes notes_scrollbar">
        {props.notes.map((item, index) => (
          <Note key={index} note={item} />
        ))}
      </div>
    </div>
  );
}
