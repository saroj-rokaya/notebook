import React from "react";
import "./noteContainer.css";
import Note from "../Note/Note";

export default function NoteContainer(props) {
  const reverArray=(arr)=>{
    const array=[]

    for(let i=arr.length-1; i>=0; i--){
      array.push(arr[i]);
    }
    return array;
  }
  const notes=reverArray(props.notes);

  return (
    <div className="note_container">
      <h2>Notes</h2>
      <div className="note_container_notes notes_scrollbar">
        {notes.map((item, index) => (
          <Note key={index} note={item} />
        ))}
      </div>
    </div>
  );
}
