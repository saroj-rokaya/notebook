import React from 'react'
import "./note.css";
export default function Note(props) {
  
  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
      <textarea className="note_textarea">{props.note.text}</textarea>
      <p className="note_time">{props.note.time}</p>
      
    </div>
  )
}
