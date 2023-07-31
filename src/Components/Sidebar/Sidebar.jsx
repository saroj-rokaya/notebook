import React, { useState } from 'react'
import "./sidebar.css";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
export default function Sidebar() {
  const colors =["red","blue","lightgreen","yellow","cyan"]
  const [listOpen,setlistOpen]=useState(false)
  return (
    <div className="sideBar">
      <AddCircleSharpIcon sx={{ fontSize: 50 }} className="plus" onClick={()=>setlistOpen(!listOpen)} />
        <ul className={`sideBar-list ${listOpen?"sideBar-list-active":""}`}>
          {
            colors.map((item,index)=><li key={index} className="sideBar-list-items" style={{backgroundColor:item}}/>)
          }
          
          
        </ul>
    </div>

  )
}
