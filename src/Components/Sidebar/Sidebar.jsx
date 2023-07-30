import React from 'react'
import "./sidebar.css";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
export default function Sidebar() {
  return (
    <div className="plus_icon">
      <AddCircleSharpIcon sx={{ fontSize: 80 }}/>
      <ul>
        <li>Green</li>
        <li>Cyan</li>
        <li>Pink</li>
        <li>Yellow</li>
        <li>Blue</li>
      </ul>
    </div>

  )
}
