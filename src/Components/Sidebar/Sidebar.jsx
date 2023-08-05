import React, { useState } from "react";
import "./sidebar.css";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
export default function Sidebar(props) {
  const colors = ["tomato", "rosybrown", "orange",  "goldenrod", "hotpink", "magenta", "chocolate","lightblue","mediumaquamarine","lightgreen", "pink"];
  const [listOpen, setlistOpen] = useState(false);
  return (
    <div className="sideBar">
      <AddCircleSharpIcon
        sx={{ fontSize: 50 }}
        className="plus"
        onClick={() => setlistOpen(!listOpen)}
      />
      <ul className={`sideBar-list ${listOpen ? "sideBar-list-active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sideBar-list-items"
            style={{ backgroundColor: item }}
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}
