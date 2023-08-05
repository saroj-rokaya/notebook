import React from "react";
import "./note.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function Note(props) {
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_textarea">{props.note.text}</textarea>

      <div className="note_footer">
        <p className="note_time">{props.note.time}</p>
        <DeleteForeverIcon sx={{ fontSize: 28 }}  className="delete_icon"/>
      </div>
    </div>
  );
}
