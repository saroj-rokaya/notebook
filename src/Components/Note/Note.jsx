import React from "react";
import "./note.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
let timer=500,timeout;
export default function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };
    const debounce=(func)=>{
      clearTimeout(timeout)
      timeout=setTimeout(func,timer);
    }
    const updateText=(text,id)=>{
      debounce(()=>props.updateText(text,id))
    }
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea 
      className="note_textarea" 
      defaultValue={props.note.text}
      onChange={(event)=>updateText(event.target.value,props.note.id)} />
     

      <div className="note_footer">
        <p className="note_time">{formatDate(props.note.time)}</p>
        <DeleteForeverIcon
          sx={{ fontSize: 28 }}
          className="delete_icon"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}
