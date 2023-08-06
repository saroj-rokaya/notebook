import React from "react";
import "./note.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_textarea">{props.note.text}</textarea>

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
